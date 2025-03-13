"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, Globe } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import AccessibilitySettings from "@/components/accessibility-settings"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentLang, setCurrentLang] = useState("ru")

  useEffect(() => {
    // Определение темы
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(prefersDark)

    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }

    // Определение языка на основе текущего пути
    const detectLanguage = () => {
      const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/")
      setCurrentLang(isEnglishPath ? "en" : "ru")
    }

    detectLanguage()

    const handleScroll = () => {
      // Сразу устанавливаем scrolled в true при любом скролле
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Вызываем handleScroll сразу для установки начального состояния
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = (lang: string) => {
    if (lang === currentLang) return

    setCurrentLang(lang)

    // Получаем текущий путь без языкового префикса
    let newPath = pathname
    if (pathname.startsWith("/en/")) {
      newPath = pathname.replace("/en", "")
    } else if (pathname === "/en") {
      newPath = "/"
    }

    // Добавляем языковой префикс для английского языка
    if (lang === "en") {
      newPath = newPath === "/" ? "/en" : `/en${newPath}`
    }

    // Перенаправляем на новый путь
    router.push(newPath)
  }

  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/")

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={isEnglishPath ? "/en" : "/"} className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9D%D0%9A%D0%9D%D0%94.jpg-xqPU5aJsMRSFiVRQHsfSJXFvIVZKIn.jpeg"
              alt="AMA Logo"
              width={32}
              height={32}
              className="w-8 h-8 dark:invert"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Максим Артемов</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={isEnglishPath ? "/en#experience" : "/#experience"}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isEnglishPath ? "Experience" : "Опыт"}
            </Link>
            <Link
              href={isEnglishPath ? "/en#projects" : "/#projects"}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isEnglishPath ? "Projects" : "Проекты"}
            </Link>
            <Link
              href={isEnglishPath ? "/en/blog" : "/blog"}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isEnglishPath ? "Blog" : "Блог"}
            </Link>
            <Link
              href={isEnglishPath ? "/en#contact" : "/#contact"}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isEnglishPath ? "Contact" : "Контакты"}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 dark:border-gray-700">
                  <Globe className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <span className="sr-only">Выбор языка</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => toggleLanguage("ru")}
                  className={currentLang === "ru" ? "bg-blue-50 dark:bg-blue-900" : ""}
                >
                  🇷🇺 Русский
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => toggleLanguage("en")}
                  className={currentLang === "en" ? "bg-blue-50 dark:bg-blue-900" : ""}
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 dark:border-gray-700"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
              <span className="sr-only">Переключить тему</span>
            </Button>

            <AccessibilitySettings />
          </nav>

          <div className="md:hidden flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 dark:border-gray-700 mr-2"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
              <span className="sr-only">Переключить тему</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-10">
                  <Link
                    href={isEnglishPath ? "/en#experience" : "/#experience"}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {isEnglishPath ? "Experience" : "Опыт"}
                  </Link>
                  <Link
                    href={isEnglishPath ? "/en#projects" : "/#projects"}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {isEnglishPath ? "Projects" : "Проекты"}
                  </Link>
                  <Link
                    href={isEnglishPath ? "/en/blog" : "/blog"}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {isEnglishPath ? "Blog" : "Блог"}
                  </Link>
                  <Link
                    href={isEnglishPath ? "/en#contact" : "/#contact"}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {isEnglishPath ? "Contact" : "Контакты"}
                  </Link>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {isEnglishPath ? "Select language:" : "Выберите язык:"}
                    </p>
                    <div className="flex space-x-4">
                      <Button
                        variant={currentLang === "ru" ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleLanguage("ru")}
                      >
                        🇷🇺 Русский
                      </Button>
                      <Button
                        variant={currentLang === "en" ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleLanguage("en")}
                      >
                        🇬🇧 English
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

