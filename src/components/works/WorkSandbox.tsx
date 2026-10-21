import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { miniCards, type MiniCard } from "../../data/content"
import { navigate } from "../../lib/route"
import { UnifiedTagList } from "../ui/UnifiedTag"
import { CockpitCarousel } from "./CockpitCarousel"
import { MiniVisual } from "./MiniVisual"

function DetailCta({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1 rounded-lg border border-brand-gold bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-gold transition duration-300 group-hover:bg-brand-gold group-hover:text-white group-hover:shadow-cta-gold ${className}`}
    >
      查看详细方案
      <ArrowUpRight className="h-3.5 w-3.5" />
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
      className={`overflow-hidden rounded-xl border p-3 ${
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
      className={`group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-lift ${className}`}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-lg font-bold tracking-wide text-brand-blue/55">{card.index}</span>
        <span className="text-muted">{card.tag}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-blue">{card.title}</h3>
      <p className="mt-3 text-sm leading-[1.65] text-copy">{card.summary}</p>
      {children}
    </a>
  )
}

function CockpitCard({ card }: { card: MiniCard }) {
  return (
    <CardShell card={card} className="lg:col-span-7">
      <div className="mt-6 flex min-h-0 flex-1 flex-col gap-5 lg:flex-row">
        <MediaFrame className="min-w-0 flex-[1.2]">
          {card.frames && card.frames.length > 0 ? (
            <CockpitCarousel frames={card.frames} ariaLabel="宏观决策驾驶舱预览" />
          ) : (
            <div className="h-[220px]">
              <MiniVisual kind={card.visual} bare />
            </div>
          )}
        </MediaFrame>
        <div className="flex min-w-0 flex-[0.8] flex-col justify-between gap-4">
          <div>
            <p className="text-xs text-muted">覆盖行业</p>
            <UnifiedTagList tags={card.scenes} className="mt-2.5" />
          </div>
          <DetailCta className="w-fit" />
        </div>
      </div>
    </CardShell>
  )
}

function StackCard({ card, span }: { card: MiniCard; span: "5" | "6" }) {
  return (
    <CardShell card={card} className={span === "5" ? "lg:col-span-5" : "lg:col-span-6"}>
      <MediaFrame className="mt-6">
        {card.frames && card.frames.length > 0 ? (
          <CockpitCarousel
            frames={card.frames}
            heightClassName="h-[150px]"
            intervalMs={1000}
            ariaLabel={`${card.title}预览`}
          />
        ) : (
          <div className="h-[150px]">
            <MiniVisual kind={card.visual} bare />
          </div>
        )}
      </MediaFrame>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <UnifiedTagList tags={card.scenes} />
        <DetailCta />
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
    <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-6 px-6 pt-5 md:px-6 lg:grid-cols-12 lg:px-10">
      {cockpit ? <CockpitCard card={cockpit} /> : null}
      {consoleCard ? <StackCard card={consoleCard} span="5" /> : null}
      {neural ? <StackCard card={neural} span="6" /> : null}
      {mobile ? <StackCard card={mobile} span="6" /> : null}
    </div>
  )
}
