const CACHE_NAME = "profile-offline-20260629-toast-above-modal";
const OFFLINE_URL = "/offline";
const PRECACHE_URLS = [
  OFFLINE_URL,
  "/",
  "/portal",
  "/accessibility",
  "/updates",
  "/search",
  "/activity",
  "/Creator",
  "/Pricing",
  "/Bio",
  "/about",
  "/FAQ",
  "/settings",
  "/usage",
  "/privacy",
  "/license",
  "/trust",
  "/status",
  "/security",
  "/sitemap",
  "/500",
  "/maintenance",
  "/coming-soon",
  "/terms",
  "/feedback",
  "/styles.css",
  "/script.js",
  "/favicon.ico",
  "/site.webmanifest",
  "/assets/favicon-32.png",
  "/assets/favicon-48.png",
  "/assets/favicon-96.png",
  "/assets/apple-touch-icon.png",
  "/assets/icon-192.png",
  "/assets/icon-512.png",
  "/assets/well.png",
  "/assets/logo.png",
  "/assets/official-home-operations-hero.jpg",
  "/assets/accessibility-firetruck-hero.jpg",
  "/assets/profile-hero.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cachedOfflinePage = await caches.match(OFFLINE_URL, { ignoreSearch: true });
        return cachedOfflinePage || caches.match("/", { ignoreSearch: true });
      }),
    );
    return;
  }

  if (requestUrl.pathname.endsWith(".css") || requestUrl.pathname.endsWith(".js")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          return response;
        })
        .catch(() => caches.match(event.request, { ignoreSearch: true })),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        const responseCopy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        return response;
      });
    }),
  );
});
