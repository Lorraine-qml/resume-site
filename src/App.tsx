import { useEffect } from "react"
import { MotionConfig } from "framer-motion"
import { ContactWidget } from "./components/layout/ContactWidget"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { works } from "./data/content"
import { usePathname } from "./lib/route"
import { MissingWork, WorkPage } from "./pages/WorkPage"
import { BentoGrid } from "./sections/BentoGrid"
import { Hero } from "./sections/Hero"
import { Portfolio } from "./sections/Portfolio"
import { Timeline } from "./sections/Timeline"

function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Portfolio />
      <Timeline />
    </>
  )
}

function App() {
  const path = usePathname()
  const onWorkRoute = path.startsWith("/works/")
  const workId = onWorkRoute ? decodeURIComponent(path.slice("/works/".length).replace(/\/$/, "")) : ""
  const work = workId ? works.find((item) => item.id === workId) : undefined

  useEffect(() => {
    if (!onWorkRoute) {
      document.title = "乔美玲 | B端产品经理 · 全链路交付专家 | 懂技术·通售前·精交付"
    }
  }, [onWorkRoute])

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
