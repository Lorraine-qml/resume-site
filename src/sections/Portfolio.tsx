import { SectionHeading } from "../components/ui/SectionHeading"
import { WorkSandbox } from "../components/works/WorkSandbox"

interface PortfolioProps {
  id?: string
}

export function Portfolio({ id = "portfolio" }: PortfolioProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-white">
      <div className="mx-auto w-full px-6 pb-4 pt-8 md:pt-10 lg:px-10">
        <SectionHeading
          kicker="作品矩阵 / Works"
          title="全链路业务落地图谱"
          description="不讲空话，只展示能跑通业务闭环的架构与代码。"
        />
      </div>
      <WorkSandbox />
    </section>
  )
}
