import type { WorkVisual } from "./content"

export interface WorkSlide {
  id: string
  caption: string
  scene: 0 | 1
  image?: string
}

export interface WorkDuty {
  title: string
  text: string
}

export interface WorkIndustry {
  id: string
  label: string
  tags: string
  name: string
  summary: string
  highlights: string[]
  duties: WorkDuty[]
  slides: WorkSlide[]
  lightSlides?: WorkSlide[]
}

export interface WorkFilm {
  id: string
  kicker: string
  title: string
  body: string
  align: "text-first" | "media-first"
  visual: WorkVisual
  scene: 0 | 1
  badge: string
  src?: string
  href?: string
}

export interface CockpitStory {
  kicker: string
  title: string
  summary: string
  industries: WorkIndustry[]
  films: WorkFilm[]
}

export const cockpitStory: CockpitStory = {
  kicker: "决策指挥中枢",
  title: "宏观决策驾驶舱",
  summary: "整合跨板块数据孤岛，为集团与政府提供“一图观全域、一表掌经营”的宏观决策支持。",
  industries: [
    {
      id: "park",
      label: "智慧园区",
      tags: "智慧园区 / 标准化产品",
      name: "禹翼 · 标准化数字管理平台",
      summary:
        "本项目的难点，在于打破传统政企“一客一开发”的定制化泥潭，将复杂且非标的园区业务，抽象重构为一套高复用、可配置的标准化 SaaS 产品体系。",
      highlights: ["一客一开发", "非标业务抽象", "可配置 SaaS"],
      duties: [
        {
          title: "产品说明",
          text: "主导产品从 0 到 1 的三阶段演进，从园区基础数据底座升级为数据+AI 驱动的智能平台，覆盖 PC 管理端/大屏端/小程序三端，产品能力可复用于智慧园区、社区、政务、园林等多场景。",
        },
        {
          title: "全链路管控与交付",
          text: "需求、设计与上线由本人全程负责，用接口规范和进度看板保障并行项目按同一套标准验收，定制开发量降低 70%。",
        },
      ],
      slides: [
        { id: "park-overview", caption: "综合态势", scene: 0, image: "/works/park-01-overview.jpg" },
        { id: "park-asset", caption: "资产分析", scene: 0, image: "/works/park-02-asset.jpg" },
        { id: "park-space", caption: "空间资产", scene: 0, image: "/works/park-03-space.jpg" },
        { id: "park-biotech", caption: "安全分析", scene: 0, image: "/works/park-04-floor.jpg" },
        { id: "park-security", caption: "安全分析", scene: 0, image: "/works/park-05-security.jpg" },
        { id: "park-energy", caption: "能源分析", scene: 0, image: "/works/park-06-energy.jpg" },
      ],
      lightSlides: [
        { id: "park-light-agent", caption: "智能体工作台", scene: 0, image: "/works/park-light-01.jpg" },
        { id: "park-light-floor", caption: "楼层监测", scene: 0, image: "/works/park-light-02.jpg" },
        { id: "park-light-asset", caption: "资产分析", scene: 0, image: "/works/park-light-03.jpg" },
        { id: "park-light-campus", caption: "园区总览", scene: 0, image: "/works/park-light-04.jpg" },
        { id: "park-light-security", caption: "安全分析", scene: 0, image: "/works/park-light-05.jpg" },
        { id: "park-light-property", caption: "物业分析", scene: 0, image: "/works/park-light-06.jpg" },
        { id: "park-light-en", caption: "资产分析英文版", scene: 0, image: "/works/park-light-07.jpg" },
        { id: "park-light-score", caption: "运营评分", scene: 0, image: "/works/park-light-08.jpg" },
      ],
    },
    {
      id: "gov",
      label: "智慧政务",
      tags: "智慧政务 / 智慧园区",
      name: "长兴海洋装备产业园 · 数字化指挥中心",
      summary:
        "以深海科技为视觉隐喻，把园区的人、企、地、财放在同一张三维沙盘上，服务招商与管委会决策。",
      highlights: ["深海科技", "UE4 模型集成"],
      duties: [],
      slides: [
        { id: "gov-overview", caption: "区域总览", scene: 0 },
        { id: "gov-scene", caption: "正射与全景融合", scene: 1 },
        { id: "gov-building", caption: "楼宇企业分布", scene: 0 },
      ],
    },
    {
      id: "factory",
      label: "智慧工厂",
      tags: "智慧工厂",
      name: "数字化智能工厂三维管控平台",
      summary:
        "打破传统工厂“黑盒”状态，将车间、产线与设备映射至三维空间，实现“人、机、料、法、环”全要素的实时可视化管控与精细化运营。",
      highlights: ["打破黑盒", "四级下钻"],
      duties: [
        {
          title: "需求管控",
          text: "梳理 MES/WMS 等系统底层数据，制定设备物联状态（运行/空闲/维护）及环境能耗的数据接入标准。",
        },
        {
          title: "产品设计",
          text: "规划从“厂区宏观概览”到“单体设备属性”的四级下钻交互，融合视频监控与能耗分析，支撑车间生产透明化。",
        },
      ],
      slides: [
        { id: "factory-overview", caption: "全要素总览", scene: 0, image: "/works/factory-05-overview.jpg" },
        { id: "factory-campus", caption: "厂区车间", scene: 0, image: "/works/factory-02-campus.jpg" },
        { id: "factory-floor", caption: "产线现场", scene: 0, image: "/works/factory-03-floor.jpg" },
        { id: "factory-video", caption: "视频监控", scene: 0, image: "/works/factory-04-video.jpg" },
        { id: "factory-line", caption: "产线信息", scene: 0, image: "/works/factory-01-line.png" },
      ],
    },
    {
      id: "garden",
      label: "智慧园林",
      tags: "智慧园林",
      name: "园林现场巡查",
      summary: "把驾驶舱里的空间位置接到现场。管理者按绿地和设施查看状态，巡检和派单走同一条数据。",
      highlights: ["现场巡查", "同一条数据"],
      duties: [],
      slides: [
        { id: "garden-overview", caption: "绿地资产总览", scene: 0 },
        { id: "garden-pano", caption: "全景巡检", scene: 1 },
        { id: "garden-ticket", caption: "工单联动", scene: 0 },
      ],
    },
    {
      id: "traffic",
      label: "智慧交通",
      tags: "智慧交通",
      name: "线路运行总览",
      summary: "线路、站点和车辆状态接到同一张图上，对照空间位置查看运行情况。",
      highlights: ["线路", "站点", "车辆"],
      duties: [],
      slides: [
        { id: "traffic-line", caption: "线路总览", scene: 0 },
        { id: "traffic-stop", caption: "站点状态", scene: 1 },
        { id: "traffic-vehicle", caption: "车辆分布", scene: 0 },
      ],
    },
    {
      id: "other",
      label: "其他",
      tags: "其他行业",
      name: "更多行业场景",
      summary: "同一套驾驶舱结构，按行业更换空间对象和指标模块。",
      highlights: ["同一套结构"],
      duties: [],
      slides: [
        { id: "other-overview", caption: "场景总览", scene: 0 },
        { id: "other-metrics", caption: "指标看板", scene: 1 },
      ],
    },
  ],
  films: [],
}
