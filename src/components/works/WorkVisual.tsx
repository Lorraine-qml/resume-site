import { motion } from "framer-motion"
import type { WorkVisual as WorkVisualKind } from "../../data/content"

interface WorkVisualProps {
  kind: WorkVisualKind
  scene?: 0 | 1
  className?: string
  tone?: "dark" | "light"
  metricPlace?: "corner" | "under-toggle"
}

function MacDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-mac-red" />
      <span className="h-2 w-2 rounded-full bg-mac-yellow" />
      <span className="h-2 w-2 rounded-full bg-mac-green" />
    </div>
  )
}

function ConsoleArt({ scene }: { scene: 0 | 1 }) {
  if (scene === 1) {
    return (
      <div className="flex h-full flex-col justify-center gap-3 px-6">
        {[
          ["Base 数据底座", ""],
          ["Plus 业务中台", "ml-4"],
          ["Pro 配置与 AI", "ml-8"],
        ].map(([label, offset]) => (
          <div
            key={label}
            className={`rounded-xl border border-line bg-white/80 px-4 py-3 text-sm text-brand-blue shadow-card ${offset}`}
          >
            {label}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white/85 shadow-card">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <MacDots />
        <span className="text-[10px] tracking-wide text-muted">禹翼 · 中台</span>
      </div>
      <div className="grid flex-1 grid-cols-[72px_1fr]">
        <div className="space-y-2 border-r border-line bg-surface p-2">
          {["概览", "表单", "流程", "权限"].map((item) => (
            <div key={item} className="rounded-md bg-white px-2 py-1 text-[10px] text-copy">
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-2/3 rounded-full bg-line" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 rounded-md border border-line" />
            <div className="h-8 rounded-md border border-line" />
          </div>
          <div className="space-y-1.5 pt-1">
            {[0, 1, 2].map((row) => (
              <div key={row} className="h-2 rounded-full bg-track" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CockpitArt({
  scene,
  tone = "dark",
  metricPlace = "corner",
}: {
  scene: 0 | 1
  tone?: "dark" | "light"
  metricPlace?: "corner" | "under-toggle"
}) {
  const light = tone === "light"

  return (
    <div className="relative h-full overflow-hidden">
      <svg viewBox="0 0 360 220" className="h-full w-full" aria-hidden="true">
        <circle cx="250" cy="110" r="78" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="4 6" />
        <circle cx="250" cy="110" r="48" fill="none" className="stroke-brand-gold/70" />
        <path d="M40 150 C 90 90, 140 130, 190 70" fill="none" stroke="currentColor" strokeWidth="2" />
        {scene === 1
          ? ["园区", "楼栋", "楼层", "房间", "设备"].map((label, index) => (
              <text key={label} x={28 + index * 62} y={196} fill="currentColor" fillOpacity="0.72" fontSize="11">
                {label}
              </text>
            ))
          : null}
      </svg>
      {scene === 0 && metricPlace !== "under-toggle" ? (
        <div className="absolute left-4 top-4 grid grid-cols-2 gap-2">
          {["10+ 系统", "17km²"].map((item) => (
            <div
              key={item}
              className={`rounded-lg border px-3 py-2 text-xs ${
                light ? "border-brand-blue/10 bg-white text-brand-blue shadow-card" : "border-white/15 bg-white/10 text-white"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function NeuralArt({ scene }: { scene: 0 | 1 }) {
  if (scene === 1) {
    return (
      <div className="flex h-full flex-col justify-center gap-3 px-6">
        {["采集", "治理", "指标", "服务", "智能"].map((label) => (
          <div key={label} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-brand-gold" />
            <span className="text-sm text-brand-blue">{label}</span>
            <span className="h-px flex-1 bg-line" />
          </div>
        ))}
      </div>
    )
  }

  const nodes = [
    { cx: 70, cy: 46 },
    { cx: 150, cy: 28 },
    { cx: 214, cy: 78 },
    { cx: 108, cy: 112 },
    { cx: 186, cy: 132 },
  ]

  return (
    <svg viewBox="0 0 260 170" className="h-full w-full" aria-hidden="true">
      <path d="M70 46 L150 28 L214 78 L186 132 L108 112 Z" fill="none" className="stroke-brand-blue/20" />
      <path d="M70 46 L108 112 M150 28 L186 132" fill="none" className="stroke-brand-gold" />
      {nodes.map((node) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r="7"
          className="fill-brand-blue"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: node.cx / 400 }}
        />
      ))}
    </svg>
  )
}

function PhoneArt({ scene }: { scene: 0 | 1 }) {
  return (
    <div className="mx-auto flex h-full w-[148px] flex-col overflow-hidden rounded-[28px] border border-brand-blue/15 bg-white shadow-float">
      <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-line" />
      <div className="flex flex-1 flex-col gap-2 px-3 py-3">
        <p className="text-[10px] tracking-wide text-muted">{scene === 0 ? "巡检任务" : "全景现场"}</p>
        {scene === 0 ? (
          ["A 栋 3F 配电", "连廊消防栓", "屋顶光伏"].map((item) => (
            <div key={item} className="rounded-lg bg-surface px-2 py-1.5 text-[10px] text-ink">
              {item}
            </div>
          ))
        ) : (
          <div className="flex flex-1 items-end rounded-xl bg-brand-blue/90 p-2">
            <span className="rounded-full bg-white px-2 py-1 text-[10px] text-brand-blue">一键派单</span>
          </div>
        )}
      </div>
    </div>
  )
}

export function WorkVisual({
  kind,
  scene = 0,
  className = "",
  tone = "dark",
  metricPlace = "corner",
}: WorkVisualProps) {
  return (
    <div className={className} aria-hidden="true">
      {kind === "console" ? <ConsoleArt scene={scene} /> : null}
      {kind === "cockpit" ? <CockpitArt scene={scene} tone={tone} metricPlace={metricPlace} /> : null}
      {kind === "neural" ? <NeuralArt scene={scene} /> : null}
      {kind === "phone" ? <PhoneArt scene={scene} /> : null}
    </div>
  )
}
