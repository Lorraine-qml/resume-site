import type { ConsoleModuleStory } from "./consoleStory"

export const neuralStory: ConsoleModuleStory = {
  id: "neural",
  label: "数据底座",
  eyebrow: "[Tech] 底层治理与智能 · 万物互联的“数字地基”",
  name: "从定规矩到填资产的统一数据标准引擎",
  pain: "没有坚实的底座，上层所有业务系统（大屏、物业、能源）都会陷入“数据打架、口径不一、查无此表”的泥潭。",
  role: "从“定规矩（编码 / 分类）”到“建空间（项目 / 楼宇 / 空间）”，再到“建模型（BIM / 轻量化）”，打造统一的数据标准引擎。",
  roleLabel: "业务主张",
  design: "向上支撑业务中台，向 AI 提供高质量语料，让每一层消费的都是同一套口径。",
  designLabel: "设计主张",
  features: [
    {
      id: "rules",
      title: "定规矩 —— 统一数据标准引擎",
      kicker: "万物皆有码，杜绝数据孤岛",
      image: "/works/neural-coding.png",
      images: ["/works/neural-coding.png", "/works/neural-category.png"],
      lead: "这是底座的最底层逻辑，解决不同项目数据对不齐的问题。",
      points: [
        {
          title: "编码规则引擎",
          body: "主导设计灵活的自定义编码规则（如项目、楼宇、设备），支持组合业务属性、时间戳与流水号。一处生成，全局唯一。",
        },
        {
          title: "多级分类树",
          body: "构建设备、空间、资产的统一定义标准，支持多级分类与颜色标识，为后续精细化数据统计打下基石。",
        },
      ],
    },
    {
      id: "space",
      title: "建空间 —— 全息资产台账与拓扑",
      kicker: "物理世界的精准数字映射",
      image: "/works/neural-project.png",
      images: ["/works/neural-project.png", "/works/neural-building.png", "/works/neural-space.png"],
      lead: "用树状层级把园区拆到房间，让上层业务始终站在同一套空间语义上。",
      points: [
        {
          title: "宏观到微观的级联",
          body: "实现从“项目（园区）→ 楼宇 → 空间（房间 / 走道）”的树状层级穿透。项目卡片直接透出楼宇数、空间数等统计维度。",
        },
        {
          title: "海量数据处理",
          body: "面对数万级空间（如 14951 条空间数据），采用左侧树状筛选、右侧多维表格，支持多条件组合过滤与批量导出，兼顾承载力与检索效率。",
        },
      ],
    },
    {
      id: "model",
      title: "建模型 —— 构筑数字孪生的“空间引擎”",
      kicker: "BIM / 3D 异构模型的统一治理",
      image: "/works/neural-model-list.png",
      images: ["/works/neural-model-list.png", "/works/neural-model-group.png"],
      imageNote: "支持按模型组进行批量拼装与转换。",
      lead: "把多源异构的三维模型统一接入，为上层的大屏可视化、空间计算与智能体提供高质量的“轻量化弹药”。",
      points: [
        {
          title: "异构模型统一收敛",
          body: "支持总体、土建、机电、精装等多类型 BIM 模型（兼容 **rvt**、**pak** 等格式）集中管理，按项目、楼宇层级挂载，实现物理空间与数字模型的精准映射。",
        },
        {
          title: "全链路状态机管理",
          body: "针对三维渲染的性能痛点，设计了“上传 → 转换 → 生成 DB 包”的完整**状态机管理**，确保模型在 **Web 端引擎**中顺滑加载，杜绝卡顿。",
        },
      ],
    },
  ],
  lifecycle: {
    eyebrow: "Data Foundation Flow",
    title: "底座数据流转闭环",
    subtitle: "从标准到空间、再到设备与模型，最终向上赋能中台、大屏与 RAG 智能体。",
    stages: [
      {
        id: "standard",
        index: "01",
        title: "基础服务标准",
        focus: "编码规则 / 分类树",
        actions: ["赋予唯一 ID", "规范数据口径"],
      },
      {
        id: "topology",
        index: "02",
        title: "资产空间搭建",
        focus: "项目 / 楼宇 / 空间",
        actions: ["物理实体结构映射", "空间拓扑树构建"],
      },
      {
        id: "mount",
        index: "03",
        title: "模型引擎挂载",
        focus: "BIM / 3D 轻量化",
        actions: ["异构格式收敛", "上传转换 DB 状态机"],
      },
      {
        id: "empower",
        index: "04",
        title: "上层业务与 AI 赋能",
        focus: "中台 / 大屏 / RAG 智能体",
        actions: ["消费高质量数据", "业务闭环与智能问答"],
      },
    ],
    insights: [
      {
        id: "standardize",
        title: "先定规矩，再谈打通",
        body: "编码与分类是数字地基的第一层砖。没有全局唯一 ID 与统一口径，上层系统永远在数据打架。",
      },
      {
        id: "topology",
        title: "空间是语义，不是文件夹",
        body: "项目 → 楼宇 → 空间的穿透，让设备、能耗、安防都能挂在同一棵树上，检索与统计才成立。",
      },
      {
        id: "empower",
        title: "底座为业务与 AI 供血",
        body: "BIM 轻量化状态机向上输送高质量语料，中台、驾驶舱与 RAG 智能体才能真正用得起来。",
      },
    ],
  },
}
