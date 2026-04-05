import { cn } from "@/lib/utils"

interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "navbar"
  className?: string
}

const sizeMap = {
  xs: "h-4",
  sm: "h-8",
  md: "h-16",
  lg: "h-24",
  xl: "h-32",
  "2xl": "h-48",
  navbar: "h-14 md:h-16",
}

export default function Spacer({ size = "md", className }: SpacerProps) {
  return <div className={cn(sizeMap[size], className)} />
}
