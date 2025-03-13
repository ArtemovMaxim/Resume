"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, MessageSquarePlus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function Testimonials() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    quote: "",
  })

  const testimonials = [
    {
      id: 1,
      name: "Natalia Pimanova",
      position: "Individual Entrepreneur",
      avatar: "/testimonials/testimonial-1.jpg",
      quote:
        "Maxim is one of the most talented iOS developers I've had the pleasure to work with. His deep understanding of Swift and iOS app architecture allowed us to create a high-quality product in a tight timeframe. I was particularly impressed by his ability to optimize app performance, which resulted in a 40% speed increase.",
    },
    {
      id: 2,
      name: "Anton Grishin",
      position: "Individual Entrepreneur",
      avatar: "/testimonials/testimonial-2.jpg",
      quote:
        "Working with Maxim was exceptionally productive. He not only implemented all technical requirements but also suggested several innovative solutions that significantly improved the user experience. Thanks to his work, we increased user retention by 25% and received numerous positive reviews in the App Store.",
    },
    {
      id: 3,
      name: "Dmitry Sidorov",
      position: "Lead Developer, Crypto Exchange",
      avatar: "/testimonials/testimonial-3.jpg",
      quote:
        "Maxim joined our team at a critical moment in the development of our cryptocurrency wallet. His expertise in security and data encryption was invaluable. He quickly mastered our codebase and implemented several key features that made our application one of the most secure on the market. I'm always ready to recommend him as a top-tier iOS developer.",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulating data submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulating an error
      throw new Error("Temporary server error. Please try again later.")

      // This code won't execute due to the error simulation above
      toast({
        title: "Testimonial submitted!",
        description: "Thank you for your testimonial. It will be published after moderation.",
        variant: "success",
      })

      setFormData({ name: "", position: "", quote: "" })
    } catch (error) {
      console.error("Error submitting testimonial:", error)
      toast({
        title: "Submission error",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#121214]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What colleagues and clients say about my work
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4">
                <MessageSquarePlus className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Add Testimonial</DialogTitle>
                <DialogDescription>
                  Share your experience working with Maxim. Your testimonial will be published after moderation.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position and Company</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., CTO, Company Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote">Testimonial</Label>
                  <Textarea
                    id="quote"
                    name="quote"
                    value={formData.quote}
                    onChange={handleChange}
                    placeholder="Share your experience working with Maxim..."
                    rows={5}
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-200 dark:text-blue-900 -translate-x-2 -translate-y-2" />
                    <p className="text-gray-700 dark:text-gray-300 italic pl-4">{testimonial.quote}</p>
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

