"use strict";var precacheConfig=[["/bus-routes/index.html","751eb42502ce6bd89cbcaf40bc52ddca"],["/bus-routes/static/css/main.d6f7150b.css","43e3141dd2f2072c0000bc363c1bfa5d"],["/bus-routes/static/js/main.93f94957.js","2c66f7273155c89c92a4c0dd18042bf2"],["/bus-routes/static/media/bus-eastbound.95d87315.svg","95d873159ad8e215493fa8d9ac5b3508"],["/bus-routes/static/media/bus-westbound.3ddfd048.svg","3ddfd048f2155baf29aaff628a51f0ff"],["/bus-routes/static/media/roboto-latin-100.01dbb814.woff2","01dbb814469dc501bd70cf9f13e0b880"],["/bus-routes/static/media/roboto-latin-100.02fbb4cf.woff","02fbb4cff7f148a54db366fa4adf086f"],["/bus-routes/static/media/roboto-latin-100italic.5bfe254d.woff2","5bfe254da04d4f1a2ed78e818a55a214"],["/bus-routes/static/media/roboto-latin-100italic.87528ba9.woff","87528ba9a6e829db88fd8d2b94b362b9"],["/bus-routes/static/media/roboto-latin-300.68b24b48.woff2","68b24b48f11ff8e947976b529c6f5941"],["/bus-routes/static/media/roboto-latin-300.dc2e2189.woff","dc2e21898247b807422ac32ba45f58c6"],["/bus-routes/static/media/roboto-latin-300italic.31b2bbfb.woff2","31b2bbfb6f231552f1d5c5879664ae03"],["/bus-routes/static/media/roboto-latin-300italic.4bcc85a5.woff","4bcc85a50fd0d42d5e416c56b39b8d71"],["/bus-routes/static/media/roboto-latin-400.a2647ffe.woff2","a2647ffe169bbbd94a3238020354c732"],["/bus-routes/static/media/roboto-latin-400.a9fc51fd.woff","a9fc51fd0214c75ee5953dda0f2a06a6"],["/bus-routes/static/media/roboto-latin-400italic.347bfb18.woff2","347bfb18c4e5fd1642089bd15bf3e628"],["/bus-routes/static/media/roboto-latin-400italic.bad78f93.woff","bad78f935b0182bd83ac29a45edcdb25"],["/bus-routes/static/media/roboto-latin-500.4b218fc7.woff2","4b218fc7ca179e548471ff37e3060081"],["/bus-routes/static/media/roboto-latin-500.ac8381d5.woff","ac8381d5023c0187e7a094726d204f6e"],["/bus-routes/static/media/roboto-latin-500italic.01ef9f5b.woff","01ef9f5b9fc166ecdf86e02e34b8fd64"],["/bus-routes/static/media/roboto-latin-500italic.cfd2fe08.woff2","cfd2fe08211aadeccac1de3fb5d45ad5"],["/bus-routes/static/media/roboto-latin-700.89b46943.woff","89b469433216121ca9d12c1aef1353d1"],["/bus-routes/static/media/roboto-latin-700.aa3e8711.woff2","aa3e87117db2b3c27801cbb8dfe40c6c"],["/bus-routes/static/media/roboto-latin-700italic.42b4247c.woff","42b4247cf22991d1c26d8f66eb8f38f8"],["/bus-routes/static/media/roboto-latin-700italic.5b2c1ede.woff2","5b2c1edeeb1ce5f7581a22a8cad42410"],["/bus-routes/static/media/roboto-latin-900.fa058128.woff2","fa058128ab6fcaa61257208d085b4d57"],["/bus-routes/static/media/roboto-latin-900.fceb24a6.woff","fceb24a67b9ab2b0074defd70c0c54d9"],["/bus-routes/static/media/roboto-latin-900italic.450b4cf2.woff2","450b4cf2cbd89c75135c0d9db9ade5a2"],["/bus-routes/static/media/roboto-latin-900italic.968fd8b5.woff","968fd8b51b2075525dc4780b2c7affb0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,o){var r=new URL(e);return o&&r.pathname.match(o)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],o=new URL(t,self.location),r=createCacheKey(o,hashParamName,a,/\.\w{8}\./);return[o.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var o=new Request(a,{credentials:"same-origin"});return fetch(o).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/bus-routes/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});