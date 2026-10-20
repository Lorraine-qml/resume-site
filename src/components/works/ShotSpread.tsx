import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Lightbulb, Palette, Rocket, TrendingUp, X, ZoomIn, type LucideIcon } from "lucide-react"

export interface SpreadShot {
  id: string
  title: string
  subtitle: string
  image: string
  images?: string[]
  detailLabel: string
  detailKicker: string
  detail: string
  valueKicker: string
  value: string
}

function ShotFrames({ images, active }: { images: string[]; active: number }) {
  if (images.length < 2) {
    return <img src={images[0]} alt="" className="h-auto w-full max-w-full" />
  }

  return (
    <span className="relative block">
      <img src={images[0]} alt="" className="h-auto w-full max-w-full opacity-0" />
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </span>
  )
}

function ShotLightbox({ shot, image, onClose }: { shot: SpreadShot; image: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button type="button" aria-label="关闭大图" className="absolute inset-0 bg-black/70" onClick={onClose} />
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={shot.title}
          className="relative z-10 w-full max-w-6xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22 }}
        >
          <button
            type="button"
            aria-label="关闭"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-brand-blue hover:text-brand-gold"
          >
            <X className="h-4 w-4" />
          </button>
          <img src={image} alt={shot.title} className="max-h-[86vh] w-full rounded-2xl object-contain" />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}

function ShotMedia({ shot, flip, onOpen }: { shot: SpreadShot; flip: boolean; onOpen: (image: string) => void }) {
  const frames = shot.images && shot.images.length > 1 ? shot.images : [shot.image]
  const frameKey = frames.join("|")
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (frames.length < 2) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % frames.length)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [frameKey, frames.length])

  return (
    <button
      type="button"
      aria-label={`放大查看${shot.title}`}
      onClick={() => onOpen(frames[active] ?? shot.image)}
      className={`relative min-w-0 overflow-hidden rounded-2xl bg-brand-blue text-left shadow-soft ${
        flip ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <ShotFrames images={frames} active={active} />
      <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md">
        <ZoomIn className="h-3.5 w-3.5" />
      </span>
    </button>
  )
}

export function ShotSpread({ shots }: { shots: SpreadShot[] }) {
  const [open, setOpen] = useState<{ shot: SpreadShot; image: string } | null>(null)

  return (
    <>
      <div className="mt-14 space-y-16">
        {shots.map((shot, index) => {
          const flip = index % 2 === 1
          const DetailIcon: LucideIcon = flip ? Lightbulb : Palette
          const ValueIcon: LucideIcon = flip ? Rocket : TrendingUp
          return (
            <article
              key={shot.id}
              className={`grid min-w-0 items-center gap-8 ${
                flip ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
              }`}
            >
              <ShotMedia shot={shot} flip={flip} onOpen={(image) => setOpen({ shot, image })} />
              <div className={`min-w-0 ${flip ? "lg:order-1" : "lg:order-2 lg:pr-16"}`}>
                <h4 className="text-2xl font-semibold tracking-tight text-brand-blue">{shot.title}</h4>
                <div className="mt-6 flex items-center gap-2">
                  <DetailIcon className="h-3.5 w-3.5 text-brand-gold" />
                  <p className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">
                    {shot.detailLabel} / {shot.detailKicker}
                  </p>
                </div>
                <p className="mt-1 text-sm leading-7 text-ink">{shot.detail}</p>
                <div className="mt-5 flex items-center gap-2">
                  <ValueIcon className="h-3.5 w-3.5 text-brand-gold" />
                  <p className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">业务价值 / {shot.valueKicker}</p>
                </div>
                <p className="mt-1 text-sm leading-7 text-ink">{shot.value}</p>
              </div>
            </article>
          )
        })}
      </div>
      {open ? <ShotLightbox shot={open.shot} image={open.image} onClose={() => setOpen(null)} /> : null}
    </>
  )
}
