// =========================================================================
// LEXOS DIAGNOSTIC DASHBOARD (window.LexOSDebug)
// Exposes clean observability hooks in Developer Tools (F12)
// =========================================================================

import { VaultService } from './vault.js';
import { embedText, runContinuousHopfield } from './attractor.js';
import { IntelligenceRouter } from './aiRouter.js';

export function initDebug(stateContext) {
  if (typeof window === 'undefined') return;

  window.LexOSDebug = {
    /**
     * Prints complete health & state diagnostic report
     */
    async status() {
      const memories = await VaultService.getAllMemories();
      const turns = await VaultService.getAllTurns();
      const nativeAI = await IntelligenceRouter.checkNativeAIAvailability();

      const report = {
        vault: {
          totalMemories: memories.length,
          totalTurns: turns.length,
          status: 'ONLINE'
        },
        aiRouter: {
          chromiumNativeAIAvailable: nativeAI,
          hasGeminiKey: Boolean(stateContext.getGeminiKey?.()),
          activeTier: nativeAI ? 'Tier 1 (Chromium Native AI)' : (stateContext.getGeminiKey?.() ? 'Tier 2 (Gemini Cloud)' : 'Tier 3 (Local Hopfield)')
        },
        session: {
          recursionDepth: stateContext.recursionDepth,
          activeMode: stateContext.activeMode,
          lastActiveAttractor: stateContext.lastActiveAttractor || 'La Luce'
        }
      };

      console.table(report);
      return report;
    },

    /**
     * Runs isolated Hopfield Attractor convergence test without touching the UI
     */
    async testAttractor(testQuery = "Why do I feel like I am chasing my own tail?") {
      console.log(`[LexOSDebug] Testing Attractor with query: "${testQuery}"`);
      const memories = await VaultService.getAllMemories();
      const vec = embedText(testQuery);
      const result = runContinuousHopfield(vec, memories);

      console.log(`[LexOSDebug] Convergence reached: ${result.converged ? 'YES (Locked Basin)' : 'MAX STEPS'}`);
      console.table(result.history.map(h => ({
        Step: h.step,
        Energy: h.energy.toFixed(4),
        Delta: h.delta.toFixed(4),
        DominantMemory: h.top[0]?.title || 'None',
        Weight: ((h.top[0]?.weight || 0) * 100).toFixed(1) + '%'
      })));
      return result;
    },

    /**
     * Tests AI router response for a given text
     */
    async testAI(testQuery = "Hello from developer tools") {
      console.log(`[LexOSDebug] Testing AI Router with query: "${testQuery}"`);
      const memories = await VaultService.getAllMemories();
      const vec = embedText(testQuery);
      const hopfield = runContinuousHopfield(vec, memories);
      const res = await IntelligenceRouter.generateResponse({
        query: testQuery,
        hopfieldResult: hopfield,
        activeMode: stateContext.activeMode,
        recursionDepth: stateContext.recursionDepth,
        apiKey: stateContext.getGeminiKey?.()
      });
      console.log(`[LexOSDebug] Provider used: ${res.provider}`);
      console.log(`[LexOSDebug] Response text:`, res.text);
      return res;
    },

    /**
     * Dumps memory vault into a console table
     */
    async dumpVault() {
      const memories = await VaultService.getAllMemories();
      console.table(memories.map(m => ({
        ID: m.id,
        Title: m.title,
        Source: m.source,
        Concept: m.concept,
        VectorDim: m.vector?.length || 0
      })));
      return memories;
    }
  };

  console.log('🦋 [LexOSDebug] Diagnostic dashboard initialized. Type LexOSDebug.status() to inspect.');
}
