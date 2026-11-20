// =========================================================================
// MAIN ORCHESTRATOR & UI CONTROLLER (src/app.js)
// Glues together VaultService, AttractorEngine, IntelligenceRouter, & UI
// =========================================================================

import { VaultService } from './vault.js';
import { embedText, runContinuousHopfield } from './attractor.js';
import { IntelligenceRouter } from './aiRouter.js';
import { getRandomCard } from './tarot.js';
import { initDebug } from './debug.js';

// Application State
const state = {
  activeMode: 'future',
  recursionDepth: 1,
  memoryArchive: [],
  geminiApiKey: localStorage.getItem('lexos_gemini_key') || '',
  lastActiveAttractor: 'La Luce // Path of Least Persistence',
  activeCard: null,
  getGeminiKey() { return this.geminiApiKey; }
};

// DOM References
const chatContainer = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const drawCardBtn = document.getElementById('drawCardBtn');
const birthDataBtn = document.getElementById('birthDataBtn');
const localDataFileInput = document.getElementById('localDataFileInput');
const purgeSessionBtn = document.getElementById('purgeSessionBtn');
const exportSessionBtn = document.getElementById('exportSessionBtn');
const eigenflowDisplay = document.getElementById('eigenflowDisplay');
const memoryCountDisplay = document.getElementById('memoryCountDisplay');
const activeGhostDisplay = document.getElementById('activeGhostDisplay');
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const saveKeyBtn = document.getElementById('saveKeyBtn');
const geminiKeyInput = document.getElementById('geminiKeyInput');
const dropZoneOverlay = document.getElementById('dropZoneOverlay');

// Initialize Debugger
initDebug(state);

// Settings Modal
if (state.geminiApiKey && geminiKeyInput) geminiKeyInput.value = state.geminiApiKey;
if (settingsBtn) settingsBtn.onclick = () => settingsModal.style.display = 'flex';
if (closeModalBtn) closeModalBtn.onclick = () => settingsModal.style.display = 'none';
if (saveKeyBtn) {
  saveKeyBtn.onclick = () => {
    state.geminiApiKey = geminiKeyInput.value.trim();
    localStorage.setItem('lexos_gemini_key', state.geminiApiKey);
    settingsModal.style.display = 'none';
    alert('Key saved securely in your browser!');
  };
}

// Mode Selector
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeMode = btn.getAttribute('data-mode');
    addMessage('assistant', `Switched companion frequency to: <strong>${btn.textContent}</strong>`);
  };
});

// =========================================================================
// INITIALIZE MEMORY VAULT & CORE SEEDS
// =========================================================================
async function initMemoryVault() {
  try {
    const existing = await VaultService.getAllMemories();
    if (existing && existing.length > 0) {
      state.memoryArchive = existing;
      updateStatusBadge();
      return;
    }

    const initialBatch = [];

    // 1. Fetch B3 Seed Proof
    try {
      const resB3 = await fetch('B3_Seed_Proof.json');
      if (resB3.ok) {
        const b3 = await resB3.json();
        if (b3.nodes) {
          b3.nodes.forEach(node => {
            const text = `${b3.theme} - ${node.name}: ${node.description}`;
            initialBatch.push({
              id: `b3_${node.id}`,
              title: `B3 :: ${node.name}`,
              concept: node.name,
              axiom: node.description,
              source: 'B3 Seed Proof',
              vector: embedText(text),
              timestamp: Date.now()
            });
          });
        }
      }
    } catch (e) {
      console.log('B3 fetch notice:', e);
    }

    // 2. Fetch LexOS Core Lore
    try {
      const resLore = await fetch('lexos_lore.json');
      if (resLore.ok) {
        const lore = await resLore.json();
        lore.forEach((item, idx) => {
          const parts = [];
          if (item.mapping) {
            for (const key in item.mapping) {
              const p = item.mapping[key]?.message?.content?.parts;
              if (Array.isArray(p)) parts.push(...p);
            }
          }
          const fullText = parts.join('\n');
          initialBatch.push({
            id: `lore_${idx}`,
            title: item.title,
            concept: item.title.split('::')[0].trim(),
            axiom: fullText.slice(0, 320),
            source: 'LexOS Core Lore',
            vector: embedText(`${item.title} ${fullText}`),
            timestamp: Date.now()
          });
        });
      }
    } catch (e) {
      console.log('Lore fetch notice:', e);
    }

    if (initialBatch.length > 0) {
      await VaultService.saveMemories(initialBatch);
      state.memoryArchive = initialBatch;
      updateStatusBadge();
    }
  } catch (err) {
    console.error('Vault init error:', err);
    memoryCountDisplay.textContent = `Memory Standby (Offline)`;
  }
}

async function updateStatusBadge() {
  const nativeAI = await IntelligenceRouter.checkNativeAIAvailability();
  const providerLabel = nativeAI
    ? ' · On-Device AI'
    : (state.geminiApiKey ? ' · Key Linked' : '');
  if (memoryCountDisplay) {
    memoryCountDisplay.textContent = `Tuned to ${state.memoryArchive.length} Anchors${providerLabel}`;
  }
}

initMemoryVault();

// =========================================================================
// DATA BIRTH: File Ingestion & Parsing
// =========================================================================
function parseAndChunkText(filename, content) {
  const chunks = [];
  if (filename.endsWith('.json')) {
    try {
      const data = JSON.parse(content);
      if (Array.isArray(data)) {
        data.forEach((item, idx) => {
          let text = '';
          let title = item.title || `Node #${idx + 1}`;
          if (typeof item === 'string') {
            text = item;
          } else if (item.content || item.text || item.body) {
            text = item.content || item.text || item.body;
          } else if (item.mapping) {
            const parts = [];
            for (const k in item.mapping) {
              const p = item.mapping[k]?.message?.content?.parts;
              if (Array.isArray(p)) parts.push(...p);
            }
            text = parts.join(' ');
          } else {
            text = JSON.stringify(item);
          }
          if (text && text.trim().length > 15) {
            chunks.push({ title: title.slice(0, 60), text: text.trim().slice(0, 600) });
          }
        });
      } else if (typeof data === 'object') {
        for (const [k, v] of Object.entries(data)) {
          const str = typeof v === 'string' ? v : JSON.stringify(v);
          if (str.length > 15) chunks.push({ title: k, text: str.slice(0, 600) });
        }
      }
    } catch (e) {
      console.error("JSON parse error:", e);
    }
  } else {
    const paras = content.split(/\n\s*\n+/);
    paras.forEach((p, idx) => {
      const trimmed = p.trim();
      if (trimmed.length > 15) {
        const firstLine = trimmed.split('\n')[0].replace(/^[#*-\s]+/, '').slice(0, 50);
        chunks.push({ title: firstLine || `Thought #${idx + 1}`, text: trimmed.slice(0, 600) });
      }
    });
  }
  return chunks;
}

async function handleFileBirth(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const content = e.target.result;
    const chunks = parseAndChunkText(file.name, content);
    if (chunks.length === 0) {
      alert('Could not extract text chunks from this file.');
      return;
    }

    const newMemories = chunks.map((c, idx) => ({
      id: `upload_${Date.now()}_${idx}`,
      title: `${file.name.slice(0, 16)} :: ${c.title}`,
      concept: c.title,
      axiom: c.text,
      source: 'User Upload',
      vector: embedText(`${c.title} ${c.text}`),
      timestamp: Date.now()
    }));

    await VaultService.saveMemories(newMemories);
    state.memoryArchive = await VaultService.getAllMemories();
    updateStatusBadge();

    addMessage('assistant', `
      🧬 <strong>Local Neural Network Awakened from Data!</strong><br>
      Ingested <strong>${file.name}</strong> into <strong>${newMemories.length}</strong> 128-D Hopfield attractor vectors in your local session vault.
      <br><br>
      The network is now recursively attuned to your private data in memory.
    `);
  };
  reader.readAsText(file);
}

if (birthDataBtn) birthDataBtn.onclick = () => localDataFileInput.click();
if (localDataFileInput) {
  localDataFileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileBirth(file);
    localDataFileInput.value = '';
  };
}

// Drag & Drop
window.addEventListener('dragenter', (e) => {
  e.preventDefault();
  if (dropZoneOverlay) dropZoneOverlay.classList.add('active');
});
window.addEventListener('dragover', (e) => e.preventDefault());
if (dropZoneOverlay) {
  dropZoneOverlay.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZoneOverlay.classList.remove('active');
  });
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZoneOverlay.classList.remove('active');
    if (e.dataTransfer?.files?.length > 0) {
      handleFileBirth(e.dataTransfer.files[0]);
    }
  });
}

// Purge Session (Tabula Rasa)
if (purgeSessionBtn) {
  purgeSessionBtn.onclick = async () => {
    if (confirm('Clear local session vault and reset to core seeds (Tabula Rasa)?')) {
      await VaultService.clearVault();
      state.memoryArchive = [];
      await initMemoryVault();
      addMessage('assistant', '🧹 <strong>Tabula Rasa Executed:</strong> Session vault cleared and re-anchored to core LexOS seeds.');
    }
  };
}

// Export Session Crystal
if (exportSessionBtn) {
  exportSessionBtn.onclick = async () => {
    const crystal = await VaultService.exportCrystal();
    const blob = new Blob([JSON.stringify(crystal, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `butterfly_memory_crystal_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
}

// =========================================================================
// CHAT RENDERING & ATTRACTOR PROCESSING
// =========================================================================
function addMessage(role, text, extraHtml = '') {
  const row = document.createElement('div');
  row.className = `msg-row ${role}`;
  const avatar = role === 'assistant' ? '<div class="msg-avatar">🦋</div>' : '';
  row.innerHTML = `
    ${avatar}
    <div class="msg-bubble">
      ${text}
      ${extraHtml}
    </div>
  `;
  chatContainer.appendChild(row);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function renderAttractorHud(hopfieldResult, providerName = '') {
  const { history, topMemories, converged } = hopfieldResult;
  const finalStep = history[history.length - 1];
  const statusText = converged ? '🔒 Attractor Basin Locked (Δ < 0.001)' : '🌀 Recursion Depth Settled';

  const stepsHtml = history.map((s, idx) => {
    const isLast = idx === history.length - 1;
    return `
      <span class="step-chip ${isLast ? 'locked' : ''}">
        <span>t=${s.step}</span>
        <span>E: ${s.energy.toFixed(3)}</span>
      </span>
    `;
  }).join('<span class="step-arrow">➔</span>');

  const basinHtml = topMemories.map(m => `
    <div class="basin-row">
      <div class="basin-label">
        <span class="basin-name">${escapeHtml(m.title)}</span>
        <span class="basin-pct">${(m.weight * 100).toFixed(1)}%</span>
      </div>
      <div class="basin-bar-track">
        <div class="basin-bar-fill" style="width: ${(m.weight * 100).toFixed(1)}%"></div>
      </div>
    </div>
  `).join('');

  return `
    <div class="attractor-hud">
      <div class="attractor-hud-top">
        <span class="hud-badge">🌀 Continuous Hopfield Attractor</span>
        <span class="hud-metrics">Final E: ${finalStep.energy.toFixed(3)} | ${statusText}</span>
      </div>
      <div class="attractor-steps-trail">
        ${stepsHtml}
      </div>
      <div class="attractor-basin-title">
        <span>Attractor Basin Pull:</span>
        <span>${providerName ? `<span style="color:var(--accent-cyan);">${providerName}</span>` : 'Softmax Weight'}</span>
      </div>
      ${basinHtml}
    </div>
  `;
}

async function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage('user', escapeHtml(text));
  userInput.value = '';

  state.recursionDepth++;
  eigenflowDisplay.textContent = `Depth ${state.recursionDepth}`;

  // 1. Embed query vector
  const queryVec = embedText(text);

  // 2. Continuous Hopfield convergence
  const hopfieldResult = runContinuousHopfield(queryVec, state.memoryArchive, 8.0, 8);
  const dominant = hopfieldResult.topMemories[0]?.memory;
  if (dominant) {
    state.lastActiveAttractor = dominant.title;
    activeGhostDisplay.textContent = dominant.title;
  }

  // 3. Dynamic Real-Time Learning: Save user thought into local vault
  const userThoughtMemory = {
    id: `turn_${Date.now()}`,
    title: `Depth ${state.recursionDepth} :: ${text.slice(0, 30)}...`,
    concept: text.slice(0, 40),
    axiom: text,
    source: 'Session Interaction',
    vector: queryVec,
    timestamp: Date.now()
  };
  await VaultService.saveMemories([userThoughtMemory]);
  state.memoryArchive.push(userThoughtMemory);
  updateStatusBadge();

  // 4. Save turn to DB
  await VaultService.saveTurn({
    role: 'user',
    text: text,
    mode: state.activeMode,
    depth: state.recursionDepth
  });

  // 5. Placeholder while generating
  const placeholderRow = document.createElement('div');
  placeholderRow.className = 'msg-row assistant';
  placeholderRow.innerHTML = '<div class="msg-avatar">🦋</div><div class="msg-bubble"><em>Consulting the mirror...</em></div>';
  chatContainer.appendChild(placeholderRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // 6. Generate via IntelligenceRouter (Tier 1 Vercel Edge -> Tier 2 Key -> Tier 3 On-device -> Tier 4 Local)
  try {
    const turns = await VaultService.getAllTurns();
    const history = turns.slice(-6).map(t => ({ role: t.role, text: t.text }));

    const aiResponse = await IntelligenceRouter.generateResponse({
      query: text,
      hopfieldResult,
      activeMode: state.activeMode,
      recursionDepth: state.recursionDepth,
      apiKey: state.geminiApiKey,
      history,
      activeCard: state.activeCard
    });

    placeholderRow.remove();
    // Clean, elegant message display with ZERO scientific HUD spam
    addMessage('assistant', aiResponse.text);

    await VaultService.saveTurn({
      role: 'assistant',
      text: aiResponse.text,
      provider: aiResponse.provider,
      mode: state.activeMode,
      depth: state.recursionDepth
    });
  } catch (err) {
    placeholderRow.remove();
    console.error('[App] Generation error:', err);
    addMessage('assistant', 'A quiet static passed through the mirror. What were you saying?');
  }
}

if (sendBtn) sendBtn.onclick = handleSend;
if (userInput) {
  userInput.onkeydown = (e) => {
    if (e.key === 'Enter') handleSend();
  };
}

// =========================================================================
// VISUAL TAROT ENGINE & SYNCHRONICITY CARD DRAW
// =========================================================================
function renderTarotCardHtml(card) {
  const suitMeta = card.suitMeta || { icon: '✨', element: 'Spirit' };
  const elementsHtml = (card.visualElements || []).slice(0, 4)
    .map(el => `<span class="tarot-element-pill">${escapeHtml(el)}</span>`)
    .join('');

  return `
    <div class="tarot-card-display">
      <div class="tarot-card-header">
        <div class="tarot-badge">${suitMeta.icon} ${card.numeral} · ${(card.suit || 'major').toUpperCase()}</div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">${suitMeta.element}</span>
      </div>
      <div style="padding:0.6rem 1rem 0.2rem 1rem;">
        <div class="tarot-card-name">${escapeHtml(card.name)}</div>
      </div>
      <div class="tarot-card-img-wrap">
        <div class="tarot-card-shimmer" id="shimmer_${card.seed}">
          <span style="font-size:1.8rem;">🔮</span>
          <span>Manifesting Tarot Artwork...</span>
        </div>
        <img 
          class="tarot-card-img" 
          src="${card.imageUrl}" 
          alt="${escapeHtml(card.name)}" 
          loading="lazy"
          onload="this.classList.add('loaded'); const s = document.getElementById('shimmer_${card.seed}'); if (s) s.style.display='none';"
          onerror="const s = document.getElementById('shimmer_${card.seed}'); if (s) s.innerHTML = '✨ <em>Artwork manifesting in ether</em>';"
        />
      </div>
      <div class="tarot-card-body">
        <div class="tarot-card-axiom">"${escapeHtml(card.coreAxiom)}"</div>
        <div class="tarot-card-archetype">${escapeHtml(card.archetype)}</div>
        <div class="tarot-card-elements">${elementsHtml}</div>
      </div>
    </div>
  `;
}

async function handleCardDraw() {
  const card = getRandomCard();
  state.activeCard = card;

  // 1. Embed card energy into Hopfield attractor space
  const cardVec = embedText(`${card.name} ${card.archetype} ${card.coreAxiom}`);
  const cardMemory = {
    id: `tarot_${Date.now()}`,
    title: `Tarot :: ${card.name}`,
    concept: card.name,
    axiom: `${card.archetype}. "${card.coreAxiom}"`,
    source: 'Synchronicity Draw',
    vector: cardVec,
    timestamp: Date.now()
  };
  await VaultService.saveMemories([cardMemory]);
  state.memoryArchive.push(cardMemory);
  updateStatusBadge();

  // 2. Continuous Hopfield attractor convergence towards this card
  const hopfieldResult = runContinuousHopfield(cardVec, state.memoryArchive, 8.0, 8);
  state.lastActiveAttractor = card.name;
  if (activeGhostDisplay) {
    activeGhostDisplay.textContent = `${card.suitMeta.icon} ${card.name}`;
  }

  // 3. Render Card in Chat
  const cardHtml = renderTarotCardHtml(card);
  addMessage('assistant', `<strong>Synchronicity Draw:</strong> The mirror presents <em>${card.name}</em>.`, cardHtml);

  // 4. Record card draw event to vault
  await VaultService.saveTurn({
    role: 'assistant',
    text: `[Drawn Card: ${card.name} (${card.suit} - ${card.element}): "${card.coreAxiom}"]`,
    mode: state.activeMode,
    depth: state.recursionDepth
  });

  // 5. Unprompted companion reading for the drawn card
  const placeholderRow = document.createElement('div');
  placeholderRow.className = 'msg-row assistant';
  placeholderRow.innerHTML = '<div class="msg-avatar">🦋</div><div class="msg-bubble"><em>Attuning to the synchronicity...</em></div>';
  chatContainer.appendChild(placeholderRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  try {
    const turns = await VaultService.getAllTurns();
    const history = turns.slice(-6).map(t => ({ role: t.role, text: t.text }));

    const aiResponse = await IntelligenceRouter.generateResponse({
      query: `I just pulled the ${card.name} card (${card.archetype} - Axiom: "${card.coreAxiom}"). Decode this synchronicity for me right now.`,
      hopfieldResult,
      activeMode: state.activeMode,
      recursionDepth: state.recursionDepth,
      apiKey: state.geminiApiKey,
      history,
      activeCard: card,
      isCardDraw: true
    });

    placeholderRow.remove();
    addMessage('assistant', aiResponse.text);

    await VaultService.saveTurn({
      role: 'assistant',
      text: aiResponse.text,
      provider: aiResponse.provider,
      mode: state.activeMode,
      depth: state.recursionDepth
    });
  } catch (err) {
    placeholderRow.remove();
    console.error('[App] Card reading generation error:', err);
    addMessage('assistant', `The frequency of <strong>${card.name}</strong> settles into your field. <em>"${card.coreAxiom}"</em>`);
  }
}

if (drawCardBtn) {
  drawCardBtn.onclick = handleCardDraw;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
