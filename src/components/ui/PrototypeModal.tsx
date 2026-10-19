import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface PrototypeModalProps {
  open: boolean
  title: string
  src?: string
  onClose: () => void
}

export function PrototypeModal({ open, title, src, onClose }: PrototypeModalProps) {
  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-blue/40 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="prototype-title"
            className="flex h-[min(82vh,760px)] w-full max-w-5xl flex-col overflow-hidden rounded-card bg-white shadow-lift"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-blue/10 px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                <p id="prototype-title" className="text-sm text-brand-blue">
                  {title}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="关闭"
                className="rounded-full p-1.5 text-brand-blue/70 transition-colors hover:bg-surface hover:text-brand-blue"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-surface">
              {src ? (
                <iframe title={title} src={src} className="h-full w-full border-0" />
              ) : (
                <div className="flex h-full items-center justify-center px-8">
                  <div className="max-w-md text-center">
                    <p className="text-sm tracking-[0.18em] text-brand-gold">PROTOTYPE</p>
                    <p className="mt-4 text-lg font-medium text-brand-blue">原型画布已就绪</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-blue/70">
                      接入墨刀或 Axure 链接后，可在此直接体验权限配置与 AI 工单流转，无需离开本页。
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
