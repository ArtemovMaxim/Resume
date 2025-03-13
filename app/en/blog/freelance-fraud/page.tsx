import type { Metadata } from "next"
import FreelanceFraudClientPage from "./FreelanceFraudClientPage"

export const metadata: Metadata = {
  title: "Fraud in Freelancing and Self-Employment: How to Protect Your Rights | Maxim Artemov's Blog",
  description:
    "Detailed analysis of common fraud schemes in freelancing and self-employment, legal aspects, and practical advice on protecting your rights in Russia.",
  keywords:
    "freelancing, self-employment, freelance fraud, unpaid salary, labor law, freelancer rights protection, civil contract, self-employed contract",
  openGraph: {
    title: "Fraud in Freelancing and Self-Employment: How to Protect Your Rights",
    description:
      "Detailed analysis of common fraud schemes in freelancing and self-employment, legal aspects, and practical advice on protecting your rights in Russia.",
    type: "article",
    publishedTime: "2024-03-20",
    authors: ["Maxim Artemov"],
    tags: ["freelancing", "self-employment", "labor law", "rights protection"],
  },
}

export default function FreelanceFraudPage() {
  return <FreelanceFraudClientPage />
}

