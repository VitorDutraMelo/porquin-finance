const CACHE = "porquin-finance-v6";
const BASE = "/porquin-finance/";
const SHELL = [
  BASE,
  `${BASE}manifest.webmanifest`,
  `${BASE}porquin-official.png`,
  `${BASE}icon-192.png`,
  `${BASE}icon-512.png`,
  `${BASE}maskable-icon-512.png`,
  `${BASE}apple-touch-icon.png`,
  `${BASE}favicon.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.allSettled(SHELL.map((url) => cache.add(url))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.url.startsWith("chrome-extension://")) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(async () => (await caches.match(event.request)) || (await caches.match(BASE))),
  );
});
