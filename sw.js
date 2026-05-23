const CACHE_NAME = 'calc-proporcion-v1';
const ASSETS = [
  '/Paso-a-paso-Unani/',
  '/Paso-a-paso-Unani/index.html',
  '/Paso-a-paso-Unani/manifest.json',
  '/Paso-a-paso-Unani/icons/icon-192.png',
  '/Paso-a-paso-Unani/icons/icon-512.png',
];

// Instalación
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activación: limpiar caches viejas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first para assets propios
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Fuentes Google — network only
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 408 })));
    return;
  }

  // Assets propios — cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response.ok && url.origin === self.location.origin) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('/Paso-a-paso-Unani/index.html');
        }
      });
    })
  );
});
