"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Brain, Award, Heart } from "lucide-react"

export default function PersonalInfo() {
  const personalData = [
    {
      id: "fitness",
      title: "Physical Fitness",
      icon: <Dumbbell className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      description: "Maintaining excellent physical shape through regular training and an active lifestyle.",
      details:
        "Regular strength training, cardio, and functional exercises. I adhere to healthy eating and daily routine.",
    },
    {
      id: "learning",
      title: "Continuous Learning",
      icon: <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      description: "Constantly developing and mastering new technologies and methodologies.",
      details:
        "Regularly taking advanced training courses, participating in professional conferences and hackathons. Keeping up with trends in IT and business.",
    },
    {
      id: "achievements",
      title: "Personal Achievements",
      icon: <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
      description: "Achieved significant results in both professional and personal spheres.",
      details:
        "Successfully combining career, self-development, and an active lifestyle. Able to effectively manage time and set priorities.",
    },
    {
      id: "balance",
      title: "Life Balance",
      icon: <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />,
      description: "Maintaining balance between work, rest, and personal development.",
      details:
        "Practicing stress management and productivity enhancement techniques. Making time for family and hobbies.",
    },
  ]

  return (
    <section id="personal" className="py-20 bg-gray-50 dark:bg-[#0c0c0e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Personal Qualities</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional skills are complemented by personal qualities and a commitment to continuous development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center md:w-1/4">
                      <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.details}</p>
                    </div>
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

