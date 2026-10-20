import { gardenStory } from "../../data/gardenStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function GardenCase() {
  return (
    <div>
      <p className="text-xs tracking-[0.16em] text-brand-gold">{gardenStory.tags}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">{gardenStory.title}</h3>
      <ProjectIntro
        overview={gardenStory.overview}
        left={gardenStory.duties[0]}
        right={gardenStory.duties[1]}
      />
      <ShotSpread
        shots={gardenStory.shots.map((shot) => ({
          id: shot.id,
          title: shot.title,
          subtitle: shot.subtitle,
          image: shot.image,
          detailLabel: "UI",
          detailKicker: "交互说明",
          detail: shot.ui,
          valueKicker: shot.valueKicker,
          value: shot.value,
        }))}
      />
    </div>
  )
}
