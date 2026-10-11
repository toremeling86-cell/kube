/* Kube – service worker, versjon 0f6c67038233 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '0f6c67038233';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-BuUqDsRB.js","/kube/assets/actions-CmoGpXw5.js","/kube/assets/assemble-BPzOglFR.js","/kube/assets/bests-C9TvUMcS.js","/kube/assets/cockpit-C2qLskvk.css","/kube/assets/cockpit-j0r6IwiS.js","/kube/assets/controls-BUkse9ZT.js","/kube/assets/core-CpsaBWvA.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-CKJpNOfX.js","/kube/assets/download-DHIEfHit.js","/kube/assets/duel-DNDH2tKY.css","/kube/assets/DuelLayers-D7w5RBxq.js","/kube/assets/engine-Cvdylv_8.js","/kube/assets/facelets-CtvIj8gs.js","/kube/assets/features-cOeJqIiG.js","/kube/assets/feedback-CwvvQ-BF.js","/kube/assets/FeedbackSheet-LeYukO7X.js","/kube/assets/forest-BCFBg2y_.js","/kube/assets/format-B23GeNJO.js","/kube/assets/gps-DYQwOccy.css","/kube/assets/GpsScreen-BFVwKgCZ.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DVEJrgDg.js","/kube/assets/helpShowsEdit-Cr2BoVMU.js","/kube/assets/index-D9twC5KS.js","/kube/assets/index-DinXZg_n.css","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/keys-DCFoJ9ov.js","/kube/assets/messages.nb-BeY0tVx0.js","/kube/assets/migrations-Dcw_Ft8T.js","/kube/assets/MovePad-DaH9DTsd.js","/kube/assets/MovePad-DM-vHehG.css","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-C66_ZMLL.js","/kube/assets/orientation-CLfmyouW.js","/kube/assets/paint-wGhfnTdO.js","/kube/assets/plan-DCduRDKv.js","/kube/assets/PlayHelpRow-Z2PIj3-o.js","/kube/assets/playPlan-FmPz1U6g.js","/kube/assets/preload-helper-BwbQp166.js","/kube/assets/react-A7fPcjpT.js","/kube/assets/realStart-CivzSoR8.js","/kube/assets/Recipe-C81m9AEx.js","/kube/assets/recognize-_AoYshU7.js","/kube/assets/replayDb-BjqnlqoO.js","/kube/assets/replayLog-h7V1a3Dw.js","/kube/assets/replays-D0YTn0nC.js","/kube/assets/retiredSettings-C6RQ2_0F.js","/kube/assets/scan-Clx-wgxy.js","/kube/assets/ScanExperience-416M87mK.js","/kube/assets/ScanScreen-BmUNahj0.js","/kube/assets/ScanScreen-k09YTq9J.css","/kube/assets/scene-CJBJrS-b.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-G1sFzYtV.js","/kube/assets/scrambler.worker-CVA_bE9u.js","/kube/assets/scrambles-mP5Nt_oh.js","/kube/assets/ScrambleSheet-BmS8_1ym.js","/kube/assets/ScramblesSheet-I_2gh9iG.js","/kube/assets/ScrambleView-DW-gfysY.js","/kube/assets/session-5zAomDNb.js","/kube/assets/SettingsSheet-Bkdg4c_q.js","/kube/assets/shareCard-DttcjT45.js","/kube/assets/ShareSheet-D1H0cyh0.js","/kube/assets/Sheets-cYFTT_DV.js","/kube/assets/sky-6_0hZg6-.js","/kube/assets/slices-Bgizgfix.js","/kube/assets/snapshot-CWvZ5lUi.js","/kube/assets/Stats-D7IQsY2G.js","/kube/assets/Stats-DIIk9Xpd.css","/kube/assets/store-C6-KuQ5_.js","/kube/assets/t-Dx-lPSm5.js","/kube/assets/terrain.worker-CWyvrRRt.js","/kube/assets/three-9f_xmmqr.js","/kube/assets/viewControl-C6AsR46u.js","/kube/assets/wiping-C43ZGAKh.js","/kube/icons/monochrome-432.png","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-D9twC5KS.js";
// Filene med innholdet i navnet.
const ASSETS = BASE + 'assets/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      // Lagrene fra tidligere versjoner. Bare lagrene til denne appen (PREFIX): andre apper på samme domene har sine egne.
      const older = (await caches.keys()).filter((k) => k.startsWith(PREFIX) && k !== CACHE);
      const previous = async (url) => {
        for (const name of older) {
          const hit = await caches.match(url, { cacheName: name });
          if (hit) return hit;
        }
        return null;
      };
      const responses = await Promise.all(
        FILES.map(async (url) => {
          const hashed = url.startsWith(ASSETS);
          const kept = hashed ? await previous(url) : null;
          if (kept) return [url, kept];
          const res = await fetch(hashed ? new Request(url) : new Request(url, { cache: 'reload' }));
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

// Fra lageret først, ellers fra nettet. Det som hentes, lagres under key til neste gang, også uten nett.
function cachedOrFetched(key, req) {
  return caches.match(key, { cacheName: CACHE }).then(
    (hit) =>
      hit ||
      fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(key, copy));
        }
        return res;
      }),
  );
}

// Siden en adresse viser til, også uten «.html», slik vertene serverer den (/personvern gir personvern.html).
function pageFor(path) {
  if (PAGES.includes(path)) return path;
  if (PAGES.includes(path + '.html')) return path + '.html';
  return null;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  if (req.mode === 'navigate') {
    // En side i bygget, for eksempel personvern.html eller lisenser.txt, vises som seg selv.
    const page = pageFor(url.pathname);
    if (page) {
      event.respondWith(cachedOrFetched(page, req));
      return;
    }
    // Alle andre sidebesøk er appen: lagret index.html først, så den åpner seg med en gang, også uten nett.
    // Nye versjoner kommer via en ventende service worker og knappen Oppdater.
    event.respondWith(caches.match(BASE + 'index.html', { cacheName: CACHE }).then((hit) => hit || fetch(req)));
    return;
  }
  event.respondWith(cachedOrFetched(req, req));
});
