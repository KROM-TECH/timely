const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v2';

const asset = [
  '/',
  '/index.html',
  '/event.html',
  '/task.html',
  '/js/event.js',
  '/js/materialize.min.js',
  '/js/task.js',
  '/js/timetable.js',
  '/css/custom.css',
  '/css/materialize.min.css',
  '/img/monday.png',
  '/img/tuesday.png',
  '/img/wednesday.png',
  '/img/thursday.png',
  '/img/friday.png',
  '/img/saturday.png',
  '/img/sunday.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',

];
// install service worker

self.addEventListener('install', (evt) => {
  // console.log('service worker has been installed' )

  // console.log(evt);
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      // console.log('caching stuff');
     return cache.addAll(asset)
    }).catch((err)=>{
      console.log(err)
    })
  );

})


// activate event

self.addEventListener('activate', (evt) => {
  // console.log('service worker has been activated')
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );

})


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            return fetchRes;
          
        });
          return response;
        });
      });
    })
  );
});