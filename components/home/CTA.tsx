"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  const buttons = [
    { label: "Start a Project", href: "#contact", variant: "default" as const },
    { label: "View Portfolio", href: "#work", variant: "outline" as const },
    { label: "Get in Touch", href: "#contact", variant: "ghost" as const },
  ]

  return (
    <section className="w-full py-16 md:py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--accent)_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--primary)_0%,transparent_50%)] opacity-5" />
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="border border-white/10 backdrop-blur-xl bg-white/5 dark:bg-white/5 rounded-2xl p-12 md:p-16 text-center space-y-8">
            <motion.h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Create Something Extraordinary?
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let&apos;s bring your vision to life with cultural depth and modern execution
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {buttons.map((button, index) => (
                <motion.div
                  key={button.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    variant={button.variant}
                    size="lg"
                    className="px-6 py-6 text-base"
                  >
                    <Link href={button.href}>{button.label}</Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
