import { cockpitStory } from "../../data/workStories"
import { factoryShots } from "../../data/factoryStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function FactoryCase() {
  const factory = cockpitStory.industries.find((item) => item.id === "factory")
  if (!factory) return null

  const build = factory.duties.find((duty) => duty.title === "产品设计")
  const control = factory.duties.find((duty) => duty.title === "需求管控")

  return (
    <div>
      <p className="text-xs tracking-[0.16em] text-brand-gold">{factory.tags}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">{factory.name}</h3>
      <ProjectIntro
        overview={factory.summary}
        highlights={factory.highlights}
        left={build ? { title: "产品 0-1 构建说明", text: build.text } : undefined}
        right={control ? { title: "全链路管控与交付", text: control.text } : undefined}
      />
      <ShotSpread
        shots={factoryShots.map((shot) => ({
          id: shot.id,
          title: shot.title,
          subtitle: shot.subtitle,
          image: shot.image,
          detailLabel: "功能说明",
          detailKicker: shot.detailKicker,
          detail: shot.detail,
          valueKicker: shot.valueKicker,
          value: shot.value,
        }))}
      />
    </div>
  )
}
