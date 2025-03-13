"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Brain, Award, Heart } from "lucide-react"

export default function PersonalInfo() {
  const personalData = [
    {
      id: "fitness",
      title: "Физическая форма",
      icon: <Dumbbell className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      description: "Поддерживаю отличную физическую форму через регулярные тренировки и активный образ жизни.",
      details:
        "Регулярные силовые тренировки, кардио и функциональные упражнения. Придерживаюсь здорового питания и режима дня.",
    },
    {
      id: "learning",
      title: "Непрерывное обучение",
      icon: <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      description: "Постоянно развиваюсь и осваиваю новые технологии и методологии.",
      details:
        "Регулярно прохожу курсы повышения квалификации, участвую в профессиональных конференциях и хакатонах. Слежу за трендами в IT и бизнесе.",
    },
    {
      id: "achievements",
      title: "Личные достижения",
      icon: <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
      description: "Достиг значительных результатов как в профессиональной, так и в личной сфере.",
      details:
        "Успешно совмещаю карьеру, саморазвитие и активный образ жизни. Умею эффективно управлять временем и расставлять приоритеты.",
    },
    {
      id: "balance",
      title: "Баланс жизни",
      icon: <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />,
      description: "Поддерживаю баланс между работой, отдыхом и личным развитием.",
      details: "Практикую методики управления стрессом и повышения продуктивности. Уделяю время семье и хобби.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Личные качества</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Профессиональные навыки дополняются личными качествами и стремлением к постоянному развитию
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
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center md:w-1/4 h-full">
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

