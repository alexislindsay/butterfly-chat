// =========================================================================
// ATTRACTOR ENGINE: Pure Numerical HDC Vector & Continuous Hopfield Math
// Zero DOM dependencies - 100% pure mathematical core
// =========================================================================

export const HDC_DIM = 128;

/**
 * Deterministic 32-bit FNV-1a Hash
 */
export function fnv1a(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619) >>> 0;
  }
  return h;
}

/**
 * Encodes text into a normalized 128-dimensional hyperdimensional vector
 * via deterministic character n-gram and word phase projections.
 */
export function embedText(text, dim = HDC_DIM) {
  const clean = String(text || '').toLowerCase().trim();
  const vec = new Float32Array(dim);
  if (!clean) return vec;

  // 1. Character N-Grams (3-grams & 4-grams)
  for (const n of [3, 4]) {
    for (let i = 0; i <= clean.length - n; i++) {
      const ngram = clean.slice(i, i + n);
      const h = fnv1a(ngram);
      for (let d = 0; d < dim; d++) {
        vec[d] += Math.sin(((h * (d + 1) * 0.1) % 1000));
      }
    }
  }

  // 2. Word Level Projections
  const words = clean.split(/\s+/).filter(w => w.length > 0);
  for (const w of words) {
    const hw = fnv1a(w);
    for (let d = 0; d < dim; d++) {
      vec[d] += Math.cos(((hw * (d + 7) * 0.05) % 1000));
    }
  }

  // 3. L2 Normalization onto Hyperdimensional Unit Sphere
  let norm = 0;
  for (let d = 0; d < dim; d++) norm += vec[d] * vec[d];
  norm = Math.sqrt(norm);
  if (norm > 1e-6) {
    for (let d = 0; d < dim; d++) vec[d] /= norm;
  }
  return vec;
}

/**
 * Executes Modern Continuous Hopfield recursive energy minimization
 * Update Rule: xi_{t+1} = softmax(beta * M * xi_t) * M
 * Energy: E(x) = -(1/beta) * ln(sum(exp(beta * m_i . x))) + 0.5 * ||x||^2
 */
export function runContinuousHopfield(queryVec, memoryBank, beta = 8.0, maxSteps = 8, eps = 0.001) {
  if (!memoryBank || memoryBank.length === 0) {
    return {
      history: [{ step: 1, energy: 0, delta: 0, top: [] }],
      converged: true,
      topMemories: []
    };
  }

  const K = memoryBank.length;
  let state = new Float32Array(queryVec);
  const history = [];
  let isConverged = false;

  for (let t = 0; t < maxSteps; t++) {
    // 1. Projection Logits: z_i = beta * (m_i dot state)
    const logits = new Float32Array(K);
    let maxLogit = -Infinity;
    for (let i = 0; i < K; i++) {
      const mVec = memoryBank[i].vector;
      let dot = 0;
      for (let d = 0; d < HDC_DIM; d++) dot += mVec[d] * state[d];
      logits[i] = beta * dot;
      if (logits[i] > maxLogit) maxLogit = logits[i];
    }

    // 2. Softmax Attention Weights
    const expVals = new Float32Array(K);
    let sumExp = 0;
    for (let i = 0; i < K; i++) {
      expVals[i] = Math.exp(logits[i] - maxLogit);
      sumExp += expVals[i];
    }
    const weights = new Float32Array(K);
    for (let i = 0; i < K; i++) {
      weights[i] = expVals[i] / (sumExp || 1);
    }

    // 3. Hopfield Energy Function
    let stateNormSq = 0;
    for (let d = 0; d < HDC_DIM; d++) stateNormSq += state[d] * state[d];
    const energy = -(1.0 / beta) * (maxLogit + Math.log(sumExp || 1e-9)) + 0.5 * stateNormSq;

    // 4. Associative State Update: state_{t+1} = sum_i alpha_i * m_i
    const nextState = new Float32Array(HDC_DIM);
    for (let i = 0; i < K; i++) {
      const w = weights[i];
      const mVec = memoryBank[i].vector;
      for (let d = 0; d < HDC_DIM; d++) {
        nextState[d] += w * mVec[d];
      }
    }

    let nextNorm = 0;
    for (let d = 0; d < HDC_DIM; d++) nextNorm += nextState[d] * nextState[d];
    nextNorm = Math.sqrt(nextNorm);
    if (nextNorm > 1e-6) {
      for (let d = 0; d < HDC_DIM; d++) nextState[d] /= nextNorm;
    }

    // 5. Delta Check
    let delta = 0;
    for (let d = 0; d < HDC_DIM; d++) {
      const diff = nextState[d] - state[d];
      delta += diff * diff;
    }
    delta = Math.sqrt(delta);

    // Sort top resonant memories
    const sortedIndices = Array.from({ length: K }, (_, idx) => idx)
      .sort((a, b) => weights[b] - weights[a]);

    const topStepMemories = sortedIndices.slice(0, 3).map(idx => ({
      memory: memoryBank[idx],
      title: memoryBank[idx].title,
      weight: weights[idx]
    }));

    history.push({
      step: t + 1,
      energy: energy,
      delta: delta,
      top: topStepMemories
    });

    state = nextState;
    if (delta < eps) {
      isConverged = true;
      break;
    }
  }

  return {
    history,
    converged: isConverged,
    topMemories: history[history.length - 1].top
  };
}
