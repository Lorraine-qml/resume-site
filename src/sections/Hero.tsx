import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { FloatTag } from "../components/ui/FloatTag"
import { AiWorkspace } from "../components/visual/AiWorkspace"
import { heroFocus, heroMetrics, heroSkills, heroTags } from "../data/content"

interface HeroProps {
  id?: string
}

function HeroPortrait() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-brand-gold/30 blur-2xl" />
      <img
        src="/hero-portrait-v2.jpg"
        alt="乔美玲在双屏工位前整理蓝图与数据看板"
        className="relative mx-auto -mb-[14%] -mt-[20%] w-full"
      />
    </div>
  )
}

export function Hero({ id = "hero" }: HeroProps) {
  return (
    <section id={id} className="px-6 pb-0 pt-24 lg:px-10">
      <div className="mx-auto grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-base text-brand-blue/45">Hello, I'm 乔美玲</p>
          <h1 className="mt-4 text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-brand-blue sm:text-[2.2rem] lg:text-[1.9rem] xl:text-[2.2rem]">
            一起把复杂的事做成<span className="text-brand-gold">上线的事</span>。
          </h1>
          <p className="mt-6 text-lg font-semibold leading-snug text-brand-blue sm:text-xl">
            懂技术、通售前、精交付的复合型产品经理
          </p>
          <p className="mt-6 text-sm text-brand-blue/55">
            {heroTags.map((tag, index) => (
              <span key={tag}>
                {index > 0 ? <span className="mx-3 text-brand-blue/25">|</span> : null}
                {tag}
              </span>
            ))}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#portfolio">浏览实战作品</Button>
            <Button variant="gold" href="#timeline">
              了解职业路径
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="px-1 py-2 pr-16 sm:px-4 sm:pr-20 lg:pr-24"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        >
          <ul className="flex flex-wrap items-stretch justify-center gap-4 sm:justify-between sm:gap-6">
            {heroMetrics.map((item, index) => (
              <FloatTag
                key={item.id}
                variant="metric"
                label={item.label}
                value={item.value}
                delay={index * 0.18}
              />
            ))}
          </ul>
          {/* 整体左移，避开右侧固定头像遮挡 */}
          <div className="relative mx-auto mt-6 w-full max-w-xl -translate-x-2 sm:-translate-x-4 lg:mt-10 lg:max-w-2xl lg:-translate-x-8 xl:-translate-x-10">
            <ul className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 flex-col gap-10 sm:flex md:-translate-x-4 lg:-translate-x-6">
              {heroSkills.left.map((label, index) => (
                <FloatTag
                  key={label}
                  label={label}
                  delay={0.25 + index * 0.18}
                  className={index === 0 ? "-translate-x-2" : "-translate-x-5"}
                />
              ))}
            </ul>
            <div className="relative mx-auto w-[82%] sm:w-[58%] lg:w-[52%]">
              <HeroPortrait />
              <AiWorkspace className="absolute left-[78%] top-0 z-20 -translate-y-3 hidden lg:block xl:left-[76%]" />
            </div>
            <ul className="absolute right-0 top-1/2 z-10 hidden translate-x-2 -translate-y-1/2 flex-col items-end gap-10 sm:flex md:translate-x-4 lg:translate-x-6">
              {heroSkills.right.map((label, index) => (
                <FloatTag
                  key={label}
                  label={label}
                  delay={0.35 + index * 0.18}
                  className={index === 0 ? "translate-x-2" : "translate-x-5"}
                />
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap justify-center gap-3 sm:hidden">
              {[...heroSkills.left, ...heroSkills.right].map((label, index) => (
                <FloatTag key={label} label={label} delay={0.2 + index * 0.12} />
              ))}
            </ul>
          </div>
          <div className="mt-4 text-center lg:mt-5">
            <p className="text-base font-semibold tracking-wide text-brand-blue sm:text-lg">{heroFocus.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed tracking-wide text-brand-blue/55 sm:text-sm">{heroFocus.subtitle}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
