import { changxingStory } from "../../data/changxingStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function ChangxingCase() {
  return (
    <div>
      <ProjectIntro left={changxingStory.duties[0]} right={changxingStory.duties[1]} />
      <ShotSpread
        shots={changxingStory.shots.map((shot) => ({
          id: shot.id,
          title: shot.title,
          subtitle: shot.subtitle,
          image: shot.image,
          detailLabel: "UI 把控",
          detailKicker: shot.uiKicker,
          detail: shot.ui,
          valueKicker: shot.valueKicker,
          value: shot.value,
        }))}
      />

      <section className="mt-20 rounded-2xl bg-mist px-6 py-8 md:px-10 md:py-10">
        <h4 className="text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">
          {changxingStory.governance.title}
        </h4>
        <p className="mt-2 font-sans text-xs tracking-[0.08em] text-muted">{changxingStory.governance.english}</p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-ink">{changxingStory.governance.subtitle}</p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-brand-blue">{changxingStory.governance.columns[0].label}</p>
            <p className="mt-3 text-[10px] tracking-[0.16em] text-brand-gold">{changxingStory.governance.columns[0].kicker}</p>
            <p className="mt-2 text-sm leading-7 text-ink">{changxingStory.governance.columns[0].text}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
              {changxingStory.swatches.map((swatch) => (
                <li key={swatch.hex} className="flex items-center gap-2">
                  <span className={`h-6 w-6 shrink-0 rounded-md border border-line ${swatch.className}`} />
                  <span className="min-w-0">
                    <span className="block text-xs leading-4 text-brand-blue">{swatch.name}</span>
                    <span className="block font-sans text-[10px] leading-4 tracking-wide text-muted">{swatch.hex}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-blue">{changxingStory.governance.columns[1].label}</p>
            <p className="mt-3 text-[10px] tracking-[0.16em] text-brand-gold">{changxingStory.governance.columns[1].kicker}</p>
            <p className="mt-2 text-sm leading-7 text-ink">{changxingStory.governance.columns[1].text}</p>
            <ul className="mt-5 space-y-3">
              {changxingStory.typeScale.map((level) => (
                <li key={level.name} className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
                  <span className="text-sm text-brand-blue">{level.name}</span>
                  <span className="font-sans text-xs text-muted">{level.sample}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-blue">{changxingStory.governance.columns[2].label}</p>
            <p className="mt-3 text-[10px] tracking-[0.16em] text-brand-gold">{changxingStory.governance.columns[2].kicker}</p>
            <p className="mt-2 text-sm leading-7 text-ink">{changxingStory.governance.columns[2].text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {changxingStory.components.map((item) => (
                <li key={item} className="rounded-full border border-line bg-white px-3 py-1 text-xs text-brand-blue">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <p className="text-sm font-semibold text-brand-blue">{changxingStory.governance.alignmentTitle}</p>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {changxingStory.governance.steps.map((step) => (
              <li key={step.index} className="rounded-card bg-white px-5 py-5 shadow-soft">
                <p className="font-sans text-xs tracking-[0.16em] text-brand-gold">{step.index}</p>
                <p className="mt-2 text-base font-semibold text-brand-blue">
                  {step.title}
                  <span className="ml-2 text-xs font-normal text-muted">{step.role}</span>
                </p>
                <p className="mt-2 text-sm leading-7 text-ink">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </div>
  )
}
