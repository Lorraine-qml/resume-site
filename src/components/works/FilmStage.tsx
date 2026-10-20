import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Play, X, ZoomIn } from "lucide-react"
import type { WorkVisual as WorkVisualKind } from "../../data/content"
import { WorkVisual } from "./WorkVisual"

interface FilmStageProps {
  title: string
  badge: string
  visual: WorkVisualKind
  scene: 0 | 1
  src?: string
  href?: string
}

export function FilmStage({ title, badge, visual, scene, src, href }: FilmStageProps) {
  const [open, setOpen] = useState(false)
  const inlineRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    const video = inlineRef.current
    if (!video) return
    if (open) {
      video.pause()
      return
    }
    void video.play().catch(() => undefined)
  }, [open])

  return (
    <>
      {href ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-card bg-brand-blue shadow-soft">
          <iframe className="h-full w-full" src={href} title={title} allow="autoplay; fullscreen" allowFullScreen />
          <button
            type="button"
            aria-label={`放大查看${title}`}
            onClick={() => setOpen(true)}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : src ? (
        <div className="relative w-full overflow-hidden rounded-card shadow-soft">
          <video
            ref={inlineRef}
            className="block w-full"
            src={src}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={title}
          />
          <button
            type="button"
            aria-label={`放大查看${title}`}
            onClick={() => setOpen(true)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative aspect-video w-full overflow-hidden rounded-card border border-brand-gold/50 bg-brand-blue text-left text-white shadow-soft"
        >
          <div className="pointer-events-none absolute inset-0 bg-cockpit-glow" />
          <WorkVisual kind={visual} scene={scene} className="absolute inset-6 opacity-80" />
          <div className="absolute inset-0 bg-brand-blue/35 backdrop-blur-[1px]" />
          <span className="absolute left-5 top-5 text-[11px] tracking-[0.16em] text-brand-gold">{badge}</span>
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-gold bg-brand-blue/40 text-brand-gold shadow-float transition duration-300 group-hover:scale-105 group-hover:bg-brand-gold group-hover:text-white">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
      {createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button type="button" aria-label="关闭演示" className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="relative z-10 w-full max-w-6xl overflow-hidden rounded-card bg-brand-blue shadow-modal"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
              >
                <button
                  type="button"
                  aria-label="关闭"
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-1.5 text-white hover:text-brand-gold"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="relative text-white">
                  {href ? (
                    <iframe
                      className="aspect-video w-full"
                      src={href}
                      title={title}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  ) : src ? (
                    <video
                      className="block w-full"
                      src={src}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="relative aspect-video p-8 sm:p-12">
                      <WorkVisual kind={visual} scene={scene} className="h-full w-full" />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
