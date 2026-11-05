/* Kube – service worker, versjon 7358c33a765c */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '7358c33a765c';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-D3AQwzRV.js","/kube/assets/actions-BIovNp9v.js","/kube/assets/assemble-BIHyfXp9.js","/kube/assets/bests-C7NrQkk2.js","/kube/assets/board-BhBGU_uc.js","/kube/assets/cheat-BI_ewptr.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-BfoUprsC.js","/kube/assets/cockpit-CeXwegLD.css","/kube/assets/controls-CDByxIjy.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-572WzGSD.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-CZiTDbRD.js","/kube/assets/earth-ByfSZpcZ.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earthDownload-CtszaPqS.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/engine-A3PYV-Zy.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-ClZGiw2a.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-Bt-1FL1b.js","/kube/assets/feedback-C1nP5ojg.js","/kube/assets/FeedbackSheet-B5zAmJf_.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-Dt28Krmp.js","/kube/assets/gps-sUGouh5b.css","/kube/assets/GpsScreen-CbV6pqgc.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-BWNRAyKc.js","/kube/assets/helpShowsEdit--jd4jqhF.js","/kube/assets/identity-C19oHWEP.js","/kube/assets/index-DnIy5ypZ.css","/kube/assets/index-Xfxzdmqd.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-B0Z3PKf6.js","/kube/assets/keys-DQ4KKp-W.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-DivIat2e.js","/kube/assets/leave-DEU4T1zB.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-BMQCpGlt.js","/kube/assets/migrations-D_YVxBEw.js","/kube/assets/MovePad-COZydd_v.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-DZ8O4-4o.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-BqD1e4fX.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-xTgJce1C.js","/kube/assets/pending-C-GVObgK.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-D8jPzu5m.js","/kube/assets/PlayHelpRow-DFVS5DRU.js","/kube/assets/playPlan-ByflTqv5.js","/kube/assets/prefs-r3Rvkw9Z.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/rankedFlow-U2mdIcks.js","/kube/assets/RankedScreen-BvRUaKpJ.css","/kube/assets/RankedScreen-CIWnSDUb.js","/kube/assets/react-DUz72-CK.js","/kube/assets/realStart-DHbd0h6H.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-c0EcHTx1.js","/kube/assets/retiredSettings-C6RQ2_0F.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/scan-DQ0nZx4K.js","/kube/assets/ScanExperience-Cz7Vsny4.js","/kube/assets/ScanScreen-k09YTq9J.css","/kube/assets/ScanScreen-MN70qTtd.js","/kube/assets/scene-BveVl_ZU.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-BSJWz-ME.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-YWBRrCsD.js","/kube/assets/ScrambleSheet-CTFSsV7P.js","/kube/assets/ScramblesSheet-BLuF5BBT.js","/kube/assets/ScrambleView-BWLf5T5y.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/session-Dwv5DYuJ.js","/kube/assets/SettingsSheet-cLEbsQEx.js","/kube/assets/shareCard-CCeIZIiK.js","/kube/assets/ShareSheet-6ITTxhYu.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-CIJh6mlF.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-5FKcJYvU.css","/kube/assets/SkyRecords-Bp9jM0vG.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-DFAnXHOx.js","/kube/assets/store-DriN6PvQ.js","/kube/assets/store-WIFDQE8z.js","/kube/assets/t-D0Hxc2ln.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-DKlKJsIb.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bn4hIizE.css","/kube/assets/WatchLayer-CTRyY923.js","/kube/assets/wipeFlow-BHw4W4JN.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-BFxZ1Ie2.js","/kube/assets/World-DLN7Zsc5.css","/kube/assets/worldHint-CDctuaI0.js","/kube/assets/WorldLink-CTAZvPKE.js","/kube/assets/WorldWatch-3cVCj64K.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-Xfxzdmqd.js";
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
