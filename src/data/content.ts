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

export interface Milestone {
  id: string
  period: string
  title: string
  org: string
  summary: string
  tone: "gold" | "blue" | "quiet"
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export const heroTags = ["PMP & NPDP 双证", "太原科技大学", "现居上海"]

export const footerHeadline = "让复杂业务有迹可循，让好产品如期上线。"

export const footerProof =
  "6年B端/G端经验 · 30+ 交付项目 · 3200W+ 累计成交额 · 懂技术 / 会表达 / 靠得住"

export interface HeroMetric {
  id: string
  value: string
  label: string
}

export const heroMetrics: HeroMetric[] = [
  { id: "deal", value: "3200W+", label: "产品线成交" },
  { id: "projects", value: "30+", label: "项目落地" },
  { id: "years", value: "6年", label: "B/G端实战" },
]

export const heroSkills = {
  left: ["Java 技术底座", "五层数据治理"],
  right: ["AI 智能体闭环", "0-1 三版本演进"],
}

export const heroFocus = "FOCUS · 智慧园区、智慧政务、建筑数字化领域"

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
        label: "个核心版本",
        note: "Base → Plus → Pro。",
      },
      {
        id: "screens",
        icon: "devices",
        figure: "4",
        label: "类终端覆盖",
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

export const milestones: Milestone[] = [
  {
    id: "school",
    period: "2016 – 2020",
    title: "计算机科学与技术 · 本科",
    org: "太原科技大学",
    summary: "专业起点。后来和研发对话、做数据与权限，都从这里接上。",
    tone: "quiet",
  },
  {
    id: "pm",
    period: "2020 – 2023",
    title: "项目交付 · 两年半",
    org: "上海开润软件",
    summary: "项目经理。打通售前、售中、售后，并行项目放在同一条交付链上。",
    tone: "gold",
  },
  {
    id: "owner",
    period: "2023 – 至今",
    title: "产品与 AI 落地",
    org: "上海禹创数维",
    summary: "产品经理 / 负责人。禹翼三版本、临港数据中台、闵行数字孪生在这一段做成结果。",
    tone: "blue",
  },
]

export const prdHref = ""
export const resumeHref = "/resume.pdf"
export const resumeFileName = "乔美玲-产品经理-6年经验.pdf"

export const contacts: ContactLink[] = [
  { label: "电话", value: "16601745267", href: "tel:16601745267" },
  { label: "邮箱", value: "qml53719@163.com", href: "mailto:qml53719@163.com" },
]

export const wechatProfile = {
  name: "Lorraine",
  region: "冰岛",
  avatar: "/avatar-v2.jpg",
  qr: "/wechat-qr.jpg",
}
