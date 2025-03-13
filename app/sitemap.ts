import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maxim-artemov.vercel.app"

  // Список всех статей блога
  const blogPosts = [
    {
      slug: "architectural-patterns-ios-mvvm-vs-mvc",
      lastModified: new Date("2024-03-15"),
    },
    {
      slug: "swiftui-best-practices-adaptive-interfaces",
      lastModified: new Date("2024-02-28"),
    },
    {
      slug: "ios-app-performance-optimization",
      lastModified: new Date("2024-02-10"),
    },
    {
      slug: "ai-integration-ios-apps-core-ml",
      lastModified: new Date("2024-01-25"),
    },
    {
      slug: "ios-security-best-practices",
      lastModified: new Date("2024-01-10"),
    },
    {
      slug: "api-integration-swift-urlsession-combine",
      lastModified: new Date("2023-12-15"),
    },
    {
      slug: "custom-animations-ios",
      lastModified: new Date("2023-11-30"),
    },
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}

