import { Lightbulb, Rocket } from "lucide-react"
import { parkShots } from "../../data/parkStory"
import { cockpitStory } from "../../data/workStories"
import { publicAsset } from "../../lib/asset"
import { FilmStage } from "./FilmStage"
import { ProjectIntro } from "./ProjectIntro"
import { ShotSpread } from "./ShotSpread"

export function ParkCase() {
  const park = cockpitStory.industries.find((item) => item.id === "park")
  if (!park) return null

  return (
    <div>
      <ProjectIntro left={park.duties[0]} right={park.duties[1]} />
      <article className="mt-14 grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="min-w-0 lg:order-2">
          <FilmStage
            title="建筑模型漫游"
            badge="模型漫游"
            visual="cockpit"
            scene={0}
            src={publicAsset("/works/park-roam.mp4")}
          />
        </div>
        <div className="min-w-0 lg:order-1">
          <h4 className="text-2xl font-semibold tracking-tight text-brand-blue">建筑模型漫游</h4>
          <div className="mt-6 flex items-center gap-2">
            <Lightbulb className="h-3.5 w-3.5 text-brand-gold" />
            <p className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">功能说明 / 模型信息</p>
          </div>
          <p className="mt-1 text-sm leading-7 text-ink">
            沿北蔡中学的校园模型漫游整栋建筑。画面里能看到实验楼等楼栋，并对照学校名称、办学性质、规模，以及班级、教师和学生等基本信息。
          </p>
          <div className="mt-5 flex items-center gap-2">
            <Rocket className="h-3.5 w-3.5 text-brand-gold" />
            <p className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">业务价值 / 先看清模型</p>
          </div>
          <p className="mt-1 text-sm leading-7 text-ink">
            漫游和基本信息放在同一段画面里，进模型就能对照建筑和学校情况。
          </p>
        </div>
      </article>
      <ShotSpread
        shots={parkShots.map((shot) => ({
          id: shot.id,
          title: shot.title,
          subtitle: shot.subtitle,
          image: shot.image,
          images: shot.images,
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
