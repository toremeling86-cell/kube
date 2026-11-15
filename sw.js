/* Kube – service worker, versjon fe065d5208ce */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'fe065d5208ce';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-D1BJh7yh.js","/kube/assets/actions-BrvxvLj3.js","/kube/assets/bandRoom-czrD7hDm.js","/kube/assets/bests-Ne-bxoKr.js","/kube/assets/board-DoV8Flkh.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/DuelLayers-CwGGy2Nz.js","/kube/assets/earth-cgcbPa9L.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earthDownload-DSws0ycX.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-Bs7GPf00.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-RUr9Zgfh.js","/kube/assets/follow-BEpa92t0.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-JwzoiaWX.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GpsScreen-vpEi4fEH.js","/kube/assets/GuideCheck-Dm-Rvzw8.js","/kube/assets/helpShowsEdit-CEURVKqp.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/index-DBbvVxvS.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-L_c5ossJ.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-iCI_n6w9.js","/kube/assets/leave-BBBZ_-Tc.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-CH8tsADM.js","/kube/assets/migrations-BDDcBdKk.js","/kube/assets/MovePad-DZFjsxdX.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-BdByIskC.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-Dj7AVA6-.js","/kube/assets/pending-BckndrOV.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-B0IlM3Ww.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-CH0Ywn_3.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-BvRUaKpJ.css","/kube/assets/ranked-KKHTp5Rw.js","/kube/assets/rankedFlow-CpnRkU-H.js","/kube/assets/RankedScreen-DI5JiI2N.js","/kube/assets/rankedSession-8fS9Tsm1.js","/kube/assets/rankedTwo-DR3GCC9c.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-puIF_s40.js","/kube/assets/Recipe-D1MKCBiq.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-CgMgIx8e.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-ChUs0TwR.js","/kube/assets/roundMachine-CrklnpdL.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/RoundScreen-DjzrFXmL.js","/kube/assets/roundView-DzqBb-cz.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/Say-DsThFQ3G.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-BU7TzYi3.js","/kube/assets/ScanScreen-BPpuKbMv.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/scene-DTYk9XrD.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-C4Koz-kY.js","/kube/assets/ScrambleSheet-C9nhECqw.js","/kube/assets/ScramblesSheet-Cu6zHjbC.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-BF9Q2LHb.js","/kube/assets/ScrambleView-CPRGtzUZ.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-OA0bg6Xp.js","/kube/assets/shareCard-Bby8eqj4.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-iIbzKL53.js","/kube/assets/Sheets-D9YN8XRL.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-BXAVxXcf.css","/kube/assets/SkyRecords-DX5hGJi9.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-CPnYytAE.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-n37o97rz.js","/kube/assets/store-DuwQjECa.js","/kube/assets/t-CdI3Jjzh.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-CCm2XZX4.js","/kube/assets/text-CS7M1xBV.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-D3Av_wg1.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-Dh8vQVdo.js","/kube/assets/wipeFlow-GXVEv5V8.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-BcYymXuP.css","/kube/assets/World-q0lVHbOE.js","/kube/assets/worldHint-0wPCtkFP.js","/kube/assets/WorldLeagues-24CeprUd.js","/kube/assets/WorldLink-FOkjeJ1n.js","/kube/assets/worldModel-DhXRPhe_.js","/kube/assets/worldNav-JtTqOi-F.js","/kube/assets/WorldWatch-CJ9AzrIr.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-DBbvVxvS.js";
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
