import { cockpitStory } from "../../data/workStories"
import { factoryShots } from "../../data/factoryStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function FactoryCase() {
  const factory = cockpitStory.industries.find((item) => item.id === "factory")
  if (!factory) return null

  const control = factory.duties.find((duty) => duty.title === "需求管控")

  return (
    <div>
      <ProjectIntro
        left={{ title: "产品说明", text: factory.summary }}
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