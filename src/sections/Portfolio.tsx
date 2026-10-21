import { SectionHeading } from "../components/ui/SectionHeading"
import { WorkSandbox } from "../components/works/WorkSandbox"

interface PortfolioProps {
  id?: string
}

export function Portfolio({ id = "portfolio" }: PortfolioProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-white pb-0 pt-8 md:pt-10">
      <div className="mx-auto w-full px-6 lg:px-10">
        <SectionHeading
          kicker="作品矩阵 / Works"
          title="全链路业务落地图谱"
          description="从底层数据架构到宏观决策，全景展示经得起实战检验的全场景产品设计与交付能力"
        />
      </div>
      <WorkSandbox />
    </section>
  )
}
