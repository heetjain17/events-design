"use client"

import { motion } from "framer-motion"
import FeaturedWorkCarousel from "./featured-work-carousel"

const featuredEvents = [
  {
    title: "Cultural Heritage Festival 2024",
    button: "View Details",
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
  },
  {
    title: "Traditional Dance Showcase",
    button: "Learn More",
    src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1200&q=80",
  },
  {
    title: "Community Music Night",
    button: "View Details",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
  },
  {
    title: "Youth Workshop Series",
    button: "Learn More",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
  },
  {
    title: "Annual Celebration Gala",
    button: "View Details",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
  },
  {
    title: "International Arts Exchange",
    button: "Learn More",
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80",
  },
]

export default function FeaturedWork() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Featured Work</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our most impactful cultural events and productions
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FeaturedWorkCarousel items={featuredEvents} />
      </motion.div>
    </section>
  )
}
