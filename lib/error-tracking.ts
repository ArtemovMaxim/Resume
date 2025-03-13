type ErrorInfo = {
  message: string
  stack?: string
  componentStack?: string
  url: string
  timestamp: string
  userAgent: string
  [key: string]: any
}

// Отправка ошибки на сервер
export function reportError(error: Error, componentStack?: string, additionalInfo?: Record<string, any>) {
  if (typeof window !== "undefined") {
    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ...additionalInfo,
    }

    // Отправка ошибки на сервер
    fetch("/api/error", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(errorInfo),
      // Используем keepalive для надежной отправки данных при выгрузке страницы
      keepalive: true,
    }).catch((err) => {
      console.error("Failed to report error:", err)
    })

    // Отправка ошибки в Google Analytics
    if ((window as any).gtag) {
      ;(window as any).gtag("event", "exception", {
        description: error.message,
        fatal: true,
      })
    }
  }
}

// Глобальный обработчик необработанных ошибок
export function initErrorTracking() {
  if (typeof window !== "undefined") {
    // Обработка необработанных ошибок
    window.addEventListener("error", (event) => {
      reportError(event.error || new Error(event.message), undefined, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        type: "unhandled_error",
      })
    })

    // Обработка необработанных отклонений промисов
    window.addEventListener("unhandledrejection", (event) => {
      const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason))

      reportError(error, undefined, {
        type: "unhandled_promise_rejection",
      })
    })
  }
}

