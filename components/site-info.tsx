"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Bot, Share2 } from "lucide-react"

export default function SiteInfo() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Максим Артемов | iOS Разработчик",
          text: "Посмотрите портфолио опытного iOS разработчика с 5-летним стажем!",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Ошибка при попытке поделиться", error)
      }
    } else {
      // Если Web Share API не поддерживается, копируем ссылку и показываем уведомление
      const url = window.location.href
      const text = "Посмотрите портфолио опытного iOS разработчика с 5-летним стажем!"

      try {
        // Пытаемся скопировать в буфер обмена полный текст со ссылкой
        await navigator.clipboard.writeText(`${text} ${url}`)
        alert("Ссылка скопирована в буфер обмена!")
      } catch (err) {
        // Если не удалось скопировать, показываем ссылку для ручного копирования
        alert(`Скопируйте эту ссылку: ${url}`)
      }
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0c0c0e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">О сайте</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Этот сайт разработан мной лично с использованием современных технологий
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Технологии</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Сайт разработан с использованием современного стека технологий для веб-разработки:
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Next.js</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">React</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">TypeScript</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Tailwind CSS</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Framer Motion</Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Vercel</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Разработка с AI</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Этот сайт был создан без предварительного опыта веб-разработки, исключительно с помощью искусственного
                  интеллекта. Это демонстрирует мой подход к освоению новых технологий и способность эффективно
                  использовать современные инструменты.
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={handleShare}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Поделиться сайтом
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

