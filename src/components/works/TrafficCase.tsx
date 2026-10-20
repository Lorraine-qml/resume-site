import { trafficStory } from "../../data/trafficStory"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function TrafficCase() {
  return (
    <div>
      <p className="text-xs tracking-[0.16em] text-brand-gold">{trafficStory.tags}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">{trafficStory.title}</h3>
      <ProjectIntro
        overview={trafficStory.overview}
        left={trafficStory.duties[0]}
        right={trafficStory.duties[1]}
      />
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
