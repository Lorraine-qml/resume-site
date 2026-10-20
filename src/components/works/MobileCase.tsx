import { useEffect, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { mobileStory, type MobileShot } from "../../data/mobileStory"
import { UnifiedTag } from "../ui/UnifiedTag"

interface PhoneFrameProps {
  shot: MobileShot
  className?: string
}

/** Unified iPhone 17 Pro Max shell — deep-space black titanium + Dynamic Island. */
function PhoneFrame({ shot, className = "w-full" }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Side buttons — titanium */}
      <span aria-hidden="true" className="absolute -left-px top-[16%] h-7 w-[2px] rounded-l-sm bg-device-gloss" />
      <span aria-hidden="true" className="absolute -left-px top-[26%] h-10 w-[2px] rounded-l-sm bg-device-gloss" />
      <span aria-hidden="true" className="absolute -right-px top-[22%] h-12 w-[2px] rounded-r-sm bg-device-gloss" />

      <div className="relative rounded-[1.55rem] bg-device-frame p-[3px] shadow-float ring-1 ring-black/20">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.35rem] bg-white">
          {/* Dynamic Island */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-2.5 z-20 h-[1.15rem] w-[5.25rem] -translate-x-1/2 rounded-full bg-device-island shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <span className="absolute right-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-device-gloss/80" />
          </span>
          <img
            src={shot.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}

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
      <PhoneFrame shot={shot} />
      <span className="pointer-events-none absolute right-1.5 top-1.5 z-30 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-brand-blue opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
        <ZoomIn className="h-2.5 w-2.5" />
      </span>
    </button>
  )
}

/** Equal-spaced flat gallery — magazine showcase. */
function PhoneGallery({ shots, onOpen }: { shots: MobileShot[]; onOpen: (shot: MobileShot) => void }) {
  return (
    <ul className="flex w-full items-end justify-center gap-2.5 sm:gap-3.5">
      {shots.map((shot) => (
        <li key={shot.id} className="min-w-0 flex-1">
          <div className="transition duration-300 hover:-translate-y-1">
            <PhoneShell shot={shot} onOpen={onOpen} />
            <p className="mt-3 text-center text-[12px] tracking-wide text-muted">{shot.caption}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Two phones side by side — for scene feature blocks. */
function PhonePair({ shots, onOpen }: { shots: MobileShot[]; onOpen: (shot: MobileShot) => void }) {
  return (
    <ul className="mx-auto flex w-full max-w-[18rem] items-end justify-center gap-3 sm:max-w-[20rem]">
      {shots.map((shot) => (
        <li key={shot.id} className="min-w-0 flex-1">
          <div className="transition duration-300 hover:-translate-y-1">
            <PhoneShell shot={shot} onOpen={onOpen} />
            <p className="mt-2.5 text-center text-[11px] tracking-wide text-muted">{shot.caption}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function DetailRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <span className="w-9 shrink-0 pt-1 text-sm font-semibold text-brand-blue">{label}</span>
      <div className="flex min-w-0 flex-wrap gap-2">{children}</div>
    </div>
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
      <section className="rounded-2xl bg-white px-4 py-6 shadow-soft sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
          {/* Left · 45% — unified phone gallery */}
          <div className="w-full lg:w-[45%] lg:shrink-0">
            <PhoneGallery shots={mobileStory.hero} onOpen={setOpen} />
          </div>

          {/* Right · 55% — metrics + tagged story */}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-gold">{mobileStory.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">
              {mobileStory.title}
            </h1>
            <p className="mt-2 text-sm text-copy">{mobileStory.subtitle}</p>

            <ul className="mt-7 grid grid-cols-3 gap-3">
              {mobileStory.metrics.map((metric) => (
                <li
                  key={metric.id}
                  className="rounded-card border border-line bg-white px-3 py-4 shadow-soft"
                >
                  <p className="text-2xl font-semibold text-brand-gold">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-copy">{metric.label}</p>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-5">
              <DetailRow label="角色">
                {mobileStory.roleTags.map((tag) => (
                  <UnifiedTag key={tag} tone="blue" dot={false}>
                    {tag}
                  </UnifiedTag>
                ))}
              </DetailRow>
              <DetailRow label="挑战">
                {mobileStory.challengeTags.map((tag) => (
                  <UnifiedTag key={tag} tone="gold" dot={false}>
                    {tag}
                  </UnifiedTag>
                ))}
              </DetailRow>
              <DetailRow label="动作">
                {mobileStory.actionTags.map((tag) => (
                  <UnifiedTag key={tag} tone="blue" dot={false}>
                    {tag}
                  </UnifiedTag>
                ))}
              </DetailRow>
              <DetailRow label="结果">
                {mobileStory.resultTags.map((tag) => (
                  <UnifiedTag key={tag} tone="success" dot={false}>
                    {tag}
                  </UnifiedTag>
                ))}
              </DetailRow>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5 space-y-5">
        {mobileStory.blocks.map((block, index) => (
          <section
            key={block.id}
            className="rounded-2xl border border-line bg-white px-4 py-6 shadow-soft sm:px-6 sm:py-8"
          >
            <div
              className={`grid items-center gap-8 lg:gap-10 ${
                index % 2 === 1
                  ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]"
                  : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]"
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <PhonePair shots={block.shots} onOpen={setOpen} />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <BlockCopy title={block.title} lead={block.lead} points={block.points} />
              </div>
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
              <button
                type="button"
                aria-label="关闭大图"
                className="absolute inset-0 bg-black/70"
                onClick={() => setOpen(null)}
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={open.caption}
                className="relative z-10 w-[min(100%,18rem)]"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
              >
                <button
                  type="button"
                  aria-label="关闭"
                  onClick={() => setOpen(null)}
                  className="absolute -right-2 -top-2 z-30 rounded-full bg-white p-1.5 text-brand-blue shadow-soft hover:text-brand-gold"
                >
                  <X className="h-4 w-4" />
                </button>
                <PhoneFrame shot={open} />
                <p className="mt-3 text-center text-sm text-white">{open.caption}</p>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
