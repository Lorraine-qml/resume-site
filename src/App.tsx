import { MotionConfig } from "framer-motion"
import { ContactWidget } from "./components/layout/ContactWidget"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { BentoGrid } from "./sections/BentoGrid"
import { Hero } from "./sections/Hero"
import { Portfolio } from "./sections/Portfolio"
import { Timeline } from "./sections/Timeline"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-brand-blue">
        <Navbar />
        <main>
          <Hero />
          <BentoGrid />
          <Portfolio />
          <Timeline />
        </main>
        <Footer />
        <ContactWidget />
      </div>
    </MotionConfig>
  )
}

export default App
