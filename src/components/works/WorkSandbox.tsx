import { ArrowUpRight } from "lucide-react"
import { miniCards, type MiniCard } from "../../data/content"
import { navigate } from "../../lib/route"
import { MiniVisual } from "./MiniVisual"

interface MiniTechCardProps {
  card: MiniCard
}

function MiniTechCard({ card }: MiniTechCardProps) {
  return (
    <a
      href={`/works/${card.id}`}
      onClick={(event) => {
        event.preventDefault()
        navigate(`/works/${card.id}`)
      }}
      className="group flex h-full flex-col rounded-card border border-white bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-gold/50 md:p-8"
    >
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-semibold tracking-[0.16em] text-brand-gold">{card.index}</span>
        <span className="text-muted">{card.tag}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue">{card.title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {card.scenes.map((scene) => (
          <li
            key={scene}
            className="rounded-md border border-brand-blue/10 bg-brand-blue/5 px-2.5 py-1 text-xs font-medium text-brand-blue"
          >
            {scene}
          </li>
        ))}
      </ul>
      <MiniVisual kind={card.visual} frames={card.frames} />
      <span className="mt-auto inline-flex w-fit items-center gap-1.5 self-end rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-cta transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand-gold group-hover:shadow-cta-gold">
        查看详细方案
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </a>
  )
}

export function WorkSandbox() {
  return (
    <div className="bg-brand-blue bg-sandbox-grid bg-[length:56px_56px]">
      <div className="mx-auto grid w-full max-w-[1520px] gap-6 px-4 py-8 md:grid-cols-2 md:px-6 md:py-10 lg:px-10">
        {miniCards.map((card) => (
          <MiniTechCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
