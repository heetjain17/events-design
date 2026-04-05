"use client"

import { motion } from "framer-motion"

export default function Philosophy() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--accent)_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--primary)_0%,transparent_50%)] opacity-5" />

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1]">
                Where tradition
                <br />
                meets innovation,
                <br />
                culture becomes
                <br />
                timeless
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block" />

              <motion.div
                className="lg:pl-16 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  We believe that culture is not static—it's a living, breathing force that evolves
                  with each generation. Our approach honors the depth of tradition while embracing
                  the possibilities of modern expression.
                </p>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                  Every performance, every event, every workshop is an opportunity to create
                  meaningful connections that transcend time and geography.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
