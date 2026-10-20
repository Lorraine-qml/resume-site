import { useEffect, useState } from "react"
import type { MiniFrame, MiniVisualKind } from "../../data/content"

interface MiniVisualProps {
  kind: MiniVisualKind
  frames?: MiniFrame[]
  /** When true, drop outer margin/border so parent glass cards own the chrome. */
  bare?: boolean
}

function FrameReel({ frames }: { frames: MiniFrame[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (frames.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % frames.length)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [frames])

  return (
    <span className="relative block h-full w-full">
      {frames.map((frame, index) => (
        <img
          key={frame.image}
          src={frame.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </span>
  )
}

function UiMark() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="18" y="18" width="84" height="144" rx="8" className="fill-white/[0.04] stroke-white/20" strokeWidth="1" />
      {[0, 1, 2, 3].map((row) => (
        <rect
          key={row}
          x="30"
          y={36 + row * 30}
          width={row === 1 ? 58 : 44}
          height="12"
          rx="2"
          className={row === 1 ? "fill-brand-gold/80" : "fill-white/20"}
        />
      ))}
      <path d="M128 142L164 96L196 112L230 58L264 78L300 36V156H128Z" className="fill-brand-gold/10 stroke-none" />
      <path
        d="M128 142L164 96L196 112L230 58L264 78L300 36"
        className="fill-none stroke-brand-gold transition-colors duration-300"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [128, 142],
        [164, 96],
        [196, 112],
        [230, 58],
        [264, 78],
        [300, 36],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" className="fill-white" />
      ))}
    </svg>
  )
}

/** Card 03 — nested capsules: outer wraps middle wraps core */
function ArchitectureMark() {
  return (
    <div className="group/nest relative flex h-full w-full items-center justify-center overflow-hidden bg-surface px-3 py-2.5">
      {/* Legend */}
      <div className="absolute right-3 top-2.5 z-30 flex flex-col gap-1.5 text-[10px] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sea-cyan shadow-mint-dot" />
          数据上行
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-gold-glow" />
          指令下发
        </span>
      </div>

      {/* Outer — 基础编码与异构数据接入 */}
      <div className="relative flex h-[8.75rem] w-[92%] items-center justify-center rounded-full border border-dashed border-brand-blue/25 bg-brand-blue/[0.03] transition duration-300 group-hover/nest:border-brand-blue group-hover/nest:bg-brand-blue/5">
        <span className="pointer-events-none absolute top-2 z-20 text-[10px] font-medium text-muted sm:text-[11px]">
          基础编码与异构数据接入
        </span>

        {/* Rising data beams */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1.5 left-[28%] z-10 h-8 w-0.5 rounded-full bg-nest-beam opacity-0 motion-safe:animate-nest-rise"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1.5 left-[72%] z-10 h-8 w-0.5 rounded-full bg-nest-beam opacity-0 motion-safe:animate-nest-rise motion-safe:[animation-delay:500ms] motion-safe:[animation-duration:2.5s]"
        />

        {/* Middle — 数据治理与模型加工 */}
        <div className="relative flex h-[5.75rem] w-[78%] items-center justify-center rounded-full border border-brand-gold/35 bg-white/70 shadow-soft backdrop-blur-sm transition duration-300 motion-safe:animate-breathe group-hover/nest:border-brand-gold group-hover/nest:shadow-gold-glow">
          <span className="pointer-events-none absolute top-1.5 z-20 text-[10px] font-semibold text-brand-blue/70 sm:text-[11px]">
            数据治理与模型加工
          </span>

          {/* Inner — 智能应用与业务中台 */}
          <div className="relative z-10 flex h-12 w-[64%] items-center justify-center rounded-full border-2 border-brand-blue/10 bg-white shadow-float transition duration-300 group-hover/nest:border-brand-blue/25">
            <span className="px-2 text-center text-[11px] font-bold tracking-tight text-brand-blue sm:text-[12px]">
              智能应用与业务中台
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Pulse data bus between devices — cyan report / gold command */
function DataPipeline() {
  return (
    <div
      className="relative mx-2 h-0.5 min-w-0 flex-1 overflow-hidden rounded-full bg-line group-hover/flow:bg-brand-blue/20"
      aria-hidden="true"
    >
      <span className="absolute top-0 h-0.5 w-4 rounded-full bg-sea-cyan shadow-mint-dot motion-safe:animate-flow-right motion-safe:group-hover/flow:animate-flow-right-fast" />
      <span className="absolute top-0 h-0.5 w-3.5 rounded-full bg-brand-gold shadow-gold-glow motion-safe:animate-flow-left motion-safe:[animation-delay:1s] motion-safe:group-hover/flow:animate-flow-left-fast" />
    </div>
  )
}

/** Card 04 — pulse bus: 大屏 ←→ 移动端 ←→ 门禁 */
function OrbitMark() {
  return (
    <div className="group/flow relative flex h-full w-full items-center justify-center overflow-hidden bg-surface px-4 py-3">
      <div className="relative z-10 flex w-full max-w-lg items-center justify-between">
        {/* 指挥大屏 */}
        <div className="z-10 flex shrink-0 flex-col items-center gap-2.5">
          <div className="relative rounded-lg border border-line bg-white p-1.5 shadow-soft transition duration-300 group-hover/flow:border-brand-blue/40 group-hover/flow:shadow-soft">
            <div className="h-9 w-[3.75rem] rounded-sm border border-line bg-surface" />
            <span className="mx-auto mt-1 block h-1 w-4 border-x border-line" />
            <span className="mx-auto mt-0.5 block h-0.5 w-7 bg-line" />
          </div>
          <p className="text-[11px] font-medium text-copy">指挥大屏</p>
        </div>

        <DataPipeline />

        {/* 移动端枢纽 */}
        <div className="z-10 flex shrink-0 flex-col items-center gap-2.5">
          <div className="relative h-[5.5rem] w-[2.75rem] rounded-[0.65rem] border-2 border-brand-gold bg-white p-1 shadow-gold-phone transition duration-300 group-hover/flow:shadow-gold-glow">
            <span className="mx-auto mb-1 block h-1 w-3.5 rounded-full bg-brand-gold/50" />
            <div className="h-[3.75rem] rounded-md bg-brand-gold/10" />
          </div>
          <p className="text-[11px] font-bold text-brand-gold">移动端</p>
        </div>

        <DataPipeline />

        {/* 现场门禁 */}
        <div className="z-10 flex shrink-0 flex-col items-center gap-2.5">
          <div className="relative flex h-[3.75rem] w-10 items-stretch justify-center gap-1 rounded-md border border-line bg-white px-1.5 py-1.5 shadow-soft transition duration-300 group-hover/flow:border-brand-blue/40 group-hover/flow:shadow-soft">
            <span className="w-1 rounded-sm bg-line" />
            <span className="flex-1 rounded-sm border border-dashed border-line bg-surface" />
            <span className="w-1 rounded-sm bg-line" />
          </div>
          <p className="text-[11px] font-medium text-copy">现场门禁</p>
        </div>
      </div>
    </div>
  )
}

export function MiniVisual({ kind, frames, bare = false }: MiniVisualProps) {
  const hasFrames = Boolean(frames && frames.length > 0)

  const bareTone = hasFrames
    ? "bg-preview"
    : kind === "phone" || kind === "node"
      ? "bg-surface"
      : "bg-gradient-to-br from-brand-blue/[0.92] to-sea-deep"

  return (
    <div
      className={
        bare
          ? `h-full min-h-[140px] w-full overflow-hidden ${bareTone}`
          : "my-6 h-[180px] overflow-hidden rounded-lg border border-line bg-surface"
      }
    >
      {hasFrames ? <FrameReel frames={frames!} /> : null}
      {!hasFrames && kind === "ui" ? <UiMark /> : null}
      {!hasFrames && kind === "node" ? <ArchitectureMark /> : null}
      {!hasFrames && kind === "phone" ? <OrbitMark /> : null}
      {!hasFrames && kind === "chart" ? <UiMark /> : null}
    </div>
  )
}
