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
          title: "Maxim Artemov | iOS Developer",
          text: "Check out the portfolio of an experienced iOS developer with 5 years of expertise!",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing", error)
      }
    } else {
      // If Web Share API is not supported, copy the link and show a notification
      const url = window.location.href
      const text = "Check out the portfolio of an experienced iOS developer with 5 years of expertise!"

      try {
        // Try to copy the full text with the link to the clipboard
        await navigator.clipboard.writeText(`${text} ${url}`)
        alert("Link copied to clipboard!")
      } catch (err) {
        // If copying failed, show the link for manual copying
        alert(`Copy this link: ${url}`)
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About This Site</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This site was personally developed by me using modern technologies
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The site was developed using a modern web development technology stack:
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development with AI</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This site was created without prior web development experience, exclusively with the help of
                  artificial intelligence. This demonstrates my approach to learning new technologies and the ability to
                  effectively use modern tools.
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={handleShare}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Share this site
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

