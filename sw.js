/* Kube – service worker, versjon 596c3227ed78 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '596c3227ed78';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/icon-512.png","/kube/icons/maskable-192.png","/kube/icons/maskable-512.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/index-BagFvq3u.js","/kube/assets/index-DsTUPbZ3.css","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/react-BnOWHKxB.js","/kube/assets/rolldown-runtime-CbXtAM7H.js","/kube/assets/schibsted-grotesk-latin-400-normal-DPhJBilQ.woff2","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-ext-400-normal-DHVTfbSM.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/scrambler.worker-UoTZYZdR.js","/kube/assets/terrain.worker-DowGO7GR.js","/kube/assets/three-DyhSy3uH.js"];
const ENTRY = "/kube/assets/index-BagFvq3u.js";

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      // Forbi nettleserens HTTP-lager: en gammel index.html fra forrige versjon skal aldri havne her.
      const responses = await Promise.all(
        FILES.map(async (url) => {
          const res = await fetch(new Request(url, { cache: 'reload' }));
          if (!res.ok) throw new Error('Mangler ' + url + ' (' + res.status + ')');
          return [url, res];
        }),
      );
      const index = responses.find(([url]) => url === BASE + 'index.html');
      // Svarer serveren eller et mellomlager med en eldre side, avbrytes installasjonen og den gamle versjonen blir stående.
      if (index && ENTRY && !(await index[1].clone().text()).includes(ENTRY.slice(BASE.length))) throw new Error('Utdatert index.html');
      const cache = await caches.open(CACHE);
      await Promise.all(responses.map(([url, res]) => cache.put(url, res)));
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  // Sidebesøk: lagret index.html først, så appen åpner seg med en gang, også uten nett.
  // Nye versjoner kommer via en ventende service worker og knappen Oppdater.
  if (req.mode === 'navigate') {
    event.respondWith(caches.match(BASE + 'index.html', { cacheName: CACHE }).then((hit) => hit || fetch(req)));
    return;
  }
  event.respondWith(
    caches.match(req, { cacheName: CACHE }).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
