"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"

type Message = {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Привет! Я AI-ассистент Максима. Чем я могу вам помочь?",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Прокрутка к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  // Обработка отправки сообщения
  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Добавляем сообщение пользователя
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Отслеживаем событие отправки сообщения
    trackEvent("ai_chat_message_sent", {
      category: "AI Chat",
      label: input,
    })

    try {
      // Здесь будет запрос к API для получения ответа от AI
      // В данном примере используем заглушку
      const response = await simulateAIResponse(input)

      // Добавляем ответ ассистента
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error getting AI response:", error)

      // Добавляем сообщение об ошибке
      const errorMessage: Message = {
        role: "assistant",
        content: "Извините, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Симуляция ответа AI (в реальном приложении здесь будет запрос к API)
  const simulateAIResponse = async (message: string): Promise<string> => {
    // Имитация задержки ответа
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Простые заготовленные ответы
    if (message.toLowerCase().includes("привет") || message.toLowerCase().includes("здравствуй")) {
      return "Привет! Чем я могу вам помочь?"
    }

    if (message.toLowerCase().includes("контакт") || message.toLowerCase().includes("связаться")) {
      return "Вы можете связаться с Максимом через форму на сайте или напрямую через Telegram: @maxim_a_artemov"
    }

    if (message.toLowerCase().includes("проект") || message.toLowerCase().includes("портфолио")) {
      return 'В портфолио Максима более 20 успешных проектов в сфере iOS-разработки. Вы можете ознакомиться с ними в разделе "Проекты" на сайте.'
    }

    if (message.toLowerCase().includes("опыт") || message.toLowerCase().includes("стаж")) {
      return "Максим имеет более 5 лет опыта в iOS-разработке. Он работал над проектами в сфере финтеха, криптовалют, банкинга и других областях."
    }

    if (message.toLowerCase().includes("технологии") || message.toLowerCase().includes("стек")) {
      return "Максим специализируется на Swift, SwiftUI, UIKit, CoreData. Также имеет опыт работы с Python для автоматизации и AI-интеграций."
    }

    // Общий ответ для других вопросов
    return "Спасибо за ваш вопрос! Я передам его Максиму, и он свяжется с вами в ближайшее время. Если у вас срочный вопрос, вы можете связаться с ним напрямую через Telegram: @maxim_a_artemov"
  }

  // Обработка нажатия Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Форматирование времени
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Кнопка открытия чата */}
      {!isOpen && (
        <Button
          onClick={() => {
            setIsOpen(true)
            trackEvent("ai_chat_opened", { category: "AI Chat" })
          }}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-blue-600 hover:bg-blue-700"
          aria-label="Открыть чат с AI-ассистентом"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Окно чата */}
      {isOpen && (
        <Card
          className={cn(
            "fixed right-6 shadow-xl transition-all duration-300 z-50",
            isMinimized ? "bottom-6 w-72 h-14" : "bottom-6 w-80 sm:w-96 h-[500px] max-h-[80vh]",
          )}
        >
          <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0 border-b">
            <CardTitle className="text-base font-medium flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              AI-ассистент
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Развернуть чат" : "Свернуть чат"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  setIsOpen(false)
                  trackEvent("ai_chat_closed", { category: "AI Chat" })
                }}
                aria-label="Закрыть чат"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-4 overflow-y-auto h-[calc(100% - 130px)]">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-3 py-2",
                          message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800",
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs text-right mt-1 opacity-70">{formatTime(message.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-2 border-t">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Напишите сообщение..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    onClick={handleSendMessage}
                    aria-label="Отправить сообщение"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}

