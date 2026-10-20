import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react"
import { motion } from "framer-motion"
import type { MiniFrame } from "../../data/content"

interface CockpitCarouselProps {
  frames: MiniFrame[]
  /** Fixed height of the carousel viewport. */
  heightClassName?: string
  intervalMs?: number
  ariaLabel?: string
}

export function CockpitCarousel({
  frames,
  heightClassName = "h-[220px] sm:h-[240px] lg:h-[260px]",
  intervalMs = 1000,
  ariaLabel = "作品预览轮播",
}: CockpitCarouselProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const drag = useRef<{ startX: number; delta: number; dragging: boolean }>({
    startX: 0,
    delta: 0,
    dragging: false,
  })
  const count = frames.length

  const go = useCallback(
    (next: number) => {
      if (count < 1) return
      setActive(((next % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (count < 2 || paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => go(active + 1), intervalMs)
    return () => window.clearInterval(timer)
  }, [active, count, go, intervalMs, paused])

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    drag.current = { startX: event.clientX, delta: 0, dragging: true }
    event.currentTarget.setPointerCapture(event.pointerId)
    setPaused(true)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.dragging) return
    drag.current.delta = event.clientX - drag.current.startX
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.dragging) return
    const { delta } = drag.current
    drag.current.dragging = false
    event.currentTarget.releasePointerCapture(event.pointerId)
    if (Math.abs(delta) > 40) {
      go(delta < 0 ? active + 1 : active - 1)
    }
    setPaused(false)
  }

  if (count === 0) return null

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg bg-preview select-none ${heightClassName}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: `-${active * 100}%` }}
        transition={{ type: "tween", duration: 0.45, ease: "easeOut" }}
      >
        {frames.map((frame) => (
          <div key={frame.image} className="h-full w-full shrink-0">
            <img
              src={frame.image}
              alt={frame.label}
              draggable={false}
              className="pointer-events-none h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </motion.div>

      {count > 1 ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-2.5 flex items-center justify-center gap-1.5">
          {frames.map((frame, index) => (
            <button
              key={frame.image}
              type="button"
              aria-label={`切换到${frame.label}`}
              aria-current={index === active}
              onClick={(event) => {
                event.stopPropagation()
                go(index)
              }}
              className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
                index === active ? "w-4 bg-brand-gold" : "w-1.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
