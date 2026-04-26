/* =========================================================
   SALATI - Service Worker
   Stratégie: Cache First pour assets, Network First pour API
   ========================================================= */
// const VERSION = 'salati-v1.0.0';
const VERSION = 'salati-v1.0.1'; // Force nouvelle version
const STATIC_CACHE = `${VERSION}-static`;
const DYNAMIC_CACHE = `${VERSION}-dynamic`;
const API_CACHE = `${VERSION}-api`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './favicon.ico',
  './apple-touch-icon.png',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-192-maskable.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap'
];

// === INSTALL ===
self.addEventListener('install', event => {
  console.log('[SW] Install', VERSION);
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Certains assets n\'ont pas pu être mis en cache:', err);
      }))
      .then(() => self.skipWaiting())
  );
});

// === ACTIVATE ===
self.addEventListener('activate', event => {
  console.log('[SW] Activate', VERSION);
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k.startsWith('salati-') && !k.startsWith(VERSION))
          .map(k => {
            console.log('[SW] Suppression ancien cache:', k);
            return caches.delete(k);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// === FETCH ===
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET
  if (request.method !== 'GET') return;

  // Ignorer les extensions chrome
  if (url.protocol === 'chrome-extension:') return;

  // API AlAdhan: Network First avec fallback cache
  if (url.hostname === 'api.aladhan.com') {
    event.respondWith(networkFirst(request, API_CACHE));
    return;
  }

  // Nominatim (geocoding): Network Only (pas de cache pour protéger la vie privée)
  if (url.hostname === 'nominatim.openstreetmap.org') {
    event.respondWith(fetch(request).catch(() => new Response(
      JSON.stringify({ error: 'offline' }),
      { headers: { 'Content-Type': 'application/json' } }
    )));
    return;
  }

  // Audio Adhan: Cache à la demande
  if (url.hostname === 'www.islamcan.com' || url.hostname === 'islamcan.com') {
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
    return;
  }

  // Google Fonts: Cache First
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
    return;
  }

  // Navigation (documents HTML): Network first avec fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Assets statiques: Cache First
  event.respondWith(cacheFirst(request, STATIC_CACHE));
});

// === STRATÉGIES ===
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    if (fresh.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (e) {
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const fresh = await fetch(request);
    if (fresh.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (e) {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(
      JSON.stringify({ error: 'offline', _offline: true }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// === NOTIFICATIONS PUSH ===
self.addEventListener('push', event => {
  let data = { title: 'Salati', body: 'Il est temps de prier' };
  try {
    if (event.data) data = event.data.json();
  } catch {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-96.png',
      vibrate: [200, 100, 200, 100, 200],
      tag: 'salati-prayer',
      requireInteraction: true,
      data: data.url || '/'
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      for (const c of list) {
        if (c.url.includes(self.registration.scope) && 'focus' in c) return c.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// === MESSAGES ===
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
