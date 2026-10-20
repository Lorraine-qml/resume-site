import { useEffect, useState } from "react"
import type { MiniFrame, MiniVisualKind } from "../../data/content"

interface MiniVisualProps {
  kind: MiniVisualKind
  frames?: MiniFrame[]
}

function FrameReel({ frames }: { frames: MiniFrame[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (frames.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % frames.length)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [frames])

  return (
    <span className="relative block h-full w-full">
      {frames.map((frame, index) => (
        <img
          key={frame.image}
          src={frame.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </span>
  )
}

function UiMark() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="18" y="18" width="84" height="144" rx="8" className="fill-white/[0.04] stroke-white/20" strokeWidth="1" />
      {[0, 1, 2, 3].map((row) => (
        <rect
          key={row}
          x="30"
          y={36 + row * 30}
          width={row === 1 ? 58 : 44}
          height="12"
          rx="2"
          className={row === 1 ? "fill-brand-gold/80" : "fill-white/20"}
        />
      ))}
      <path d="M128 142L164 96L196 112L230 58L264 78L300 36V156H128Z" className="fill-brand-gold/10 stroke-none" />
      <path
        d="M128 142L164 96L196 112L230 58L264 78L300 36"
        className="fill-none stroke-brand-gold transition-colors duration-300"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [128, 142],
        [164, 96],
        [196, 112],
        [230, 58],
        [264, 78],
        [300, 36],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" className="fill-white" />
      ))}
    </svg>
  )
}

function NodeMark() {
  const nodes = [
    { x: 64, y: 92, r: 8 },
    { x: 142, y: 42, r: 6 },
    { x: 158, y: 140, r: 6 },
    { x: 250, y: 86, r: 11 },
  ]
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <path d="M64 92L142 42L250 86L158 140L64 92L250 86" className="fill-none stroke-white/30" strokeWidth="1.2" />
      <circle cx="250" cy="86" r="24" className="fill-brand-gold/15" />
      {nodes.map((node) => (
        <circle
          key={`${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          className={node.r > 7 ? "fill-brand-gold" : "fill-white/80"}
        />
      ))}
      <circle cx="250" cy="86" r="3.5" className="fill-white" />
    </svg>
  )
}

function PhoneMark() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="128" y="12" width="64" height="156" rx="14" className="fill-white/[0.04] stroke-white/35" strokeWidth="1.4" />
      <rect x="146" y="20" width="28" height="4" rx="2" className="fill-white/30" />
      <rect x="140" y="34" width="40" height="28" rx="4" className="fill-brand-gold/70" />
      <rect x="140" y="72" width="18" height="32" rx="3" className="fill-white/15" />
      <rect x="162" y="72" width="18" height="32" rx="3" className="fill-white/15" />
      <rect x="140" y="114" width="40" height="12" rx="2" className="fill-white/20" />
      <rect x="140" y="132" width="28" height="12" rx="2" className="fill-white/10" />
      <circle cx="160" cy="156" r="2.5" className="fill-brand-gold" />
    </svg>
  )
}

export function MiniVisual({ kind, frames }: MiniVisualProps) {
  return (
    <div className="my-6 h-[180px] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-sea-deep to-brand-blue">
      {frames && frames.length > 0 ? <FrameReel frames={frames} /> : null}
      {!frames?.length && kind === "ui" ? <UiMark /> : null}
      {!frames?.length && kind === "node" ? <NodeMark /> : null}
      {!frames?.length && kind === "phone" ? <PhoneMark /> : null}
    </div>
  )
}
