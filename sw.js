/* Kube – service worker, versjon c048fe07ba91 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'c048fe07ba91';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-BoZTomuD.js","/kube/assets/actions-B2Nd8swF.js","/kube/assets/assemble-BIHyfXp9.js","/kube/assets/bests-CIsrkNSS.js","/kube/assets/board-BhBGU_uc.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/cheat-Za7xwzDd.js","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-BCY7d2ez.js","/kube/assets/cockpit-hDARFUH2.css","/kube/assets/controls-02k5Asmh.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CcAixvXA.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-CS8XGX4o.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-DmNmoKgE.js","/kube/assets/earthDownload-CiI3OK11.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/engine-C04isxQU.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-NgMVnrCy.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-BWnSIfqY.js","/kube/assets/feedback-BxpD2JrN.js","/kube/assets/FeedbackSheet-CYdNcFbz.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-Cj6YZvAa.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-BaGBgzep.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DzZoRXAg.js","/kube/assets/helpShowsEdit-DHgcarsn.js","/kube/assets/identity-Bxz_eaAH.js","/kube/assets/index-Dl57sk7m.js","/kube/assets/index-LZ2R7BRj.css","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-CXfKZmQE.js","/kube/assets/keys-BDWdPmJm.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-e7_DpJAX.js","/kube/assets/leave-DMNfUxG8.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-hApk6pK_.js","/kube/assets/migrations-DUthVZB2.js","/kube/assets/MovePad-Bwu5UvZU.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-DZ8O4-4o.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-CMMiVMke.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-F14AT6jk.js","/kube/assets/pending-DDzXvWIf.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-TsIlsGpw.js","/kube/assets/playPlan-D9wlQv-E.js","/kube/assets/prefs-CtSzvr9l.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/rankedFlow-DLIPyLxI.js","/kube/assets/RankedScreen-BvRUaKpJ.css","/kube/assets/RankedScreen-Cbxo-Ge3.js","/kube/assets/react-DUz72-CK.js","/kube/assets/realStart-BBxPuHMt.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-Bnpre09G.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/ScanExperience-zvSnOwmx.js","/kube/assets/ScanScreen-BemQwKUh.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/scene-CFHl88Zx.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-BSJWz-ME.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-DhCmVshz.js","/kube/assets/ScrambleSheet-CMzqETB3.js","/kube/assets/ScramblesSheet-CSFay_C9.js","/kube/assets/ScrambleView-C6pK2cAc.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/session-Dwv5DYuJ.js","/kube/assets/SettingsSheet-BgQJ3Iia.js","/kube/assets/shareCard-Htnj84Uz.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-kSZ53PM8.js","/kube/assets/Sheets-kxyGieRm.js","/kube/assets/shell-SJRxzR8t.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-5FKcJYvU.css","/kube/assets/SkyRecords-CcMKe_25.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-CN9hfnQM.js","/kube/assets/store-CrcTUmKD.js","/kube/assets/store-DO2Lm82U.js","/kube/assets/t-G7W1AmvH.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-DE-XK8p4.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/version-CtrYepqU.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-6sEbgYP7.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/wipeFlow-Dzvor9bv.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-DiXt30uo.js","/kube/assets/World-DLN7Zsc5.css","/kube/assets/worldHint-DLo82n-8.js","/kube/assets/WorldLink-id089VMy.js","/kube/assets/WorldWatch-4isJtXfe.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-Dl57sk7m.js";
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
