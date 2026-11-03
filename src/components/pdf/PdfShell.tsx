import { useEffect, type ReactNode } from "react"
import { Printer } from "lucide-react"
import { Button } from "../ui/Button"

interface PdfShellProps {
  title: string
  subtitle?: string
  kicker?: string
  children: ReactNode
}

/**
 * Shared chrome for home + work PDF export pages.
 */
export function PdfShell({
  title,
  subtitle = "B 端产品经理 · 全链路交付 · 懂技术 / 通售前 / 精交付",
  kicker = "PERSONAL PORTFOLIO · PDF",
  children,
}: PdfShellProps) {
  useEffect(() => {
    document.documentElement.classList.add("pdf-export-mode")
    return () => document.documentElement.classList.remove("pdf-export-mode")
  }, [])

  return (
    <div className="min-h-screen bg-surface text-brand-blue print:bg-white">
      <div className="print:hidden sticky top-0 z-20 border-b border-line bg-white/95 shadow-soft backdrop-blur-md">
        <div className="mx-auto flex max-w-[1123px] flex-wrap items-center justify-between gap-3 px-6 py-3 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-brand-blue">PDF 导出预览</p>
            <p className="mt-0.5 text-xs text-muted">
              横向 A4 · 打印时请取消勾选「页眉和页脚」，并勾选「背景图形」
            </p>
          </div>
          <Button type="button" onClick={() => window.print()} className="shrink-0">
            <Printer className="h-4 w-4" aria-hidden="true" />
            打印 / 导出 PDF
          </Button>
        </div>
      </div>

      <div className="pdf-export-sheet mx-auto w-full max-w-[1123px] bg-white px-6 py-6 shadow-soft print:max-w-none print:px-0 print:py-0 print:shadow-none lg:px-8">
        <header className="border-b border-line pb-4">
          <p className="text-xs tracking-[0.18em] text-brand-gold">{kicker}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-brand-blue">{title}</h1>
          {subtitle ? <p className="mt-2 text-sm text-copy">{subtitle}</p> : null}
        </header>

        <div className="pdf-stack mt-5 flex flex-col gap-5">{children}</div>

        <footer className="mt-5 border-t border-line pt-4 text-center text-xs text-muted">
          乔美玲 · qml53719@163.com · 16601745267
        </footer>
      </div>
    </div>
  )
}
