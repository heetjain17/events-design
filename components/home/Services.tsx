"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Performances",
    description: "Live cultural performances and theatrical productions",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80",
    gridClass: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    height: "h-96 md:h-full",
  },
  {
    title: "Events",
    description: "Large-scale cultural events and festivals",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    gridClass: "col-span-1 md:col-span-2 row-span-1",
    height: "h-80 md:h-full",
  },
  {
    title: "Workshops",
    description: "Educational programs and cultural workshops",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    gridClass: "col-span-1 md:col-span-1 row-span-1",
    height: "h-80 md:h-full",
  },
  {
    title: "Digital Content",
    description: "Video production and digital storytelling",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    gridClass: "col-span-1 md:col-span-1 row-span-1",
    height: "h-80 md:h-full",
  },
]

export default function Services() {
  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">What We Do</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing cultural narratives to life through diverse creative offerings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-7xl mx-auto md:h-200">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative ${service.gridClass} ${service.height} rounded-sm overflow-hidden group cursor-pointer border border-white/10`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <motion.h3
                  className="font-heading text-3xl md:text-5xl text-white mb-3"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <p className="font-sans text-base md:text-lg text-white/80 max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
