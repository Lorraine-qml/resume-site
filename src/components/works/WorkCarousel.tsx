import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react"
import type { WorkVisual as WorkVisualKind } from "../../data/content"
import type { WorkSlide } from "../../data/workStories"
import { WorkVisual } from "./WorkVisual"

interface WorkCarouselProps {
  slides: WorkSlide[]
  visual: WorkVisualKind
  dark?: boolean
  appearance?: "dark" | "light"
  onAppearanceChange?: (appearance: "dark" | "light") => void
  autoplay?: boolean
}

function PreviewTone({
  appearance,
  onChange,
}: {
  appearance: "dark" | "light"
  onChange: (appearance: "dark" | "light") => void
}) {
  const light = appearance === "light"
  const options = [
    { id: "dark" as const, label: "深色版", icon: Moon },
    { id: "light" as const, label: "浅色版", icon: Sun },
  ]

  return (
    <div
      role="group"
      aria-label="预览配色"
      onPointerDown={(event) => event.stopPropagation()}
      className={`absolute left-5 top-4 z-20 inline-flex rounded-full border p-0.5 backdrop-blur-md transition-[background-color,border-color] duration-[400ms] ease-[ease] ${
        light ? "border-brand-blue/10 bg-white/70" : "border-white/35 bg-white/10"
      }`}
    >
      {options.map((option) => {
        const selected = appearance === option.id
        const Icon = option.icon
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] tracking-wide transition-[background-color,color] duration-[400ms] ease-[ease] ${
              selected
                ? light
                  ? "bg-brand-blue/85 text-white"
                  : "bg-white/85 text-brand-blue"
                : light
                  ? "text-brand-blue/65 hover:text-brand-blue"
                  : "text-white/80 hover:text-white"
            }`}
          >
            <Icon className="h-3 w-3" />
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

const AUTOPLAY_MS = 4000
const HOLD_MS = 5000

export function WorkCarousel({
  slides,
  visual,
  dark = false,
  appearance = "dark",
  onAppearanceChange,
  autoplay = false,
}: WorkCarouselProps) {
  const [index, setIndex] = useState(0)
  const startX = useRef<number | null>(null)
  const hovered = useRef(false)
  const holdUntil = useRef(0)
  const slide = slides[index] ?? slides[0]
  const last = slides.length - 1

  const hold = () => {
    holdUntil.current = Date.now() + HOLD_MS
  }

  const go = (next: number) => {
    if (slides.length < 2) return
    hold()
    setIndex((next + slides.length) % slides.length)
  }

  const changeAppearance = (next: "dark" | "light") => {
    hold()
    onAppearanceChange?.(next)
  }

  useEffect(() => {
    if (!autoplay || slides.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let timer = 0
    const schedule = () => {
      const wait = Math.max(AUTOPLAY_MS, holdUntil.current - Date.now())
      timer = window.setTimeout(() => {
        if (hovered.current || document.hidden) {
          schedule()
          return
        }
        setIndex((current) => (current + 1) % slides.length)
      }, wait)
    }
    schedule()
    return () => window.clearTimeout(timer)
  }, [autoplay, slides.length, index])

  const light = Boolean(onAppearanceChange) && appearance === "light"
  const night = dark && !light
  const showCaption = !slide.image && !onAppearanceChange

  return (
    <div
      className="group relative"
      onMouseEnter={() => {
        hovered.current = true
      }}
      onMouseLeave={() => {
        hovered.current = false
      }}
      onPointerDown={(event) => {
        startX.current = event.clientX
      }}
      onPointerUp={(event) => {
        if (startX.current === null) return
        const delta = event.clientX - startX.current
        startX.current = null
        if (delta > 48) go(index - 1)
        if (delta < -48) go(index + 1)
      }}
    >
      <div
        data-tone={onAppearanceChange ? appearance : undefined}
        className={`relative overflow-hidden rounded-2xl shadow-soft ${slide.image ? "aspect-video" : "aspect-[16/10]"} ${
          onAppearanceChange
            ? "preview-stage"
            : night
              ? "bg-brand-blue text-white"
              : "border border-line bg-surface text-brand-blue"
        }`}
      >
        {onAppearanceChange ? <PreviewTone appearance={appearance} onChange={changeAppearance} /> : null}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${slide.image ? "" : "p-6 sm:p-8"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {slide.image ? (
              <img src={slide.image} alt={slide.caption} className="h-full w-full object-cover" />
            ) : (
              <WorkVisual
                kind={visual}
                scene={slide.scene}
                tone={light ? "light" : "dark"}
                metricPlace={onAppearanceChange ? "under-toggle" : "corner"}
                className="h-full w-full"
              />
            )}
          </motion.div>
        </AnimatePresence>
        {showCaption ? (
          <p
            className={`absolute bottom-4 left-5 text-xs tracking-wide transition-colors duration-[400ms] ease-[ease] ${
              night ? "text-white/70" : "text-muted"
            }`}
          >
            {slide.caption}
          </p>
        ) : null}
        {slides.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="上一张"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue opacity-0 shadow-float transition duration-300 hover:text-brand-gold focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="下一张"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue opacity-0 shadow-float transition duration-300 hover:text-brand-gold focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>
      {slides.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((item, dot) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.caption}
              aria-current={dot === index ? "true" : undefined}
              onClick={() => go(dot)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dot === index ? "w-5 bg-brand-gold" : "w-1.5 bg-line hover:bg-brand-gold/50"
              }`}
            />
          ))}
          <span className="sr-only">
            {index + 1} / {last + 1}
          </span>
        </div>
      ) : null}
    </div>
  )
}
