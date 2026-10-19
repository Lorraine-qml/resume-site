import { motion } from "framer-motion"
import { MediaFrame } from "../components/visual/MediaFrame"
import type { CaseStudy } from "../data/content"

interface ProjectCaseProps {
  study: CaseStudy
  reversed?: boolean
  surface?: boolean
}

const narrative = [
  { label: "角色", key: "role" },
  { label: "挑战", key: "challenge" },
  { label: "动作", key: "action" },
  { label: "结果", key: "result" },
] as const

export function ProjectCase({ study, reversed = false, surface = false }: ProjectCaseProps) {
  return (
    <article className={surface ? "bg-surface" : "bg-white"}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:gap-12">
        <motion.div
          className={reversed ? "lg:order-2" : ""}
          initial={{ opacity: 0, x: reversed ? 28 : -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.2em] text-brand-blue/45">核心案例 {study.index}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue">{study.name}</h3>
          <dl className="mt-6 space-y-4">
            {narrative.map((item) => (
              <div key={item.key}>
                <dt className="text-xs tracking-[0.16em] text-brand-blue/40">{item.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-brand-blue/85">{study[item.key]}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          className={reversed ? "lg:order-1" : ""}
          initial={{ opacity: 0, x: reversed ? -28 : 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MediaFrame kind={study.frame} label={study.frameLabel} caption={study.caption} />
        </motion.div>
      </div>
      {study.banner ? (
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex h-36 items-center justify-center rounded-card border border-dashed border-brand-blue/15 bg-white text-sm text-brand-blue/45">
            截图 / 文档占位 · {study.banner}
          </div>
        </div>
      ) : null}
    </article>
  )
}
