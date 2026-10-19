import { motion } from "framer-motion"

interface FloatTagProps {
  label: string
  value?: string
  delay?: number
  variant?: "metric" | "skill"
}

export function FloatTag({ label, value, delay = 0, variant = "skill" }: FloatTagProps) {
  const isMetric = variant === "metric"

  return (
    <motion.li
      className={
        isMetric
          ? "flex min-w-[6.5rem] flex-col gap-1.5 rounded-card border border-brand-gold/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md"
          : "inline-flex items-center whitespace-nowrap rounded-full border border-brand-blue/10 bg-white/90 px-3 py-1.5 text-sm text-brand-blue/75 shadow-soft backdrop-blur-md"
      }
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {isMetric ? (
        <>
          <span className="font-sans text-2xl font-semibold tabular-nums leading-none text-brand-gold">
            {value}
          </span>
          <span className="text-xs tracking-wide text-brand-blue/60">{label}</span>
        </>
      ) : (
        label
      )}
    </motion.li>
  )
}
