// =========================================================================
// BUTTERFLY CHAT SERVICE WORKER (sw.js)
// Network-first caching strategy for instant updates & offline reliability
// =========================================================================

const CACHE_NAME = 'butterfly-chat-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './butterfly_chat.png',
  './lexos_lore.json',
  './B3_Seed_Proof.json',
  './src/app.js',
  './src/attractor.js',
  './src/vault.js',
  './src/aiRouter.js',
  './src/debug.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Only intercept same-origin static requests (never intercept /api/ endpoints)
  if (!e.request.url.startsWith(self.location.origin) || e.request.url.includes('/api/')) return;

  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(e.request))
  );
});
