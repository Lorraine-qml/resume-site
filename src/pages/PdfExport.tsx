import { useEffect } from "react"
import { PdfShell } from "../components/pdf/PdfShell"
import { works } from "../data/content"
import { navigate } from "../lib/route"
import { AiArchitecture } from "../sections/AiArchitecture"
import { BentoGrid } from "../sections/BentoGrid"
import { Hero } from "../sections/Hero"
import { Portfolio } from "../sections/Portfolio"
import { Timeline } from "../sections/Timeline"

/**
 * Home PDF export. Hash route: `#/pdf`
 */
export function PdfExport() {
  useEffect(() => {
    document.title = "乔美玲 · 作品集导出"
  }, [])

  return (
    <PdfShell title="Lorraine Qiao · 产品作品集">
      <Hero forPrint />
      <BentoGrid />
      <Portfolio />
      <AiArchitecture forPrint />
      <Timeline />

      <section className="print:hidden rounded-2xl border border-dashed border-brand-gold/40 bg-surface px-5 py-5">
        <p className="text-xs tracking-[0.16em] text-brand-gold">作品案例 PDF</p>
        <p className="mt-2 text-sm text-copy">四个作品矩阵二级页也可单独导出，版式与本页一致：</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {works.map((work) => (
            <li key={work.id}>
              <button
                type="button"
                onClick={() => navigate(`/pdf/works/${work.id}`)}
                className="rounded-md border border-line bg-white px-3 py-1.5 text-xs text-brand-blue transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                {work.index} {work.title}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </PdfShell>
  )
}
