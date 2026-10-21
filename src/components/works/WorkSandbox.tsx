import type { ReactNode } from "react"
import { ArrowUpRight, BookOpen } from "lucide-react"
import { miniCards, type MiniCard } from "../../data/content"
import { navigate } from "../../lib/route"
import { UnifiedTagList } from "../ui/UnifiedTag"
import { CockpitCarousel } from "./CockpitCarousel"
import { MiniVisual } from "./MiniVisual"

function DetailCta({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md bg-brand-gold px-3.5 py-2 text-xs font-normal leading-none text-white transition duration-300 group-hover:bg-brand-gold/85 group-hover:shadow-cta-gold ${className}`}
    >
      <BookOpen className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      阅览设计全貌
      <ArrowUpRight
        className="h-3.5 w-3.5 shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </span>
  )
}

function MediaFrame({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode
  className?: string
  tone?: "light" | "dark"
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border p-2.5 ${
        tone === "dark" ? "border-sea-navy bg-sea-navy" : "border-line bg-surface"
      } ${className}`}
    >
      <div className="overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.03]">
        {children}
      </div>
    </div>
  )
}

function CardShell({
  card,
  className,
  children,
}: {
  card: MiniCard
  className: string
  children: ReactNode
}) {
  return (
    <a
      href={`/works/${card.id}`}
      onClick={(event) => {
        event.preventDefault()
        navigate(`/works/${card.id}`)
      }}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-lift sm:p-6 ${className}`}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-base font-bold tracking-wide text-brand-blue/55">{card.index}</span>
        <span className="text-xs text-muted sm:text-sm">{card.tag}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-brand-blue sm:text-2xl">{card.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-[1.55] text-copy">{card.summary}</p>
      {children}
    </a>
  )
}

/** 首行预览高度：压缩后首屏可露出 03 / 04 标题 */
const topMediaHeight = "h-[140px] sm:h-[150px] lg:h-[160px]"
const bottomMediaHeight = "h-[120px] sm:h-[130px] lg:h-[140px]"

function CockpitCard({ card }: { card: MiniCard }) {
  return (
    <CardShell card={card} className="lg:col-span-7">
      <div className="mt-4 flex flex-1 flex-col">
        <MediaFrame>
          {card.frames && card.frames.length > 0 ? (
            <CockpitCarousel
              frames={card.frames}
              heightClassName={topMediaHeight}
              ariaLabel="宏观决策驾驶舱预览"
            />
          ) : (
            <div className={topMediaHeight}>
              <MiniVisual kind={card.visual} bare />
            </div>
          )}
        </MediaFrame>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-3">
          <div className="min-w-0">
            <p className="mb-1.5 text-[10px] tracking-wide text-muted">覆盖行业</p>
            <UnifiedTagList tags={card.scenes} />
          </div>
          <DetailCta />
        </div>
      </div>
    </CardShell>
  )
}

function StackCard({ card, span }: { card: MiniCard; span: "5" | "6" }) {
  const besideCockpit = span === "5"
  const mediaHeight = besideCockpit ? topMediaHeight : bottomMediaHeight

  return (
    <CardShell card={card} className={span === "5" ? "lg:col-span-5" : "lg:col-span-6"}>
      <div className="mt-4 flex flex-1 flex-col">
        <MediaFrame>
          {card.frames && card.frames.length > 0 ? (
            <CockpitCarousel
              frames={card.frames}
              heightClassName={mediaHeight}
              intervalMs={1000}
              ariaLabel={`${card.title}预览`}
            />
          ) : (
            <div className={mediaHeight}>
              <MiniVisual kind={card.visual} bare />
            </div>
          )}
        </MediaFrame>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-3">
          <UnifiedTagList tags={card.scenes} />
          <DetailCta />
        </div>
      </div>
    </CardShell>
  )
}

export function WorkSandbox() {
  const cockpit = miniCards.find((card) => card.id === "cockpit")
  const consoleCard = miniCards.find((card) => card.id === "console")
  const neural = miniCards.find((card) => card.id === "neural")
  const mobile = miniCards.find((card) => card.id === "mobile")

  return (
    <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-4 px-6 pt-4 md:px-6 lg:grid-cols-12 lg:gap-5 lg:px-10">
      {cockpit ? <CockpitCard card={cockpit} /> : null}
      {consoleCard ? <StackCard card={consoleCard} span="5" /> : null}
      {neural ? <StackCard card={neural} span="6" /> : null}
      {mobile ? <StackCard card={mobile} span="6" /> : null}
    </div>
  )
}
