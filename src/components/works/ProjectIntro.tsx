import type { WorkDuty } from "../../data/workStories"

interface ProjectIntroProps {
  overviewLabel?: string
  overview?: string
  highlights?: string[]
  left?: WorkDuty
  right?: WorkDuty
}

export function ProjectIntro({
  overviewLabel = "项目概况",
  overview,
  highlights = [],
  left,
  right,
}: ProjectIntroProps) {
  const hasOverview = Boolean(overview) || highlights.length > 0

  return (
    <section className="mt-5 rounded-2xl border border-line bg-white px-6 py-6 shadow-soft md:px-8 md:py-7">
      {hasOverview ? (
        <>
          <p className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">{overviewLabel}</p>
          {overview ? <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-brand-blue">{overview}</p> : null}
          {highlights.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-brand-gold/40 px-2.5 py-0.5 text-[10px] tracking-[0.14em] text-brand-gold"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : null}
      {left && right ? (
        <div className={`grid items-start gap-6 md:grid-cols-2 md:gap-0 ${hasOverview ? "mt-6 border-t border-line pt-6" : ""}`}>
          <div className="md:pr-8">
            <p className="text-sm font-semibold text-brand-blue">{left.title}</p>
            <p className="mt-2 text-sm leading-[1.75] text-ink">{left.text}</p>
          </div>
          <div className="md:border-l md:border-line md:pl-8 lg:pr-16">
            <p className="text-sm font-semibold text-brand-blue">{right.title}</p>
            <p className="mt-2 text-sm leading-[1.75] text-ink">{right.text}</p>
          </div>
        </div>
      ) : left ? (
        <div className={`lg:pr-16 ${hasOverview ? "mt-6 border-t border-line pt-6" : ""}`}>
          <p className="text-sm font-semibold text-brand-blue">{left.title}</p>
          <p className="mt-2 max-w-3xl text-sm leading-[1.75] text-ink">{left.text}</p>
        </div>
      ) : null}
    </section>
  )
}
