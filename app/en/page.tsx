import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero-en"
import Experience from "@/components/experience-en"
import PersonalInfo from "@/components/personal-info-en"
import Projects from "@/components/projects-en"
import Testimonials from "@/components/testimonials-en"
import Contact from "@/components/contact-en"
import Footer from "@/components/footer-en"
import SiteInfo from "@/components/site-info-en"
import AIChat from "@/components/ai-chat"
import PageScroll from "@/components/page-scroll"
import SkipToContent from "@/components/skip-to-content" // Changed from { SkipToContent }

export const metadata: Metadata = {
  title: "Maxim Artemov | iOS Developer | Swift, SwiftUI, UIKit",
  description:
    "Experienced iOS developer with 5 years of expertise. Specialization: Swift, SwiftUI, UIKit, CoreData. Mobile app development for fintech, cryptocurrency, and banking projects. Remote work.",
  keywords:
    "iOS developer, Swift developer, SwiftUI, UIKit, mobile development, remote work, freelance iOS, iOS developer, Swift developer",
}

export default function EnglishHome() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "personal", label: "Personal" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
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

