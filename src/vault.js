// =========================================================================
// VAULT SERVICE: Pure IndexedDB Storage & State Persistence
// Zero UI or AI dependencies - strictly encapsulates browser database
// =========================================================================

const DB_NAME = 'LexOS_Session_Vault';
const DB_VERSION = 1;
let dbInstance = null;

export const VaultService = {
  /**
   * Initializes the IndexedDB instance
   */
  async openVault() {
    if (dbInstance) return dbInstance;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('memories')) {
          const store = db.createObjectStore('memories', { keyPath: 'id' });
          store.createIndex('source', 'source', { unique: false });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
        if (!db.objectStoreNames.contains('session_turns')) {
          db.createObjectStore('session_turns', { keyPath: 'id', autoIncrement: true });
        }
      };
      req.onsuccess = () => {
        dbInstance = req.result;
        resolve(dbInstance);
      };
      req.onerror = () => reject(req.error);
    });
  },

  /**
   * Saves an array of memory objects (with 128-D vectors)
   */
  async saveMemories(memories) {
    const db = await this.openVault();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('memories', 'readwrite');
      const store = tx.objectStore('memories');
      memories.forEach(m => store.put(m));
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Retrieves all stored attractor memories
   */
  async getAllMemories() {
    const db = await this.openVault();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('memories', 'readonly');
      const store = tx.objectStore('memories');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  },

  /**
   * Saves a chat turn record
   */
  async saveTurn(turn) {
    const db = await this.openVault();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('session_turns', 'readwrite');
      const store = tx.objectStore('session_turns');
      store.add({ ...turn, timestamp: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Retrieves all chat turn records
   */
  async getAllTurns() {
    const db = await this.openVault();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('session_turns', 'readonly');
      const store = tx.objectStore('session_turns');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  },

  /**
   * Clears all session data (Tabula Rasa)
   */
  async clearVault() {
    const db = await this.openVault();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(['memories', 'session_turns'], 'readwrite');
      tx.objectStore('memories').clear();
      tx.objectStore('session_turns').clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Exports the entire vault as a downloadable JSON Memory Crystal
   */
  async exportCrystal() {
    const memories = await this.getAllMemories();
    const turns = await this.getAllTurns();
    const crystal = {
      exported_at: new Date().toISOString(),
      format: "LexOS_Memory_Crystal_V1",
      total_memories: memories.length,
      total_turns: turns.length,
      memories: memories.map(m => ({
        id: m.id,
        title: m.title,
        concept: m.concept,
        axiom: m.axiom,
        source: m.source,
        timestamp: m.timestamp
      })),
      turns: turns
    };
    return crystal;
  }
};
