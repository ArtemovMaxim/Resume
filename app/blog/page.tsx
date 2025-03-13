import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Блог iOS разработчика | Максим Артемов",
  description: "Статьи об iOS разработке, Swift, SwiftUI, UIKit и мобильных технологиях от опытного iOS разработчика",
  keywords: "iOS разработка, Swift, SwiftUI, UIKit, блог разработчика, мобильная разработка",
}

const blogPosts = [
  {
    id: 1,
    title: "Архитектурные паттерны в iOS: MVVM vs MVC",
    slug: "architectural-patterns-ios-mvvm-vs-mvc",
    excerpt:
      "Сравнение популярных архитектурных паттернов в iOS разработке. Когда использовать MVVM, а когда достаточно MVC?",
    date: "2024-03-15",
    readTime: "8 мин",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Swift", "Архитектура", "MVVM", "MVC"],
    available: true,
  },
  {
    id: 2,
    title: "Обман на фрилансе и самозанятости: как защитить свои права",
    slug: "freelance-fraud",
    excerpt:
      "Подробный анализ распространенных схем обмана на фрилансе и самозанятости, правовые аспекты и практические советы по защите своих прав.",
    date: "2024-03-20",
    readTime: "20 мин",
    image: "/blog/freelance-fraud.jpg",
    tags: ["Фриланс", "Самозанятость", "Трудовое право", "Защита прав"],
    available: true,
  },
  {
    id: 3,
    title: "SwiftUI: Лучшие практики для создания адаптивных интерфейсов",
    slug: "swiftui-best-practices-adaptive-interfaces",
    excerpt:
      "Как создавать по-настоящему адаптивные интерфейсы в SwiftUI, которые отлично выглядят на всех устройствах Apple.",
    date: "2024-02-28",
    readTime: "10 мин",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["SwiftUI", "UI/UX", "Адаптивный дизайн"],
    available: false, // Пока недоступна
  },
  {
    id: 4,
    title: "Оптимизация производительности iOS-приложений",
    slug: "ios-app-performance-optimization",
    excerpt:
      "Практические советы по оптимизации производительности iOS-приложений: от управления памятью до эффективной работы с сетью.",
    date: "2024-02-10",
    readTime: "12 мин",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Производительность", "Оптимизация", "Swift"],
    available: false, // Пока недоступна
  },
  {
    id: 5,
    title: "Интеграция AI в iOS-приложения с помощью Core ML",
    slug: "ai-integration-ios-apps-core-ml",
    excerpt:
      "Пошаговое руководство по интеграции моделей машинного обучения в iOS-приложения с использованием Core ML.",
    date: "2024-01-25",
    readTime: "15 мин",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["AI", "Core ML", "Machine Learning"],
    available: false, // Пока недоступна
  },
  {
    id: 6,
    title: "Безопасность в iOS: Лучшие практики защиты данных",
    slug: "ios-security-best-practices",
    excerpt:
      "Обзор современных методов защиты пользовательских данных в iOS-приложениях: от шифрования до безопасного хранения ключей.",
    date: "2024-01-10",
    readTime: "9 мин",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Безопасность", "Шифрование", "Keychain"],
    available: false, // Пока недоступна
  },
  {
    id: 7,
    title: "Работа с API в Swift: от URLSession до Combine",
    slug: "api-integration-swift-urlsession-combine",
    excerpt: "Эволюция работы с сетевыми запросами в Swift: от базового URLSession до современного подхода с Combine.",
    date: "2023-12-15",
    readTime: "11 мин",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["API", "URLSession", "Combine", "Асинхронность"],
    available: false, // Пока недоступна
  },
]

export default function BlogPage() {
  // Фильтруем только доступные статьи для отображения
  const availablePosts = blogPosts.filter((post) => post.available)

  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-[#1d1d1f]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Блог iOS разработчика</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Делюсь опытом, знаниями и лучшими практиками в мире iOS разработки
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availablePosts.map((post) => (
              <Card
                key={post.id}
                className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                  >
                    Читать далее <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

