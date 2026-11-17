/* Kube – service worker, versjon a722283ccec7 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'a722283ccec7';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-CSeOtI8F.js","/kube/assets/actions-C_OYkgK4.js","/kube/assets/bandRoom-D7Ekl37Y.js","/kube/assets/bests-CvMnLadU.js","/kube/assets/board-ydf2bT5v.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/DuelLayers-CYe9RqHk.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-wKpO5L9n.js","/kube/assets/earthDownload-CGtYY3Yr.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-8QiR-dGi.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-CE6PoXjY.js","/kube/assets/follow-C2CHNRxR.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BMxIaw4T.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-BKIRY6-O.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-Dwn7zRdg.js","/kube/assets/helpShowsEdit-BM6gEAof.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/index-CC7Tg0d4.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-2XLm8Q2P.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-inBU0wfV.js","/kube/assets/listName-C3_wCdO4.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-CH8tsADM.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/MovePad-DE44q_KM.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-C8IkvD5o.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-B1loVCPk.js","/kube/assets/pending-DHZVR3rP.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-DIMXLWbW.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-CFieJLhw.js","/kube/assets/rankedFlow-Cu-8MBAQ.js","/kube/assets/RankedScreen-DXgqmp9N.js","/kube/assets/rankedSession-BOMipVYE.js","/kube/assets/rankedTwo-BVlKfp7K.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-vXOpIUJr.js","/kube/assets/Recipe-22VmRcmI.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-gJaYilEL.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-DiAn7yRo.js","/kube/assets/roundMachine-uCA9VWfd.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-BWykvPuh.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/roundView-CvAUdKJZ.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/Say-Dyo82u7Y.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-Ckk6S7ok.js","/kube/assets/ScanScreen-C1ePRUZn.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/scene-CkamEViE.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-C4Koz-kY.js","/kube/assets/ScrambleSheet-CWh5QOTE.js","/kube/assets/ScramblesSheet-tt8vRr6C.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-C5socVSI.js","/kube/assets/ScrambleView-8C2d5KXm.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-DFthqMmq.js","/kube/assets/shareCard-Db90d48u.js","/kube/assets/ShareSheet-B9Iv1dzc.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-CSBvK4Z0.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-B_HEnT3p.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartCubeMount-i2EWHOMC.js","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-BK8phFEa.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-IgvZNYAj.js","/kube/assets/store-DOxzRTkK.js","/kube/assets/t-D6hEHjqR.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-B7jJwLE4.js","/kube/assets/text-YgH4p47S.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-BIk9tFKo.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-CVwtV2zj.js","/kube/assets/wipeFlow-B9XqfFKo.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/World-jbdAZXuF.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/WorldLeagues-Cmw6v7Te.js","/kube/assets/WorldLink-xNt0WINk.js","/kube/assets/worldModel-CHhZf3y6.js","/kube/assets/worldNav-CGPS535t.js","/kube/assets/WorldWatch-0j6mx6z1.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-CC7Tg0d4.js";
// Alle filene i bygget (uten steder/, som har sitt eget lager), som stier i adressen. Bare disse svarer service workeren på fra lageret, og bare disse lagres.
const KNOWN = new Set(["/kube/assets/AboutSheet-CSeOtI8F.js","/kube/assets/DuelLayers-CYe9RqHk.js","/kube/assets/Farewell-8QiR-dGi.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/FeedbackSheet-CE6PoXjY.js","/kube/assets/GpsScreen-BKIRY6-O.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-Dwn7zRdg.js","/kube/assets/JoinScreen-2XLm8Q2P.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/MovePad-DE44q_KM.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/MyReplay-C8IkvD5o.js","/kube/assets/PlayHelpRow-DIMXLWbW.js","/kube/assets/RankedScreen-DXgqmp9N.js","/kube/assets/Recipe-22VmRcmI.js","/kube/assets/RoundScreen-BWykvPuh.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/Say-Dyo82u7Y.js","/kube/assets/ScanExperience-Ckk6S7ok.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-C1ePRUZn.js","/kube/assets/ScrambleSheet-CWh5QOTE.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-C5socVSI.js","/kube/assets/ScrambleView-8C2d5KXm.js","/kube/assets/ScramblesSheet-tt8vRr6C.js","/kube/assets/SettingsSheet-DFthqMmq.js","/kube/assets/ShareSheet-B9Iv1dzc.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-CSBvK4Z0.js","/kube/assets/SkyRecords-B_HEnT3p.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartCubeMount-i2EWHOMC.js","/kube/assets/SmartOffer-BK8phFEa.js","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SolveSheet-IgvZNYAj.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-CVwtV2zj.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/World-jbdAZXuF.js","/kube/assets/WorldLeagues-Cmw6v7Te.js","/kube/assets/WorldLink-xNt0WINk.js","/kube/assets/WorldWatch-0j6mx6z1.js","/kube/assets/actions-C_OYkgK4.js","/kube/assets/bandRoom-D7Ekl37Y.js","/kube/assets/bests-CvMnLadU.js","/kube/assets/board-ydf2bT5v.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-wKpO5L9n.js","/kube/assets/earthDownload-CGtYY3Yr.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/features-D4dUVg3H.js","/kube/assets/follow-C2CHNRxR.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BMxIaw4T.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/helpShowsEdit-BM6gEAof.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/index-CC7Tg0d4.js","/kube/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff","/kube/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2","/kube/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff","/kube/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff","/kube/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff","/kube/assets/keys-BMdKzqYR.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-inBU0wfV.js","/kube/assets/listName-C3_wCdO4.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-CH8tsADM.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-B1loVCPk.js","/kube/assets/pending-DHZVR3rP.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-CFieJLhw.js","/kube/assets/rankedFlow-Cu-8MBAQ.js","/kube/assets/rankedSession-BOMipVYE.js","/kube/assets/rankedTwo-BVlKfp7K.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-vXOpIUJr.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-gJaYilEL.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-DiAn7yRo.js","/kube/assets/roundMachine-uCA9VWfd.js","/kube/assets/roundView-CvAUdKJZ.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/scene-CkamEViE.js","/kube/assets/schibsted-grotesk-latin-500-normal-Ba39e-CX.woff","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-BieE9YjJ.woff","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-Dz-okVa0.woff","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-Dl5-MP1T.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-BjmYCtCC.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-DQsnXf5q.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-DDW2aNyx.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-DS3YHxa9.woff","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-C4Koz-kY.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/shareCard-Db90d48u.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/store-DOxzRTkK.js","/kube/assets/t-D6hEHjqR.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-B7jJwLE4.js","/kube/assets/text-YgH4p47S.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-BIk9tFKo.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/wipeFlow-B9XqfFKo.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/worldModel-CHhZf3y6.js","/kube/assets/worldNav-CGPS535t.js","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/icons/favicon-64.png","/kube/icons/icon-1024.png","/kube/icons/icon-192.png","/kube/icons/icon-512.png","/kube/icons/maskable-192.png","/kube/icons/maskable-512.png","/kube/icons/monochrome-432.png","/kube/index.html","/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/manifest.webmanifest","/kube/privacy.html","/kube/screenshots/bred.jpg","/kube/screenshots/telefon.jpg","/kube/splash/splash-1125x2436.png","/kube/splash/splash-1170x2532.png","/kube/splash/splash-1179x2556.png","/kube/splash/splash-1206x2622.png","/kube/splash/splash-1284x2778.png","/kube/splash/splash-1290x2796.png","/kube/splash/splash-1320x2868.png","/kube/splash/splash-750x1334.png","/kube/splash/splash-828x1792.png"]);
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
  // Siden spør hvilken startfil denne versjonen har: er det den siden alt kjører, tar den over med en gang, uten omlasting (main.tsx).
  if (event.data === 'entry' && event.ports && event.ports[0]) event.ports[0].postMessage(ENTRY);
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
    // Alle andre sidebesøk er appen: den lagrede index.html med en gang, uten å vente på nettet. Første gang, uten noe lagret, fra nettet.
    event.respondWith(caches.match(BASE + 'index.html', { cacheName: CACHE }).then((hit) => hit || fetch(req)));
    return;
  }
  if (url.pathname.startsWith(PLACES_DIR)) {
    event.respondWith(placeFetched(req));
    return;
  }
  // Bare filene i bygget, uten «?», svares fra lageret og lagres. Alt annet går til nettet som om service workeren ikke var der.
  if (url.search || !KNOWN.has(url.pathname)) return;
  event.respondWith(cachedOrFetched(req, req));
});
