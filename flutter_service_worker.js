'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "df81a906875c5d9ddad95ad11268b885",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "755664f6b1e7b27df688fdc362dc9b3a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8be1919f69e820a40e52873dab86a1b2",
".git/logs/refs/heads/main": "50dfd96fa2cbf6ee5bc83785e9fe1c6a",
".git/logs/refs/remotes/origin/main": "c0753c38258a4769b65d0d8b747782f8",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/04/4ca850b8dec48efe4076178be1b698b2cc4758": "e978222b648bcbe2ce9a61d45e0b1fde",
".git/objects/08/1f9906fd5ee6405eafe3dba163167e4388dba7": "a836fff6af2330529cbf381755a3919c",
".git/objects/08/2ee85228684a06a2cd2ae04ba1942095f86640": "ab79bac3f188a8a8267f971bef4b87ed",
".git/objects/08/601db98ae89024d0d92679694479085edb4474": "aafe9e6d885da729f4ffeced153cd588",
".git/objects/08/fd45471b659599ed05f65e2ac74bbb44c06be7": "f651230fec585b389b2dcf7c78a52038",
".git/objects/0a/71d552b672ae5d0abd7a9b28fd9b6162dfb320": "e8d6519183890037e502b4346d78a412",
".git/objects/0a/f9c7dbeae86cc50258849edb8a49ccef5a39b1": "327360de2eb428f44b2a13de55fb0ed4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/7a50d3cde50bbae134907ecb9f95225f56d785": "060f8631c428eed0c83673603a0641e3",
".git/objects/15/5b6e6f5d905714560c494e58ef8246f8a1c676": "04ae23a6b8f9935ecfea218536b95b05",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/e2d77cc46cdc5dd0af5f75dafc0fff6c3a6439": "86f98376b75505d1f9ff2223ad750b73",
".git/objects/27/752c4be787ebb069f3d2843d6596a7d6543380": "5fab5774a1a5e2e8d9213651028159a7",
".git/objects/2c/6d777ee46c1c72c289b7db54ec6b79962a5f3f": "437e51f9ff1fca9e1b390522dd551f30",
".git/objects/3a/7babf76127e3b535cad331a94d90730f708b29": "ae6f29e710fc36d6784c678458fb4afc",
".git/objects/3d/04de1cc5ed4bc44e1e504203b0f6fdc8d197bb": "5834486ae8454bc8696750a62ae0d3d2",
".git/objects/3e/26d7be63d961b6eb9b44c558ee3c856971ccd0": "dbdb20565910b0e28f78ae558b28499b",
".git/objects/48/217617005575345943d8460b76c03381fed224": "6eb02af7684e2da217c7c7aea938335e",
".git/objects/4b/aa8705a32bfc2e9b252ebef1374d6f44231800": "2d3fb58555bc9a807989d1fc6bb4b51d",
".git/objects/50/07f6b06dd3cba258471a823799bf605dc058e5": "62af5df3e04b2667618351a2c568b3f5",
".git/objects/50/5f9681e95e0d6e38119b8c6a749258838c2872": "f25143b7a047faeaa65561b071ad01d0",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/012fdfe5a58a39169888aea4878c5b195558c3": "70f39097f7fcf0be22c8b4c046b0e51d",
".git/objects/5e/30a382ce9f874bc520d7068bb1c6a0960ea2c7": "b1b6e3c222f76db6e93ec9a60534a358",
".git/objects/62/b6d5c963ec19eb6dd34db5f59aace1c3d19888": "520beb69a3740c62729a41213e6a9aaf",
".git/objects/78/a020dd28d8784d532ec0be05a65c31a9c2b9eb": "815c2e800a62ac4bd8ce14a5049013f8",
".git/objects/79/f77d706091b78b373f2580e5c6b2aa593a78e3": "75ab8ef783d452cafbe258b9c8adacbd",
".git/objects/7d/ae93c7057e8bacf00a812f8a4890f58ef3fc52": "3783503068edb29fb47ee5f5c8f072e8",
".git/objects/7e/eee5a83cde88aea93bb3baa4d2747e7ac46a5d": "8398c191ab39e371f807f24b072a07b4",
".git/objects/80/62c6a5b26e847f513ed4847a2ff890b5304f0a": "4d3d79a85dc8b2e1617f37ad6fdd654a",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/32d8878dec162e57c8ef076573c5fa56042823": "c83727c7952e1f0e60bf254f9271d666",
".git/objects/8e/807acaf9799dbf75c28650dd890bbf9f2d9648": "fa8adbd17d181f655666ca1c1d78136c",
".git/objects/92/1b24cf624063070f86cfa0f75c1f838d086860": "3f343dfdbf16db5fb16e71afbc7bcebc",
".git/objects/93/95e722ba504895deac5e76405c4b8241f8201d": "8452752688bd10183c78cf11ffb2015c",
".git/objects/9b/3525850957e23ccc7c789091da6710983aa504": "9ba21c2e7ac2addbd72b0f9f463e5a07",
".git/objects/a1/6d26338d777f2ca94778915ec027de9236dbbe": "559593bf9413ccf9412aa8f0b6f3ac4b",
".git/objects/a1/e06d94f6bd76a20e91afd7055b5bbfdb4e44f5": "da15ca5015a293f53ace1d7f8ecf9f89",
".git/objects/a2/dc1cd0dcf530709dc359e17cd3de2db80bb733": "50ec089104449dc7d7004eed96a9d56e",
".git/objects/a6/0c41fa541e01314207653f49961ed66aab5788": "f138eb7b4322d5b8c17809fa8c68c063",
".git/objects/aa/314feea6229ce6d1d32571b78a72814f1aad36": "5a7bf05ab851a3f75a42c8f9f9c34e50",
".git/objects/ad/ca2903bf848674fa743d941ae062e5b73075f8": "c265e4045238f29ac6fd1b17d6e833ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/adc259f45f94df61beb4d870057ff838ddeb5b": "5cb07529f07ed3ce312090383a0f9525",
".git/objects/c6/20ddaf96f50b4196d433f081b32d119f274f29": "7b99ed418eabbb35dddbe990ab3a3f8d",
".git/objects/c8/13077eb5d37d72f91d726b1afe34562b08da28": "1548590417baa8f8e5f4966bcba21cd1",
".git/objects/ce/33dbabac3dc50e147d8c6fd750520da33ae7e4": "b371bc64cb7153291e7a8286766f7bd3",
".git/objects/d1/a1ba70d18e405a69db21f6e32c153c52e6eead": "d454409f38b1230107c8b6c2595da8bf",
".git/objects/df/f67f115a245d5d9fe3ade74f86c23e07a16bde": "eca0c870552f1cf2e3825be34b603a70",
".git/objects/e1/b75b7a4780d825b6f7647edd6d0eaecfa11193": "6747b9f9e945560799367d07069acc42",
".git/objects/ed/518ab0d9620d356518c4b45b48308adf0e4aa5": "5cfcb173a790871f6978806a215eb35a",
".git/objects/ef/ab0c4bc5ec30dd82ca39f9d35f20baf0b28fb8": "8c9306501d777ad9d5398aba0ff90420",
".git/objects/f4/6405b914ddb49df9dcc03d41a42a6e714a5dcc": "68adbab15bdcee82b0c0a789f4f3a086",
".git/objects/f5/94c57c51d3c18fad230acf3fbfa15d1ad12ec7": "54a197e6be92b67143a92286660f5fce",
".git/refs/heads/main": "c66f70f61e13f9efeedc1e33c20f3944",
".git/refs/remotes/origin/main": "c66f70f61e13f9efeedc1e33c20f3944",
"assets/AssetManifest.json": "17f201b309b131a12817344e1d9d4afd",
"assets/assets/antibacterial-gel.png": "e114cc1f60b62283ae87940c7bffc66e",
"assets/assets/cough.png": "69285175489d466ede00aa7df801ffdd",
"assets/assets/distance.png": "ae5be8f3483094a22f3a9f1544e4d36b",
"assets/assets/face-protection.png": "d442351fea14db99829e876ccc261729",
"assets/assets/fever.png": "291d0bef5f5fb050999c306d0098d3f1",
"assets/assets/GOI.png": "d2dc10a3fb5e88e97fe28883aea70897",
"assets/assets/Google.png": "2b68eba78d5d61a4153e52da41cf9b79",
"assets/assets/headache.png": "7c0c2c693b6b78ba5fd5bb59de6ea10f",
"assets/assets/MaskOn.png": "5cbe2311c3009c506a8d2d96fd7f3ac5",
"assets/assets/who-logo.png": "2da10185b2bec4d876fb58d8a77e94fc",
"assets/FontManifest.json": "e3637cec141ff037b4151edf1c0411cb",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "86e9999c8fa221cf9c0a13bce400be7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f725908e5c340b44584db9d6defc6191",
"/": "f725908e5c340b44584db9d6defc6191",
"main.dart.js": "beed7250294c39bba863dfcc70a48727",
"manifest.json": "5df4a4d9c20cc334b7b291f34c0ddc40",
"README.md": "6f15390ba88e5ad97612fd5181b12116",
"version.json": "1fb399f8405b19769f6e7d736dc3a7d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
