import { gardenStory } from "../../data/gardenStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function GardenCase() {
  return (
    <div>
      <ProjectIntro left={gardenStory.duties[0]} right={gardenStory.duties[1]} />
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
