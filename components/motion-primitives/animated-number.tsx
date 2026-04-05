"use client"
import { cn } from "@/lib/utils"
import { motion, SpringOptions, useSpring, useTransform } from "motion/react"
import { useEffect } from "react"

export type AnimatedNumberProps = {
  value: number
  className?: string
  springOptions?: SpringOptions
  as?: React.ElementType
}

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as: Component = "span",
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions)
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString())

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  const MotionComponent = motion[Component as keyof typeof motion] as any

  return <MotionComponent className={cn("tabular-nums", className)}>{display}</MotionComponent>
}
