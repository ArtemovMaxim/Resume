"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Здесь будет логика отправки формы на сервер
      // Имитация отправки данных
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Сохранение данных в localStorage для демонстрации
      const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]")
      submissions.push({
        ...formData,
        date: new Date().toISOString(),
        id: Date.now(),
      })
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions))

      // Отправка события в Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "form_submission", {
          event_category: "Contact",
          event_label: formData.email,
        })
      }

      // Отправка события в Яндекс.Метрику
      const YANDEX_METRICA_ID = 94973405 // Replace with your Yandex Metrica ID
      if (typeof window !== "undefined" && (window as any).ym) {
        ;(window as any).ym(YANDEX_METRICA_ID, "reachGoal", "form_submission")
      }

      // Сброс формы после отправки
      setFormData({ name: "", email: "", message: "" })

      toast({
        title: "Сообщение отправлено!",
        description: "Я свяжусь с вами в ближайшее время.",
        variant: "success",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте еще раз позже.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#121214]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Связаться со мной</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Готов обсудить ваш проект или вакансию. Свяжитесь со мной любым удобным способом.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-900 border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Контактная информация</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Телефон</p>
                      <p className="text-gray-900 dark:text-white">+7 (995) 393-32-73</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white">maxim.a.artemov@icloud.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Локация</p>
                      <p className="text-gray-900 dark:text-white">Москва, Россия</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Telegram</p>
                      <a
                        href="https://t.me/maxim_a_artemov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        @maxim_a_artemov
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://vk.com/nekandidatnedeputat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    >
                      <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.033-1.49-1.172-1.744-1.172-.356 0-.458.102-.458.593v1.572c0 .422-.136.66-1.252.66-1.846 0-3.896-1.118-5.336-3.202-2.166-3.42-2.76-5.997-2.76-6.523 0-.288.102-.559.593-.559h1.744c.44 0 .61.203.78.678.847 2.455 2.27 4.607 2.862 4.607.22 0 .322-.102.322-.66V9.16c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.76c.373 0 .508.203.508.643v3.473c0 .373.17.508.271.508.22 0 .407-.135.813-.542 1.27-1.422 2.18-3.624 2.18-3.624.12-.237.305-.457.728-.457h1.743c.525 0 .644.27.525.643-.22 1.015-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.712-.576.712z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Отправить сообщение</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Имя
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ваш email"
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ваше сообщение"
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

