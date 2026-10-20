import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import {
  Blocks,
  FolderKanban,
  Gauge,
  Layers,
  MonitorSmartphone,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "../components/ui/SectionHeading"
import {
  capabilities,
  capabilityIntro,
  type CapabilityIcon,
  type CapabilityId,
  type CapabilityProof,
} from "../data/content"

interface BentoGridProps {
  id?: string
}

const iconMap: Record<CapabilityIcon, LucideIcon> = {
  spark: Sparkles,
  chart: TrendingUp,
  layers: Layers,
  devices: MonitorSmartphone,
  users: Users,
  kanban: FolderKanban,
  blocks: Blocks,
  gauge: Gauge,
  target: Target,
  cycle: RefreshCw,
}

function IconBadge({ icon }: { icon: CapabilityIcon }) {
  const Icon = iconMap[icon]
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-track text-brand-blue">
      <Icon className="h-4 w-4" />
    </span>
  )
}

function DataCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${className}`}
    >
      {children}
    </div>
  )
}

function ProofCard({ proof }: { proof: CapabilityProof }) {
  const compactFigure = /^[\u4e00-\u9fff]{1,2}$/.test(proof.figure)

  return (
    <DataCard className="flex h-full min-h-[12.5rem] flex-col items-start px-4 py-4">
      <IconBadge icon={proof.icon} />
      <p className="mt-3 flex h-10 items-baseline whitespace-nowrap font-sans leading-none tracking-tight text-brand-gold sm:h-12">
        <span
          className={`font-extrabold ${compactFigure ? "text-[1.75rem] sm:text-[2rem]" : "text-[2rem] tabular-nums sm:text-[2.5rem]"}`}
        >
          {proof.figure}
        </span>
        {proof.unit ? <span className="ml-0.5 text-lg font-semibold">{proof.unit}</span> : null}
      </p>
      <p className="mt-2 line-clamp-2 min-h-5 text-sm font-semibold leading-5 text-ink">{proof.label}</p>
      <p className="mt-1 line-clamp-3 min-h-[2.25rem] text-xs leading-normal text-muted">{proof.note}</p>
    </DataCard>
  )
}

export function BentoGrid({ id = "bento" }: BentoGridProps) {
  const [active, setActive] = useState<CapabilityId>("presales")
  const currentIndex = Math.max(
    0,
    capabilities.findIndex((item) => item.id === active),
  )
  const current = capabilities[currentIndex]

  return (
    <section id={id} className="scroll-mt-20 px-6 pb-4 pt-6 md:pb-6 md:pt-8 lg:px-10">
      <div className="mx-auto w-full">
        <SectionHeading kicker="能力图谱" title={capabilityIntro.title} />
        <p className="mt-4 text-base font-medium leading-relaxed text-brand-blue lg:whitespace-nowrap">
          {capabilityIntro.summary}
        </p>
        <div className="relative mt-8 w-full rounded-full bg-brand-blue/5 p-1.5">
          <motion.div
            className="pointer-events-none absolute bottom-1.5 left-1.5 top-1.5 w-[calc((100%-0.75rem)/4)] rounded-full bg-brand-blue"
            animate={{ x: `${currentIndex * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div role="tablist" aria-label="核心能力" className="relative grid grid-cols-4">
            {capabilities.map((item) => {
              const selected = item.id === active
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(item.id)}
                  onMouseEnter={() => setActive(item.id)}
                  className={`relative z-10 rounded-full px-1 py-2.5 text-center text-xs transition-colors duration-300 sm:text-sm ${
                    selected ? "text-white" : "text-brand-blue/55 hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
        <div className="mt-6 rounded-card bg-surface p-6 md:p-8">
          <motion.div
            key={current.id}
            role="tabpanel"
            className="flex flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-8">
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold leading-8 tracking-tight text-brand-blue lg:h-16">
                  {current.headline}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-brand-blue/75 lg:h-[5.4em] lg:overflow-hidden">
                  {current.summary}
                </p>
                <ul className="mt-4 flex flex-wrap content-start gap-2 lg:h-16">
                  {current.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex h-6 items-center rounded border border-brand-blue/10 bg-chip px-2.5 text-xs tracking-wide text-brand-blue"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {current.proofs.map((proof) => (
                  <ProofCard key={proof.id} proof={proof} />
                ))}
              </div>
            </div>
              <div>
                <p className="text-[11px] tracking-[0.16em] text-brand-blue/45">详细交付节点</p>
                <div className="mt-5 overflow-x-auto">
                <ol className="flex h-[4.75rem] min-w-[40rem] items-start sm:min-w-0">
                  {current.steps.map((step, index) => (
                    <li key={step} className="group relative flex h-full flex-1 flex-col items-center text-center">
                      {index < current.steps.length - 1 ? (
                        <span className="absolute left-1/2 top-4 h-0.5 w-full -translate-y-px bg-brand-blue/30" />
                      ) : null}
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-white text-xs font-bold text-brand-blue transition duration-300 group-hover:scale-110 group-hover:shadow-soft">
                        {index + 1}
                      </span>
                      <span className="mt-2 line-clamp-2 h-10 px-1 text-[13px] font-medium leading-5 text-copy">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
