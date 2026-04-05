"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(min-width: 768px)")

    if (mediaQuery.matches && imageRef.current && heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(imageRef.current, {
          y: "30%",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      return () => ctx.revert()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/hero-dark.jpg"
          alt="Concert stage"
          fill
          priority
          className="object-cover dark:block hidden"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <Image
          src="/hero-light.png"
          alt="Cultural performance"
          fill
          priority
          className="object-cover dark:hidden block"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.6), rgba(10,10,10,0.9))",
        }}
      />

      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 dark:hidden block"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5))",
        }}
      />

      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 py-32">
            <motion.h1
              className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] dark:text-white text-black/90"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              Where Culture Meets Modern Expression
            </motion.h1>

            <motion.p
              className="dark:text-white/60 text-black/60 text-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              Bringing cultural narratives to life through performance and art
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-block border border-white/20 bg-white/5 backdrop-blur-md dark:text-white text-black/90 px-6 py-3 rounded-sm hover:bg-white/10 transition-all duration-200 mt-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Explore Our Work
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
