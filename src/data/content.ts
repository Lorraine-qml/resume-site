export type CapabilityId = "presales" | "product" | "delivery" | "loop"

export type CapabilityIcon =
  | "spark"
  | "chart"
  | "layers"
  | "devices"
  | "users"
  | "kanban"
  | "blocks"
  | "gauge"
  | "target"
  | "cycle"

export interface CapabilityProof {
  id: string
  icon: CapabilityIcon
  figure: string
  unit?: string
  label: string
  note: string
}

export interface Capability {
  id: CapabilityId
  label: string
  headline: string
  summary: string
  tags: string[]
  steps: string[]
  proofs: CapabilityProof[]
}

export type EvidenceKind = "evolution" | "metric" | "layers" | "flow"

export interface EvidencePoint {
  label: string
  note: string
}

export interface EvidenceCard {
  id: string
  kind: EvidenceKind
  title: string
  value?: string
  note?: string
  points: EvidencePoint[]
}

export type CaseFrame = "browser" | "screen"

export interface CaseStudy {
  id: string
  index: string
  name: string
  role: string
  challenge: string
  action: string
  result: string
  frame: CaseFrame
  frameLabel: string
  caption?: string
  banner?: string
}

export type WorkVisual = "console" | "cockpit" | "neural" | "phone"
export type WorkColumn = "lead" | "side"

export interface WorkItem {
  id: string
  index: string
  column: WorkColumn
  height: "tall" | "mid"
  tone: "light" | "dark"
  visual: WorkVisual
  eyebrow: string
  title: string
  tags: string[]
  project: string
  metrics: string
  name: string
  role: string
  challenge: string
  action: string
  result: string
}

export type CareerAccent = "quiet" | "blue" | "gold"
export type CareerIcon = "code" | "chart" | "rocket"

export interface CareerStage {
  id: string
  stage: string
  period: string
  title: string
  org: string
  summary: string
  tags: string[]
  insight: string
  footer: string
  accent: CareerAccent
  icon: CareerIcon
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export const heroTags = ["PMP & NPDP 双证", "太原科技大学", "本科（计算机科学与技术）"]

export const footerHeadline = "让复杂业务有迹可循，让好产品如期上线。"

export const footerProof =
  "6年B端/G端经验 · 50+ 交付项目 · 3200W+ 累计成交额 · 懂技术 / 会表达 / 精交付，靠得住"

export const footerIntent = {
  title: "求职意向 / Open to",
  primary: "产品经理",
  edgeLabel: "兼容优势",
  edges: ["可胜任项目经理", "可胜任售前经理"] as const,
  qrLead: "扫码添加微信",
  qrHint: "期待与您深度交流",
}

export interface HeroMetric {
  id: string
  value: string
  label: string
}

export const heroMetrics: HeroMetric[] = [
  { id: "deal", value: "3200W+", label: "产品线成交" },
  { id: "projects", value: "50+", label: "项目落地" },
  { id: "years", value: "6年", label: "B/G端实战" },
]

export const heroSkills = {
  left: ["懂代码的 PM", "复杂业务路由器"],
  right: ["AI 提效实践派", "Base 到 Pro 造物主"],
}

export const heroFocus = {
  title: "核心专长：复杂业务 0-1 与全生命周期交付",
  subtitle: "经验覆盖：To G 政企/智慧园区 | To B 集团管控 | To C 多端体验",
}

export const capabilityIntro = {
  title: "全链路交付图谱",
  summary:
    "精通 AI 赋能的复合型 PM，全链路打通“售前方案-产品设计-技术管控”，实现高质量交付与资产商业闭环。",
}

export const capabilities: Capability[] = [
  {
    id: "presales",
    label: "售前与需求",
    headline: "洞察痛点，精准锁定需求边界",
    summary:
      "主导复杂业务抽象，负责从前期沟通到合同落地的全过程。精准锁定需求边界，制定定制化解决方案，提升赢单率。",
    tags: ["需求挖掘", "方案汇报", "竞标投标", "合同签订"],
    steps: ["客户沟通", "需求调研", "方案编写", "竞标/商务", "合同签订"],
    proofs: [
      {
        id: "deal",
        icon: "chart",
        figure: "3200W+",
        label: "产品线成交额",
        note: "从沟通到合同的全过程成交。",
      },
      {
        id: "prototype",
        icon: "spark",
        figure: "AI",
        label: "提效",
        note: "Cursor / V0 极速生成交互原型。",
      },
      {
        id: "win",
        icon: "target",
        figure: "高转化",
        label: "竞标与演示",
        note: "深度业务抽象，把方案讲到可决策。",
      },
    ],
  },
  {
    id: "product",
    label: "产品与规划",
    headline: "精通设计与 PRD，完成 0-1 规划",
    summary:
      "将模糊业务转化为清晰产品。负责业务架构设计、多端（PC/大屏/移动/小程序）交互设计、输出高质量 PRD，并制定产品演进路线。",
    tags: ["多端交互设计", "PRD输出", "架构设计", "产品路线图", "敏捷Scrum"],
    steps: ["需求澄清与建模", "原型与交互设计", "用户故事拆分", "Sprint 迭代冲刺", "版本复盘与演进"],
    proofs: [
      {
        id: "versions",
        icon: "layers",
        figure: "3",
        unit: "个",
        label: "核心版本",
        note: "Base → Plus → Pro。",
      },
      {
        id: "screens",
        icon: "devices",
        figure: "4",
        unit: "类",

        label: "终端覆盖",
        note: "PC、大屏、移动、小程序全覆盖。",
      },
      {
        id: "agile",
        icon: "cycle",
        figure: "Agile",
        label: "体系化文档输出",
        note: "独立撰写高质量 PRD，逻辑严密极度减少研发歧义。",
      },
    ],
  },
  {
    id: "delivery",
    label: "研发与交付",
    headline: "懂技术控风险，确保高质量上线",
    summary:
      "主导跨部门协同，把控技术架构（Java/API/BIM/GIS），并行管理多个大型项目，严格监控进度与风险，确保高质量上线。",
    tags: ["技术底座理解", "跨部门协同", "风险管控", "进度监控"],
    steps: ["统筹需求交底", "把控架构评审", "全链路进度跟进", "监督系统测试", "组织UAT验收", "保障正式上线"],
    proofs: [
      {
        id: "projects",
        icon: "kanban",
        figure: "30+",
        label: "高质量交付项目",
        note: "进度与风险都跟到上线。",
      },
      {
        id: "teams",
        icon: "users",
        figure: "5+",
        label: "跨部门协同",
        note: "研发、业务与外部单位。",
      },
      {
        id: "agile",
        icon: "cycle",
        figure: "Agile",
        label: "敏捷迭代管理",
        note: "User Story 拆分，建需求池，Sprint 冲刺，快速响应变更。",
      },
    ],
  },
  {
    id: "loop",
    label: "沉淀与闭环",
    headline: "关注商业价值，将项目转化为资产",
    summary:
      "不仅关注上线，更关注商业价值。通过数据验证驱动产品迭代。致力于将定制化项目沉淀为标准化资产，实现极高复用率。",
    tags: ["数据验证", "资产复用", "商业闭环", "配置引擎"],
    steps: ["上线数据监控", "用户反馈收集", "迭代需求池", "资产沉淀", "模块化/配置化复用"],
    proofs: [
      {
        id: "reuse",
        icon: "gauge",
        figure: "70%",
        label: "开发量下降",
        note: "复用模块替换重复开发。",
      },
      {
        id: "zero",
        icon: "blocks",
        figure: "0",
        label: "代码配置",
        note: "字段、流程、权限做成可视化引擎。",
      },
      {
        id: "iterate",
        icon: "layers",
        figure: "持续",
        label: "数据驱动迭代",
        note: "基于上线数据监控与用户真实反馈，持续进行版本优化与资产沉淀。",
      },
    ],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: "yuyi",
    index: "01",
    name: "禹翼数字管理平台",
    role: "产品负责人（从 0 到 1）",
    challenge: "模型与数据两张皮，定制开发重。",
    action: "三阶演进：底座、中台、AI。结合 BIM 五级下钻，落地大模型 RAG。",
    result: "开发量下降 70%，累计成交 3200W+。",
    frame: "browser",
    frameLabel: "禹翼 PC 后台截图",
    banner: "Base → Plus → Pro 架构演进及五层数据治理",
  },
  {
    id: "lingang",
    index: "02",
    name: "临港投控",
    role: "产品经理",
    challenge: "10+ 业务系统数据孤岛。",
    action: "构建一图一表一库，打通 ERP、公交、财务等系统接口。",
    result: "集团级数据中台，国企数字化转型标杆。",
    frame: "screen",
    frameLabel: "一图观全域 · 四大专题大屏",
  },
  {
    id: "minhang",
    index: "03",
    name: "闵行数字孪生",
    role: "项目经理 / 产品设计",
    challenge: "17 平方公里、160+ 幢建筑的三维实景重建，还要整合多源数据。",
    action: "融合正射影像和 360 全景，设计五级空间下钻，对接 6+ 家政务单位数据。",
    result: "闵行区数字化转型标杆。",
    frame: "screen",
    frameLabel: "大屏全屏截图",
    caption: "环高校科创带三维实景",
  },
]

export type MiniVisualKind = "chart" | "ui" | "node" | "phone"

export interface MiniFrame {
  label: string
  image: string
}

export interface MiniCard {
  id: "cockpit" | "console" | "neural" | "mobile"
  index: string
  tag: string
  title: string
  summary: string
  visual: MiniVisualKind
  scenes: string[]
  frames?: MiniFrame[]
}

export const miniCards: MiniCard[] = [
  {
    id: "cockpit",
    index: "01",
    tag: "[To G] 宏观决策",
    title: "宏观决策驾驶舱",
    summary: "打破跨系统数据孤岛，提供“一图观全域”的宏观决策大脑。",
    visual: "chart",
    scenes: ["智慧园区", "智慧政务", "智慧工厂", "智慧园林", "智慧交通", "其他"],
    frames: [
      { label: "资产分析", image: "/works/cockpit-slide-01.jpg" },
      { label: "运营分析", image: "/works/cockpit-slide-02.jpg" },
      { label: "安全分析", image: "/works/cockpit-slide-03.jpg" },
      { label: "能源分析", image: "/works/cockpit-slide-04.jpg" },
      { label: "资产管理大屏", image: "/works/cockpit-slide-05.jpg" },
      { label: "策源平台驾驶舱", image: "/works/cockpit-slide-06.jpg" },
      { label: "长兴产业园区", image: "/works/cockpit-slide-07.jpg" },
      { label: "长兴数字孪生", image: "/works/cockpit-slide-08.jpg" },
    ],
  },
  {
    id: "console",
    index: "02",
    tag: "[To B] 核心架构",
    title: "中台业务管理",
    summary: "抽象复杂业务模型，以高复用架构支撑规模化敏捷交付。",
    visual: "ui",
    scenes: ["复杂业务抽象", "零代码配置", "全链路交付"],
    frames: [
      { label: "物联看板", image: "/works/console-slide-01.png" },
      { label: "指标看板", image: "/works/console-slide-02.png" },
      { label: "招商工作台", image: "/works/console-slide-03.png" },
      { label: "物联设备", image: "/works/console-slide-04.png" },
    ],
  },
  {
    id: "neural",
    index: "03",
    tag: "[Tech] 底层逻辑",
    title: "后台数据底座",
    summary: "拉通多源异构数据标准，筑牢上层业务与智能应用的数据基石。",
    visual: "node",
    scenes: ["基础标准", "数据治理", "AI赋能"],
  },
  {
    id: "mobile",
    index: "04",
    tag: "[To C/一线] 轻量协同",
    title: "移动现场触达",
    summary: "延伸现场管理触角，实现多端同源的轻量级业务协同。",
    visual: "phone",
    scenes: ["C端体验", "B端执行", "多端同源"],
  },
]

export const works: WorkItem[] = [
  {
    id: "cockpit",
    index: "01",
    column: "lead",
    height: "mid",
    tone: "dark",
    visual: "cockpit",
    eyebrow: "[To G] 宏观决策支持",
    title: "宏观决策驾驶舱",
    tags: ["五级空间下钻", "BIM/三维实景融合", "跨板块数据打通"],
    project: "临港投控「一图观全域」 / 闵行数字孪生",
    metrics: "对接单位/系统 10+  |  覆盖面积 17km²",
    name: "宏观决策驾驶舱",
    role: "产品经理 · 项目经理 / 产品设计",
    challenge: "10+ 业务系统数据孤岛，17 平方公里、160+ 幢建筑还要落到同一张图。",
    action: "构建一图一表一库，打通 ERP、公交、财务。融合正射影像和 360 全景，设计五级空间下钻，对接 6+ 家政务单位。",
    result: "集团级数据中台，闵行区数字化转型标杆。对接单位/系统 10+，覆盖面积 17km²。",
  },
  {
    id: "console",
    index: "02",
    column: "lead",
    height: "tall",
    tone: "light",
    visual: "console",
    eyebrow: "[To B] 核心系统架构",
    title: "中台业务管理",
    tags: ["复杂业务抽象", "零代码表单配置", "定制转标准"],
    project: "禹翼平台 (Base → Pro 业务中台)",
    metrics: "定制化开发量 ↓ 70%  |  支撑项目 30+",
    name: "禹翼数字管理平台",
    role: "产品负责人（从 0 到 1）",
    challenge: "模型与数据两张皮，定制开发重。",
    action: "三阶演进：底座、中台、AI。结合 BIM 五级下钻，落地大模型 RAG。",
    result: "开发量下降 70%，累计成交 3200W+。",
  },
  {
    id: "neural",
    index: "03",
    column: "side",
    height: "mid",
    tone: "light",
    visual: "neural",
    eyebrow: "[Tech] 底层治理与智能",
    title: "后台数据底座",
    tags: ["编码分类标准", "空间拓扑台账", "BIM 模型引擎"],
    project: "禹翼数据底座 · 万物互联的数字地基",
    metrics: "空间 1.4万+  |  模型全链路状态机",
    name: "数据治理与 AI 落地",
    role: "产品负责人",
    challenge: "没有坚实底座，上层大屏、物业、能源都会陷入数据打架、口径不一。",
    action: "从定规矩（编码 / 分类）到建空间（项目 / 楼宇 / 空间），再到建模型（BIM 轻量化状态机），打造统一数据标准引擎。",
    result: "向上支撑业务中台，向 AI 提供高质量语料。",
  },
  {
    id: "mobile",
    index: "04",
    column: "side",
    height: "tall",
    tone: "light",
    visual: "phone",
    eyebrow: "[To C / 一线] 轻量协同与触达",
    title: "移动现场触达",
    tags: ["访客闭环", "一码通", "多端同源"],
    project: "微应用端 | 园区访客与综合服务",
    metrics: "100% 数据同源  |  响应提速 50%  |  0 纸质登记",
    name: "园区访客与综合服务",
    role: "产品负责人 / 交互设计主导。以「一码通」为核心底座，串联园区高频服务场景，实现从「人找服务」到「服务找人」的体验升级。独立完成移动端需求调研、信息架构、UI/UE 规范，并协同前后端与中台完成交付。",
    challenge: "访客要扫码即过，审批和权限却不能松；手机上的访客和工单还要实时回到大屏和中台。",
    action: "做成登记、邀约、审批、通行码、门禁核销的闭环，并用一码通收拢停车、会议和健身等高频服务。",
    result: "替代纸质登记，访客通行效率提升 80%，手机、中台与大屏保持同一套数据。",
  },
]

export const careerPath = {
  kicker: "职业路径 / Career Path",
  title: "从技术走向经营的上升曲线",
  subtitle:
    "用代码的严谨打底，用项目的全局兜底，用产品的视野破局。不止于懂技术，更懂如何通过交付实现商业闭环。",
}

export const careerStages: CareerStage[] = [
  {
    id: "tech",
    stage: "技术期",
    period: "2020.07 – 2021.01",
    title: "Java 开发工程师",
    org: "上海开澜软件 · 半年",
    summary: "写代码、啃底层，建立坚实的技术底座与研发沟通能力；为后续做产品打下「可落地」的判断力。",
    tags: ["Java", "数据库", "BIM/GIS/IoT"],
    insight: "懂代码的好处：能判断研发说的「做不了」，是真做不了，还是没想清楚。",
    footer: "技术底座",
    accent: "quiet",
    icon: "code",
  },
  {
    id: "project",
    stage: "项目期",
    period: "2021.01 – 2023.09",
    title: "项目经理 / 初级产品经理",
    org: "上海开澜软件 · 两年半",
    summary: "独立对接政务客户，完成方案汇报、需求确认与验收；服务市大数据中心、水务局、闵行科委等政企客户。",
    tags: ["政务客户", "方案汇报", "范围确认", "PMP"],
    insight: "最多同时推进 4 个政务项目，从科委到处局，汇报对象一路升级。",
    footer: "打通 售前 → 售中 → 售后",
    accent: "blue",
    icon: "chart",
  },
  {
    id: "product",
    stage: "产品期",
    period: "2023.09 – 至今",
    title: "产品负责人 / 产品经理",
    org: "上海禹创数维 · 三年",
    summary: "全权负责核心产品线 0→1 与三版本演进；不只做产品规划，更统筹研发进度、需求管理与上线后运营跟踪。",
    tags: ["0→1", "三版本演进", "AI 落地", "NPDP"],
    insight: "从需求池到版本节奏，从交付排期到客户续约，整条链路自己盯。",
    footer: "主导 产研运一体化",
    accent: "gold",
    icon: "rocket",
  },
]

export const resumeHref = "/resume.pdf"
export const resumeFileName = "乔美玲-产品经理-6年经验.pdf"

export const ownerName = "乔美玲"

export const contacts: ContactLink[] = [
  { label: "电话", value: "16601745267", href: "tel:16601745267" },
  { label: "邮箱", value: "qml53719@163.com", href: "mailto:qml53719@163.com" },
]

export const wechatProfile = {
  name: "Lorraine",
  wechatId: "qml537199",
  region: "冰岛",
  avatar: "/avatar-v2.jpg",
  qr: "/wechat-qr-crop.jpg",
}
