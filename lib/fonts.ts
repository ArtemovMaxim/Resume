import { Inter, Roboto_Mono } from "next/font/google"

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto-mono",
  preload: true,
})

