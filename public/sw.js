// Версия кэша
const CACHE_VERSION = "v1"

// Имя кэша
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`

// Ресурсы для предварительного кэширования
const PRECACHE_RESOURCES = [
  "/",
  "/en",
  "/blog",
  "/en/blog",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/offline.html",
  // Добавьте другие важные ресурсы
]

// Установка сервис-воркера
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_RESOURCES)
      })
      .then(() => {
        return self.skipWaiting()
      }),
  )
})

// Активация сервис-воркера
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith("portfolio-cache-") && cacheName !== CACHE_NAME
            })
            .map((cacheName) => {
              return caches.delete(cacheName)
            }),
        )
      })
      .then(() => {
        return self.clients.claim()
      }),
  )
})

// Стратегия кэширования: сначала сеть, затем кэш
self.addEventListener("fetch", (event) => {
  // Пропускаем запросы к API
  if (event.request.url.includes("/api/")) {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Если запрос успешен, клонируем ответ и кэшируем его
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // Если запрос не удался, пытаемся получить ответ из кэша
        return caches.match(event.request).then((cachedResponse) => {
          // Если ответ найден в кэше, возвращаем его
          if (cachedResponse) {
            return cachedResponse
          }

          // Если это запрос на страницу и ответа нет в кэше, возвращаем страницу оффлайн
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html")
          }

          // Для других ресурсов возвращаем пустой ответ
          return new Response("", {
            status: 408,
            headers: { "Content-Type": "text/plain" },
          })
        })
      }),
  )
})

// Обработка push-уведомлений
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json()

    const options = {
      body: data.body,
      icon: "/icons/icon-192x192.png",
      badge: "/icons/badge-72x72.png",
      vibrate: [100, 50, 100],
      data: {
        url: data.url || "/",
      },
    }

    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

// Обработка клика по уведомлению
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      // Если есть открытое окно, фокусируемся на нем
      for (const client of clientList) {
        if (client.url === event.notification.data.url && "focus" in client) {
          return client.focus()
        }
      }
      // Если нет открытого окна, открываем новое
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url)
      }
    }),
  )
})

