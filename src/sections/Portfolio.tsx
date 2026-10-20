import { WorkSandbox } from "../components/works/WorkSandbox"

interface PortfolioProps {
  id?: string
}

export function Portfolio({ id = "portfolio" }: PortfolioProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-white">
      <div className="mx-auto w-full px-6 pb-8 pt-8 md:pt-10 lg:px-10">
        <p className="text-xs tracking-[0.22em] text-muted">作品矩阵 / Works</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">全链路业务落地图谱</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          不讲空话，只展示能跑通业务闭环的架构与代码。
        </p>
      </div>
      <div className="mt-10">
        <WorkSandbox />
      </div>
    </section>
  )
}
