"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("it")

  // Data from resume
  const experienceData = {
    it: [
      {
        id: "it-1",
        title: "Lead Developer",
        company: "WinFox",
        period: "August 2024 - February 2025",
        description:
          "Development and optimization of mobile applications for iOS, implementation of CI/CD, work with AI integrations.",
        details:
          "Work on improving legacy code on UIKit, migration from UIKit to SwiftUI and from Realm to CoreData, implementation of modern approaches to multithreading and data security.",
        achievements: [
          "Implementation and configuration of Gitlab CI with Telegram API integration for notifications",
          "Implementation of Generamba code generation to speed up the development of new modules",
          "Development of Python scripts for automating work with AI",
          "Reduction of errors according to Firebase Crashlitics and Yandex AppMetrica analytics",
          "Optimization of application performance and UX improvement",
        ],
        responsibilities: [
          "Work on improving heavy old legacy code on UIKit",
          "Migration from UIKit to SwiftUI, from Realm to CoreData",
          "Testing SwiftData",
          "Rewriting GCD, OperationQueue code to async/await",
          "Implementation of actor infrastructure for thread safety",
          "Development and optimization of large modules in applications",
          "Setting up authorization by phone call and SMS",
          "Integration with various delivery services for CIS countries",
        ],
        projects: [
          {
            name: "Logistics Application",
            description: "Optimization and redesign of an application for logistics and delivery (NDA)",
          },
          {
            name: "CI/CD Pipeline",
            description: "Setting up automated build and deployment of applications",
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
          "AI integrations",
          "OpenAI API",
        ],
      },
      {
        id: "it-2",
        title: "Lead Developer",
        company: "EuroExchange",
        period: "September 2023 - August 2024",
        description:
          "Solo remote development of a banking application and a collection application for a bank from scratch.",
        details:
          "Performed the functions of Team Lead iOS / Project Manager / Product Manager. Full-cycle development of financial applications using modern technologies and architectural approaches.",
        achievements: [
          "Development of a banking application from scratch (NDA, Latvia)",
          "Development of a collection application for a bank",
          "Implementation of modern BDUI and MVVM architecture",
        ],
        responsibilities: [
          "Full cycle of mobile application development",
          "Application architecture design",
          "Project and team management",
          "Interaction with the customer",
          "Ensuring the security of financial data",
        ],
        projects: [
          {
            name: "Banking Application",
            description: "Mobile application for a bank with full functionality (NDA, Latvia)",
          },
          {
            name: "Collection Application",
            description: "Specialized application for bank collectors",
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
        title: "iOS Developer",
        company: "SpaceApp",
        period: "June 2022 - September 2023",
        description:
          "Development of medical applications and fitness applications, work on projects for foreign customers.",
        details:
          "Development of new functionality for patient and doctor applications of the 'MedOk' project, work on MamCity and HealthQuest applications, as well as on projects for foreign customers.",
        achievements: [
          "Implementation of voice messages using AVFoundation",
          "Development of a design system from scratch for a group of crypto-project applications",
          "Creation of a new pregnancy tracker screen for the MamCity application",
          "Development of a mobile application for renting power banks (NDA, Germany)",
        ],
        responsibilities: [
          "Development of new functionality for medical applications",
          "Creation and configuration of new screen interfaces",
          "Integration with backend services",
          "Adaptation of the interface to changes in the database",
          "Animation of interface elements",
          "Development of design system components on SwiftUI",
        ],
        projects: [
          {
            name: "MedOk",
            description: "Medical application for patients and doctors",
          },
          {
            name: "MamCity",
            description: "Application for pregnant women with pregnancy tracker",
          },
          {
            name: "HealthQuest",
            description: "Application for tracking health and fitness",
          },
          {
            name: "Crypto Project",
            description: "Development of a design system for a group of applications (NDA, UAE)",
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
        title: "iOS Developer",
        company: "SV",
        period: "October 2020 - June 2022",
        description:
          "Development of mobile applications for a news portal and clothing stores, SMM and targeted advertising.",
        details:
          "Development of a mobile application and website for the public reception of the 'SV' editorial office, the news application 'Saratovskie Vesti 3.0', an application for clothing stores 'LaVaniglia&Garment'.",
        achievements: [
          "Development of the mobile news application 'Saratovskie Vesti 3.0'",
          "Creation of an application for clothing stores with e-commerce functionality",
          "Development of an application for clients with subscription functionality, likes, comments and personal accounts",
        ],
        responsibilities: [
          "Full cycle of mobile application development",
          "SMM and targeted advertising",
          "Interaction with contractors and regulatory authorities",
          "Control of the economic activities of the enterprise",
        ],
        projects: [
          {
            name: "Saratovskie Vesti 3.0",
            description: "Mobile news application for iOS",
          },
          {
            name: "LaVaniglia&Garment",
            description: "Application for clothing stores with e-commerce functionality",
          },
          {
            name: "Client Application",
            description:
              "Application with social network functionality: subscriptions, likes, comments, feed, personal accounts",
          },
        ],
        skills: ["Swift", "UIKit", "REST API", "JSON", "Git", "SMM", "Targeted Advertising"],
      },
    ],
    management: [], // Empty array instead of commented code
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Over 5 years of experience in iOS app development and AI integration
          </p>
        </motion.div>

        <Tabs defaultValue="it" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <TabsTrigger
                value="it"
                className={`rounded-full px-6 py-2 ${activeTab === "it" ? "bg-blue-600 text-white" : ""}`}
              >
                IT & Development
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
                                  Key Achievements:
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
                                  Responsibilities:
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
                                <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Projects:</h4>
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
                              <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Skills:</h4>
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

