/* Kube – service worker, versjon 95e021269d4c */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '95e021269d4c';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-V1sJjSzB.js","/kube/assets/actions-D3TOc6J3.js","/kube/assets/assemble-BIHyfXp9.js","/kube/assets/bandRoom-Cr0Qosae.js","/kube/assets/bests-Cvvz2ckB.js","/kube/assets/board-DoV8Flkh.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-BjcyJRWY.js","/kube/assets/cockpit-hDARFUH2.css","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-JMYGnL5q.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-I0bRv1yw.css","/kube/assets/DuelLayers-CHmIi1ys.js","/kube/assets/earth-CdfeZada.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earthDownload-JX4vtU0P.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-BI3irOwx.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-CT6BQuDQ.js","/kube/assets/follow-Dquojhbb.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-UBv7l24p.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-CwB3dGOM.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DIJ8B3N0.js","/kube/assets/helpShowsEdit-8h3gmFaq.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C5TPwjCu.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-C7QY673F.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-h_C8Msts.js","/kube/assets/leave-DAlsjWIj.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-7cfa7uAa.js","/kube/assets/migrations-BDDcBdKk.js","/kube/assets/MovePad-D1bwYUkn.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-C1Ic6vNc.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-_8gwZLg1.js","/kube/assets/pending-B9tf50qV.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-BL63_N7E.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DE4cmFow.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-BvRUaKpJ.css","/kube/assets/ranked-Ci7SIdDZ.js","/kube/assets/rankedFlow-CeJXAxjM.js","/kube/assets/RankedScreen-ZbUP6m87.js","/kube/assets/rankedSession-DrumLhjE.js","/kube/assets/rankedTwo-S6OB36Gb.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-B0yRnyBk.js","/kube/assets/Recipe-Bz1GxLPM.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-Ne2vWvqr.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-ucnuagia.js","/kube/assets/roundMachine-DTDT1nwW.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-aYMuY7r4.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/roundView-DPPPJ3SZ.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/Say-9e38svTe.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-BvMi_oJ_.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-iDP4ntwL.js","/kube/assets/scene-CwMS6Xas.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-hf7jJqLt.js","/kube/assets/ScrambleSheet-YYnW4wd2.js","/kube/assets/ScramblesSheet-BSJkifiR.js","/kube/assets/ScrambleView-B0KjhWXZ.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-uU_Cyhzl.js","/kube/assets/shareCard-DiO7HorO.js","/kube/assets/ShareSheet-BSMkmKLV.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-11rAiPzs.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-BoAWU9vT.js","/kube/assets/SkyRecords-BXAVxXcf.css","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-BE-nZJqD.js","/kube/assets/SmartCubeMount-DimE4xsl.css","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-mIK0pJBa.js","/kube/assets/store-BlYNMyCO.js","/kube/assets/t-CHle6jwC.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-IyDsa0du.js","/kube/assets/text-VqSSnMbs.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-D1Ikfnjp.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Ba9fP1gb.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/wipeFlow-BRLVuO2O.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-BcYymXuP.css","/kube/assets/World-BiemAa9t.js","/kube/assets/worldHint-D9iuH4Ew.js","/kube/assets/WorldLeagues-Y7CqnIhi.js","/kube/assets/WorldLink-B6M9DjIu.js","/kube/assets/worldModel-q8tIU6__.js","/kube/assets/worldNav-CfE1Esr_.js","/kube/assets/WorldWatch-B19UaQeN.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-C5TPwjCu.js";
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
