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
            duration: 2500,
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

export default function ScaleImpact() {
  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
