self.addEventListener('install', event => {
    console.log('SW: Instalado');

    const promiseCache = caches.open('cache-v1').then( cache => {
        return cache.addAll(
            [
                './',
                './js/operaciones.js',
                './pages/dividir.html',
                './pages/sumar.html',
                './pages/restar.html',
                './pages/multiplicar.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'
            ]
        )
    });


    event.waitUntil(promiseCache);

});


self.addEventListener('fetch', event => {
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
});