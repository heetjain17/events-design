"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative border border-white/20 bg-white/5 backdrop-blur-sm dark:text-white text-black/90 p-2 rounded-sm hover:bg-white/10 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </button>
  )
}
