self.addEventListener("install", (event) => {
  // Perform install steps, like caching assets
});

self.addEventListener("activate", (event) => {
  // Activate service worker steps
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Offline, unable to fetch the resource.");
    })
  );
});
