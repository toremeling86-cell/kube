/* Kube – service worker, versjon ca5805c399f7 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'ca5805c399f7';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-DHaGEcho.js","/kube/assets/actions-BXYAG7Gq.js","/kube/assets/assemble-BIHyfXp9.js","/kube/assets/bandRoom-C8i37uHM.js","/kube/assets/bests-2Te4LnOU.js","/kube/assets/board-DWAVcjSu.js","/kube/assets/cheat-Cg-3AZbD.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-BjcyJRWY.js","/kube/assets/cockpit-hDARFUH2.css","/kube/assets/controls-JMYGnL5q.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-CW8qrh-9.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-DDK2DFoG.js","/kube/assets/earthDownload-CbxIRaWj.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-DrrL8n6_.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-BtfPWB4g.js","/kube/assets/follow-M4irJ1ns.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-xSZNSjzH.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-Bvxd9-Qz.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-CNzy55hE.js","/kube/assets/helpShowsEdit-REaUobmb.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C2hGDGD7.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-Cz_2Y7TP.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-h_C8Msts.js","/kube/assets/leagues-D6S9sFP0.js","/kube/assets/leave-ftxa_VaS.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-BmwBYzpy.js","/kube/assets/migrations-BDDcBdKk.js","/kube/assets/MovePad-DBVX-6-N.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-4mNDGWt_.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-d2tWcCfM.js","/kube/assets/pending-B7zuUQep.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-CTJwgyOu.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DE4cmFow.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-BvRUaKpJ.css","/kube/assets/ranked-DPwvle29.js","/kube/assets/rankedFlow-CXrqyxJF.js","/kube/assets/RankedScreen-DyTICsSy.js","/kube/assets/rankedSession-DHrxdux5.js","/kube/assets/rankedTwo-DjSMz65j.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-CbE4Jurp.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-BBhCPaAO.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-Dt_Amp1-.js","/kube/assets/roundMachine-Xsetywmw.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/RoundScreen-Dih8JqN3.js","/kube/assets/roundView-tmkwWWbm.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-bB3hEol_.js","/kube/assets/ScanScreen-9J1KgeGg.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/scene-B6fQtcYj.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-hf7jJqLt.js","/kube/assets/ScrambleSheet-BA-cR4Pq.js","/kube/assets/ScramblesSheet-DhrleHnb.js","/kube/assets/ScrambleView-tSWefKn8.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-Db7rLzk4.js","/kube/assets/shareCard-D04s3VJZ.js","/kube/assets/ShareSheet-Di0yYLXV.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-B4zhWy2B.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-BXAVxXcf.css","/kube/assets/SkyRecords-RA7_43Eg.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-B0hZ7VXa.css","/kube/assets/SmartCubeMount-BngRhMOv.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-B12Ubbeg.js","/kube/assets/store-CHGGvYin.js","/kube/assets/store-xqhnvhi5.js","/kube/assets/t-DW6uMgIV.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-DcujMAcZ.js","/kube/assets/text-IyDsa0du.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-XAGH5RTt.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-vLsdEYpi.js","/kube/assets/wipeFlow-B650WAq4.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-BcYymXuP.css","/kube/assets/World-dWo5vd3h.js","/kube/assets/worldHint-D9iuH4Ew.js","/kube/assets/WorldLeagues-BNgbohcw.js","/kube/assets/WorldLink-PEWSe_Ht.js","/kube/assets/worldModel-B14pIKeX.js","/kube/assets/worldNav-DC7NrUdt.js","/kube/assets/WorldWatch-DY0T95GO.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-C2hGDGD7.js";
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
