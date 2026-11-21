/* Kube – service worker, versjon d02b8af2004c */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'd02b8af2004c';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-CDqqxnQ-.js","/kube/assets/actions-BHJvWMbB.js","/kube/assets/bandRoom-BU0J7z3E.js","/kube/assets/bests-CDn2GqLw.js","/kube/assets/board-gaE7R1aT.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/DuelLayers-D3O0XSPm.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-Dfv2lL9R.js","/kube/assets/earthDownload-T5Oc1pd3.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/FailedBody-oGKZEJgP.js","/kube/assets/Farewell-6pEVuOIQ.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-Chm5iCAR.js","/kube/assets/follow-BXvhbBc6.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BSJIcF81.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-D17azcNt.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DKHr2Jg1.js","/kube/assets/helpShowsEdit-2MDQL5CF.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-7xOinsb6.css","/kube/assets/index-D61n1_nS.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-D1lPaw5I.js","/kube/assets/keyHints-BuJw964z.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-DSWa-eD7.js","/kube/assets/listName-DK7vazSK.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-DQ6kVM0N.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/MovePad-DvS6PAhL.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-Cy0JAZnv.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-YTEQJ6GQ.js","/kube/assets/pending-DP2mueb-.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-O5xZttGm.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-QRSOawZC.js","/kube/assets/rankedFlow-TH6gQX7A.js","/kube/assets/RankedScreen-Fn11NgSS.js","/kube/assets/rankedSession-as7Kj8SP.js","/kube/assets/rankedTwo-DQdvXKvA.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-CizNv_zn.js","/kube/assets/Recipe-W-PtH4-A.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-Cg7z7Gkg.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-De7-68fo.js","/kube/assets/roundMachine-D7XVuGzS.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-C3krBLm0.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/roundView-DeL-lXYi.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/Say-JzGIMvdS.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-C_7mdQ_p.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-DpEYiv4g.js","/kube/assets/scene-gXF6WTL3.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-CFQBLs0M.js","/kube/assets/ScrambleSheet-D6lFStuo.js","/kube/assets/ScramblesSheet-DxtfL5O8.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-Coh6-fUE.js","/kube/assets/ScrambleView-oERyyd_t.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-o5Jaz4dC.js","/kube/assets/shareCard-ju4z_9wJ.js","/kube/assets/ShareSheet-DPtQD46A.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-DKKUU4kt.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-CoS1pWEL.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-3u1eSzG5.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-C9B1n56A.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/SolveSheet-BW90nSXp.js","/kube/assets/store-P1eTZml1.js","/kube/assets/t-BOXxhYjf.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-Bsy2SW44.js","/kube/assets/text-DAGJ-mUy.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-Klk2ufYy.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-DOra7iTH.js","/kube/assets/wipeFlow-yF6B6ZyM.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/World-Cq00pJL6.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/WorldLeagues-BMAEjHE0.js","/kube/assets/WorldLeagues-DUjKkRGt.css","/kube/assets/WorldLink-BkHJILR1.js","/kube/assets/worldModel-BNSJ9eb7.js","/kube/assets/worldNav-wTm4tTag.js","/kube/assets/WorldWatch-DswWu3Jt.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-D61n1_nS.js";
// Alle filene i bygget (uten steder/, som har sitt eget lager), som stier i adressen. Bare disse svarer service workeren på fra lageret, og bare disse lagres.
const KNOWN = new Set(["/kube/assets/AboutSheet-CDqqxnQ-.js","/kube/assets/DuelLayers-D3O0XSPm.js","/kube/assets/FailedBody-oGKZEJgP.js","/kube/assets/Farewell-6pEVuOIQ.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/FeedbackSheet-Chm5iCAR.js","/kube/assets/GpsScreen-D17azcNt.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-DKHr2Jg1.js","/kube/assets/JoinScreen-D1lPaw5I.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/MovePad-DvS6PAhL.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/MyReplay-Cy0JAZnv.js","/kube/assets/PlayHelpRow-O5xZttGm.js","/kube/assets/RankedScreen-Fn11NgSS.js","/kube/assets/Recipe-W-PtH4-A.js","/kube/assets/RoundScreen-C3krBLm0.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/Say-JzGIMvdS.js","/kube/assets/ScanExperience-C_7mdQ_p.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScanScreen-DpEYiv4g.js","/kube/assets/ScrambleSheet-D6lFStuo.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-Coh6-fUE.js","/kube/assets/ScrambleView-oERyyd_t.js","/kube/assets/ScramblesSheet-DxtfL5O8.js","/kube/assets/SettingsSheet-o5Jaz4dC.js","/kube/assets/ShareSheet-DPtQD46A.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/Sheets-DKKUU4kt.js","/kube/assets/SkyRecords-CoS1pWEL.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/SmartCubeMount-3u1eSzG5.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-C9B1n56A.js","/kube/assets/SolveSheet-BW90nSXp.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-DOra7iTH.js","/kube/assets/World-Cq00pJL6.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/WorldLeagues-BMAEjHE0.js","/kube/assets/WorldLeagues-DUjKkRGt.css","/kube/assets/WorldLink-BkHJILR1.js","/kube/assets/WorldWatch-DswWu3Jt.js","/kube/assets/actions-BHJvWMbB.js","/kube/assets/bandRoom-BU0J7z3E.js","/kube/assets/bests-CDn2GqLw.js","/kube/assets/board-gaE7R1aT.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-CsSLyXAm.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-Dfv2lL9R.js","/kube/assets/earthDownload-T5Oc1pd3.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/features-D4dUVg3H.js","/kube/assets/follow-BXvhbBc6.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BSJIcF81.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/helpShowsEdit-2MDQL5CF.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-7xOinsb6.css","/kube/assets/index-D61n1_nS.js","/kube/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff","/kube/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2","/kube/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff","/kube/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff","/kube/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff","/kube/assets/keyHints-BuJw964z.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-DSWa-eD7.js","/kube/assets/listName-DK7vazSK.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-DQ6kVM0N.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-YTEQJ6GQ.js","/kube/assets/pending-DP2mueb-.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-QRSOawZC.js","/kube/assets/rankedFlow-TH6gQX7A.js","/kube/assets/rankedSession-as7Kj8SP.js","/kube/assets/rankedTwo-DQdvXKvA.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-CizNv_zn.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-B86GcxDZ.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-BZmcACTS.js","/kube/assets/replays-Cg7z7Gkg.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-De7-68fo.js","/kube/assets/roundMachine-D7XVuGzS.js","/kube/assets/roundView-DeL-lXYi.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-DpM_-6rs.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/scene-gXF6WTL3.js","/kube/assets/schibsted-grotesk-latin-500-normal-Ba39e-CX.woff","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-BieE9YjJ.woff","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-Dz-okVa0.woff","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-Dl5-MP1T.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-BjmYCtCC.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-DQsnXf5q.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-DDW2aNyx.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-DS3YHxa9.woff","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-CFQBLs0M.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/shareCard-ju4z_9wJ.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-B6QYzhzh.js","/kube/assets/store-P1eTZml1.js","/kube/assets/t-BOXxhYjf.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-Bsy2SW44.js","/kube/assets/text-DAGJ-mUy.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-Klk2ufYy.js","/kube/assets/viewControl-CZjtZnyC.js","/kube/assets/wipeFlow-yF6B6ZyM.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/worldModel-BNSJ9eb7.js","/kube/assets/worldNav-wTm4tTag.js","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/icons/favicon-64.png","/kube/icons/icon-1024.png","/kube/icons/icon-192.png","/kube/icons/icon-512.png","/kube/icons/maskable-192.png","/kube/icons/maskable-512.png","/kube/icons/monochrome-432.png","/kube/index.html","/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/manifest.webmanifest","/kube/privacy.html","/kube/screenshots/bred.jpg","/kube/screenshots/telefon.jpg","/kube/splash/splash-1125x2436.png","/kube/splash/splash-1170x2532.png","/kube/splash/splash-1179x2556.png","/kube/splash/splash-1206x2622.png","/kube/splash/splash-1284x2778.png","/kube/splash/splash-1290x2796.png","/kube/splash/splash-1320x2868.png","/kube/splash/splash-750x1334.png","/kube/splash/splash-828x1792.png"]);
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
