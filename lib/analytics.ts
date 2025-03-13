type EventOptions = {
  category?: string
  label?: string
  value?: number
  nonInteraction?: boolean
  [key: string]: any
}

// Отправка события в Google Analytics
export function sendGAEvent(action: string, options: EventOptions = {}) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    const { category = "General", label, value, nonInteraction = false, ...rest } = options
    ;(window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
      ...rest,
    })
  }
}

// Отправка события в Яндекс.Метрику
export function sendYMEvent(action: string, options: EventOptions = {}) {
  if (typeof window !== "undefined" && (window as any).ym) {
    const YANDEX_METRICA_ID = Number(process.env.NEXT_PUBLIC_YM_ID || "0")
    if (YANDEX_METRICA_ID) {
      const { category, label, value, ...rest } = options
      ;(window as any).ym(YANDEX_METRICA_ID, "reachGoal", action, {
        category,
        label,
        value,
        ...rest,
      })
    }
  }
}

// Отправка события в Facebook Pixel
export function sendFBEvent(action: string, options: EventOptions = {}) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    const { category, label, value, ...rest } = options
    ;(window as any).fbq("trackCustom", action, {
      category,
      label,
      value,
      ...rest,
    })
  }
}

// Отправка события во все системы аналитики
export function trackEvent(action: string, options: EventOptions = {}) {
  sendGAEvent(action, options)
  sendYMEvent(action, options)
  sendFBEvent(action, options)
}

// Отслеживание просмотра страницы
export function trackPageView(url: string) {
  if (typeof window !== "undefined") {
    // Google Analytics
    if ((window as any).gtag) {
      ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }

    // Яндекс.Метрика
    if ((window as any).ym) {
      const YANDEX_METRICA_ID = Number(process.env.NEXT_PUBLIC_YM_ID || "0")
      if (YANDEX_METRICA_ID) {
        ;(window as any).ym(YANDEX_METRICA_ID, "hit", url)
      }
    }

    // Facebook Pixel
    if ((window as any).fbq) {
      ;(window as any).fbq("track", "PageView")
    }
  }
}

// Отслеживание времени на странице
export function trackTimeOnPage() {
  if (typeof window !== "undefined") {
    const startTime = Date.now()

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      trackEvent("time_on_page", {
        category: "Engagement",
        value: timeSpent,
        page: window.location.pathname,
        nonInteraction: true,
      })
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }

  return () => {}
}

// Отслеживание прокрутки страницы
export function trackScroll() {
  if (typeof window !== "undefined") {
    let maxScrollPercentage = 0

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100)

        // Отправляем события при достижении определенных порогов
        const thresholds = [25, 50, 75, 90, 100]

        thresholds.forEach((threshold) => {
          if (scrollPercentage >= threshold && maxScrollPercentage < threshold) {
            trackEvent("scroll_depth", {
              category: "Engagement",
              label: `${threshold}%`,
              value: threshold,
              nonInteraction: true,
            })
          }
        })

        maxScrollPercentage = Math.max(maxScrollPercentage, scrollPercentage)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }

  return () => {}
}

// Отслеживание кликов по внешним ссылкам
export function trackExternalLinks() {
  if (typeof window !== "undefined") {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.hostname !== window.location.hostname) {
        trackEvent("external_link_click", {
          category: "Outbound",
          label: link.href,
          url: link.href,
          text: link.innerText || link.textContent,
        })
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }

  return () => {}
}

// Инициализация всех трекеров
export function initAnalytics() {
  if (typeof window !== "undefined") {
    trackTimeOnPage()
    trackScroll()
    trackExternalLinks()
  }
}

