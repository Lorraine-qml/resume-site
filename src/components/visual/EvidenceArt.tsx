import type { EvidenceCard } from "../../data/content"

interface EvidenceArtProps {
  card: EvidenceCard
}

export function EvidenceArt({ card }: EvidenceArtProps) {
  if (card.kind === "metric") {
    return (
      <div className="flex h-full min-h-[148px] flex-col justify-between">
        <p className="text-xs tracking-[0.18em] text-brand-blue/45">{card.title}</p>
        <p className="mt-6 font-sans text-5xl font-medium tabular-nums tracking-tight text-brand-gold">
          {card.value}
        </p>
        {card.note ? <p className="mt-4 text-sm leading-relaxed text-brand-blue/65">{card.note}</p> : null}
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-brand-blue">{card.title}</p>
        {card.note ? <p className="text-xs text-brand-blue/45">{card.note}</p> : null}
      </div>
      <ol className="mt-5 space-y-3">
        {card.points.map((point, index) => (
          <li key={point.label} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] ${
                index === card.points.length - 1
                  ? "bg-brand-blue text-white"
                  : "bg-surface text-brand-blue/70"
              }`}
            >
              {index + 1}
            </span>
            <span className="w-14 shrink-0 text-sm font-medium text-brand-blue">{point.label}</span>
            <span className="h-px flex-1 bg-brand-blue/10" />
            <span className="text-xs text-brand-blue/60">{point.note}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
