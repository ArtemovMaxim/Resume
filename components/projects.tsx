"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Health",
      description:
        "Приложение для мониторинга здоровья, использующее HealthKit и CoreLocation для сбора и отображения данных о физической активности пользователя. Приложение визуализирует шаги, данные о сне, пульс и другие показатели здоровья.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "HealthKit", "CoreLocation", "SwiftUI"],
    },
    {
      id: 2,
      title: "FoodMoon",
      description:
        "Мобильное приложение для заказа еды с кастомными компонентами и продуманным интерфейсом на SwiftUI.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "SwiftUI", "CoreData"],
    },
    {
      id: 3,
      title: "CryptoNetwork",
      description:
        "Проект предоставляет удобный API для интеграции криптовалютных транзакций, управления кошельками, двухфакторной аутентификации и работы с платежными терминалами. Реализован на Swift с использованием современных технологий.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Crypto API", "Authentication"],
    },
    {
      id: 4,
      title: "UIComponentsKit",
      description:
        "Библиотека готовых UI-компонентов, которые помогут вам быстро создавать современные интерфейсы для iOS-приложений. Все компоненты легко настраиваются, поддерживают темную тему и адаптированы под различные устройства.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "UIKit", "SwiftUI"],
    },
    {
      id: 5,
      title: "Crypto-Wallet",
      description:
        "Современное iOS-приложение для безопасной и удобной работы с цифровыми активами. Включает удобный пользовательский интерфейс, интуитивную навигацию и расширенные функции аутентификации.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Crypto", "Security"],
    },
    {
      id: 6,
      title: "CryptoTerminal",
      description: "Криптовалютный терминал для управления транзакциями, балансом и настройками.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Crypto API", "Financial"],
    },
    {
      id: 7,
      title: "eXporter",
      description:
        "Приложение для macOS, которое позволяет экспортировать исходный код проекта в удобный текстовый формат для дальнейшего использования в AI-моделях (например, ChatGPT).",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "macOS", "AI"],
    },
    {
      id: 8,
      title: "ParsingForSV",
      description: "Инструмент для парсинга и обработки данных, разработанный на Python.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Parsing", "Data Processing"],
    },
    {
      id: 9,
      title: "SaratovskieVesti",
      description:
        "Мобильное приложение для новостного портала с функциями персонализации контента и push-уведомлениями.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "News API", "Push Notifications"],
    },
    {
      id: 10,
      title: "SaratovskieVesti 3.0",
      description: "Обновленная версия новостного приложения с улучшенным интерфейсом и расширенным функционалом.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "SwiftUI", "News API"],
    },
    {
      id: 11,
      title: "EuroExchangeBank",
      description: "Банковское приложение для обмена валют и управления финансами с защищенными транзакциями.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Banking API", "Security"],
    },
    {
      id: 12,
      title: "Landing Public",
      description: "Современный лендинг с анимациями и адаптивным дизайном.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["TypeScript", "React", "Animation"],
    },
    {
      id: 13,
      title: "YourNewFate",
      description: "Тестовое приложение для написания Python кода с использованием Replit Agent.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Replit", "AI"],
    },
    {
      id: 14,
      title: "Autodoc",
      description: "Тестовое приложение для автоматической документации кода.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Documentation", "Automation"],
    },
    {
      id: 15,
      title: "Feb14",
      description: "Проект на Python, созданный для специального события.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Event", "Automation"],
    },
    {
      id: 16,
      title: "MVC-SwiftUI",
      description: "Демонстрация архитектуры MVC в приложении SwiftUI.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "SwiftUI", "MVC"],
    },
    {
      id: 17,
      title: "Contacter",
      description: "Приложение для управления контактами с расширенными функциями поиска и категоризации.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Contacts API", "CoreData"],
    },
    {
      id: 18,
      title: "text_to_speech_app",
      description: "Приложение для преобразования текста в речь с различными настройками голоса и языка.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Text-to-Speech", "Audio Processing"],
    },
    {
      id: 19,
      title: "Garment",
      description: "Приложение для модной индустрии с каталогом товаров и функциями заказа.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "E-commerce", "Catalog"],
    },
    {
      id: 20,
      title: "AI Integration Tools",
      description: "Набор инструментов для интеграции искусственного интеллекта в различные приложения и сервисы.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "AI", "Integration", "API"],
    },
    {
      id: 21,
      title: "(NDA) Crypto Terminal",
      description: "Приложение для POS-терминала и одновременно для Android-устройств.",
      image: "/placeholder.svg?height=400&width=600",
      category: "android",
      technologies: ["Kotlin", "Integration", "API"],
    },
    {
      id: 22,
      title: "FoodDelivery Android",
      description:
        "Мобильное приложение для заказа еды на платформе Android с интуитивным интерфейсом и интеграцией с платежными системами.",
      image: "/placeholder.svg?height=400&width=600",
      category: "android",
      technologies: ["Java", "Kotlin", "Android SDK", "Payment API"],
    },
    {
      id: 23,
      title: "HealthTracker Android",
      description:
        "Android-версия приложения для отслеживания показателей здоровья с использованием сенсоров устройства и Google Fit API.",
      image: "/placeholder.svg?height=400&width=600",
      category: "android",
      technologies: ["Kotlin", "Google Fit API", "Room Database", "Jetpack Compose"],
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0c0c0e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Мои проекты</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Портфолио избранных проектов, демонстрирующих мои навыки в разработке и управлении
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm">
              <TabsTrigger
                value="all"
                className={`rounded-full px-6 py-2 ${activeTab === "all" ? "bg-blue-600 text-white" : ""}`}
              >
                Все проекты
              </TabsTrigger>
              <TabsTrigger
                value="ios"
                className={`rounded-full px-6 py-2 ${activeTab === "ios" ? "bg-blue-600 text-white" : ""}`}
              >
                iOS
              </TabsTrigger>
              <TabsTrigger
                value="android"
                className={`rounded-full px-6 py-2 ${activeTab === "android" ? "bg-blue-600 text-white" : ""}`}
              >
                Android
              </TabsTrigger>
              <TabsTrigger
                value="python"
                className={`rounded-full px-6 py-2 ${activeTab === "python" ? "bg-blue-600 text-white" : ""}`}
              >
                Python
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className={`rounded-full px-6 py-2 ${activeTab === "web" ? "bg-blue-600 text-white" : ""}`}
              >
                Web
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all rounded-xl">
                    {/* macOS-style window header */}
                    <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 flex items-center border-b border-gray-300 dark:border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 text-center text-xs font-medium text-gray-600 dark:text-gray-400">
                        {project.title}.app
                      </div>
                    </div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-gray-100 dark:bg-gray-800">
                            {tech}
                          </Badge>
                        ))}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{project.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

