/* Kube – service worker, versjon 8c95283501dc */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '8c95283501dc';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-BX5Jl-ar.js","/kube/assets/actions-BFZ0N1ld.js","/kube/assets/bandRoom-63Uqqt6q.js","/kube/assets/bests-CeFihMUI.js","/kube/assets/board-B-AWeD0U.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/DuelLayers-GFFy0C1b.js","/kube/assets/earth-CdhDrIRr.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earthDownload-CxhNgyAa.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/Farewell-cha51At6.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-4weNCgpo.js","/kube/assets/follow-DBlko3NT.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BMxIaw4T.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-Dhwut30J.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DDAx3hHF.js","/kube/assets/helpShowsEdit-B-Suj1wA.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/index-ChkrjPa8.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-C3vyCwR6.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-YDJq_n9R.js","/kube/assets/listName-7GGtoBLq.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-CH8tsADM.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/MovePad-CI8FxJt8.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-cig4n6jm.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-Dy_f4jgR.js","/kube/assets/pending-Ca5tbXaD.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-BfwKFH3w.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-l9P9uB64.js","/kube/assets/rankedFlow-BgP-QfFr.js","/kube/assets/RankedScreen-BEdn0uwU.js","/kube/assets/rankedSession-D1PxtCWr.js","/kube/assets/rankedTwo-BaQfgwl9.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-L3aanBql.js","/kube/assets/Recipe-Di96xis4.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-CpoYE1Zd.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-Burj0Rlk.js","/kube/assets/roundMachine-Bg3wU9_O.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-C57RH2TV.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/roundView-XBvTifcm.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/Say-DVvAIC4k.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-BCtsbEfZ.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-D7PkIb0b.js","/kube/assets/scene-BJo2Tl6B.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-iUtASCCJ.js","/kube/assets/ScrambleSheet-zSBVwsx0.js","/kube/assets/ScramblesSheet-7x4jLUq4.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-CjbRt3yA.js","/kube/assets/ScrambleView-CEg_iMSd.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-CoXy-h1p.js","/kube/assets/shareCard-suMytdza.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-vqTR6vrk.js","/kube/assets/Sheets-ZRGagZa8.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/SkyRecords-DWZQ5sXh.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-CmcFEd03.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-DTSaiRyr.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-DJJJCc7_.js","/kube/assets/store-Bb3GdKcr.js","/kube/assets/t-D6hEHjqR.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-DAGJ-mUy.js","/kube/assets/text-Dy5u_jpN.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-CxUzato9.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-lgt0wDaK.js","/kube/assets/wipeFlow-BYVTQczX.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/World-Jy4BRHPj.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/WorldLeagues-CtYCLgMQ.js","/kube/assets/WorldLink-nu0UYrsH.js","/kube/assets/worldModel-DhKRp1d6.js","/kube/assets/worldNav-DBXBFe7F.js","/kube/assets/WorldWatch-EwLswKr7.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-ChkrjPa8.js";
// Alle filene i bygget (uten steder/, som har sitt eget lager), som stier i adressen. Bare disse svarer service workeren på fra lageret, og bare disse lagres.
const KNOWN = new Set(["/kube/assets/AboutSheet-BX5Jl-ar.js","/kube/assets/DuelLayers-GFFy0C1b.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/Farewell-cha51At6.js","/kube/assets/FeedbackSheet-4weNCgpo.js","/kube/assets/GpsScreen-Dhwut30J.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DDAx3hHF.js","/kube/assets/JoinScreen-C3vyCwR6.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/MovePad-CI8FxJt8.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/MyReplay-cig4n6jm.js","/kube/assets/PlayHelpRow-BfwKFH3w.js","/kube/assets/RankedScreen-BEdn0uwU.js","/kube/assets/Recipe-Di96xis4.js","/kube/assets/RoundScreen-C57RH2TV.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/Say-DVvAIC4k.js","/kube/assets/ScanExperience-BCtsbEfZ.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-D7PkIb0b.js","/kube/assets/ScrambleSheet-zSBVwsx0.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-CjbRt3yA.js","/kube/assets/ScrambleView-CEg_iMSd.js","/kube/assets/ScramblesSheet-7x4jLUq4.js","/kube/assets/SettingsSheet-CoXy-h1p.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-vqTR6vrk.js","/kube/assets/Sheets-ZRGagZa8.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/SkyRecords-DWZQ5sXh.js","/kube/assets/SmartCubeMount-CmcFEd03.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-DTSaiRyr.js","/kube/assets/SolveSheet-DJJJCc7_.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-lgt0wDaK.js","/kube/assets/World-Jy4BRHPj.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/WorldLeagues-CtYCLgMQ.js","/kube/assets/WorldLink-nu0UYrsH.js","/kube/assets/WorldWatch-EwLswKr7.js","/kube/assets/actions-BFZ0N1ld.js","/kube/assets/bandRoom-63Uqqt6q.js","/kube/assets/bests-CeFihMUI.js","/kube/assets/board-B-AWeD0U.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/earth-CdhDrIRr.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earthDownload-CxhNgyAa.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/features-D4dUVg3H.js","/kube/assets/follow-DBlko3NT.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BMxIaw4T.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/helpShowsEdit-B-Suj1wA.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-C8XQUHT4.css","/kube/assets/index-ChkrjPa8.js","/kube/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff","/kube/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2","/kube/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff","/kube/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff","/kube/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff","/kube/assets/keys-BMdKzqYR.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-YDJq_n9R.js","/kube/assets/listName-7GGtoBLq.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-CH8tsADM.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-Dy_f4jgR.js","/kube/assets/pending-Ca5tbXaD.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-l9P9uB64.js","/kube/assets/rankedFlow-BgP-QfFr.js","/kube/assets/rankedSession-D1PxtCWr.js","/kube/assets/rankedTwo-BaQfgwl9.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-L3aanBql.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-CpoYE1Zd.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-Burj0Rlk.js","/kube/assets/roundMachine-Bg3wU9_O.js","/kube/assets/roundView-XBvTifcm.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/scene-BJo2Tl6B.js","/kube/assets/schibsted-grotesk-latin-500-normal-Ba39e-CX.woff","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-BieE9YjJ.woff","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-Dz-okVa0.woff","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-Dl5-MP1T.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-BjmYCtCC.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-DQsnXf5q.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-DDW2aNyx.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-DS3YHxa9.woff","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-iUtASCCJ.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/shareCard-suMytdza.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/store-Bb3GdKcr.js","/kube/assets/t-D6hEHjqR.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-DAGJ-mUy.js","/kube/assets/text-Dy5u_jpN.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-CxUzato9.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/wipeFlow-BYVTQczX.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/worldModel-DhKRp1d6.js","/kube/assets/worldNav-DBXBFe7F.js","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/icons/favicon-64.png","/kube/icons/icon-1024.png","/kube/icons/icon-192.png","/kube/icons/icon-512.png","/kube/icons/maskable-192.png","/kube/icons/maskable-512.png","/kube/icons/monochrome-432.png","/kube/index.html","/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/manifest.webmanifest","/kube/privacy.html","/kube/screenshots/bred.jpg","/kube/screenshots/telefon.jpg","/kube/splash/splash-1125x2436.png","/kube/splash/splash-1170x2532.png","/kube/splash/splash-1179x2556.png","/kube/splash/splash-1206x2622.png","/kube/splash/splash-1284x2778.png","/kube/splash/splash-1290x2796.png","/kube/splash/splash-1320x2868.png","/kube/splash/splash-750x1334.png","/kube/splash/splash-828x1792.png"]);
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
