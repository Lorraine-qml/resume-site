import { ArrowUpRight, BookOpen } from "lucide-react"
import type { WorkItem } from "../../data/content"
import { navigate } from "../../lib/route"
import { WorkVisual } from "./WorkVisual"

interface WorkCardProps {
  work: WorkItem
}

export function WorkCard({ work }: WorkCardProps) {
  const dark = work.tone === "dark"

  return (
    <a
      href={`/works/${work.id}`}
      onClick={(event) => {
        event.preventDefault()
        navigate(`/works/${work.id}`)
      }}
      className={`group relative flex min-h-[22rem] w-full flex-col overflow-hidden rounded-2xl border p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-bento lg:h-[24rem] ${
        dark ? "border-white/10 bg-brand-blue text-white" : "border-line bg-white text-brand-blue"
      }`}
    >
      {dark ? <div className="pointer-events-none absolute inset-0 bg-cockpit-glow" /> : null}
      {!dark ? (
        <div className="pointer-events-none absolute inset-0 bg-work-grid bg-[length:28px_28px] opacity-80" />
      ) : null}
      {!dark ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/25" />
      ) : null}
      <WorkVisual
        kind={work.visual}
        className={`pointer-events-none absolute hidden opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100 sm:block ${
          work.visual === "phone"
            ? "bottom-0 right-3 top-8 w-[148px]"
            : work.visual === "neural"
              ? "inset-x-8 bottom-16 top-16"
              : "bottom-6 right-4 top-8 w-[46%]"
        }`}
      />
      {work.visual === "neural" ? (
        <p aria-hidden="true" className="pointer-events-none absolute bottom-6 right-5 hidden max-w-[7rem] text-[10px] leading-5 text-brand-blue/20 sm:block">
          layer.embed
          <br />
          retrieve.top_k
          <br />
          agent.dispatch
        </p>
      ) : null}
      <div className="relative z-10 flex h-full max-w-[18rem] flex-col">
        <p className={`text-[11px] tracking-[0.14em] ${dark ? "text-white/55" : "text-muted"}`}>
          <span className="text-brand-gold">{work.index}</span>
          <span className="mx-2 text-brand-gold/40">/</span>
          {work.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{work.title}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-2.5 py-1 text-[11px] ${
                dark ? "border border-white/15 bg-white/10 text-white" : "border border-line bg-white/80 text-brand-blue"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <p className={`text-sm ${dark ? "text-white/75" : "text-copy"}`}>{work.project}</p>
          <p className={`mt-1.5 text-sm font-medium ${dark ? "text-brand-gold" : "text-brand-blue"}`}>{work.metrics}</p>
          <p className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-xs tracking-wide">
            <BookOpen className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            阅览设计全貌
            <ArrowUpRight
              className="h-3.5 w-3.5 shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </a>
  )
}
