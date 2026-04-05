"use client"

import { motion, useInView } from "framer-motion"
import { AnimatedNumber } from "@/components/motion-primitives/animated-number"
import { useRef, useState } from "react"

interface Stat {
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Events Produced" },
  { value: 50000, suffix: "+", label: "Audience Reached" },
  { value: 150, suffix: "+", label: "Client Partnerships" },
  { value: 25, suffix: "+", label: "Awards Won" },
]

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  if (isInView && value === 0) {
    setValue(stat.value)
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-baseline gap-1 mb-2">
        <AnimatedNumber
          value={value}
          className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight"
          springOptions={{
            bounce: 0,
            duration: 1200,
          }}
        />
        {stat.suffix && (
          <span className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="font-sans text-sm md:text-base text-muted-foreground">{stat.label}</p>
    </motion.div>
  )
}

export default function ImpactPhilosophy() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Our Impact</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results from our cultural initiatives and programs
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-24 md:mb-32">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>

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
