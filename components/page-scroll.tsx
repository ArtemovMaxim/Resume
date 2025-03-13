"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type Section = {
  id: string
  label: string
}

interface PageScrollProps {
  sections: Section[]
  enabled?: boolean
}

export default function PageScroll({ sections, enabled = true }: PageScrollProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [userPreference, setUserPreference] = useState<boolean | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Проверяем, предпочитает ли пользователь уменьшенное движение
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setUserPreference(!prefersReducedMotion)
  }, [])

  // Если пользователь предпочитает уменьшенное движение или функция отключена, не используем постраничную прокрутку
  const isPageScrollEnabled = enabled && userPreference !== false

  useEffect(() => {
    if (!isPageScrollEnabled) return

    const handleScroll = () => {
      if (isScrolling) return

      // Очищаем предыдущий таймаут
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Определяем текущую активную секцию на основе позиции прокрутки
      const currentPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionElements = sections.map((section) => document.getElementById(section.id))

      // Находим секцию, которая сейчас в видимой области
      let newActiveSection = 0
      sectionElements.forEach((element, index) => {
        if (!element) return

        const { top, bottom } = element.getBoundingClientRect()
        // Если секция видна хотя бы на 50% в окне просмотра
        if (top < windowHeight / 2 && bottom > windowHeight / 2) {
          newActiveSection = index
        }
      })

      setActiveSection(newActiveSection)

      // Устанавливаем таймаут для сброса состояния прокрутки
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [isScrolling, sections, isPageScrollEnabled])

  // Функция для прокрутки к секции
  const scrollToSection = (index: number) => {
    if (!isPageScrollEnabled || isScrolling) return

    setIsScrolling(true)
    const sectionElement = document.getElementById(sections[index].id)

    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      })

      setActiveSection(index)

      // Сбрасываем состояние прокрутки после завершения анимации
      setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }
  }

  // Прокрутка к предыдущей секции
  const scrollToPrevSection = () => {
    if (activeSection > 0) {
      scrollToSection(activeSection - 1)
    }
  }

  // Прокрутка к следующей секции
  const scrollToNextSection = () => {
    if (activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1)
    }
  }

  // Обработка нажатия клавиш
  useEffect(() => {
    if (!isPageScrollEnabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        scrollToPrevSection()
      } else if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        scrollToNextSection()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSection, isScrolling, isPageScrollEnabled])

  // Обработка колесика мыши
  useEffect(() => {
    if (!isPageScrollEnabled) return

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault()
        return
      }

      // Определяем направление прокрутки
      if (e.deltaY < 0) {
        scrollToPrevSection()
      } else if (e.deltaY > 0) {
        scrollToNextSection()
      }

      e.preventDefault()
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [activeSection, isScrolling, isPageScrollEnabled])

  if (!isPageScrollEnabled) return null

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-2">
        {/* Кнопка прокрутки вверх */}
        <button
          onClick={scrollToPrevSection}
          disabled={activeSection === 0 || isScrolling}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            "bg-white dark:bg-gray-800 shadow-md",
            "transition-opacity duration-300",
            activeSection === 0 ? "opacity-50 cursor-not-allowed" : "opacity-80 hover:opacity-100",
          )}
          aria-label="Прокрутить вверх"
        >
          <ChevronUp className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Индикаторы секций */}
        <div className="flex flex-col space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeSection === index
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500",
              )}
              aria-label={`Прокрутить к секции ${section.label}`}
              aria-current={activeSection === index ? "true" : "false"}
            />
          ))}
        </div>

        {/* Кнопка прокрутки вниз */}
        <button
          onClick={scrollToNextSection}
          disabled={activeSection === sections.length - 1 || isScrolling}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            "bg-white dark:bg-gray-800 shadow-md",
            "transition-opacity duration-300",
            activeSection === sections.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-80 hover:opacity-100",
          )}
          aria-label="Прокрутить вниз"
        >
          <ChevronDown className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}

