import { trafficStory } from "../../data/trafficStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function TrafficCase() {
  return (
    <div>
      <ProjectIntro left={trafficStory.duties[0]} right={trafficStory.duties[1]} />
      <ShotSpread
        shots={trafficStory.shots.map((shot) => ({
          id: shot.id,
          title: shot.title,
          subtitle: shot.subtitle,
          image: shot.image,
          images: shot.images,
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
