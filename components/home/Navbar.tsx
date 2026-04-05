"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: isScrolled ? "hsl(var(--background) / 0.8)" : "transparent",
        borderBottomWidth: isScrolled ? "1px" : "0px",
        borderBottomColor: isScrolled ? "hsl(var(--border))" : "transparent",
      }}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-heading text-xl md:text-2xl text-foreground">
            LOGO
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm md:text-base text-foreground transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded font-sans font-medium text-sm md:text-base transition-opacity duration-200 hover:opacity-90"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-base text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded font-sans font-medium text-base text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
