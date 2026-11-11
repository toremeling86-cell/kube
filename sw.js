/* Kube – service worker, versjon ca3d0024610d */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'ca3d0024610d';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-C8k0_kzj.js","/kube/assets/actions-CeOVX9N-.js","/kube/assets/assemble-BIHyfXp9.js","/kube/assets/bests-pSHYjbib.js","/kube/assets/board-PwaQffyX.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/cheat-DHFjNq42.js","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-CwRPnvtW.js","/kube/assets/cockpit-hDARFUH2.css","/kube/assets/controls-CVUlTB9p.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-1KvkqjAV.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-vETeXTMI.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-DadCrocu.js","/kube/assets/earthDownload-BJl0D5DI.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/engine-D7OHC_d1.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-Braxv9y5.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-BWnSIfqY.js","/kube/assets/feedback-BxpD2JrN.js","/kube/assets/FeedbackSheet-Df0-qwxl.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-zOlmNetq.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-CPs9Aolv.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-mOk-h5TO.js","/kube/assets/helpShowsEdit-DdgSjunI.js","/kube/assets/identity-CpmICJDs.js","/kube/assets/index-C_Fcvmiq.js","/kube/assets/index-LZ2R7BRj.css","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-Q4tDGin2.js","/kube/assets/keys-CA-94KRF.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-C3O0t7o_.js","/kube/assets/leave-DXzxwv6l.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-CrLVwonp.js","/kube/assets/migrations-B2OdtFE1.js","/kube/assets/MovePad-DlFeK7aH.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-DZ8O4-4o.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-Bvf7RjbI.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-CPhaUaHS.js","/kube/assets/pending-KJqVem8R.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-CnidW8Xc.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-Cp4dko0q.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/rankedFlow-CtUw_uu6.js","/kube/assets/RankedScreen-BvRUaKpJ.css","/kube/assets/RankedScreen-Cd5gdPhq.js","/kube/assets/rankedSession-DEtx-M4P.js","/kube/assets/rankedTwo-sD64DpVb.js","/kube/assets/react-DUz72-CK.js","/kube/assets/realStart-C7pD90fE.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-BcnxVWIS.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-BVgyJZcu.js","/kube/assets/roundMachine-DbxVBtP9.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-DNiFkZcm.css","/kube/assets/RoundScreen-DW3Yh_mq.js","/kube/assets/roundView-CCsqLIMq.js","/kube/assets/ScanExperience-Dtu3Tieq.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-D7jrEGjO.js","/kube/assets/scene-CyXoKJJt.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-BSJWz-ME.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-Zl24syBz.js","/kube/assets/ScrambleSheet-Bdjr4Pv3.js","/kube/assets/ScramblesSheet-S7A5wuif.js","/kube/assets/ScrambleView-C8QEjpIl.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/session-Dwv5DYuJ.js","/kube/assets/SettingsSheet-BQdb0ApR.js","/kube/assets/shareCard-DoZfgIEa.js","/kube/assets/ShareSheet-C-AjumPV.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-8BdLtEFK.js","/kube/assets/shell-DWz3zfJG.js","/kube/assets/size2-ItBhqn4x.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-d5pQRLdX.js","/kube/assets/SkyRecords-lTiU_hFx.css","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-CZn3eKxt.js","/kube/assets/store-DLqgdOZ_.js","/kube/assets/store-Hdf8wobz.js","/kube/assets/t-CGmNk_aQ.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-Bqk1GjeY.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/version-BYLMLwyo.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-nuy_Ps6U.js","/kube/assets/wipeFlow-B5eZJNb0.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-Bcw6jAm2.js","/kube/assets/World-DLN7Zsc5.css","/kube/assets/worldHint-Bg9BQ8-e.js","/kube/assets/WorldLeagues-CYxSKxxm.js","/kube/assets/WorldLink-Ckeh66RL.js","/kube/assets/worldModel-VFZp90Kp.js","/kube/assets/WorldWatch-DoCg4l1P.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-C_Fcvmiq.js";
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
