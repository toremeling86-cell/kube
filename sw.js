/* Kube – service worker, versjon 41c8bea6cc38 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '41c8bea6cc38';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-Ck5_28rB.js","/kube/assets/actions-UdHcZ0jd.js","/kube/assets/assemble-BIHyfXp9.js","/kube/assets/bandRoom-C0aqlgGf.js","/kube/assets/bests-BqXBTIwc.js","/kube/assets/board-DWAVcjSu.js","/kube/assets/cheat-4Q4o_F4r.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-aa5QYDJh.js","/kube/assets/cockpit-hDARFUH2.css","/kube/assets/controls-CZU89PV4.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-1KvkqjAV.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-eVtsMMBl.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-q4Gciq7G.js","/kube/assets/earthDownload-Dc-pvZ9j.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-Dr-Skzd6.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-BWnSIfqY.js","/kube/assets/FeedbackSheet-Co92tyq2.js","/kube/assets/follow-DnHNdNGW.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-DNQTYR4f.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-D9Mhs5pc.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-BUHdk_DA.js","/kube/assets/helpShowsEdit-_vNV8NaJ.js","/kube/assets/identity-D1AfmtxM.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/index-D7AoJIDe.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-DVZD4KZG.js","/kube/assets/keys-BRqOwOnE.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-DN5ar1v-.js","/kube/assets/leagues-tpBqCBEF.js","/kube/assets/leave-CwyiGF77.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-C0lqD7qq.js","/kube/assets/migrations-CdOh8S4f.js","/kube/assets/MovePad-B-d9nTWO.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-DZ8O4-4o.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-BybK_fTg.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-BzHIV5pg.js","/kube/assets/pending-Ct2lHeMS.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-CnF33Rrx.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-d8pNIkZk.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-BQpvuGW9.js","/kube/assets/ranked-BvRUaKpJ.css","/kube/assets/rankedFlow-CflgzRM7.js","/kube/assets/RankedScreen-CJIpNFlI.js","/kube/assets/rankedSession-3rAI8FCb.js","/kube/assets/rankedTwo-GtxnPMu1.js","/kube/assets/react-DUz72-CK.js","/kube/assets/realStart-BSYGqvhS.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-C9vtXlOd.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-DI3jViU4.js","/kube/assets/roundMachine-COdpxIgl.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/RoundScreen-DFBU3NWh.js","/kube/assets/roundView-DGAlyIyx.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/ScanExperience-hFlen9Ik.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-Ja33iW0j.js","/kube/assets/scene-Db4bB8bv.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-C1tL--tR.js","/kube/assets/ScrambleSheet-AoAeao9W.js","/kube/assets/ScramblesSheet-CZaquuM4.js","/kube/assets/ScrambleView-hMfx7qHZ.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-to9MReoD.js","/kube/assets/shareCard-CJqFqhsc.js","/kube/assets/ShareSheet-CAZiOOQ2.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-8997SCYi.js","/kube/assets/shell-DWz3zfJG.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-BXAVxXcf.css","/kube/assets/SkyRecords-CEVM479h.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-CM9Sdzd3.js","/kube/assets/store-Bxrpwe2G.js","/kube/assets/store-C0cPS0Hm.js","/kube/assets/t-CevZydcZ.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-DEYEqZ_s.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-DTENMnMR.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-CbNpHxJS.js","/kube/assets/wipeFlow-D5zzTFjm.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-BcYymXuP.css","/kube/assets/World-BvLZ92dw.js","/kube/assets/worldHint-Bn4c6yVl.js","/kube/assets/WorldLeagues-CmkzuKBJ.js","/kube/assets/WorldLink-rAgqBhjt.js","/kube/assets/worldModel-CHwBVCN3.js","/kube/assets/worldNav-9Y_qhvOu.js","/kube/assets/WorldWatch-BOiRD2CF.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-D7AoJIDe.js";
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
