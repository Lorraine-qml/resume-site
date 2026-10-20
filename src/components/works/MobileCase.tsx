import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { mobileStory, type MobileShot } from "../../data/mobileStory"

interface PhoneShellProps {
  shot: MobileShot
  onOpen: (shot: MobileShot) => void
  className?: string
}

function PhoneShell({ shot, onOpen, className = "w-full" }: PhoneShellProps) {
  return (
    <button
      type="button"
      aria-label={`放大查看${shot.caption}`}
      onClick={() => onOpen(shot)}
      className={`group relative block ${className}`}
    >
      <span className="absolute -left-px top-[18%] h-6 w-[2px] rounded-l-sm bg-brand-blue" />
      <span className="absolute -right-px top-[22%] h-9 w-[2px] rounded-r-sm bg-brand-blue" />
      <span className="absolute -right-px top-[38%] h-9 w-[2px] rounded-r-sm bg-brand-blue" />
      <span className="relative block rounded-[1.35rem] bg-brand-blue p-[5px] shadow-[0_14px_28px_rgba(0,49,83,0.14)]">
        <span className="relative block overflow-hidden rounded-[1.1rem] bg-white">
          <span className="pointer-events-none absolute left-1/2 top-1 z-10 h-1 w-7 -translate-x-1/2 rounded-full bg-brand-blue" />
          <img src={shot.image} alt="" className="block h-auto w-full" />
        </span>
      </span>
      <span className="pointer-events-none absolute right-1.5 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-soft">
        <ZoomIn className="h-2.5 w-2.5" />
      </span>
    </button>
  )
}

function PhoneStack({ shots, onOpen }: { shots: MobileShot[]; onOpen: (shot: MobileShot) => void }) {
  const poses = [
    "z-10 origin-bottom -rotate-[6deg] -mr-3 sm:-mr-4",
    "z-20 origin-bottom -mx-1 sm:-mx-2",
    "z-10 origin-bottom rotate-[6deg] -ml-3 sm:-ml-4",
  ]

  return (
    <ul className="mx-auto flex w-[16.5rem] shrink-0 items-end justify-center sm:w-[18rem]">
      {shots.map((shot, index) => (
        <li key={shot.id} className={`w-[38%] transition duration-300 hover:z-30 ${poses[index]}`}>
          <div className="transition duration-300 hover:-translate-y-1">
            <PhoneShell shot={shot} onOpen={onOpen} />
            <p className="mt-1.5 text-center text-[10px] tracking-wide text-muted">{shot.caption}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function BlockCopy({
  title,
  lead,
  points,
}: {
  title: string
  lead: string
  points: { title: string; body: string }[]
}) {
  return (
    <div className="min-w-0">
      <h2 className="text-xl font-semibold tracking-tight text-brand-blue">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-ink">{lead}</p>
      <ul className="mt-5 space-y-4">
        {points.map((point) => (
          <li key={point.title}>
            <p className="text-sm font-semibold text-brand-blue">{point.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink">{point.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function MobileCase() {
  const [open, setOpen] = useState<MobileShot | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="w-full">
      <section className="rounded-2xl bg-white px-4 py-6 shadow-soft sm:px-6 sm:py-8">
        <div className="grid items-center gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          <PhoneStack shots={mobileStory.hero} onOpen={setOpen} />
          <div className="min-w-0">
            <p className="text-xs tracking-[0.16em] text-brand-gold">{mobileStory.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">{mobileStory.title}</h1>
            <p className="mt-3 text-sm text-ink">{mobileStory.subtitle}</p>
            <ul className="mt-6 grid grid-cols-3 gap-3">
              {mobileStory.metrics.map((metric) => (
                <li key={metric.id} className="rounded-card border border-line bg-white px-3 py-4 shadow-soft">
                  <p className="text-2xl font-semibold text-brand-gold">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-ink">{metric.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <dl className="mt-8 grid gap-6 border-t border-line pt-7 text-sm leading-relaxed md:grid-cols-2">
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">角色</dt>
            <dd className="mt-1 font-medium text-brand-blue">{mobileStory.roleTitle}</dd>
            <dd className="mt-1 text-ink">{mobileStory.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">挑战</dt>
            <dd className="mt-2 space-y-2">
              {mobileStory.challenges.map((item) => (
                <p key={item.title}>
                  <span className="font-semibold text-ink">{item.title}</span>
                  <span className="text-ink"> {item.body}</span>
                </p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">动作</dt>
            <dd className="mt-2 space-y-2">
              {mobileStory.actions.map((item) => (
                <p key={item.title}>
                  <span className="font-semibold text-brand-blue">{item.title}</span>
                  <span className="text-ink"> {item.body}</span>
                </p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">结果</dt>
            <dd className="mt-1 font-semibold text-brand-blue">{mobileStory.result}</dd>
          </div>
        </dl>
      </section>

      <div className="mt-5 space-y-5">
        {mobileStory.blocks.map((block) => (
          <section key={block.id} className="rounded-2xl bg-white px-4 py-6 shadow-soft sm:px-6 sm:py-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-10">
              <ul className="mx-auto grid w-full max-w-[16rem] grid-cols-2 items-end gap-3 sm:max-w-[18rem] sm:gap-4">
                {block.shots.map((shot) => (
                  <li key={shot.id}>
                    <PhoneShell shot={shot} onOpen={setOpen} />
                    <p className="mt-1.5 text-center text-[10px] text-muted">{shot.caption}</p>
                  </li>
                ))}
              </ul>
              <BlockCopy title={block.title} lead={block.lead} points={block.points} />
            </div>
          </section>
        ))}
      </div>

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
                aria-label={open.caption}
                className="relative z-10 max-h-[88vh] overflow-hidden rounded-card bg-white shadow-modal"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
              >
                <button
                  type="button"
                  aria-label="关闭"
                  onClick={() => setOpen(null)}
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-1.5 text-brand-blue hover:text-brand-gold"
                >
                  <X className="h-4 w-4" />
                </button>
                <img src={open.image} alt="" className="block max-h-[88vh] w-auto" />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
