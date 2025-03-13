import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer-en"

export const metadata: Metadata = {
  title: "iOS Developer Blog | Maxim Artemov",
  description:
    "Articles about iOS development, Swift, SwiftUI, UIKit and mobile technologies from an experienced iOS developer",
  keywords: "iOS development, Swift, SwiftUI, UIKit, developer blog, mobile development",
}

const blogPosts = [
  {
    id: 1,
    title: "Architectural Patterns in iOS: MVVM vs MVC",
    slug: "architectural-patterns-ios-mvvm-vs-mvc",
    excerpt:
      "Comparison of popular architectural patterns in iOS development. When to use MVVM and when MVC is enough?",
    date: "2024-03-15",
    readTime: "8 min",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Swift", "Architecture", "MVVM", "MVC"],
    available: true,
  },
  {
    id: 2,
    title: "Fraud in Freelancing and Self-Employment: How to Protect Your Rights",
    slug: "freelance-fraud",
    excerpt:
      "Detailed analysis of common fraud schemes in freelancing and self-employment, legal aspects, and practical advice on protecting your rights.",
    date: "2024-03-20",
    readTime: "20 min",
    image: "/blog/freelance-fraud.jpg",
    tags: ["Freelancing", "Self-Employment", "Labor Law", "Rights Protection"],
    available: true,
  },
  {
    id: 3,
    title: "SwiftUI: Best Practices for Creating Adaptive Interfaces",
    slug: "swiftui-best-practices-adaptive-interfaces",
    excerpt: "How to create truly adaptive interfaces in SwiftUI that look great on all Apple devices.",
    date: "2024-02-28",
    readTime: "10 min",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["SwiftUI", "UI/UX", "Adaptive Design"],
    available: false, // Not available yet
  },
  {
    id: 4,
    title: "iOS App Performance Optimization",
    slug: "ios-app-performance-optimization",
    excerpt: "Practical tips for optimizing iOS app performance: from memory management to efficient networking.",
    date: "2024-02-10",
    readTime: "12 min",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Performance", "Optimization", "Swift"],
    available: false, // Not available yet
  },
  {
    id: 5,
    title: "AI Integration in iOS Apps with Core ML",
    slug: "ai-integration-ios-apps-core-ml",
    excerpt: "Step-by-step guide to integrating machine learning models into iOS apps using Core ML.",
    date: "2024-01-25",
    readTime: "15 min",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["AI", "Core ML", "Machine Learning"],
    available: false, // Not available yet
  },
  {
    id: 6,
    title: "Security in iOS: Best Practices for Data Protection",
    slug: "ios-security-best-practices",
    excerpt:
      "Overview of modern methods for protecting user data in iOS applications: from encryption to secure key storage.",
    date: "2024-01-10",
    readTime: "9 min",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Security", "Encryption", "Keychain"],
    available: false, // Not available yet
  },
  {
    id: 7,
    title: "Working with APIs in Swift: From URLSession to Combine",
    slug: "api-integration-swift-urlsession-combine",
    excerpt: "Evolution of network requests in Swift: from basic URLSession to modern approach with Combine.",
    date: "2023-12-15",
    readTime: "11 min",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["API", "URLSession", "Combine", "Asynchronous"],
    available: false, // Not available yet
  },
]

export default function BlogPage() {
  // Filter only available posts for display
  const availablePosts = blogPosts.filter((post) => post.available)

  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-[#1d1d1f]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">iOS Developer Blog</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Sharing experience, knowledge, and best practices in the world of iOS development
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availablePosts.map((post) => (
              <Card
                key={post.id}
                className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/en/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

