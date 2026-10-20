import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Funnel,
  GitBranch,
  HeartPulse,
  Bot,
  LayoutGrid,
  Network,
  Radio,
  RefreshCw,
  ScanLine,
  Shield,
  ShieldAlert,
  Sparkles,
  Target,
  Timer,
  VolumeX,
  Wallet,
} from "lucide-react"
import type { ConsoleLifecycle } from "../../data/consoleStory"

interface AssetLifecycleFlowProps {
  lifecycle: ConsoleLifecycle
}

const insightIcons = {
  state: Target,
  auth: Shield,
  trace: RefreshCw,
  funnel: Funnel,
  alert: AlertTriangle,
  finance: Wallet,
  sla: Timer,
  prevent: ScanLine,
  closed: CheckCircle2,
  calendar: CalendarDays,
  sankey: GitBranch,
  threshold: ShieldAlert,
  denoise: VolumeX,
  iotbase: Radio,
  lifeline: HeartPulse,
  standardize: Shield,
  topology: Network,
  empower: Sparkles,
  matrix: LayoutGrid,
  autopilot: Bot,
  grounded: Sparkles,
} as const

export function AssetLifecycleFlow({ lifecycle }: AssetLifecycleFlowProps) {
  return (
    <section className="mt-14 rounded-2xl border border-line bg-surface px-5 py-7 shadow-soft sm:px-7 md:px-8 md:py-8">
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.16em] text-brand-gold">{lifecycle.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue">{lifecycle.title}</h3>
        <p className="mt-2 text-sm leading-[1.75] text-ink">{lifecycle.subtitle}</p>
      </div>

      <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
        {lifecycle.stages.map((stage, index) => (
          <div key={stage.id} className="flex min-w-0 flex-1 flex-col gap-3 lg:flex-row lg:items-stretch">
            <article className="flex h-full min-w-0 flex-1 flex-col rounded-xl border border-line bg-white p-4 shadow-card">
              <div className="border-b border-dashed border-line pb-3">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-brand-gold">
                  {stage.index}. {stage.title}
                </p>
                <p className="mt-1 text-xs text-muted">{stage.focus}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {stage.actions.map((action) => (
                  <li key={action} className="text-xs leading-5 text-ink">
                    · {action}
                  </li>
                ))}
              </ul>
            </article>
            {index < lifecycle.stages.length - 1 ? (
              <div className="flex items-center justify-center text-brand-gold lg:px-0.5" aria-hidden="true">
                <ArrowRight className="h-4 w-4 rotate-90 lg:rotate-0" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 border-t border-line pt-7 md:grid-cols-3">
        {lifecycle.insights.map((insight) => {
          const Icon = insightIcons[insight.id as keyof typeof insightIcons] ?? Target
          return (
            <li key={insight.id} className="rounded-xl border border-line bg-white px-4 py-4 shadow-card">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-semibold text-brand-blue">{insight.title}</p>
              </div>
              <p className="mt-3 text-sm leading-[1.75] text-ink">{insight.body}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
