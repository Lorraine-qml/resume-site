import { motion } from "framer-motion"
import { SectionHeading } from "../components/ui/SectionHeading"
import { milestones } from "../data/content"

interface TimelineProps {
  id?: string
}

const nodeClassName = {
  gold: "bg-brand-gold",
  blue: "bg-brand-blue",
  quiet: "border-2 border-brand-blue bg-white",
} as const

const ringClassName = {
  gold: "border-brand-gold",
  blue: "border-brand-blue",
  quiet: "border-brand-blue/40",
} as const

export function Timeline({ id = "timeline" }: TimelineProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-surface px-6 py-14 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="职业路径"
          title="从学校到产品落地"
          description="太原科技大学，开润软件的项目交付，禹创数维的产品与 AI。"
        />
        <ol className="relative mt-8 max-w-3xl space-y-8 border-l border-brand-blue/15 pl-10">
          {milestones.map((item, index) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-10 top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center">
                <motion.span
                  className={`absolute inset-0 rounded-full border ${ringClassName[item.tone]}`}
                  initial={{ scale: 0.6, opacity: 0.7 }}
                  whileInView={{ scale: 2.4, opacity: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                />
                <motion.span
                  className={`h-3.5 w-3.5 rounded-full ${nodeClassName[item.tone]}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.05 }}
                />
              </span>
              <p className="text-xs tracking-[0.18em] text-brand-blue/45">{item.period}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-brand-blue">{item.title}</h3>
              <p className="mt-1 text-sm text-brand-blue/55">{item.org}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-blue/75">{item.summary}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-brand-gold px-4 py-1.5 text-sm text-brand-gold">PMP</span>
          <span className="rounded-full border border-brand-gold px-4 py-1.5 text-sm text-brand-gold">NPDP</span>
        </div>
      </div>
    </section>
  )
}
