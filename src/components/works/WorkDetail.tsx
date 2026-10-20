import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { WorkItem } from "../../data/content"
import { WorkVisual } from "./WorkVisual"

interface WorkDetailProps {
  works: WorkItem[]
  activeId: string | null
  onClose: () => void
  onChange: (id: string) => void
}

const story = [
  { label: "角色", key: "role", tone: "quiet" },
  { label: "挑战", key: "challenge", tone: "strong" },
  { label: "动作", key: "action", tone: "quiet" },
  { label: "结果", key: "result", tone: "result" },
] as const

export function WorkDetail({ works, activeId, onClose, onChange }: WorkDetailProps) {
  const work = works.find((item) => item.id === activeId) ?? null
  const [scene, setScene] = useState<0 | 1>(0)

  useEffect(() => {
    setScene(0)
  }, [activeId])

  useEffect(() => {
    if (!work) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [work, onClose])

  const shift = (step: number) => {
    if (!work) return
    const index = works.findIndex((item) => item.id === work.id)
    const next = works[(index + step + works.length) % works.length]
    onChange(next.id)
  }

  return createPortal(
    <AnimatePresence>
      {work ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button type="button" aria-label="关闭作品详情" className="absolute inset-0 bg-black/45" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-detail-title"
            className="relative z-10 flex max-h-[86vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-modal"
            initial={{ opacity: 0, x: 36, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between px-5 pt-5 sm:px-7">
              <button
                type="button"
                onClick={onClose}
                aria-label="关闭"
                className="rounded-full p-1.5 text-muted transition-colors hover:text-brand-blue"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="上一件作品"
                  onClick={() => shift(-1)}
                  className="rounded-full p-1.5 text-muted transition-colors hover:text-brand-blue"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="下一件作品"
                  onClick={() => shift(1)}
                  className="rounded-full p-1.5 text-muted transition-colors hover:text-brand-blue"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={work.id}
                className="grid min-h-0 flex-1 gap-6 overflow-y-auto px-5 pb-6 sm:px-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-muted">核心案例 {work.index}</p>
                  <h2 id="work-detail-title" className="mt-2 text-2xl font-semibold tracking-tight text-brand-blue sm:text-3xl">
                    {work.name}
                  </h2>
                  <dl className="mt-6 space-y-4">
                    {story.map((item) => (
                      <div key={item.key}>
                        <dt className="text-[11px] tracking-[0.16em] text-muted">{item.label}</dt>
                        <dd
                          className={`mt-1 text-sm leading-relaxed ${
                            item.tone === "strong"
                              ? "font-semibold text-ink"
                              : item.tone === "result"
                                ? "font-semibold text-brand-blue"
                                : "text-copy"
                          }`}
                        >
                          {work[item.key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <div
                    className={`relative h-72 overflow-hidden rounded-2xl sm:h-80 ${
                      work.tone === "dark" ? "bg-brand-blue text-white" : "border border-line bg-surface"
                    }`}
                  >
                    <WorkVisual kind={work.visual} scene={scene} className="h-full w-full p-4" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-muted">{scene === 0 ? "界面草图" : "结构草图"}</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label="上一张图"
                        onClick={() => setScene(0)}
                        className={`h-1.5 w-6 rounded-full ${scene === 0 ? "bg-brand-blue" : "bg-line"}`}
                      />
                      <button
                        type="button"
                        aria-label="下一张图"
                        onClick={() => setScene(1)}
                        className={`h-1.5 w-6 rounded-full ${scene === 1 ? "bg-brand-blue" : "bg-line"}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
