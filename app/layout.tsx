import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./accessibility.css"
import ClientLayout from "./clientLayout"

const interFont = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Максим Артемов | iOS Разработчик | Swift, SwiftUI, UIKit",
  description:
    "Опытный iOS разработчик с 5-летним стажем. Специализация: Swift, SwiftUI, UIKit, CoreData. Разработка мобильных приложений для финтех, криптовалютных и банковских проектов. Удаленная работа.",
  keywords:
    "iOS разработчик, Swift разработчик, SwiftUI, UIKit, мобильная разработка, удаленная работа, фриланс iOS, iOS developer, Swift developer, iOS вакансия, iOS работа, iOS программист, Swift программист, iOS инженер, Swift инженер, iOS специалист, Swift специалист, iOS Москва, iOS удаленно",
  authors: [{ name: "Максим Артемов" }],
  creator: "Максим Артемов",
  publisher: "Максим Артемов",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://maxim-artemov.vercel.app/",
    title: "Максим Артемов | iOS Разработчик | Swift, SwiftUI, UIKit",
    description:
      "Опытный iOS разработчик с 5-летним стажем. Специализация: Swift, SwiftUI, UIKit, CoreData. Разработка мобильных приложений для финтех, криптовалютных и банковских проектов.",
    siteName: "Портфолио iOS разработчика",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B5%D0%B7%D0%9B%D0%BE%D0%B3%D0%BE.jpg-ho9QHk4vfc6WbUno4I6Uc7mqvM0J8I.jpeg",
        width: 1200,
        height: 630,
        alt: "Максим Артемов - iOS разработчик",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Максим Артемов | iOS Разработчик | Swift, SwiftUI, UIKit",
    description: "Опытный iOS разработчик с 5-летним стажем. Специализация: Swift, SwiftUI, UIKit, CoreData.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B5%D0%B7%D0%9B%D0%BE%D0%B3%D0%BE.jpg-ho9QHk4vfc6WbUno4I6Uc7mqvM0J8I.jpeg",
    ],
  },
  alternates: {
    languages: {
      en: "/en",
      ru: "/",
    },
    canonical: "https://maxim-artemov.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout children={children} />
}



import './globals.css'