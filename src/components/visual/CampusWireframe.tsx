import { useReducedMotion } from "framer-motion"
import {
  campusBlocks,
  campusCallouts,
  campusView,
  labelSize,
  leaderPath,
  pond,
  project,
  road,
  roundHall,
  toPoints,
  trees,
  type CampusBlock,
  type CampusCallout,
  type CampusZone,
} from "./campusPlan"

interface CampusWireframeProps {
  active: Exclude<CampusZone, "base">
  labels: Record<Exclude<CampusZone, "base">, { index: string; title: string }>
  showCallouts?: boolean
  onActive: (id: Exclude<CampusZone, "base">) => void
  onOpen: (id: Exclude<CampusZone, "base">) => void
  className?: string
  idPrefix?: string
}

function facePoints(block: CampusBlock) {
  const { x, y, w, d, h } = block
  return {
    top: toPoints([
      [x, y, h],
      [x + w, y, h],
      [x + w, y + d, h],
      [x, y + d, h],
    ]),
    south: toPoints([
      [x, y + d, h],
      [x + w, y + d, h],
      [x + w, y + d, 0],
      [x, y + d, 0],
    ]),
    east: toPoints([
      [x + w, y, h],
      [x + w, y + d, h],
      [x + w, y + d, 0],
      [x + w, y, 0],
    ]),
    southEdge: [
      [x, y + d, h],
      [x + w, y + d, h],
      [x + w, y + d, 0],
      [x, y + d, 0],
    ] as const,
    eastEdge: [
      [x + w, y, h],
      [x + w, y + d, h],
      [x + w, y + d, 0],
      [x + w, y, 0],
    ] as const,
  }
}

function lerp(
  a: readonly [number, number, number],
  b: readonly [number, number, number],
  t: number,
): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
}

function bandLine(
  face: readonly [
    readonly [number, number, number],
    readonly [number, number, number],
    readonly [number, number, number],
    readonly [number, number, number],
  ],
  t: number,
) {
  const from = project(...lerp(face[0], face[3], t))
  const to = project(...lerp(face[1], face[2], t))
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)}`
}

function arcPoints(cx: number, cy: number, radius: number, z: number, from: number, to: number, steps: number) {
  return Array.from({ length: steps + 1 }, (_, index) => {
    const t = from + ((to - from) * index) / steps
    return project(cx + Math.cos(t) * radius, cy + Math.sin(t) * radius, z)
  })
}

function ellipsePoints(cx: number, cy: number, rx: number, ry: number, z: number) {
  return Array.from({ length: 28 }, (_, index) => {
    const t = (index / 28) * Math.PI * 2
    return project(cx + Math.cos(t) * rx, cy + Math.sin(t) * ry, z)
  })
    .map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`)
    .join(" ")
}

function Ripple({ x, y }: { x: number; y: number }) {
  return (
    <>
      <circle cx={x} cy={y} r="7" className="fill-brand-gold" opacity="0.45">
        <animate attributeName="r" values="7;28" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={x} cy={y} r="7" className="fill-brand-gold" opacity="0.3">
        <animate attributeName="r" values="7;28" dur="1.8s" begin="0.7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0" dur="1.8s" begin="0.7s" repeatCount="indefinite" />
      </circle>
    </>
  )
}

function Callout({
  callout,
  label,
  active,
  reduce,
  onActive,
  onOpen,
}: {
  callout: CampusCallout
  label: { index: string; title: string }
  active: boolean
  reduce: boolean
  onActive: (id: CampusCallout["id"]) => void
  onOpen: (id: CampusCallout["id"]) => void
}) {
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${label.index} ${label.title}`}
      aria-current={active ? "true" : undefined}
      className="cursor-pointer outline-none"
      onMouseEnter={() => onActive(callout.id)}
      onFocus={() => onActive(callout.id)}
      onClick={() => onOpen(callout.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onOpen(callout.id)
        }
      }}
    >
      <path
        d={leaderPath(callout)}
        className={active ? "stroke-brand-gold" : "stroke-white/40"}
        strokeWidth={active ? 1.6 : 1.15}
        fill="none"
      />
      {active && !reduce ? <Ripple x={callout.x} y={callout.y} /> : null}
      <circle
        cx={callout.x}
        cy={callout.y}
        r={active ? 6.5 : 5}
        className={active ? "fill-brand-gold stroke-white" : "fill-white stroke-brand-gold"}
        strokeWidth="1.5"
      />
      {active ? (
        <rect
          x={callout.labelX - 8}
          y={callout.labelY - 8}
          width={labelSize.width + 16}
          height={labelSize.height + 16}
          rx="26"
          className="fill-brand-gold/20"
        />
      ) : null}
      <rect
        x={callout.labelX}
        y={callout.labelY}
        width={labelSize.width}
        height={labelSize.height}
        rx="22"
        className={active ? "fill-white stroke-brand-gold" : "fill-white stroke-white"}
        strokeWidth={active ? 1.75 : 0}
      />
      <text
        x={callout.labelX + 18}
        y={callout.labelY + 28}
        className={`font-sans text-[15px] font-semibold ${active ? "fill-brand-gold" : "fill-brand-blue/50"}`}
      >
        {label.index}
      </text>
      <text x={callout.labelX + 44} y={callout.labelY + 28} className="fill-brand-blue/25 font-sans text-[15px]">
        /
      </text>
      <text x={callout.labelX + 60} y={callout.labelY + 28} className="fill-brand-blue font-sans text-[15px] font-medium">
        {label.title}
      </text>
    </g>
  )
}

export function CampusWireframe({
  active,
  labels,
  showCallouts = true,
  onActive,
  onOpen,
  className = "",
  idPrefix = "campus",
}: CampusWireframeProps) {
  const reduce = useReducedMotion() ?? false
  const blocks = [...campusBlocks].sort((a, b) => a.x + a.y - (b.x + b.y))
  const roadPath = road
    .map(([x, y], index) => {
      const point = project(x, y, 0.2)
      return `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`
    })
    .join(" ")

  return (
    <svg
      viewBox={`0 0 ${campusView.width} ${campusView.height}`}
      className={className}
      role={showCallouts ? "group" : "img"}
      aria-label={showCallouts ? "作品沙盘" : undefined}
      aria-hidden={showCallouts ? undefined : true}
    >
      <defs>
        <radialGradient id={`${idPrefix}-fade`} cx="50%" cy="40%" r="58%">
          <stop offset="52%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id={`${idPrefix}-mask`}>
          <rect width={campusView.width} height={campusView.height} fill={`url(#${idPrefix}-fade)`} />
        </mask>
        <radialGradient id={`${idPrefix}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="46%" stopColor="currentColor" className="text-brand-gold" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g mask={`url(#${idPrefix}-mask)`} className="stroke-white/10" fill="none" strokeWidth="1">
        {Array.from({ length: 14 }, (_, index) => {
          const step = index * 10 - 10
          const verticalA = project(step, -8, 0)
          const verticalB = project(step, 104, 0)
          const horizontalA = project(-14, step, 0)
          const horizontalB = project(112, step, 0)
          return (
            <g key={step}>
              <line x1={verticalA.x} y1={verticalA.y} x2={verticalB.x} y2={verticalB.y} />
              <line x1={horizontalA.x} y1={horizontalA.y} x2={horizontalB.x} y2={horizontalB.y} />
            </g>
          )
        })}
      </g>

      <path d={roadPath} className="fill-none stroke-white/20" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
      <path d={roadPath} className="fill-none stroke-white/40" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" />

      <polygon
        points={ellipsePoints(pond.cx, pond.cy, pond.rx, pond.ry, 0)}
        className={active === "mobile" ? "fill-white/20 stroke-brand-gold" : "fill-white/10 stroke-white/40"}
        strokeWidth="1.2"
      />
      <polygon
        points={ellipsePoints(pond.cx, pond.cy, pond.rx * 0.62, pond.ry * 0.62, 0)}
        className="fill-none stroke-white/25"
        strokeWidth="1"
      />

      {trees.map(([x, y]) => {
        const point = project(x, y, 0)
        return <circle key={`${x}-${y}`} cx={point.x} cy={point.y} r="3.2" className="fill-white/25" />
      })}

      {campusCallouts.map((callout) => (
        <ellipse
          key={callout.id}
          cx={callout.x}
          cy={callout.y + 28}
          rx="190"
          ry="110"
          fill={`url(#${idPrefix}-glow)`}
          className={`transition-opacity duration-500 ${active === callout.id ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {[
        ...blocks.map((block) => ({ kind: "block" as const, depth: block.x + block.y, block })),
        { kind: "round" as const, depth: roundHall.cx + roundHall.cy },
      ]
        .sort((a, b) => a.depth - b.depth)
        .map((item) => {
          if (item.kind === "round") return <RoundHall key="round" lit={active === roundHall.zone} />
          const faces = facePoints(item.block)
          const lit = item.block.zone === active
          return (
            <g key={item.block.id}>
              <polygon
                points={faces.south}
                className={lit ? "fill-white/10 stroke-white/75" : "fill-white/[0.04] stroke-white/30"}
                strokeWidth="1.15"
                strokeLinejoin="round"
              />
              <polygon
                points={faces.east}
                className={lit ? "fill-brand-gold/10 stroke-white/75" : "fill-white/[0.03] stroke-white/30"}
                strokeWidth="1.15"
                strokeLinejoin="round"
              />
              <polygon
                points={faces.top}
                className={lit ? "fill-white/20 stroke-brand-gold" : "fill-white/[0.06] stroke-white/40"}
                strokeWidth={lit ? 1.6 : 1.15}
                strokeLinejoin="round"
              />
              {item.block.h >= 8
                ? [0.35, 0.62].map((t) => (
                    <g key={t} className={lit ? "stroke-white/50" : "stroke-white/25"} fill="none" strokeWidth="0.8">
                      <path d={bandLine(faces.southEdge, t)} />
                      <path d={bandLine(faces.eastEdge, t)} />
                    </g>
                  ))
                : null}
            </g>
          )
        })}

      {showCallouts
        ? campusCallouts.map((callout) => (
            <Callout
              key={callout.id}
              callout={callout}
              label={labels[callout.id]}
              active={active === callout.id}
              reduce={reduce}
              onActive={onActive}
              onOpen={onOpen}
            />
          ))
        : null}
    </svg>
  )
}

function RoundHall({ lit }: { lit: boolean }) {
  const { cx, cy, r, h } = roundHall
  const frontStart = -Math.PI / 4
  const frontEnd = (Math.PI * 3) / 4
  const lower = arcPoints(cx, cy, r, 0, frontStart, frontEnd, 18)
  const upper = arcPoints(cx, cy, r, h, frontEnd, frontStart, 18)
  const wall = [...lower, ...upper].map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ")
  const roof = arcPoints(cx, cy, r, h, 0, Math.PI * 2, 28)
    .slice(0, 28)
    .map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`)
    .join(" ")

  return (
    <g>
      <polygon
        points={wall}
        className={lit ? "fill-white/10 stroke-white/75" : "fill-white/[0.04] stroke-white/30"}
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <polygon
        points={roof}
        className={lit ? "fill-white/20 stroke-brand-gold" : "fill-white/[0.07] stroke-white/40"}
        strokeWidth={lit ? 1.6 : 1.15}
      />
    </g>
  )
}
