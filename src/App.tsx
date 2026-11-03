import { useEffect } from "react"
import { MotionConfig } from "framer-motion"
import { ContactWidget } from "./components/layout/ContactWidget"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { works } from "./data/content"
import { getPathname, HOME_SECTIONS, isHomePath, usePathname } from "./lib/route"
import { MissingWork, WorkPage } from "./pages/WorkPage"
import { PdfExport } from "./pages/PdfExport"
import { PdfWorkExport } from "./pages/PdfWorkExport"
import { BentoGrid } from "./sections/BentoGrid"
import { Hero } from "./sections/Hero"
import { AiArchitecture } from "./sections/AiArchitecture"
import { Portfolio } from "./sections/Portfolio"
import { Timeline } from "./sections/Timeline"

function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Portfolio />
      <AiArchitecture />
      <Timeline />
    </>
  )
}

function App() {
  const path = usePathname()
  const onHomePdf = path === "/pdf"
  const onWorkPdf = path.startsWith("/pdf/works/")
  const pdfWorkId = onWorkPdf
    ? decodeURIComponent(path.slice("/pdf/works/".length).replace(/\/$/, ""))
    : ""
  const pdfWork = pdfWorkId ? works.find((item) => item.id === pdfWorkId) : undefined

  const onWorkRoute = path.startsWith("/works/")
  const onHome = isHomePath(path)
  const workId = onWorkRoute ? decodeURIComponent(path.slice("/works/".length).replace(/\/$/, "")) : ""
  const work = workId ? works.find((item) => item.id === workId) : undefined

  useEffect(() => {
    if (onHomePdf || onWorkPdf || onWorkRoute) return
    document.title = "乔美玲 | B端产品经理 · 全链路交付专家 | 懂技术·通售前·精交付"
  }, [onHomePdf, onWorkPdf, onWorkRoute])

  useEffect(() => {
    if (!onHome) return
    const current = getPathname()
    const section = current.replace(/^\//, "").split("/")[0] || ""
    if (!HOME_SECTIONS.has(section)) return
    const node = document.getElementById(section)
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [onHome, path])

  if (onHomePdf) {
    return (
      <MotionConfig reducedMotion="user">
        <PdfExport />
      </MotionConfig>
    )
  }

  if (onWorkPdf) {
    return (
      <MotionConfig reducedMotion="user">
        {pdfWork ? <PdfWorkExport work={pdfWork} /> : <MissingWork />}
      </MotionConfig>
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-brand-blue">
        <Navbar />
        <main>{onWorkRoute ? work ? <WorkPage work={work} /> : <MissingWork /> : <Home />}</main>
        <Footer />
        <ContactWidget />
      </div>
    </MotionConfig>
  )
}

export default App
