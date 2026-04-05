"use client"

import { motion } from "framer-motion"

export default function Identity() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            className="font-heading text-4xl md:text-6xl text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            We are storytellers of culture and tradition
          </motion.h2>

          <motion.p
            className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Blending heritage with contemporary expression, we create performances and experiences
            that resonate across generations and communities.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
