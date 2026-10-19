import { Fragment } from "react"
import { SectionHeading } from "../components/ui/SectionHeading"
import { caseStudies } from "../data/content"
import { PrdSection } from "./PrdSection"
import { ProjectCase } from "./ProjectCase"

interface PortfolioProps {
  id?: string
}

export function Portfolio({ id = "portfolio" }: PortfolioProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto max-w-6xl bg-white px-6 pb-2 pt-20">
        <SectionHeading
          kicker="作品矩阵"
          title="三件可以对着结果看的事"
          description="禹翼、临港投控、闵行数字孪生。图文直接展开，不离开本页。"
        />
      </div>
      {caseStudies.map((study, index) => (
        <Fragment key={study.id}>
          <ProjectCase study={study} reversed={index % 2 === 1} surface={index !== 2} />
          {index === 0 ? <PrdSection /> : null}
        </Fragment>
      ))}
    </section>
  )
}
