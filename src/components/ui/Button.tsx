import type { ReactNode } from "react"

type ButtonVariant = "primary" | "ghost" | "gold"

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  href?: string
  download?: boolean | string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "border-brand-blue bg-brand-blue text-white hover:border-brand-gold",
  ghost:
    "border-brand-blue/15 bg-white text-brand-blue hover:border-brand-gold",
  gold:
    "border-brand-gold bg-transparent text-brand-gold hover:bg-brand-gold hover:text-brand-blue",
}

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  download = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-card border px-5 py-2.5 text-sm shadow-soft transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${variantClassName[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        download={typeof download === "string" ? download : download || undefined}
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
