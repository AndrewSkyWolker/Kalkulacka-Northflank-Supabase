const CACHE_NAME = 'kaloricka-kalkulacka-v1.0.0';
const urlsToCache = [
  '/',
  '/static/style.css',
  '/static/icon/profil.png',
  '/static/icon/nastaveni.png',
  '/static/icon/potraviny.png',
  '/static/icon/recepty.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});