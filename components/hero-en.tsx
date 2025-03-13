"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
      {/* Apple-style background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 opacity-50"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Blurred circles for effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-300 dark:bg-blue-700 blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-700 blur-3xl opacity-30" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Maxim Artemov</h1>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">Expertise:</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">iOS Developer</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">AI Integrator</Badge>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">Industries:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Media</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Banking</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Crypto</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">FinTech</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Social</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">E-commerce</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Medical</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Health</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Retail</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Food</Badge>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Professional with extensive experience in developing mobile applications with Swift for iOS. I create and
              integrate AI solutions, automate processes with Python, create Telegram bots, and develop Telegram Mini
              Apps. <strong>Ready to start immediately.</strong>
            </p>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">Experience:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">5 years</Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                onClick={() =>
                  window.open("https://saratov.hh.ru/resume/8244a221ff0e444fef0039ed1f4e3352637476", "_blank")
                }
              >
                <Send className="mr-2 h-4 w-4" /> Hire me!
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6"
                onClick={() => window.open("/resume-en.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B5%D0%B7%D0%9B%D0%BE%D0%B3%D0%BE.jpg-ho9QHk4vfc6WbUno4I6Uc7mqvM0J8I.jpeg"
                alt="Maxim Artemov"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full max-w-md mt-6 rounded-xl overflow-hidden shadow-lg">
              <video className="w-full" controls poster="/placeholder.svg?height=300&width=500">
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="bg-white dark:bg-gray-800 p-3 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Brief presentation of my skills and projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

