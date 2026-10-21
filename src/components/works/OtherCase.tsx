import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { otherStory, type OtherCard } from "../../data/otherStory"
import { ProjectIntro } from "./ProjectIntro"

export function OtherCase() {
  const [open, setOpen] = useState<OtherCard | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div>
      <ProjectIntro overview={otherStory.overview} highlights={otherStory.highlights} />
      <ul className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {otherStory.cards.map((card) => (
          <li key={card.id} className="min-w-0">
            <button
              type="button"
              aria-label={`放大查看${card.title}`}
              onClick={() => setOpen(card)}
              className="relative w-full overflow-hidden rounded-card shadow-soft"
            >
              <img src={card.image} alt="" className="block h-auto w-full" />
              <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md">
                <ZoomIn className="h-3.5 w-3.5" />
              </span>
            </button>
            <p className="mt-4 text-[10px] tracking-[0.16em] text-brand-gold">{card.subtitle}</p>
            <h4 className="mt-2 text-xl font-semibold tracking-tight text-brand-blue">{card.title}</h4>
            <p className="mt-3 text-[10px] tracking-[0.16em] text-brand-gold">功能说明</p>
            <p className="mt-1 text-sm leading-7 text-ink">{card.detail}</p>
            <p className="mt-3 text-[10px] tracking-[0.16em] text-brand-gold">UI 亮点</p>
            <p className="mt-1 text-sm leading-7 text-ink">{card.highlight}</p>
          </li>
        ))}
      </ul>
      {createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button type="button" aria-label="关闭大图" className="absolute inset-0 bg-black/70" onClick={() => setOpen(null)} />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={open.title}
                className="relative z-10 w-full max-w-6xl overflow-hidden rounded-card bg-brand-blue shadow-modal"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
              >
                <button
                  type="button"
                  aria-label="关闭"
                  onClick={() => setOpen(null)}
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-1.5 text-white hover:text-brand-gold"
                >
                  <X className="h-4 w-4" />
                </button>
                <img src={open.image} alt="" className="block w-full" />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
