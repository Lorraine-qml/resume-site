import { useEffect } from "react"
import { PdfShell } from "../components/pdf/PdfShell"
import type { WorkItem } from "../data/content"
import { WorkPage } from "./WorkPage"

interface PdfWorkExportProps {
  work: WorkItem
}

/**
 * Work detail PDF export. Hash route: `#/pdf/works/:id`
 * Layout chrome matches home `#/pdf`.
 */
export function PdfWorkExport({ work }: PdfWorkExportProps) {
  useEffect(() => {
    document.title = `${work.title} · PDF 导出 | 乔美玲`
  }, [work.title])

  return (
    <PdfShell
      kicker="WORK CASE · PDF"
      title={`${work.title}`}
      subtitle={`作品矩阵 / ${work.title} · ${work.eyebrow ?? "案例详解"}`}
    >
      <WorkPage work={work} forPrint />
    </PdfShell>
  )
}
