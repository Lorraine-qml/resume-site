import { useEffect } from "react"
import { MotionConfig } from "framer-motion"
import { ContactWidget } from "./components/layout/ContactWidget"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { works } from "./data/content"
import { getPathname, HOME_SECTIONS, isHomePath, usePathname } from "./lib/route"
import { MissingWork, WorkPage } from "./pages/WorkPage"
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
  const onWorkRoute = path.startsWith("/works/")
  const onHome = isHomePath(path)
  const workId = onWorkRoute ? decodeURIComponent(path.slice("/works/".length).replace(/\/$/, "")) : ""
  const work = workId ? works.find((item) => item.id === workId) : undefined

  useEffect(() => {
    if (!onWorkRoute) {
      document.title = "乔美玲 | B端产品经理 · 全链路交付专家 | 懂技术·通售前·精交付"
    }
  }, [onWorkRoute])

  // Hash deep-link: #/portfolio → scroll after Home mounts
  useEffect(() => {
    if (!onHome) return
    const current = getPathname()
    const section = current.replace(/^\//, "").split("/")[0] || ""
    if (!HOME_SECTIONS.has(section)) return
    const node = document.getElementById(section)
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [onHome, path])

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
