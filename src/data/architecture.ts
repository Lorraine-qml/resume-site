export interface ArchNode {
  id: string
  title: string
  tooltip: string
}

export interface ArchLayer {
  id: string
  label: string
  nodes: ArchNode[]
}

export const architectureIntro = {
  kicker: "核心优势 / Core Capability",
  title: "AI 赋能的复合型产品架构师",
  description:
    "打通底层数据模型与大模型智能体编排，结合 Vibe Coding 工作流，实现端到端极速闭环。",
}

export const businessLayer: ArchLayer = {
  id: "business",
  label: "支撑业务场景",
  nodes: [
    { id: "rag-qa", title: "智能问答/RAG", tooltip: "禹翼平台落地：工单处理效率提升 40%" },
    { id: "intent", title: "复杂意图识别", tooltip: "区分 C 端 / 一线 / 管理层的自然语言" },
    { id: "nl2sql", title: "自然语言查数", tooltip: "Text-to-SQL 能力接入业务报表" },
    { id: "ticket", title: "智能工单分发", tooltip: "AI Agent 自动派单闭环" },
    { id: "collab", title: "多端轻量协同", tooltip: "大屏 / 中台 / 移动端同源协同" },
  ],
}

export const aiCoreLayer: ArchLayer = {
  id: "ai-core",
  label: "AI 智能中枢",
  nodes: [
    {
      id: "agent",
      title: "Agent 流程编排",
      tooltip: "设计多步任务拆解与调度逻辑",
    },
    {
      id: "router",
      title: "多模型路由中枢",
      tooltip: "根据任务复杂度自动调度大 / 小模型",
    },
    {
      id: "rag",
      title: "RAG 检索增强",
      tooltip: "结合本地知识库，降低大模型幻觉",
    },
    {
      id: "mcp",
      title: "MCP 服务生态",
      tooltip: "Model Context Protocol 工具接入",
    },
    {
      id: "memory",
      title: "上下文记忆",
      tooltip: "会话与任务级上下文持久化",
    },
  ],
}

export const dataLayer: ArchLayer = {
  id: "data",
  label: "数据与技术底座",
  nodes: [
    { id: "governance", title: "五层数据治理架构", tooltip: "主导梳理底层异构数据" },
    { id: "bim", title: "BIM/GIS/IoT底座", tooltip: "3.5 万+ 物理设备与空间挂载" },
    { id: "supabase", title: "Supabase 云端库", tooltip: "Vibe Coding 选型：极速搭建关系型库" },
    { id: "apidog", title: "ApiDog 接口平台", tooltip: "极速联调与 API 文档生成" },
  ],
}

export const agentFlowSteps = ["意图识别", "任务拆解", "路由分发"] as const

export const vibeCodingFlow = [
  "GitHub 规范",
  "AI 生成文档",
  "Cursor 建站",
  "自动化质检",
  "高质量交付",
] as const

export const geekNodeIds = new Set(["supabase", "apidog"])

export interface ArchSummaryScene {
  title: string
  detail: string
  metric: string
}

export interface ArchOwnerNode {
  label: string
  tone: "gold" | "blue"
}

export const architectureSummary = {
  role: {
    title: "我的角色与职责",
    lead: "产品负责人",
    body: "主导数据底座到 AI 编排的全链路设计，对齐技术与业务目标。",
  },
  scenes: {
    title: "核心场景与应用落地",
    items: [
      {
        title: "智能客服/RAG",
        detail: "工单效率",
        metric: "↑ 40%",
      },
      {
        title: "Agent 自动派单",
        detail: "人工成本",
        metric: "↓ 60%",
      },
    ] satisfies ArchSummaryScene[],
  },
  nodes: {
    title: "核心负责节点",
    items: [
      { label: "Agent 流程编排", tone: "gold" },
      { label: "Prompt 工程", tone: "gold" },
      { label: "Vibe Coding 协同", tone: "blue" },
    ] satisfies ArchOwnerNode[],
  },
}
