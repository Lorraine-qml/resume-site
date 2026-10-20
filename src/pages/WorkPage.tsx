import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { works, type WorkItem } from "../data/content"
import { cockpitStory, type WorkIndustry } from "../data/workStories"
import { ChangxingCase } from "../components/works/ChangxingCase"
import { ProjectIntro } from "../components/works/ProjectIntro"
import { FactoryCase } from "../components/works/FactoryCase"
import { GardenCase } from "../components/works/GardenCase"
import { MobileCase } from "../components/works/MobileCase"
import { OtherCase } from "../components/works/OtherCase"
import { TrafficCase } from "../components/works/TrafficCase"
import { FilmStage } from "../components/works/FilmStage"
import { ParkCase } from "../components/works/ParkCase"
import { WorkCarousel } from "../components/works/WorkCarousel"
import { navigate } from "../lib/route"

interface WorkPageProps {
  work: WorkItem
}

function Crumb({ work }: { work: WorkItem }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs tracking-wide text-muted">
        <a
          href="/#portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/#portfolio")
          }}
          className="hover:text-brand-blue"
        >
          作品矩阵
        </a>
        <span className="mx-2 text-line">/</span>
        <span className="text-brand-blue">{work.title}</span>
      </p>
      <a
        href="/#portfolio"
        onClick={(event) => {
          event.preventDefault()
          navigate("/#portfolio")
        }}
        className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-brand-gold"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回作品矩阵
      </a>
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
          href={`/works/${next.id}`}
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
          href="/#portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/#portfolio")
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

function IndustryPanel({ industry }: { industry: WorkIndustry }) {
  return (
    <div>
      <p className="text-xs tracking-[0.16em] text-brand-gold">{industry.tags}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-blue md:text-3xl">{industry.name}</h3>
      <ProjectIntro overview={industry.summary} highlights={industry.highlights} />
      <div className="mt-10">
        <WorkCarousel key={industry.id} slides={industry.slides} visual="cockpit" dark />
      </div>
    </div>
  )
}

function CockpitPage({ work }: { work: WorkItem }) {
  const [active, setActive] = useState(cockpitStory.industries[0].id)
  const industry = cockpitStory.industries.find((item) => item.id === active) ?? cockpitStory.industries[0]

  return (
    <>
      <p className="text-xs tracking-[0.2em] text-brand-gold">{cockpitStory.kicker}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">{cockpitStory.title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink">{cockpitStory.summary}</p>

      <div className="mt-10">
        <div
          role="tablist"
          aria-label="行业"
          className="grid w-full grid-cols-3 gap-1 rounded-3xl bg-track p-1.5 max-lg:pr-20 md:grid-cols-6 md:rounded-full"
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
                className="group relative rounded-full px-2 py-3 text-center text-sm tracking-wide"
              >
                {selected ? (
                  <motion.span
                    layoutId="industry-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-float"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    selected ? "font-semibold text-brand-blue" : "font-medium text-muted group-hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
        <div className="mt-10">
          {industry.id === "gov" ? (
            <ChangxingCase />
          ) : industry.id === "factory" ? (
            <FactoryCase />
          ) : industry.id === "park" ? (
            <ParkCase />
          ) : industry.id === "garden" ? (
            <GardenCase />
          ) : industry.id === "traffic" ? (
            <TrafficCase />
          ) : industry.id === "other" ? (
            <OtherCase />
          ) : (
            <IndustryPanel industry={industry} />
          )}
        </div>
      </div>

      {industry.id === "park" && cockpitStory.films.length > 0 ? (
        <div className="mt-16 space-y-12">
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
      ) : null}
      <NextWork work={work} />
    </>
  )
}

function MobilePage({ work }: { work: WorkItem }) {
  return (
    <>
      <MobileCase />
      <NextWork work={work} />
    </>
  )
}

function BriefPage({ work }: { work: WorkItem }) {
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
      <NextWork work={work} />
    </>
  )
}

export function WorkPage({ work }: WorkPageProps) {
  useEffect(() => {
    document.title = `${work.title} | 乔美玲`
    window.scrollTo(0, 0)
  }, [work.id, work.title])

  return (
    <article className="bg-surface px-6 pb-20 pt-24 lg:px-10">
      <div className="mx-auto w-full">
        <Crumb work={work} />
        <div className="mt-10">
          {work.id === "cockpit" ? <CockpitPage work={work} /> : work.id === "mobile" ? <MobilePage work={work} /> : <BriefPage work={work} />}
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
          href="/#portfolio"
          onClick={(event) => {
            event.preventDefault()
            navigate("/#portfolio")
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
