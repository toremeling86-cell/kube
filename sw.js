/* Kube – service worker, versjon 63065e9a83fa */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '63065e9a83fa';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-DoQEMBT3.js","/kube/assets/actions-DbjdMp9R.js","/kube/assets/assemble-BsLtXLlg.js","/kube/assets/bests-K9ckBD--.js","/kube/assets/board-CbhBPYCm.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/cheat-gvGGImVO.js","/kube/assets/cockpit-DjCl0iBR.js","/kube/assets/cockpit-DOp6sQ08.css","/kube/assets/controls-BH14u6bE.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-D-xqkr6g.js","/kube/assets/earth-CZ_y1gJP.js","/kube/assets/earthDownload-CR0_k3Du.js","/kube/assets/earthLevels-DHF8_OCB.js","/kube/assets/engine-bpJncpf7.js","/kube/assets/environment-CiK3Clox.js","/kube/assets/facelets-Cx602QR_.js","/kube/assets/Farewell-BYJOq55G.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-Bt-1FL1b.js","/kube/assets/feedback-DghntjsL.js","/kube/assets/FeedbackSheet-CUAVpoGh.js","/kube/assets/forest-DvSezZ1-.js","/kube/assets/format-Cumf_nf4.js","/kube/assets/gps-sUGouh5b.css","/kube/assets/GpsScreen-DFMXEXga.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-WFImlVV2.js","/kube/assets/helpShowsEdit-D6hmCVA0.js","/kube/assets/identity-C19oHWEP.js","/kube/assets/index-DQNxAhRL.css","/kube/assets/index-yYI-jRCp.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-CYokzSaR.js","/kube/assets/keys-DQ4KKp-W.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-B_9uR5ty.js","/kube/assets/leave-06hjf4l5.js","/kube/assets/messages.nb-k9Y1s_3c.js","/kube/assets/migrations-D_YVxBEw.js","/kube/assets/MovePad-Nchd9_oa.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-DZ8O4-4o.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-h2IksbET.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CdoSDhsi.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-nZoOOIP7.js","/kube/assets/pending-D3S4yzvI.js","/kube/assets/placeStatus-CLdAUYJs.js","/kube/assets/plan-D8jPzu5m.js","/kube/assets/PlayHelpRow-DwdkodWk.js","/kube/assets/playPlan-ByflTqv5.js","/kube/assets/prefs-r3Rvkw9Z.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/rankedFlow-DRdAe64n.js","/kube/assets/RankedScreen-BvRUaKpJ.css","/kube/assets/RankedScreen-DL123i8M.js","/kube/assets/react-DUz72-CK.js","/kube/assets/realStart-Co_493Zk.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-WyZ4TCEC.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BNdAASpU.js","/kube/assets/replays-B1oZOxmI.js","/kube/assets/retiredSettings-C6RQ2_0F.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/scan-vwcXFlzT.js","/kube/assets/ScanExperience-c43CPCKG.js","/kube/assets/ScanScreen-DKjfoRc0.js","/kube/assets/ScanScreen-k09YTq9J.css","/kube/assets/scene-BlytmFCn.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-HOrwfBIl.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-Cj2kJBkL.js","/kube/assets/ScrambleSheet-CmTD9JgG.js","/kube/assets/ScramblesSheet-BGWGfCLt.js","/kube/assets/ScrambleView-PqJwHBpR.js","/kube/assets/session-Dwv5DYuJ.js","/kube/assets/SettingsSheet-DPfheyqL.js","/kube/assets/shareCard-B5mirnu0.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-nMrkTP1F.js","/kube/assets/Sheets-Drp5s6W5.js","/kube/assets/sky-Dw02_Q9d.js","/kube/assets/SkyRecords-BYt-ORYl.css","/kube/assets/SkyRecords-DkLZtEhI.js","/kube/assets/slices-fMwRku9-.js","/kube/assets/snapshot-ixfDyWis.js","/kube/assets/SolveSheet-Dx9N0C36.js","/kube/assets/store-Bz0QeLGC.js","/kube/assets/store-tkvrJgE6.js","/kube/assets/t-BgF20-VG.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-WthounQz.js","/kube/assets/text-B11MGTbx.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/viewControl-Cz3Gavmw.js","/kube/assets/WatchLayer-Bn4hIizE.css","/kube/assets/WatchLayer-DX6tzHLw.js","/kube/assets/wipeFlow-DhKZ49iF.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-DLN7Zsc5.css","/kube/assets/World-nZj2PkCx.js","/kube/assets/worldHint-CDctuaI0.js","/kube/assets/WorldLink-u3mYTjz7.js","/kube/assets/WorldWatch-D26KYw16.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-yYI-jRCp.js";
// Filene med innholdet i navnet.
const ASSETS = BASE + 'assets/';
// Bildene til stedene som lastes ned (jorda, sted-jorda.md 2.4): et eget, varig lager. Navnet begynner ikke med PREFIX («kube:»), ellers sletter activate det ved hver oppdatering, og 10 MB måtte lastes ned på nytt.
// Appen rydder gamle versjoner selv (src/engine/world/placeCache.ts) og sletter lageret i «Delete all data».
const PLACES_CACHE = 'kube-steder:' + BASE;
const PLACES_DIR = BASE + 'steder/';

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

// Bildene til stedene: fra lageret først, ellers fra nettet og så lagret til neste gang, også uten nett. Feiler nettet første gang, feiler henting (appen viser meldingen).
function placeFetched(req) {
  return caches.open(PLACES_CACHE).then((cache) =>
    cache.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && res.status === 200 && res.type !== 'opaque') cache.put(req, res.clone());
          return res;
        }),
    ),
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
  if (url.pathname.startsWith(PLACES_DIR)) {
    event.respondWith(placeFetched(req));
    return;
  }
  event.respondWith(cachedOrFetched(req, req));
});
