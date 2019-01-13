const CACHE_NAME = 'pwa-1.0.0';

self.addEventListener('install', (evt) => {
    console.log('[sw] install')
    evt.waitUntil(startCaching);
});

async function startCaching() {
    try {
        const cache = await caches.open(CACHE_NAME);
        await cache.add('/*');
        self.skipWaiting();

    } catch (error) {
        console.log(error)

    }
}

self.addEventListener('activate', (evt) => {
    evt.waitUntil(startActivating);
});

async function startActivating() {
    try {
        const keys = await caches.keys();
        const deleted = keys
            .filter(key !== CACHE_NAME)
            .map(key => caches.delete(key))
        return await Promise.all(deleted)
    } catch (error) {
        console.log(error);
    }
}

self.addEventListener('fetch', (evt) => {
    console.log('[SW] ', evt.request);

    cacheFallbackNetworkStrategy(evt);
});

async function cacheFallbackNetworkStrategy(evt) {
    const cache = await caches.open(CACHE_NAME);
    const resource = await cache.match(evt.request);
    if (resource) {
        return resource;
    }

    const response = await fetch(evt.request);

    await cache.put(reqeust, response.clone());

    return response;
}