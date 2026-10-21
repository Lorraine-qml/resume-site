import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Database,
  Rocket,
  Sparkles,
  Target,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react"
import {
  agentFlowSteps,
  aiCoreLayer,
  architectureIntro,
  architectureSummary,
  businessLayer,
  dataLayer,
  geekNodeIds,
  vibeCodingFlow,
  type ArchLayer,
  type ArchNode,
} from "../data/architecture"

interface AiArchitectureProps {
  id?: string
}

type LayerTone = "business" | "core" | "data"

function DataBus({ delay = false }: { delay?: boolean }) {
  return (
    <div
      className="relative z-[1] my-0 flex h-3 w-0.5 shrink-0 justify-center self-center sm:h-3.5"
      aria-hidden="true"
    >
      <span className="absolute inset-0 w-0.5 bg-line" />
      <span
        className={`absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-cyan shadow-cyan-particle motion-safe:animate-particle-up ${
          delay ? "[animation-delay:0.75s]" : ""
        }`}
      />
      <span
        className={`absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-gold shadow-gold-particle motion-safe:animate-particle-down ${
          delay ? "" : "[animation-delay:0.75s]"
        }`}
      />
    </div>
  )
}

function TooltipChip({
  node,
  tone,
  geek,
  showAgentFlow,
}: {
  node: ArchNode
  tone: LayerTone
  geek?: boolean
  showAgentFlow?: boolean
}) {
  const [open, setOpen] = useState(false)

  const base =
    tone === "core"
      ? "border-brand-gold/40 bg-white text-brand-blue hover:border-brand-gold/70 hover:shadow-soft"
      : "border-brand-gold/25 bg-white text-brand-blue hover:border-brand-gold/55"

  return (
    <div
      className={`relative min-w-0 flex-1 ${open ? "z-30" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex w-full items-center justify-center gap-1 overflow-hidden rounded-md border px-2.5 py-2.5 text-[13px] font-normal leading-none whitespace-nowrap transition duration-300 sm:px-3 sm:py-3 sm:text-[14px] ${base} ${
          geek && open ? "motion-safe:[&_svg]:animate-icon-nudge" : ""
        }`}
        aria-describedby={open ? `tip-${node.id}` : undefined}
      >
        {geek ? (
          node.id === "supabase" ? (
            <Database className="h-3.5 w-3.5 shrink-0 text-brand-gold" strokeWidth={1.75} />
          ) : (
            <Workflow className="h-3.5 w-3.5 shrink-0 text-brand-blue" strokeWidth={1.75} />
          )
        ) : null}
        <span className="truncate">{node.title}</span>
      </button>

      {open ? (
        <div
          id={`tip-${node.id}`}
          role="tooltip"
          className="absolute bottom-[calc(100%+8px)] left-1/2 z-40 w-max max-w-[280px] -translate-x-1/2 rounded-card border border-line bg-white px-3 py-2 text-left shadow-float"
        >
          <p className="text-xs leading-5 text-copy">{node.tooltip}</p>
          {showAgentFlow ? (
            <div className="mt-2 flex flex-nowrap items-center gap-1 whitespace-nowrap border-t border-line pt-2">
              {agentFlowSteps.map((step, index) => (
                <span key={step} className="inline-flex shrink-0 items-center gap-1">
                  {index > 0 ? <ArrowRight className="h-3 w-3 text-brand-gold" strokeWidth={2.5} /> : null}
                  <span className="rounded-md bg-surface px-1.5 py-0.5 text-[10px] font-medium text-brand-blue">
                    {step}
                  </span>
                </span>
              ))}
            </div>
          ) : null}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-line bg-white"
          />
        </div>
      ) : null}
    </div>
  )
}

function ArchLayerBlock({
  layer,
  tone,
  children,
}: {
  layer: ArchLayer
  tone: LayerTone
  children: ReactNode
}) {
  const shell =
    tone === "core"
      ? "border border-brand-gold/55 bg-brand-blue bg-hub-vertical shadow-soft"
      : "border border-brand-gold/40 bg-gradient-to-b from-brand-gold/[0.07] to-white shadow-soft"

  const titleClass = "font-normal text-brand-gold"

  return (
    <div
      className={`relative z-[2] flex w-full min-h-[5.5rem] flex-1 flex-col items-stretch justify-center rounded-card px-4 py-4 text-center transition duration-300 hover:z-20 sm:min-h-[6.25rem] sm:px-5 sm:py-5 ${shell}`}
    >
      <p className={`mb-3 block text-center text-[12px] tracking-[0.14em] sm:text-[13px] ${titleClass}`}>
        [ {layer.label} ]
      </p>
      <div className="flex w-full flex-nowrap items-stretch gap-2 sm:gap-2.5">{children}</div>
    </div>
  )
}

/** 底部双卡统一高度，保证左右对齐 */
const footerShell =
  "flex h-[5.5rem] w-full shrink-0 flex-col justify-center overflow-hidden rounded-lg border border-brand-gold/25 border-l-4 border-l-brand-gold bg-vibe-panel px-4 shadow-soft sm:h-[5.75rem] sm:px-5"

function VibeCodingBar() {
  return (
    <div className={`relative ${footerShell}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-vibe-sweep motion-safe:animate-vibe-sweep"
      />
      <p className="relative inline-flex items-center gap-1.5 text-[13px] font-normal text-brand-blue sm:text-[14px]">
        <Rocket className="h-3.5 w-3.5 text-brand-gold" strokeWidth={1.75} />
        Vibe Coding 极速交付流
      </p>
      <ol className="relative mt-2 flex w-full flex-nowrap items-center text-[12px] text-copy sm:text-[13px]">
        {vibeCodingFlow.map((step, index) => (
          <li key={step} className="flex min-w-0 flex-1 items-center">
            {index > 0 ? (
              <ArrowRight
                className="mx-0.5 h-3 w-3 shrink-0 text-brand-gold/70 sm:mx-1"
                strokeWidth={1.25}
                aria-hidden="true"
              />
            ) : null}
            <span className="min-w-0 flex-1 text-center leading-snug">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function OwnerNodesCard() {
  const { nodes } = architectureSummary

  return (
    <article className={footerShell}>
      <h3 className="inline-flex items-center gap-1.5 text-[13px] font-normal text-brand-blue">
        <Zap className="h-3.5 w-3.5 text-brand-gold" strokeWidth={1.75} />
        {nodes.title}
      </h3>
      <div className="mt-2 flex w-full flex-nowrap gap-2">
        {nodes.items.map((item) => (
          <span
            key={item.label}
            className={`inline-flex min-w-0 flex-1 items-center justify-center rounded-md border px-2 py-1.5 text-center text-[12px] font-normal whitespace-nowrap sm:text-[13px] ${
              item.tone === "gold"
                ? "border-brand-gold/35 bg-white text-brand-gold"
                : "border-line bg-white text-brand-blue"
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </article>
  )
}

function CompactDiagram() {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-col items-stretch justify-between gap-1 overflow-visible rounded-2xl border border-line bg-white px-3 py-3 sm:gap-1.5 sm:px-4 sm:py-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-arch-dots bg-[length:20px_20px] opacity-25"
      />

      <ArchLayerBlock layer={businessLayer} tone="business">
        {businessLayer.nodes.map((node) => (
          <TooltipChip key={node.id} node={node} tone="business" />
        ))}
      </ArchLayerBlock>

      <DataBus />

      <ArchLayerBlock layer={aiCoreLayer} tone="core">
        {aiCoreLayer.nodes.map((node) => (
          <TooltipChip key={node.id} node={node} tone="core" showAgentFlow={node.id === "agent"} />
        ))}
      </ArchLayerBlock>

      <DataBus delay />

      <ArchLayerBlock layer={dataLayer} tone="data">
        {dataLayer.nodes.map((node) => (
          <TooltipChip key={node.id} node={node} tone="data" geek={geekNodeIds.has(node.id)} />
        ))}
      </ArchLayerBlock>
    </div>
  )
}

const portraitFloatTags: {
  label: string
  position: string
  duration: number
  delay: number
}[] = [
  /* 核心两个 · 头顶左右错落（红框留白区） */
  {
    label: "LLM 大语言模型",
    position: "left-[18%] top-[4%] sm:left-[20%] sm:top-[5%]",
    duration: 3.2,
    delay: 0,
  },
  {
    label: "RAG 检索引擎",
    position: "right-[14%] top-[8%] sm:right-[16%] sm:top-[9%]",
    duration: 3.6,
    delay: 0.55,
  },
  /* 其余四角/腰侧错落，避免左右对称 */
  {
    label: "Agent 编排",
    position: "left-[2%] top-[28%] sm:left-[3%] sm:top-[30%]",
    duration: 3.8,
    delay: 0.9,
  },
  {
    label: "Prompt 工程",
    position: "right-[1%] top-[36%] sm:right-[2%] sm:top-[38%]",
    duration: 3.4,
    delay: 1.25,
  },
  {
    label: "Data 数据底座",
    position: "bottom-[22%] left-[6%] sm:bottom-[24%] sm:left-[8%]",
    duration: 4,
    delay: 0.35,
  },
  {
    label: "Vibe Coding",
    position: "bottom-[8%] right-[8%] sm:bottom-[10%] sm:right-[10%]",
    duration: 3.1,
    delay: 1.6,
  },
]

function BreathFloatTag({
  label,
  position,
  duration,
  delay,
}: (typeof portraitFloatTags)[number]) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 select-none ${position}`}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* 与首页 Hero FloatTag skill 样式一致：磨砂白气泡、常规字重 */}
      <div className="inline-flex items-center whitespace-nowrap rounded-full border border-brand-blue/10 bg-white/90 px-3 py-1.5 text-sm font-normal text-brand-blue/75 shadow-soft backdrop-blur-md">
        {label}
      </div>
    </motion.div>
  )
}

function ArchitectPortrait() {
  return (
    <div className="relative flex h-[220px] w-full shrink-0 items-end justify-center overflow-hidden sm:h-[240px] lg:h-[260px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-arch-dots bg-[length:16px_16px] opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[48%] z-0 h-[64%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/15 blur-2xl"
      />

      <img
        src="/arch-pm-illustration.jpg"
        alt="AI 赋能产品架构师形象"
        className="relative z-[10] h-full w-auto max-w-[52%] -scale-x-100 object-contain object-bottom"
      />

      {/* 错落分布 + 错峰呼吸悬浮，不挡脸与平板 */}
      {portraitFloatTags.map((tag) => (
        <BreathFloatTag key={tag.label} {...tag} />
      ))}
    </div>
  )
}

function SummaryStack() {
  const { role, scenes } = architectureSummary

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 sm:gap-3.5">
      <ArchitectPortrait />

      <article className="flex min-h-[4.5rem] flex-1 items-center rounded-card border border-line border-l-4 border-l-brand-gold bg-white px-4 py-4 shadow-card sm:min-h-[5rem] sm:py-5">
        <div className="flex w-full items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
            <UserRound className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-[13px] font-normal leading-none text-brand-blue sm:text-[14px]">{role.title}</h3>
            <p className="mt-2 truncate text-[12px] font-normal leading-snug text-copy sm:text-[13px]">
              <span className="text-brand-gold">{role.lead}</span>
              · {role.body}
            </p>
          </div>
        </div>
      </article>

      <article className="flex min-h-[4.5rem] flex-1 items-center rounded-card border border-line bg-white px-4 py-4 shadow-card sm:min-h-[5rem] sm:py-5">
        <div className="flex w-full items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/5 text-brand-blue">
            <Target className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-[13px] font-normal leading-none text-brand-blue sm:text-[14px]">{scenes.title}</h3>
            <p className="mt-2 truncate text-[12px] font-normal leading-snug text-copy sm:text-[13px]">
              {scenes.items.map((item, index) => (
                <span key={item.title}>
                  {index > 0 ? <span className="mx-1.5 text-line">|</span> : null}
                  <span className="text-ink">{item.title}</span>
                  {item.detail}
                  <span className="ml-0.5 text-brand-gold">{item.metric}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export function AiArchitecture({ id = "architecture" }: AiArchitectureProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-white pb-8 pt-6 md:pb-10 md:pt-8">
      <div className="mx-auto w-full max-w-[1520px] px-5 pr-16 sm:pr-20 lg:px-8 lg:pr-24 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-1.5 text-xs font-normal tracking-[0.22em] text-brand-gold">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
            {architectureIntro.kicker}
          </p>
          <h2 className="mt-1.5 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">
            {architectureIntro.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted md:text-base">
            {architectureIntro.description}
          </p>
        </motion.div>

        {/*
          两行网格对齐：
          上排 · 架构图底 = 核心场景底
          下排 · 极速交付流 = 核心负责节点（同高）
        */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
          className="mt-5 grid grid-cols-1 gap-3 sm:gap-3.5 lg:mt-6 lg:min-h-[32rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-7 lg:gap-y-3"
        >
          <div className="min-h-0 lg:row-start-1">
            <SummaryStack />
          </div>
          <div className="min-h-0 lg:row-start-1">
            <CompactDiagram />
          </div>
          <div className="lg:row-start-2">
            <OwnerNodesCard />
          </div>
          <div className="lg:row-start-2">
            <VibeCodingBar />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
