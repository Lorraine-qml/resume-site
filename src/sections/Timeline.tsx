import { motion } from "framer-motion"
import { BarChart3, Code2, Rocket, type LucideIcon } from "lucide-react"
import { SectionHeading } from "../components/ui/SectionHeading"
import { careerPath, careerStages, type CareerAccent, type CareerIcon } from "../data/content"
import { UnifiedTagList } from "../components/ui/UnifiedTag"

interface TimelineProps {
  id?: string
}

const accentTop: Record<CareerAccent, string> = {
  quiet: "bg-line",
  blue: "bg-brand-blue",
  gold: "bg-brand-gold",
}

const accentQuote: Record<CareerAccent, string> = {
  quiet: "border-line",
  blue: "border-brand-blue/40",
  gold: "border-brand-gold/50",
}

const icons: Record<CareerIcon, LucideIcon> = {
  code: Code2,
  chart: BarChart3,
  rocket: Rocket,
}

export function Timeline({ id = "timeline" }: TimelineProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-white pb-8 pt-8 md:pb-10 md:pt-10">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-10">
        <SectionHeading kicker={careerPath.kicker} title={careerPath.title} />
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
          {careerPath.subtitle}
        </p>

        <div className="mt-6 rounded-2xl border border-line bg-surface p-5 shadow-soft md:p-7 lg:p-8">
          <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
            {careerStages.map((item, index) => {
              const Icon = icons[item.icon]
              return (
                <li key={item.id}>
                  <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span
                      className={`block h-1 w-full transition-[box-shadow,height] duration-300 group-hover:h-1.5 ${accentTop[item.accent]}`}
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] tracking-[0.16em] text-muted">
                            {item.stage}
                            <span className="mx-1.5 text-line">·</span>
                            {item.period}
                          </p>
                          <h3 className="mt-3 text-xl font-semibold tracking-tight text-brand-blue sm:text-2xl">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-muted">{item.org}</p>
                        </div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card border border-line bg-surface text-brand-blue/55">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-ink">{item.summary}</p>

                      <UnifiedTagList tags={item.tags} className="mt-5" />

                      <blockquote
                        className={`mt-5 border-l-2 pl-3 text-sm italic leading-7 text-muted ${accentQuote[item.accent]}`}
                      >
                        {item.insight}
                      </blockquote>

                      <p className="mt-auto pt-6 text-center text-[11px] tracking-[0.14em] text-brand-blue/45">
                        {item.footer}
                      </p>
                    </div>
                  </motion.article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
