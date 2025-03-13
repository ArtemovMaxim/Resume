import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import PersonalInfo from "@/components/personal-info"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SiteInfo from "@/components/site-info"
import AIChat from "@/components/ai-chat"
import PageScroll from "@/components/page-scroll"
import SkipToContent from "@/components/skip-to-content" // Changed from { SkipToContent }

export const metadata: Metadata = {
  title: "Максим Артемов | iOS Разработчик | Swift, SwiftUI, UIKit",
  description:
    "Опытный iOS разработчик с 5-летним стажем. Специализация: Swift, SwiftUI, UIKit, CoreData. Разработка мобильных приложений для финтех, криптовалютных и банковских проектов. Удаленная работа.",
  keywords:
    "iOS разработчик, Swift разработчик, SwiftUI, UIKit, мобильная разработка, удаленная работа, фриланс iOS, iOS developer, Swift developer",
}

export default function Home() {
  const sections = [
    { id: "hero", label: "Главная" },
    { id: "experience", label: "Опыт" },
    { id: "personal", label: "Личные качества" },
    { id: "projects", label: "Проекты" },
    { id: "testimonials", label: "Отзывы" },
    { id: "contact", label: "Контакты" },
  ]

  return (
    <main id="main-content" className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      <SkipToContent contentId="main-content" />
      <Header />
      <Hero />
      <Experience />
      <PersonalInfo />
      <Projects />
      <Testimonials />
      <Contact />
      <SiteInfo />
      <Footer />
      <AIChat />
      <PageScroll sections={sections} enabled={true} />
    </main>
  )
}

