export const campusView = { width: 1440, height: 800 }

const COS = Math.cos(Math.PI / 6)
const SIN = Math.sin(Math.PI / 6)
const ORIGIN_X = 730
const ORIGIN_Y = 100
const SCALE = 6.2

export type CampusZone = "cockpit" | "console" | "neural" | "mobile" | "base"

export interface CampusBlock {
  id: string
  zone: CampusZone
  x: number
  y: number
  w: number
  d: number
  h: number
}

export interface ScreenPoint {
  x: number
  y: number
}

export function project(x: number, y: number, z = 0): ScreenPoint {
  return {
    x: ORIGIN_X + (x - y) * COS * SCALE,
    y: ORIGIN_Y + ((x + y) * SIN - z) * SCALE,
  }
}

export function toPoints(coords: ReadonlyArray<readonly [number, number, number]>) {
  return coords
    .map(([x, y, z]) => {
      const point = project(x, y, z)
      return `${point.x.toFixed(1)},${point.y.toFixed(1)}`
    })
    .join(" ")
}

export const campusBlocks: CampusBlock[] = [
  { id: "a", zone: "cockpit", x: -3.5, y: 46, w: 20, d: 14, h: 12 },
  { id: "a2", zone: "cockpit", x: 14, y: 36.5, w: 16, d: 11, h: 9 },
  { id: "b", zone: "console", x: 42, y: 2, w: 20, d: 12, h: 11 },
  { id: "b2", zone: "console", x: 64, y: 13.5, w: 12, d: 9, h: 7 },
  { id: "mid", zone: "base", x: 28, y: 28.5, w: 16, d: 11, h: 9 },
  { id: "c", zone: "neural", x: 27, y: 78, w: 26, d: 16, h: 13 },
  { id: "d", zone: "mobile", x: 77.5, y: 41.5, w: 13, d: 9, h: 6 },
]

export const roundHall = { zone: "neural" as const, cx: 27, cy: 70, r: 6.5, h: 8 }

export const pond = { cx: 98, cy: 54, rx: 10, ry: 6 }

export const road: ReadonlyArray<readonly [number, number]> = [
  [10, 80],
  [6, 64],
  [2, 48],
  [14, 36],
  [30, 26],
  [46, 16],
  [64, 12],
  [80, 20],
  [94, 34],
  [100, 48],
  [88, 60],
  [66, 66],
  [44, 76],
  [22, 82],
  [10, 80],
]

export const trees: ReadonlyArray<readonly [number, number]> = [
  [18, 30],
  [34, 22],
  [58, 24],
  [76, 32],
  [90, 42],
  [72, 52],
  [54, 58],
  [20, 58],
  [8, 70],
  [48, 48],
  [86, 28],
  [104, 46],
]

export interface CampusCallout {
  id: Exclude<CampusZone, "base">
  blockId: string
  side: "left" | "right"
  labelX: number
  labelY: number
  x: number
  y: number
}

const calloutSpec: Omit<CampusCallout, "x" | "y">[] = [
  { id: "cockpit", blockId: "a", side: "left", labelX: 40, labelY: 96 },
  { id: "console", blockId: "b", side: "right", labelX: 1156, labelY: 100 },
  { id: "neural", blockId: "c", side: "left", labelX: 40, labelY: 392 },
  { id: "mobile", blockId: "d", side: "right", labelX: 1156, labelY: 448 },
]

export const labelSize = { width: 240, height: 44 }

export const campusCallouts: CampusCallout[] = calloutSpec.map((spec) => {
  const block = campusBlocks.find((item) => item.id === spec.blockId)
  if (!block) throw new Error(`Missing campus block ${spec.blockId}`)
  const point = project(block.x + block.w / 2, block.y + block.d / 2, block.h)
  return { ...spec, x: point.x, y: point.y }
})

export function leaderPath(callout: CampusCallout) {
  const midY = callout.labelY + labelSize.height / 2
  if (callout.side === "left") {
    const startX = callout.labelX + labelSize.width
    const elbowX = startX + 40
    return `M ${startX} ${midY} H ${elbowX} L ${callout.x} ${callout.y}`
  }
  const elbowX = callout.labelX - 40
  return `M ${callout.labelX} ${midY} H ${elbowX} L ${callout.x} ${callout.y}`
}
