"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, MessageSquarePlus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function Testimonials() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    quote: "",
  })

  const testimonials = [
    {
      id: 1,
      name: "Наталия Пиманова",
      position: "Индивидуальный Предприниматель",
      avatar: "/testimonials/testimonial-1.jpg",
      quote:
        "Максим - один из самых талантливых iOS-разработчиков, с которыми мне доводилось работать. Его глубокое понимание Swift и архитектуры iOS-приложений позволило нам создать высококачественный продукт в сжатые сроки. Особенно впечатлила его способность оптимизировать производительность приложения, что привело к увеличению скорости работы на 40%.",
    },
    {
      id: 2,
      name: "Антон Гришин",
      position: "Индивидуальный Предприниматель",
      avatar: "/testimonials/testimonial-2.jpg",
      quote:
        "Сотрудничество с Максимом было исключительно продуктивным. Он не только реализовал все технические требования, но и предложил несколько инновационных решений, которые значительно улучшили пользовательский опыт. Благодаря его работе мы увеличили удержание пользователей на 25% и получили множество положительных отзывов в App Store.",
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      position: "Lead Developer, Crypto Exchange",
      avatar: "/testimonials/testimonial-3.jpg",
      quote:
        "Максим присоединился к нашей команде в критический момент разработки криптовалютного кошелька. Его экспертиза в области безопасности и шифрования данных была неоценима. Он быстро освоил наш кодовую базу и внедрил несколько ключевых функций, которые сделали наше приложение одним из самых безопасных на рынке. Всегда готов рекомендовать его как высококлассного iOS-разработчика.",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Имитация отправки данных
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Симуляция ошибки
      throw new Error("Временная ошибка сервера. Пожалуйста, попробуйте позже.")

      // Этот код не выполнится из-за симуляции ошибки выше
      toast({
        title: "Отзыв отправлен!",
        description: "Спасибо за ваш отзыв. Он будет опубликован после модерации.",
        variant: "success",
      })

      setFormData({ name: "", position: "", quote: "" })
    } catch (error) {
      console.error("Error submitting testimonial:", error)
      toast({
        title: "Ошибка отправки",
        description: error instanceof Error ? error.message : "Пожалуйста, попробуйте еще раз позже.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#121214]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Отзывы</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Что говорят коллеги и клиенты о моей работе
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4">
                <MessageSquarePlus className="mr-2 h-4 w-4" />
                Добавить отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Добавить отзыв</DialogTitle>
                <DialogDescription>
                  Поделитесь своим опытом работы с Максимом. Ваш отзыв будет опубликован после модерации.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Должность и компания</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Например: CTO, Company Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote">Отзыв</Label>
                  <Textarea
                    id="quote"
                    name="quote"
                    value={formData.quote}
                    onChange={handleChange}
                    placeholder="Поделитесь своим опытом работы с Максимом..."
                    rows={5}
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Отправить отзыв"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-200 dark:text-blue-900 -translate-x-2 -translate-y-2" />
                    <p className="text-gray-700 dark:text-gray-300 italic pl-4">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

