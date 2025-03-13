"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("it")

  // Данные из резюме
  const experienceData = {
    it: [
      {
        id: "it-1",
        title: "Ведущий разработчик",
        company: "WinFox",
        period: "Август 2024 - Февраль 2025",
        description:
          "Разработка и оптимизация мобильных приложений для iOS, внедрение CI/CD, работа с AI-интеграциями.",
        details:
          "Работа по доработке legacy-кода на UIKit, миграция с UIKit на SwiftUI и с Realm на CoreData, внедрение современных подходов к многопоточности и безопасности данных.",
        achievements: [
          "Внедрение и настройка Gitlab CI с интеграцией Telegram API для уведомлений",
          "Внедрение кодогенерации Generamba для ускорения разработки новых модулей",
          "Разработка скриптов на Python для автоматизации работы с AI",
          "Снижение числа ошибок по аналитике Firebase Crashlitics и Yandex AppMetrica",
          "Оптимизация производительности приложений и улучшение UX",
        ],
        responsibilities: [
          "Работа по доработке тяжёлого старого legacy-кода на UIKit",
          "Миграция с UIKit на SwiftUI, с Realm на CoreData",
          "Тестирование SwiftData",
          "Переписывание GCD, OperationQueue кода на async/await",
          "Внедрение инфраструктуры actor'ов для потокобезопасности",
          "Разработка и оптимизация крупных модулей в приложениях",
          "Настройка авторизации по телефонному звонку и SMS",
          "Интеграция с различными сервисами доставки для стран СНГ",
        ],
        projects: [
          {
            name: "Логистическое приложение",
            description: "Оптимизация и переработка приложения для логистики и доставки (NDA)",
          },
          {
            name: "CI/CD Pipeline",
            description: "Настройка автоматизированной сборки и деплоя приложений",
          },
        ],
        skills: [
          "Swift",
          "UIKit",
          "SwiftUI",
          "CoreData",
          "SwiftData",
          "Async/Await",
          "GCD",
          "Gitlab CI",
          "Python",
          "AI интеграции",
          "OpenAI API",
        ],
      },
      {
        id: "it-2",
        title: "Ведущий разработчик",
        company: "EuroExchange",
        period: "Сентябрь 2023 - Август 2024",
        description:
          "Единоличная удалённая разработка с нуля банковского приложения и инкассационного приложения для банка.",
        details:
          "Выполнял функции Team Lead iOS / Project Manager / Product Manager. Разработка полного цикла финансовых приложений с использованием современных технологий и архитектурных подходов.",
        achievements: [
          "Разработка с нуля банковского приложения (NDA, Латвия)",
          "Разработка инкассационного приложения для банка",
          "Внедрение современной архитектуры BDUI и MVVM",
        ],
        responsibilities: [
          "Полный цикл разработки мобильных приложений",
          "Проектирование архитектуры приложений",
          "Управление проектами и командой",
          "Взаимодействие с заказчиком",
          "Обеспечение безопасности финансовых данных",
        ],
        projects: [
          {
            name: "Банковское приложение",
            description: "Мобильное приложение для банка с полным функционалом (NDA, Латвия)",
          },
          {
            name: "Инкассационное приложение",
            description: "Специализированное приложение для инкассаторов банка",
          },
        ],
        skills: [
          "SwiftUI",
          "BDUI",
          "MVVM",
          "URLSession",
          "Moya",
          "Alamofire",
          "GCD",
          "Async/Await",
          "Combine",
          "Keychain",
          "UserDefaults",
          "CoreData",
        ],
      },
      {
        id: "it-3",
        title: "iOS разработчик",
        company: "SpaceApp",
        period: "Июнь 2022 - Сентябрь 2023",
        description:
          "Разработка медицинских приложений и приложений для фитнеса, работа над проектами для иностранных заказчиков.",
        details:
          "Разработка нового функционала приложений для пациента и врача проекта 'MedOk', работа над приложениями MamCity и HealthQuest, а также над проектами для иностранных заказчиков.",
        achievements: [
          "Реализация голосовых сообщений с использованием AVFoundation",
          "Разработка с нуля дизайн-системы для группы приложений крипто-проекта",
          "Создание нового экрана трекера беременности для приложения MamCity",
          "Разработка мобильного приложения для аренды пауэрбенков (NDA, Германия)",
        ],
        responsibilities: [
          "Разработка нового функционала для медицинских приложений",
          "Создание и настройка интерфейса новых экранов",
          "Интеграция с backend-сервисами",
          "Адаптация интерфейса к изменениям в базе данных",
          "Анимирование элементов интерфейса",
          "Разработка компонентов дизайн-системы на SwiftUI",
        ],
        projects: [
          {
            name: "MedOk",
            description: "Медицинское приложение для пациентов и врачей",
          },
          {
            name: "MamCity",
            description: "Приложение для беременных женщин с трекером беременности",
          },
          {
            name: "HealthQuest",
            description: "Приложение для отслеживания здоровья и фитнеса",
          },
          {
            name: "Крипто-проект",
            description: "Разработка дизайн-системы для группы приложений (NDA, ОАЭ)",
          },
        ],
        skills: [
          "Swift",
          "SwiftUI",
          "UIKit",
          "URLSession",
          "GCD",
          "Foundation",
          "Nuke",
          "Alamofire",
          "AVFoundation",
          "UserDefaults",
          "CoreData",
          "vk_ios_sdk",
        ],
      },
      {
        id: "it-4",
        title: "iOS разработчик",
        company: "SV",
        period: "Октябрь 2020 - Июнь 2022",
        description:
          "Разработка мобильных приложений для новостного портала и магазинов одежды, ведение SMM и таргетированной рекламы.",
        details:
          "Разработка мобильного приложения и сайта общественной приемной редакции 'СВ', новостного приложения 'Саратовские Вести 3.0', приложения для магазинов одежды 'LaVaniglia&Garment'.",
        achievements: [
          "Разработка новостного мобильного приложения 'Саратовские Вести 3.0'",
          "Создание приложения для магазинов одежды с функционалом e-commerce",
          "Разработка приложения для клиентов с функционалом подписок, лайков, комментариев и личных кабинетов",
        ],
        responsibilities: [
          "Полный цикл разработки мобильных приложений",
          "Ведение SMM и таргетированной рекламы",
          "Взаимодействие с контрагентами и контролирующими органами",
          "Контроль хозяйственной деятельности предприятия",
        ],
        projects: [
          {
            name: "Саратовские Вести 3.0",
            description: "Новостное мобильное приложение для iOS",
          },
          {
            name: "LaVaniglia&Garment",
            description: "Приложение для магазинов одежды с функционалом e-commerce",
          },
          {
            name: "Клиентское приложение",
            description:
              "Приложение с функционалом социальной сети: подписки, лайки, комментарии, лента, личные кабинеты",
          },
        ],
        skills: ["Swift", "UIKit", "REST API", "JSON", "Git", "SMM", "Таргетированная реклама"],
      },
    ],
    management: [], // Пустой массив вместо закомментированного кода
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#121214]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Профессиональный опыт</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Более 5 лет опыта в разработке iOS-приложений и интеграции AI-решений
          </p>
        </motion.div>

        <Tabs defaultValue="it" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <TabsTrigger
                value="it"
                className={`rounded-full px-6 py-2 ${activeTab === "it" ? "bg-blue-600 text-white" : ""}`}
              >
                IT и разработка
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(experienceData).map(([key, experiences]) => (
            <TabsContent key={key} value={key} className="mt-0 space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={exp.id} className="border-0">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex flex-col md:flex-row md:items-center w-full text-left">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400 md:text-right">
                              {exp.period}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="space-y-6">
                            {/* Description section */}
                            <div>
                              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                              <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.details}</p>
                            </div>

                            {/* Achievements section with bullet points */}
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div>
                                <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">
                                  Ключевые достижения:
                                </h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-400">
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Responsibilities section with bullet points */}
                            {exp.responsibilities && exp.responsibilities.length > 0 && (
                              <div>
                                <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">
                                  Обязанности:
                                </h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {exp.responsibilities.map((responsibility, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-400">
                                      {responsibility}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Projects section */}
                            {exp.projects && exp.projects.length > 0 && (
                              <div>
                                <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Проекты:</h4>
                                <div className="space-y-3">
                                  {exp.projects.map((project, i) => (
                                    <div key={i} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                                      <h5 className="font-medium text-gray-800 dark:text-gray-200">{project.name}</h5>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Skills tags */}
                            <div>
                              <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Навыки:</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {exp.skills.map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </motion.div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

