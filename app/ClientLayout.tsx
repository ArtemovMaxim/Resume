"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { inter, robotoMono } from "@/lib/fonts"
import "./accessibility.css"
import SkipToContent from "@/components/skip-to-content" // Changed from { SkipToContent }
import { initAnalytics } from "@/lib/analytics"
import { initPerformanceMonitoring } from "@/lib/performance-monitoring"
import { initErrorTracking } from "@/lib/error-tracking"

const interFont = Inter({ subsets: ["latin", "cyrillic"] })

function AnalyticsInitializer() {
  useEffect(() => {
    initAnalytics()
    initPerformanceMonitoring()
    initErrorTracking()
  }, [])

  return null
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        {/* Schema.org разметка для персоны */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Максим Артемов",
              jobTitle: "iOS Разработчик",
              description: "Опытный iOS разработчик с 5-летним стажем. Специализация: Swift, SwiftUI, UIKit, CoreData.",
              knowsAbout: ["iOS", "Swift", "SwiftUI", "UIKit", "CoreData", "Python", "AI интеграции"],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              url: "https://maxim-artemov.vercel.app/",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B5%D0%9B%D0%BE%D0%93%D0%BE.jpg-ho9QHk4vfc6WbUno4I6Uc7mqvM0J8I.jpeg",
              sameAs: ["https://t.me/maxim_a_artemov", "https://vk.com/nekandidatnedeputat"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-995-393-3273",
                email: "maxim.a.artemov@icloud.com",
                contactType: "Профессиональные запросы",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Москва",
                addressCountry: "Россия",
              },
            }),
          }}
        />

        {/* Schema.org разметка для веб-сайта */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://maxim-artemov.vercel.app/",
              name: "Максим Артемов | iOS Разработчик",
              description: "Портфолио iOS разработчика с 5-летним опытом работы",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://maxim-artemov.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${interFont.className} antialiased`}>
        <SkipToContent contentId="main-content" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnalyticsInitializer />
          {children}
          <Toaster />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(XXXXXXXX, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/XXXXXXXX" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=XXXXXXXXXX&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Скрипт для сохранения UTM-меток */}
        <Script id="utm-tracker" strategy="afterInteractive">
          {`
            function getParameterByName(name) {
              var url = window.location.href;
              name = name.replace(/[\\[\\]]/g, '\\$&');
              var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                  results = regex.exec(url);
              if (!results) return null;
              if (!results[2]) return '';
              return decodeURIComponent(results[2].replace(/\\+/g, ' '));
            }
            
            function saveUtmParams() {
              var utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
              var savedParams = {};
              
              utmParams.forEach(function(param) {
                var value = getParameterByName(param);
                if (value) {
                  savedParams[param] = value;
                  localStorage.setItem(param, value);
                }
              });
              
              if (Object.keys(savedParams).length > 0) {
                localStorage.setItem('utm_data', JSON.stringify(savedParams));
                localStorage.setItem('utm_date', new Date().toISOString());
              }
            }
            
            saveUtmParams();
          `}
        </Script>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}

