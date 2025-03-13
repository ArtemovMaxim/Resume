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
        "Health monitoring application using HealthKit and CoreLocation to collect and display user physical activity data. The app visualizes steps, sleep data, heart rate, and other health indicators.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "HealthKit", "CoreLocation", "SwiftUI"],
    },
    {
      id: 2,
      title: "FoodMoon",
      description: "Mobile food ordering application with custom components and a well-designed interface on SwiftUI.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "SwiftUI", "CoreData"],
    },
    {
      id: 3,
      title: "CryptoNetwork",
      description:
        "The project provides a convenient API for integrating cryptocurrency transactions, wallet management, two-factor authentication, and working with payment terminals. Implemented in Swift using modern technologies.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Crypto API", "Authentication"],
    },
    {
      id: 4,
      title: "UIComponentsKit",
      description:
        "A library of ready-made UI components that will help you quickly create modern interfaces for iOS applications. All components are easily customizable, support dark theme, and are adapted for various devices.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "UIKit", "SwiftUI"],
    },
    {
      id: 5,
      title: "Crypto-Wallet",
      description:
        "Modern iOS application for secure and convenient work with digital assets. Includes a user-friendly interface, intuitive navigation, and advanced authentication features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Crypto", "Security"],
    },
    {
      id: 6,
      title: "CryptoTerminal",
      description: "Cryptocurrency terminal for managing transactions, balance, and settings.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Crypto API", "Financial"],
    },
    {
      id: 7,
      title: "eXporter",
      description:
        "macOS application that allows you to export project source code into a convenient text format for further use in AI models (e.g., ChatGPT).",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "macOS", "AI"],
    },
    {
      id: 8,
      title: "ParsingForSV",
      description: "A tool for parsing and processing data, developed in Python.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Parsing", "Data Processing"],
    },
    {
      id: 9,
      title: "SaratovskieVesti",
      description: "Mobile application for a news portal with content personalization features and push notifications.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "News API", "Push Notifications"],
    },
    {
      id: 10,
      title: "SaratovskieVesti 3.0",
      description: "Updated version of the news application with improved interface and expanded functionality.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "SwiftUI", "News API"],
    },
    {
      id: 11,
      title: "EuroExchangeBank",
      description: "Banking application for currency exchange and financial management with secure transactions.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Banking API", "Security"],
    },
    {
      id: 12,
      title: "Landing Public",
      description: "Modern landing page with animations and responsive design.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["TypeScript", "React", "Animation"],
    },
    {
      id: 13,
      title: "YourNewFate",
      description: "Test application for writing Python code using Replit Agent.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Replit", "AI"],
    },
    {
      id: 14,
      title: "Autodoc",
      description: "Test application for automatic code documentation.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Documentation", "Automation"],
    },
    {
      id: 15,
      title: "Feb14",
      description: "Python project created for a special event.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Event", "Automation"],
    },
    {
      id: 16,
      title: "MVC-SwiftUI",
      description: "Demonstration of MVC architecture in a SwiftUI application.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "SwiftUI", "MVC"],
    },
    {
      id: 17,
      title: "Contacter",
      description: "Contact management application with advanced search and categorization features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "Contacts API", "CoreData"],
    },
    {
      id: 18,
      title: "text_to_speech_app",
      description: "Application for converting text to speech with various voice and language settings.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "Text-to-Speech", "Audio Processing"],
    },
    {
      id: 19,
      title: "Garment",
      description: "Application for the fashion industry with a product catalog and ordering features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ios",
      technologies: ["Swift", "E-commerce", "Catalog"],
    },
    {
      id: 20,
      title: "AI Integration Tools",
      description: "A set of tools for integrating artificial intelligence into various applications and services.",
      image: "/placeholder.svg?height=400&width=600",
      category: "python",
      technologies: ["Python", "AI", "Integration", "API"],
    },
    {
      id: 21,
      title: "(NDA) Crypto Terminal",
      description: "Application for POS terminal and simultaneously for Android devices.",
      image: "/placeholder.svg?height=400&width=600",
      category: "android",
      technologies: ["Kotlin", "Integration", "API"],
    },
    {
      id: 22,
      title: "FoodDelivery Android",
      description:
        "Mobile food ordering application on the Android platform with an intuitive interface and integration with payment systems.",
      image: "/placeholder.svg?height=400&width=600",
      category: "android",
      technologies: ["Java", "Kotlin", "Android SDK", "Payment API"],
    },
    {
      id: 23,
      title: "HealthTracker Android",
      description: "Android version of the health tracking application using device sensors and Google Fit API.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Portfolio of selected projects demonstrating my skills in development and management
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm">
              <TabsTrigger
                value="all"
                className={`rounded-full px-6 py-2 ${activeTab === "all" ? "bg-blue-600 text-white" : ""}`}
              >
                All Projects
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

