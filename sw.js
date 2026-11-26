/* Kube – service worker, versjon 70f1c1de2645 */
const BASE = "/kube/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '70f1c1de2645';
const FILES = ["/kube/index.html","/kube/manifest.webmanifest","/kube/icons/icon-192.png","/kube/icons/maskable-192.png","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/assets/AboutSheet-D43Pr1sP.js","/kube/assets/actions-H-oRjzRD.js","/kube/assets/bandRoom-sfStwtyu.js","/kube/assets/bests-CQ3LoFEb.js","/kube/assets/board-CdDmGqo0.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-DwJsU_9h.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/DuelLayers-BBcQhKKz.js","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-D4w5I1ob.js","/kube/assets/earthDownload-DHpzNJBF.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/FailedBody-DZYUsofp.js","/kube/assets/Farewell-BVYlpS54.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/features-D4dUVg3H.js","/kube/assets/FeedbackSheet-RJXqGQWY.js","/kube/assets/follow-Cn7-FPr-.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BSJIcF81.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/GpsScreen-B1EpBAlR.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-C79FrTC2.js","/kube/assets/helpShowsEdit-C38G2WhA.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-7xOinsb6.css","/kube/assets/index-Br2latd4.js","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/JoinScreen-Bxr2uA9g.js","/kube/assets/keyHints-BuJw964z.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-B-oS-Voq.js","/kube/assets/listName-BkGK8PoX.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-DQ6kVM0N.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/MovePad-CHI6hgLD.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/MyReplay-1JE05Bk-.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-C2qdmNKd.js","/kube/assets/pending-BbhR3Fu3.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/PlayHelpRow-CmOt8D2K.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-CLuKPLLq.js","/kube/assets/rankedFlow-CN3x18c3.js","/kube/assets/RankedScreen-D1Se3bFt.js","/kube/assets/rankedSession-2YR2ZlSp.js","/kube/assets/rankedTwo-DRbeVVnC.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-Dfx2XQmM.js","/kube/assets/Recipe-Hkr7epks.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-ChvWIbxr.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-P6fIxFcG.js","/kube/assets/replays-C_iWqUlb.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-CDR2Obe-.js","/kube/assets/roundMachine-Db4Vyoqx.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/RoundScreen-D58vVWTO.js","/kube/assets/roundView-CvNgsXYq.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-D1EqYLSe.js","/kube/assets/Say-DUvTJENj.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/ScanExperience-1pFnoMvm.js","/kube/assets/ScanScreen-BLWjhHVA.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/scene-C_69brlq.js","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-CFQBLs0M.js","/kube/assets/ScrambleSheet-Ct9Al9OH.js","/kube/assets/ScramblesSheet-CzNLZ_f0.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-CUuIYX5q.js","/kube/assets/ScrambleView-BPZAXjky.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/SettingsSheet-6Gm1Clfe.js","/kube/assets/shareCard-qWYjH6Sk.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-FHASitfN.js","/kube/assets/Sheets-CX3e-n9M.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/SkyRecords-B5HWC6MM.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/slices-DZrzc4lX.js","/kube/assets/SmartCubeMount-BRGTLi1s.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-DXw05nhh.js","/kube/assets/snapshot-CpGmS3rV.js","/kube/assets/SolveSheet-B5xiYbUo.js","/kube/assets/store-CnxVcoQy.js","/kube/assets/t-BOXxhYjf.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-BCK7wiZu.js","/kube/assets/text-CpIhrAjt.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-Bd7sf7zy.js","/kube/assets/viewControl-CrD2HODT.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-CXw9lmJI.js","/kube/assets/wipeFlow-D61XOUTL.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/World-DYkj5qZF.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/WorldLeagues-BM8OvvEc.js","/kube/assets/WorldLeagues-DUjKkRGt.css","/kube/assets/WorldLink-4u_ouod4.js","/kube/assets/worldModel-Bqj-UliE.js","/kube/assets/worldNav-BnYOf2qu.js","/kube/assets/WorldWatch-CAuDIEIN.js","/kube/icons/monochrome-432.png","/kube/leaderboard-rules.html","/kube/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/privacy.html"];
const ENTRY = "/kube/assets/index-Br2latd4.js";
// Alle filene i bygget (uten steder/, som har sitt eget lager), som stier i adressen. Bare disse svarer service workeren på fra lageret, og bare disse lagres.
const KNOWN = new Set(["/kube/assets/AboutSheet-D43Pr1sP.js","/kube/assets/DuelLayers-BBcQhKKz.js","/kube/assets/FailedBody-DZYUsofp.js","/kube/assets/Farewell-BVYlpS54.js","/kube/assets/Farewell-WX7zmaYM.css","/kube/assets/FeedbackSheet-RJXqGQWY.js","/kube/assets/GpsScreen-B1EpBAlR.js","/kube/assets/GpsScreen-DtP78DDB.css","/kube/assets/GuideCheck-C79FrTC2.js","/kube/assets/JoinScreen-Bxr2uA9g.js","/kube/assets/KTX2Loader-DPFYyMVZ.js","/kube/assets/MovePad-CHI6hgLD.js","/kube/assets/MovePad-q7KtqyIy.css","/kube/assets/MoveSigns-BSx5_hy0.js","/kube/assets/MyReplay-1JE05Bk-.js","/kube/assets/PlayHelpRow-CmOt8D2K.js","/kube/assets/RankedScreen-D1Se3bFt.js","/kube/assets/Recipe-Hkr7epks.js","/kube/assets/RoundScreen-COT7dNDO.css","/kube/assets/RoundScreen-D58vVWTO.js","/kube/assets/Say-DUvTJENj.js","/kube/assets/ScanExperience-1pFnoMvm.js","/kube/assets/ScanScreen-BLWjhHVA.js","/kube/assets/ScanScreen-C1U1Mi44.css","/kube/assets/ScrambleSheet-Ct9Al9OH.js","/kube/assets/ScrambleSteps-6jyJVimS.css","/kube/assets/ScrambleSteps-CUuIYX5q.js","/kube/assets/ScrambleView-BPZAXjky.js","/kube/assets/ScramblesSheet-CzNLZ_f0.js","/kube/assets/SettingsSheet-6Gm1Clfe.js","/kube/assets/ShareSheet-D_a5F9BZ.css","/kube/assets/ShareSheet-FHASitfN.js","/kube/assets/Sheets-CX3e-n9M.js","/kube/assets/SkyRecords-B5HWC6MM.js","/kube/assets/SkyRecords-D5oIFJcV.css","/kube/assets/SmartCubeMount-BRGTLi1s.js","/kube/assets/SmartCubeMount-DNSu9C-J.css","/kube/assets/SmartOffer-Bg5MZJkP.css","/kube/assets/SmartOffer-DXw05nhh.js","/kube/assets/SolveSheet-B5xiYbUo.js","/kube/assets/WatchLayer-Bc55KKRV.css","/kube/assets/WatchLayer-CXw9lmJI.js","/kube/assets/World-DYkj5qZF.js","/kube/assets/World-bC8pdtJ2.css","/kube/assets/WorldLeagues-BM8OvvEc.js","/kube/assets/WorldLeagues-DUjKkRGt.css","/kube/assets/WorldLink-4u_ouod4.js","/kube/assets/WorldWatch-CAuDIEIN.js","/kube/assets/actions-H-oRjzRD.js","/kube/assets/bandRoom-sfStwtyu.js","/kube/assets/bests-CQ3LoFEb.js","/kube/assets/board-CdDmGqo0.js","/kube/assets/cheat-D9yFaCLB.css","/kube/assets/clouds-C5OtG5hg.webp","/kube/assets/cockpit-29RA0TnQ.css","/kube/assets/cockpit-CL7bvT2m.js","/kube/assets/contract-DwJsU_9h.js","/kube/assets/controls-DvcWXluN.js","/kube/assets/core-6Fox2abY.js","/kube/assets/cube-iSAOp81T.js","/kube/assets/debug-e29s2OK3.js","/kube/assets/download-CmO0QBqH.js","/kube/assets/duel-CuuhWITX.css","/kube/assets/earth-CvNxVQs_.webp","/kube/assets/earth-D4w5I1ob.js","/kube/assets/earthDownload-DHpzNJBF.js","/kube/assets/earthLevels-CSK8qppi.js","/kube/assets/earthTextures-kqJKB-ct.js","/kube/assets/environment-KxcmyIln.js","/kube/assets/facelets-CtRHj3-H.js","/kube/assets/features-D4dUVg3H.js","/kube/assets/follow-Cn7-FPr-.js","/kube/assets/forest-Bxo4kRV7.js","/kube/assets/format-BSJIcF81.js","/kube/assets/gps-B7bcf14N.css","/kube/assets/helpShowsEdit-C38G2WhA.js","/kube/assets/identity-C-wlmO54.js","/kube/assets/index-7xOinsb6.css","/kube/assets/index-Br2latd4.js","/kube/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff","/kube/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2","/kube/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff","/kube/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2","/kube/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff","/kube/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff","/kube/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff","/kube/assets/keyHints-BuJw964z.js","/kube/assets/keys-BMdKzqYR.js","/kube/assets/lang-DyXZ4AgC.js","/kube/assets/leave-B-oS-Voq.js","/kube/assets/listName-BkGK8PoX.js","/kube/assets/marks-DhD57rME.js","/kube/assets/messages.nb-DQ6kVM0N.js","/kube/assets/migrations-GyIKsqe5.js","/kube/assets/moveText-BJI-1Pr_.js","/kube/assets/name-DwzOVzEQ.js","/kube/assets/notation-CaTfMHiJ.js","/kube/assets/ocean-CCs_4tww.js","/kube/assets/orientation-Be_D1Qwf.js","/kube/assets/paint-C2qdmNKd.js","/kube/assets/pending-BbhR3Fu3.js","/kube/assets/place-G67ufcJp.js","/kube/assets/placeCache-DdwAkLT9.js","/kube/assets/plan-CNiqgNfB.js","/kube/assets/playPlan-ChyJ3EY5.js","/kube/assets/prefs-DjBNJ4rd.js","/kube/assets/preload-helper-Ckw8o9UC.js","/kube/assets/ranked-B9k0c_cG.css","/kube/assets/ranked-CLuKPLLq.js","/kube/assets/rankedFlow-CN3x18c3.js","/kube/assets/rankedSession-2YR2ZlSp.js","/kube/assets/rankedTwo-DRbeVVnC.js","/kube/assets/react-CFYXFdqO.js","/kube/assets/realStart-Dfx2XQmM.js","/kube/assets/recognize-Deq9g4ol.js","/kube/assets/replay-ChvWIbxr.js","/kube/assets/replayDb-C6U2CxT7.js","/kube/assets/replayLog-P6fIxFcG.js","/kube/assets/replays-C_iWqUlb.js","/kube/assets/rolldown-runtime-XKyaHtl9.js","/kube/assets/roundFlow-CDR2Obe-.js","/kube/assets/roundMachine-Db4Vyoqx.js","/kube/assets/roundView-CvNgsXYq.js","/kube/assets/rounds-Bk2NBpDt.js","/kube/assets/rules-DJUn4HCk.js","/kube/assets/rules2-D1EqYLSe.js","/kube/assets/scan-BiJO6iHN.js","/kube/assets/scene-C_69brlq.js","/kube/assets/schibsted-grotesk-latin-500-normal-Ba39e-CX.woff","/kube/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube/assets/schibsted-grotesk-latin-600-normal-BieE9YjJ.woff","/kube/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube/assets/schibsted-grotesk-latin-700-normal-Dz-okVa0.woff","/kube/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube/assets/schibsted-grotesk-latin-800-normal-Dl5-MP1T.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-BjmYCtCC.woff","/kube/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube/assets/schibsted-grotesk-latin-ext-600-normal-DQsnXf5q.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-DDW2aNyx.woff","/kube/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube/assets/schibsted-grotesk-latin-ext-800-normal-DS3YHxa9.woff","/kube/assets/scrambler-DdsVWhfW.js","/kube/assets/scrambler.worker-BdiG_Bnn.js","/kube/assets/scrambles-CFQBLs0M.js","/kube/assets/sea-CiXG2hjt.webp","/kube/assets/shareCard-qWYjH6Sk.js","/kube/assets/shell-CJWZtMIw.js","/kube/assets/sky-rhsY4L5v.js","/kube/assets/slices-DZrzc4lX.js","/kube/assets/snapshot-CpGmS3rV.js","/kube/assets/store-CnxVcoQy.js","/kube/assets/t-BOXxhYjf.js","/kube/assets/terrain.worker-CqBzxqHc.js","/kube/assets/terrainCache-us76TUyH.js","/kube/assets/text-BCK7wiZu.js","/kube/assets/text-CpIhrAjt.js","/kube/assets/three-DTSqHtj7.js","/kube/assets/tokens-CVRN3UQW.js","/kube/assets/version-Bd7sf7zy.js","/kube/assets/viewControl-CrD2HODT.js","/kube/assets/wipeFlow-D61XOUTL.js","/kube/assets/wiping-C43ZGAKh.js","/kube/assets/worldHint-_vQIgNxi.js","/kube/assets/worldModel-Bqj-UliE.js","/kube/assets/worldNav-BnYOf2qu.js","/kube/icons/apple-touch-icon.png","/kube/icons/favicon-32.png","/kube/icons/favicon-64.png","/kube/icons/icon-1024.png","/kube/icons/icon-192.png","/kube/icons/icon-512.png","/kube/icons/maskable-192.png","/kube/icons/maskable-512.png","/kube/icons/monochrome-432.png","/kube/index.html","/kube/leaderboard-rules.html","/kube/lisenser.txt","/kube/manifest.webmanifest","/kube/privacy.html","/kube/screenshots/bred.jpg","/kube/screenshots/telefon.jpg","/kube/splash/splash-1125x2436.png","/kube/splash/splash-1170x2532.png","/kube/splash/splash-1179x2556.png","/kube/splash/splash-1206x2622.png","/kube/splash/splash-1284x2778.png","/kube/splash/splash-1290x2796.png","/kube/splash/splash-1320x2868.png","/kube/splash/splash-750x1334.png","/kube/splash/splash-828x1792.png"]);
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

// Så lenge den nye versjonen venter før den ser om siden som ba den ta over, fortsatt finnes (ms). Nettleseren tar selv over når siden er lukket: 23-96 ms i 150 runder på en rask PC (25.11.2026, Chromium 151).
// Ventingen må være lengre enn det, og en treg telefon er ikke målt, så 500 (Wing 25.11.2026). 150, 250 og 500 ms ga alle 0 blanke sider av 50, mot 28 av 50 uten ventingen.
const SKIP_WAIT_MS = 500;

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    const from = event.source && event.source.id;
    // Kan ikke nettleseren si om siden finnes (clients.get mangler, avvises eller svarer ikke), tar den nye versjonen over som før: «Update» skal aldri bli død.
    if (typeof self.clients.get !== 'function') return void self.skipWaiting();
    event.waitUntil(
      new Promise((resolve) => setTimeout(resolve, SKIP_WAIT_MS))
        .then(() => !from || Promise.race([self.clients.get(from), new Promise((resolve) => setTimeout(resolve, 1000, true))]))
        .catch(() => true)
        .then((alive) => void (alive && self.skipWaiting())),
    );
  }
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
