import type { CaseFrame } from "../../data/content"

interface MediaFrameProps {
  kind: CaseFrame
  label: string
  caption?: string
}

export function MediaFrame({ kind, label, caption }: MediaFrameProps) {
  return (
    <figure>
      <div
        className={`overflow-hidden rounded-card shadow-soft ${
          kind === "screen" ? "bg-brand-blue p-2" : "border border-brand-blue/10 bg-white"
        }`}
      >
        {kind === "browser" ? (
          <div className="flex items-center gap-1.5 border-b border-brand-blue/10 bg-surface px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
        ) : null}
        <div className="flex h-64 items-center justify-center border border-dashed border-brand-blue/15 bg-surface px-6 text-center md:h-80">
          <p className="text-sm text-brand-blue/45">截图 / 文档占位 · {label}</p>
        </div>
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-brand-blue/55">{caption}</figcaption> : null}
    </figure>
  )
}
