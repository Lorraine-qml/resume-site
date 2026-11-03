import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Printer } from "lucide-react"
import { works, type WorkItem } from "../data/content"
import { consoleStory } from "../data/consoleStory"
import { neuralStory } from "../data/neuralStory"
import { cockpitStory, type WorkIndustry } from "../data/workStories"
import { ChangxingCase } from "../components/works/ChangxingCase"
import { ProjectIntro } from "../components/works/ProjectIntro"
import { FactoryCase } from "../components/works/FactoryCase"
import { GardenCase } from "../components/works/GardenCase"
import { ConsoleModuleCase } from "../components/works/ConsoleModuleCase"
import { MobileCase } from "../components/works/MobileCase"
import { OtherCase } from "../components/works/OtherCase"
import { TrafficCase } from "../components/works/TrafficCase"
import { FilmStage } from "../components/works/FilmStage"
import { ParkCase } from "../components/works/ParkCase"
import { PlatformAppSwitch } from "../components/works/PlatformAppSwitch"
import { WorkCarousel } from "../components/works/WorkCarousel"
import { Button } from "../components/ui/Button"
import { navigate } from "../lib/route"

interface WorkPageProps {
  work: WorkItem
  /** PDF 导出：展开全部 Tab 内容，隐藏导航与跳转 */
  forPrint?: boolean
}

function Crumb({ work }: { work: WorkItem }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs tracking-wide text-muted">
        <a
          href="#/portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/portfolio")
          }}
          className="relative font-semibold text-brand-blue after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-gold"
        >
          作品矩阵
        </a>
        <span className="mx-2 text-line">/</span>
        <span className="font-medium text-brand-blue">{work.title}</span>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="ghost"
          href={`#/pdf/works/${work.id}`}
          onClick={() => {
            navigate(`/pdf/works/${work.id}`)
          }}
          className="px-3 py-1.5 text-xs shadow-none"
        >
          <Printer className="h-3.5 w-3.5" aria-hidden="true" />
          导出 PDF
        </Button>
        <a
          href="#/portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/portfolio")
          }}
          className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-brand-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          返回作品矩阵
        </a>
      </div>
    </div>
  )
}

function NextWork({ work }: { work: WorkItem }) {
  const index = works.findIndex((item) => item.id === work.id)
  const next = works[index + 1]

  return (
    <div className="mt-16 rounded-2xl border border-line bg-white px-6 py-8 shadow-soft sm:px-8">
      {next ? (
        <a
          href={`#/works/${next.id}`}
          onClick={(event) => {
            event.preventDefault()
            navigate(`/works/${next.id}`)
          }}
          className="group flex flex-wrap items-center justify-between gap-4"
        >
          <span>
            <span className="block text-xs tracking-[0.16em] text-muted">下一个作品</span>
            <span className="mt-2 block text-xl font-semibold text-brand-blue">
              {work.id === "cockpit"
                ? "如果您对数据底座或中台系统感兴趣，请继续查看下一个作品"
                : "继续查看下一个作品"}
            </span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-brand-blue transition-colors group-hover:text-brand-gold">
            {next.title}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
          </span>
        </a>
      ) : (
        <a
          href="#/portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/portfolio")
          }}
          className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-brand-gold"
        >
          返回作品矩阵
          <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}

function IndustryCaseBody({ industry }: { industry: WorkIndustry }) {
  if (industry.id === "gov") return <ChangxingCase />
  if (industry.id === "factory") return <FactoryCase />
  if (industry.id === "park") return <ParkCase />
  if (industry.id === "garden") return <GardenCase />
  if (industry.id === "traffic") return <TrafficCase />
  if (industry.id === "other") return <OtherCase />
  return <IndustryPanel industry={industry} />
}

function CockpitFilms() {
  if (cockpitStory.films.length === 0) return null
  return (
    <div className="mt-10 space-y-10">
      {cockpitStory.films.map((film) => {
        const mediaLeft = Boolean(film.src || film.href)
        return (
          <article
            key={film.id}
            className={`grid min-w-0 items-center gap-8 ${
              mediaLeft ? "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]" : "lg:grid-cols-2"
            }`}
          >
            {mediaLeft ? (
              <FilmStage
                title={film.title}
                badge={film.badge}
                visual={film.visual}
                scene={film.scene}
                src={film.src}
                href={film.href}
              />
            ) : null}
            <div className={mediaLeft ? "min-w-0 lg:pr-16" : film.align === "media-first" ? "lg:order-2" : undefined}>
              <p className="text-[11px] tracking-[0.18em] text-brand-gold">【{film.kicker}】</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-blue">{film.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink">{film.body}</p>
            </div>
            {mediaLeft ? null : (
              <FilmStage
                title={film.title}
                badge={film.badge}
                visual={film.visual}
                scene={film.scene}
                src={film.src}
                href={film.href}
              />
            )}
          </article>
        )
      })}
    </div>
  )
}

function IndustryPanel({ industry }: { industry: WorkIndustry }) {
  return (
    <div>
      <ProjectIntro overview={industry.summary} highlights={industry.highlights} />
      <div className="mt-10">
        <WorkCarousel key={industry.id} slides={industry.slides} visual="cockpit" dark />
      </div>
    </div>
  )
}

function CockpitPage({ work, forPrint = false }: { work: WorkItem; forPrint?: boolean }) {
  const [active, setActive] = useState(cockpitStory.industries[0].id)
  const industry = cockpitStory.industries.find((item) => item.id === active) ?? cockpitStory.industries[0]

  if (forPrint) {
    return (
      <div className="flex flex-col gap-8">
        {cockpitStory.industries.map((item) => (
          <section key={item.id} className="break-inside-avoid rounded-2xl border border-line bg-white p-5 shadow-soft sm:p-6">
            <p className="text-xs tracking-[0.16em] text-brand-gold">{item.tags}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-blue md:text-2xl">{item.name}</h3>
            <div className="mt-5">
              <IndustryCaseBody industry={item} />
            </div>
            {item.id === "park" ? <CockpitFilms /> : null}
          </section>
        ))}
      </div>
    )
  }

  return (
    <>
      <div>
        <div
          role="tablist"
          aria-label="行业"
          className="flex w-full gap-1 rounded-full bg-track p-1.5"
        >
          {cockpitStory.industries.map((item) => {
            const selected = item.id === industry.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(item.id)}
                className="group relative min-w-0 flex-1 rounded-full px-1 py-2.5 text-center text-xs tracking-wide sm:px-2 sm:text-sm"
              >
                {selected ? (
                  <motion.span
                    layoutId="industry-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-float"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span
                  className={`relative z-10 block truncate transition-colors duration-300 ${
                    selected ? "font-semibold text-brand-blue" : "font-medium text-muted group-hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
        <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <p className="text-xs tracking-[0.16em] text-brand-gold">{industry.tags}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">
              {industry.name}
            </h3>
          </div>
          <PlatformAppSwitch current="cockpit" />
        </div>
        <div className="mt-5">
          <IndustryCaseBody industry={industry} />
        </div>
      </div>

      {industry.id === "park" ? <CockpitFilms /> : null}
      <NextWork work={work} />
    </>
  )
}

function MobilePage({ work, forPrint = false }: { work: WorkItem; forPrint?: boolean }) {
  return (
    <>
      <MobileCase forPrint={forPrint} />
      {forPrint ? null : <NextWork work={work} />}
    </>
  )
}

function ConsolePage({ work, forPrint = false }: { work: WorkItem; forPrint?: boolean }) {
  const [active, setActive] = useState(consoleStory.modules[0].id)
  const module = consoleStory.modules.find((item) => item.id === active) ?? consoleStory.modules[0]
  const story = consoleStory.stories[module.id]

  if (forPrint) {
    return (
      <div className="flex flex-col gap-8">
        {consoleStory.modules.map((item) => {
          const moduleStory = consoleStory.stories[item.id]
          return (
            <section key={item.id} className="break-inside-avoid rounded-2xl border border-line bg-white p-5 shadow-soft sm:p-6">
              <p className="text-xs tracking-[0.16em] text-brand-gold">智慧园区 / 业务中台</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-blue md:text-2xl">{item.label}</h3>
              {moduleStory ? (
                <div className="mt-5">
                  <ConsoleModuleCase story={moduleStory} />
                </div>
              ) : (
                <p className="mt-3 text-sm leading-[1.75] text-muted">模块详情内容待补充。</p>
              )}
            </section>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div>
        <div
          role="tablist"
          aria-label="中台业务模块"
          className="flex w-full gap-1 rounded-full bg-track p-1.5"
        >
          {consoleStory.modules.map((item) => {
            const selected = item.id === module.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(item.id)}
                className="group relative min-w-0 flex-1 rounded-full px-1 py-3 text-center text-xs tracking-wide sm:px-2 sm:text-sm"
              >
                {selected ? (
                  <motion.span
                    layoutId="console-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-float"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span
                  className={`relative z-10 block truncate transition-colors duration-300 ${
                    selected ? "font-semibold text-brand-blue" : "font-medium text-muted group-hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <p className="text-xs tracking-[0.16em] text-brand-gold">智慧园区 / 业务中台</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">
              {work.title}
            </h2>
          </div>
          <PlatformAppSwitch current="console" />
        </div>

        {story ? (
          <ConsoleModuleCase story={story} />
        ) : (
          <div className="mt-5 rounded-2xl border border-line bg-white px-6 py-8 shadow-soft sm:px-8">
            <p className="text-xs tracking-[0.16em] text-brand-gold">全流程模块</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue">{module.label}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-[1.75] text-muted">模块详情内容待补充。</p>
          </div>
        )}
      </div>

      <NextWork work={work} />
    </>
  )
}

function NeuralPage({ work, forPrint = false }: { work: WorkItem; forPrint?: boolean }) {
  return (
    <>
      <div className="mb-1 flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="text-xs tracking-[0.16em] text-brand-gold">智慧园区 / 底座后台</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">
            {work.title}
          </h2>
        </div>
        {forPrint ? null : <PlatformAppSwitch current="neural" />}
      </div>
      <ConsoleModuleCase story={neuralStory} lifecyclePlacement="before" />
      {forPrint ? null : <NextWork work={work} />}
    </>
  )
}

function BriefPage({ work, forPrint = false }: { work: WorkItem; forPrint?: boolean }) {
  const slides = [
    { id: `${work.id}-a`, caption: "界面草图", scene: 0 as const },
    { id: `${work.id}-b`, caption: "结构草图", scene: 1 as const },
  ]

  return (
    <>
      <p className="text-xs tracking-[0.18em] text-muted">{work.eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">{work.title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink">{work.project}</p>
      <p className="mt-3 text-sm font-medium text-brand-gold">{work.metrics}</p>
      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <WorkCarousel slides={slides} visual={work.visual} dark={work.tone === "dark"} />
        <dl className="space-y-5 text-sm leading-7">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">角色</dt>
            <dd className="mt-1 text-ink">{work.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">挑战</dt>
            <dd className="mt-1 font-semibold text-ink">{work.challenge}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">动作</dt>
            <dd className="mt-1 text-ink">{work.action}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-brand-gold">结果</dt>
            <dd className="mt-1 font-semibold text-brand-blue">{work.result}</dd>
          </div>
        </dl>
      </div>
      {forPrint ? null : <NextWork work={work} />}
    </>
  )
}

export function WorkPage({ work, forPrint = false }: WorkPageProps) {
  useEffect(() => {
    if (!forPrint) {
      document.title = `${work.title} | 乔美玲`
      window.scrollTo(0, 0)
    }
  }, [work.id, work.title, forPrint])

  if (forPrint) {
    return (
      <div className="w-full">
        {work.id === "cockpit" ? (
          <CockpitPage work={work} forPrint />
        ) : work.id === "console" ? (
          <ConsolePage work={work} forPrint />
        ) : work.id === "neural" ? (
          <NeuralPage work={work} forPrint />
        ) : work.id === "mobile" ? (
          <MobilePage work={work} forPrint />
        ) : (
          <BriefPage work={work} forPrint />
        )}
      </div>
    )
  }

  return (
    <article className="bg-surface px-6 pb-20 pt-20 lg:px-10">
      <div className="mx-auto w-full">
        <Crumb work={work} />
        <div className="mt-5">
          {work.id === "cockpit" ? (
            <CockpitPage work={work} />
          ) : work.id === "console" ? (
            <ConsolePage work={work} />
          ) : work.id === "neural" ? (
            <NeuralPage work={work} />
          ) : work.id === "mobile" ? (
            <MobilePage work={work} />
          ) : (
            <BriefPage work={work} />
          )}
        </div>
      </div>
    </article>
  )
}

export function MissingWork() {
  return (
    <div className="bg-surface px-6 pb-24 pt-28">
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-semibold text-brand-blue">没有找到这个作品</h1>
        <a
          href="#/portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/portfolio")
          }}
          className="mt-6 inline-flex items-center gap-1 text-sm text-brand-blue hover:text-brand-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          返回作品矩阵
        </a>
      </div>
    </div>
  )
}
