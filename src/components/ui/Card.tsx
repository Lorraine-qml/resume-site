import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
  tone?: "white" | "surface"
}

const toneClassName = {
  white: "bg-white",
  surface: "bg-surface",
} as const

export function Card({
  children,
  className = "",
  interactive = false,
  tone = "white",
}: CardProps) {
  return (
    <div
      className={`rounded-card border border-brand-blue/10 shadow-soft ${toneClassName[tone]} ${
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lift"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
