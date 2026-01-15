const CACHE_NAME = 'routine-cache-v3';
const ASSETS_TO_CACHE = [
    '../',
    '../routine.html',
    './philosophy.json',
    './style.css',
    './script.js'
];

// Install Event: Cache core local assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event: Stale-While-Revalidate Strategy
// 1. Return from cache immediately if available (FAST)
// 2. Fetch from network in background to update cache for next time (FRESH)
// 3. If cache missing, fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Network fetch to update cache (background)
                const fetchPromise = fetch(event.request)
                    .then((networkResponse) => {
                        // Check if valid response
                        if (!networkResponse || networkResponse.status !== 200 && networkResponse.type !== 'opaque') {
                            return networkResponse;
                        }

                        // Clone and Cache
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    })
                    .catch((err) => {
                        // Network failed (offline), do nothing (we will return cachedResponse if available)
                        // console.log('Network fetch failed', err);
                    });

                // Return cached response right away if we have it, else wait for network
                return cachedResponse || fetchPromise;
            })
    );
});
