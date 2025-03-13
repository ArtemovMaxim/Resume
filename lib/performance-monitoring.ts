type PerformanceMetrics = {
  FCP: number | null
  LCP: number | null
  FID: number | null
  CLS: number | null
  TTFB: number | null
  INP: number | null
}

export function reportWebVitals(metric: any) {
  // Отправка метрик в Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "web_vitals", {
      event_category: "Web Vitals",
      event_label: metric.name,
      value: Math.round(metric.value * 100) / 100,
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: metric.value,
      metric_delta: metric.delta,
    })
  }
}

export function initPerformanceMonitoring() {
  if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
    return // Exit early if window or PerformanceObserver is not available
  }

  const metrics: PerformanceMetrics = {
    FCP: null,
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
    INP: null,
  }

  // First Contentful Paint (FCP)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fcp = entries[0]
        metrics.FCP = fcp.startTime
        reportWebVitals({
          name: "FCP",
          value: fcp.startTime,
          id: "fcp",
        })
      }
    }).observe({ type: "paint", buffered: true })
  } catch (error) {
    console.warn("Failed to observe FCP:", error)
  }

  // Largest Contentful Paint (LCP)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const lcp = entries[entries.length - 1]
        metrics.LCP = lcp.startTime
        reportWebVitals({
          name: "LCP",
          value: lcp.startTime,
          id: "lcp",
        })
      }
    }).observe({ type: "largest-contentful-paint", buffered: true })
  } catch (error) {
    console.warn("Failed to observe LCP:", error)
  }

  // First Input Delay (FID)
  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fid = entries[0]
        metrics.FID = fid.processingStart - fid.startTime
        reportWebVitals({
          name: "FID",
          value: fid.processingStart - fid.startTime,
          id: "fid",
        })
      }
    }).observe({ type: "first-input", buffered: true })
  } catch (error) {
    console.warn("Failed to observe FID:", error)
  }

  // Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0
    const clsEntries: any[] = []

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()

      entries.forEach((entry) => {
        // Only if there was no recent user input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          clsEntries.push(entry)
        }
      })

      metrics.CLS = clsValue
      reportWebVitals({
        name: "CLS",
        value: clsValue,
        id: "cls",
      })
    }).observe({ type: "layout-shift", buffered: true })
  } catch (error) {
    console.warn("Failed to observe CLS:", error)
  }

  // Time to First Byte (TTFB)
  try {
    const navigationEntries = performance.getEntriesByType("navigation")
    if (navigationEntries.length > 0) {
      const ttfb = (navigationEntries[0] as PerformanceNavigationTiming).responseStart
      metrics.TTFB = ttfb
      reportWebVitals({
        name: "TTFB",
        value: ttfb,
        id: "ttfb",
      })
    }
  } catch (error) {
    console.warn("Failed to measure TTFB:", error)
  }

  // Interaction to Next Paint (INP) - experimental metric
  try {
    if (typeof PerformanceEventTiming !== "undefined" && "interactionCount" in PerformanceEventTiming.prototype) {
      let maxInteractionTime = 0

      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          const interactionTime = (entry as any).duration
          if (interactionTime > maxInteractionTime) {
            maxInteractionTime = interactionTime
            metrics.INP = interactionTime
            reportWebVitals({
              name: "INP",
              value: interactionTime,
              id: "inp",
            })
          }
        })
      }).observe({ type: "event", buffered: true, durationThreshold: 16 })
    }
  } catch (error) {
    console.warn("Failed to observe INP:", error)
  }

  // Send all metrics when the page is unloaded
  try {
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        // Send final metrics
        const metricsToSend = {
          ...metrics,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }

        // Use sendBeacon for reliable data sending when the page is unloaded
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/performance", JSON.stringify(metricsToSend))
        } else {
          // Fallback if sendBeacon is not supported
          fetch("/api/performance", {
            method: "POST",
            body: JSON.stringify(metricsToSend),
            keepalive: true,
          }).catch((err) => console.warn("Failed to send performance metrics:", err))
        }
      }
    })
  } catch (error) {
    console.warn("Failed to set up visibility change listener:", error)
  }
}

