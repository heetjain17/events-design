"use client"

import Link from "next/link"
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react"

export default function Footer() {
  const navigation = [
    { name: "About", href: "#identity" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const social = [
    { name: "Instagram", href: "#", icon: IconBrandInstagram },
    { name: "LinkedIn", href: "#", icon: IconBrandLinkedin },
    { name: "Twitter", href: "#", icon: IconBrandTwitter },
    { name: "YouTube", href: "#", icon: IconBrandYoutube },
  ]

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Branding */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground">Cultural Arts</h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-md">
              Where tradition meets innovation in every performance
            </p>
            <p className="text-muted-foreground text-xs md:text-sm pt-4">
              © {new Date().getFullYear()} Cultural Arts. All rights reserved.
            </p>
          </div>

          {/* Right Column - Navigation & Social */}
          <div className="flex flex-col md:items-end space-y-6">
            {/* Navigation Links */}
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 md:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 text-sm md:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
