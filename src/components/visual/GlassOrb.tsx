import type { MouseEvent } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const orbitLabels = [
  { label: "需求", className: "left-1/2 top-2 -translate-x-1/2" },
  { label: "研发", className: "bottom-8 left-2" },
  { label: "运营", className: "bottom-8 right-2" },
]

export function GlassOrb() {
  const rotateX = useMotionValue(8)
  const rotateY = useMotionValue(-14)
  const springX = useSpring(rotateX, { stiffness: 80, damping: 16 })
  const springY = useSpring(rotateY, { stiffness: 80, damping: 16 })

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 20)
    rotateX.set(-py * 16)
  }

  const onLeave = () => {
    rotateX.set(8)
    rotateY.set(-14)
  }

  return (
    <div
      className="orb-stage relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="orb-preserve relative h-full w-full"
        style={{ rotateX: springX, rotateY: springY }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-[6%] rounded-full border border-brand-blue/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="orb-arc-mask absolute inset-[6%] rounded-full bg-orb-arc"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[14%] rounded-full bg-orb-glass shadow-orb"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-[28%] rounded-full border border-white/50" />
      </motion.div>
      {orbitLabels.map((item) => (
        <span
          key={item.label}
          className={`absolute text-[11px] tracking-[0.22em] text-brand-blue/55 ${item.className}`}
        >
          {item.label}
        </span>
      ))}
    </div>
  )
}
