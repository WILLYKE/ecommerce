const CACHE_NAME = "ecommerce-cache-v1";
const urlsToCache = [
    "./index.html",
    "./styles.css",
    "./script.js",
    "./manifest.json",
    "./product1.jpg",
    "./product2.jpg"
];

// Install service worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch requests
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
