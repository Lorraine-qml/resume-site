import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Lightbulb, X, ZoomIn } from "lucide-react"
import type { ConsoleFeature, ConsoleModuleStory } from "../../data/consoleStory"
import { AssetLifecycleFlow } from "./AssetLifecycleFlow"

interface ConsoleModuleCaseProps {
  story: ConsoleModuleStory
  /** Where to place the lifecycle flow relative to feature blocks. Defaults to after. */
  lifecyclePlacement?: "before" | "after"
}

function FeatureFrames({ images, active }: { images: string[]; active: number }) {
  if (images.length < 2) {
    return <img src={images[0]} alt="" className="block h-auto w-full" />
  }

  return (
    <span className="relative block">
      <img src={images[0]} alt="" className="block h-auto w-full opacity-0" />
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

function GoldText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={`${part}-${index}`} className="font-semibold text-brand-gold">
              {part.slice(2, -2)}
            </span>
          )
        }
        return <span key={`${part}-${index}`}>{part}</span>
      })}
    </>
  )
}

function FeatureBlock({ feature, flip }: { feature: ConsoleFeature; flip: boolean }) {
  const frames = feature.images && feature.images.length > 0 ? feature.images : [feature.image]
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const frameKey = frames.join("|")

  useEffect(() => {
    if (frames.length < 2) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % frames.length)
    }, 2800)
    return () => window.clearInterval(timer)
  }, [frameKey, frames.length])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const currentImage = frames[active] ?? feature.image

  return (
    <>
      <article
        className={`grid min-w-0 items-center gap-8 ${
          flip ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        }`}
      >
        <div className={`min-w-0 ${flip ? "lg:order-2" : "lg:order-1"}`}>
          <button
            type="button"
            aria-label={`放大查看${feature.title}`}
            onClick={() => setOpen(true)}
            className="relative min-w-0 w-full overflow-hidden rounded-2xl border border-line bg-white text-left shadow-soft"
          >
            <FeatureFrames images={frames} active={active} />
            <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-brand-blue/15 bg-white/90 text-brand-blue shadow-soft">
              <ZoomIn className="h-3.5 w-3.5" />
            </span>
          </button>
          {feature.imageNote ? (
            <p className="mt-2 text-[11px] leading-5 text-muted">* {feature.imageNote}</p>
          ) : null}
        </div>

        <div className={`min-w-0 ${flip ? "lg:order-1" : "lg:order-2 lg:pr-10"}`}>
          <h3 className="text-2xl font-semibold tracking-tight text-brand-blue">{feature.title}</h3>
          <div className="mt-5 flex items-center gap-2">
            <Lightbulb className="h-3.5 w-3.5 text-brand-gold" />
            <p className="text-[10px] tracking-[0.16em] text-brand-gold">【{feature.kicker}】</p>
          </div>
          <p className="mt-2 text-sm leading-[1.75] text-ink">
            <GoldText text={feature.lead} />
          </p>
          <ul className="mt-5 space-y-4">
            {feature.points.map((point) => (
              <li key={point.title}>
                <p className="text-sm font-semibold text-brand-blue">{point.title}</p>
                <p className="mt-1 text-sm leading-[1.75] text-ink">
                  <GoldText text={point.body} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {open
        ? createPortal(
            <AnimatePresence>
              <motion.div
                className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button type="button" aria-label="关闭大图" className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={feature.title}
                  className="relative z-10 w-full max-w-6xl"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                >
                  <button
                    type="button"
                    aria-label="关闭"
                    onClick={() => setOpen(false)}
                    className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-brand-blue hover:text-brand-gold"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <img src={currentImage} alt={feature.title} className="max-h-[86vh] w-full rounded-2xl object-contain" />
                </motion.div>
              </motion.div>
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  )
}

export function ConsoleModuleCase({ story, lifecyclePlacement = "after" }: ConsoleModuleCaseProps) {
  const flow =
    story.lifecycle && lifecyclePlacement === "before" ? (
      <div className="mt-10">
        <AssetLifecycleFlow lifecycle={story.lifecycle} />
      </div>
    ) : story.lifecycle && lifecyclePlacement === "after" ? (
      <AssetLifecycleFlow lifecycle={story.lifecycle} />
    ) : null

  return (
    <div className="mt-5">
      <section className="rounded-2xl border border-line bg-white px-6 py-7 shadow-soft md:px-8 md:py-8">
        {story.eyebrow ? <p className="text-xs tracking-[0.16em] text-brand-gold">{story.eyebrow}</p> : null}
        <p className={`text-xs tracking-[0.16em] text-brand-gold ${story.eyebrow ? "mt-2" : ""}`}>{story.label}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">{story.name}</h2>
        <dl className="mt-6 grid gap-5 border-t border-line pt-6 text-sm leading-[1.75] md:grid-cols-3">
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">业务痛点</dt>
            <dd className="mt-2 text-ink">{story.pain}</dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">{story.roleLabel ?? "我的角色"}</dt>
            <dd className="mt-2 text-ink">{story.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-[0.16em] text-brand-gold">{story.designLabel ?? "设计主张"}</dt>
            <dd className="mt-2 text-ink">{story.design}</dd>
          </div>
        </dl>
      </section>

      {lifecyclePlacement === "before" ? flow : null}

      <div className="mt-10 space-y-14">
        {story.features.map((feature, index) => (
          <FeatureBlock key={feature.id} feature={feature} flip={index % 2 === 1} />
        ))}
      </div>

      {lifecyclePlacement === "after" ? flow : null}
    </div>
  )
}
