export interface ChangxingShot {
  id: string
  index: string
  title: string
  subtitle: string
  image: string
  uiKicker: string
  ui: string
  valueKicker: string
  value: string
  swatches: Array<"deep" | "cyan" | "amber" | "violet">
}

export interface ChangxingSwatch {
  key: ChangxingShot["swatches"][number]
  name: string
  hex: string
  className: string
}

export const changxingStory = {
  tags: "智慧政务 / 智慧园区",
  title: "长兴海洋装备产业园 · 数字化指挥中心",
  overviewLabel: "项目概览",
  overviewLead:
    "本项目的难度，主要在两处被攻克：深海科技的设计风格，以及基于 UE4 的三维模型集成。",
  duties: [
    {
      title: "产品说明",
      text: "提炼“深海科技”视觉隐喻，重构政务大屏视觉体系。重点攻克 UE4 三维场景与 UI 面板的视觉融合，确保模型光影与图表语义统一，打破传统“数据堆砌”。",
    },
    {
      title: "全链路管控与交付",
      text: "独任唯一产品负责人，主导从需求调研、信息架构到研发验收的全链路。统筹确定三维沙盘层级与“人企地财”业务锚点，拉通前端联调，保障复杂 3D 项目高质量落地。",
    },
  ],
  shots: [
    {
      id: "overview",
      index: "图 1",
      title: "园区概况",
      subtitle: "宏观视角的“一图观全域”",
      image: "/works/gov-01-overview.jpg",
      uiKicker: "深海科技美学",
      ui: "左侧浮窗（园区文化）+ 中间 3D 沙盘 + 右侧荣誉/导航。整体布局克制且平衡，主视觉突出 3D 园区地貌，四周辅以半透明的磨砂玻璃面板，保证信息层级清晰。",
      valueKicker: "宏观决策",
      value: "将立体的园区沙盘与招商荣誉、央企合作等核心背书结合，让来访领导在 3 秒钟内建立对园区的宏观认知。",
      swatches: ["deep", "cyan"],
    },
    {
      id: "location",
      index: "图 2",
      title: "区位优势",
      subtitle: "抽象地理空间的视觉化表达",
      image: "/works/gov-02-location.jpg",
      uiKicker: "同心圆辐射",
      ui: "摒弃枯燥的地图截图，采用“同心圆 + 荧光射线”的设计，直观展现长兴岛到虹桥、浦东机场等交通枢纽的辐射半径。",
      valueKicker: "招商叙事",
      value: "用极具科技感的视觉语言，讲好“长兴岛地理位置优越、交通便捷”的招商故事。",
      swatches: ["deep", "cyan", "amber"],
    },
    {
      id: "enterprise",
      index: "图 3",
      title: "企业入驻",
      subtitle: "复杂多维数据的降维表达",
      image: "/works/gov-03-enterprise.jpg",
      uiKicker: "降维表达",
      ui: "面对海量企业数据，我没有采用流水账表格。左侧使用“气泡图”表现注册企业、实体企业的规模；右侧使用“横向条形图+散点图”呈现税收排行。色彩上使用青、黄、紫等对比色，让关键指标（如 60 亿总投资）瞬间跳脱。",
      valueKicker: "精细运营",
      value: "满足管委会“摸清家底、看清明星企业”的精细化运营需求。",
      swatches: ["cyan", "amber", "violet"],
    },
    {
      id: "project",
      index: "图 4",
      title: "重点项目",
      subtitle: "战略规划的 3D 空间映射",
      image: "/works/gov-04-project.jpg",
      uiKicker: "空间绑定",
      ui: "将重点项目（如海洋科技港一二期）的参数（占地、投资额）通过引线锚点精准挂载在 3D 模型上，左侧图表面板展示税收统计与运营面积，实现了“空间位置与业务数据”的强绑定。",
      valueKicker: "项目穿透",
      value: "让管理者直接点击模型即可了解项目进度与资金流向。",
      swatches: ["deep", "cyan", "amber"],
    },
    {
      id: "land",
      index: "图 5",
      title: "土地资源",
      subtitle: "对比数据的极简呈现",
      image: "/works/gov-05-land.jpg",
      uiKicker: "极简对比",
      ui: "大面积留白突出核心指标（总面积、可出让用地）。下方的“工业用地价格对比”采用极简的进度条设计，一眼看出长兴岛在上海市的价格优势。",
      valueKicker: "招商算账",
      value: "为招商引资提供最直接的“算账”工具。",
      swatches: ["deep", "amber"],
    },
    {
      id: "strategy",
      index: "图 6",
      title: "战略板块",
      subtitle: "复杂区划的交互下钻",
      image: "/works/gov-06-strategy.jpg",
      uiKicker: "色块下钻",
      ui: "利用透明色块（紫、蓝、绿）在 3D 地图上划分“国际海洋产业高地”、“军民融合主战场”等四大战略区，色彩区分明确且不干扰底层地图。",
      valueKicker: "数字沙盘",
      value: "将抽象的政策规划图，转化为可视化的数字沙盘。",
      swatches: ["violet", "cyan", "deep"],
    },
    {
      id: "honor",
      index: "图 7",
      title: "园区风采 / 荣誉",
      subtitle: "情感化设计与视觉升华",
      image: "/works/gov-07-honor.jpg",
      uiKicker: "仪式感",
      ui: "打破常规的列表展示，采用浩瀚宇宙与地球作为背景，园区荣誉牌匾以“卡片悬浮+轮播”的形式出现在右侧，极具仪式感。",
      valueKicker: "品牌温度",
      value: "在严谨的数据展示后，加入品牌与荣誉的温度，提升园区的整体形象。",
      swatches: ["deep", "cyan"],
    },
  ] satisfies ChangxingShot[],
  swatches: [
    { key: "deep", name: "深空蓝", hex: "#00122A", className: "bg-sea-deep" },
    { key: "cyan", name: "荧光青", hex: "#20E0F0", className: "bg-sea-cyan" },
    { key: "amber", name: "指标黄", hex: "#FDBD03", className: "bg-sea-amber" },
    { key: "violet", name: "对比紫", hex: "#A400F3", className: "bg-sea-violet" },
  ] satisfies ChangxingSwatch[],
  typeScale: [
    { name: "核心指标", sample: "放大至 3 倍" },
    { name: "标题", sample: "24px" },
    { name: "正文", sample: "14px" },
  ],
  components: ["磨砂玻璃面板", "气泡图", "横向条形图", "散点图", "进度条", "引线锚点", "悬浮荣誉卡"],
  governance: {
    title: "大屏视觉语言与设计管控",
    english: "Visual Language & Design Governance",
    subtitle: "从“功能堆砌”到“沉浸式决策”，我如何主导定义产品视觉基调，并与 UI/前端拉齐共识。",
    columns: [
      {
        label: "色彩体系",
        kicker: "视觉隐喻：深海科技与数据流动",
        text: "主导确立“深空蓝”为决策底色，利用“荧光青”表达活跃数据，用“指标黄/对比紫”做强警示与报警。在评审中明确了色彩的语义化，禁止前端随意使用高饱和色，确保大屏的专业严肃感。",
      },
      {
        label: "字体层级",
        kicker: "信息降噪与视线引导",
        text: "针对政企领导“3 秒抓核心”的诉求，主导制定了严格的字号比例（如核心指标放大至 3 倍）。通过字号大小和粗细，建立清晰的视觉引导线。",
      },
      {
        label: "图表组件",
        kicker: "场景化组件封装",
        text: "针对复杂多维的数据，主导设计了“磨砂玻璃面板”来承载浮层（不遮挡 3D 底座）。并在 PRD 中为 10+ 种高频业务场景（如招商、资产盘点）指定了专属图表类型，降低研发的思考成本。",
      },
    ],
    alignmentTitle: "我是如何把控设计与研发落地的？",
    steps: [
      {
        index: "01",
        title: "定基调",
        role: "PM 主导",
        text: "在原型阶段即产出色卡、字体与交互规范，杜绝 UI 凭感觉设计。",
      },
      {
        index: "02",
        title: "拉共识",
        role: "PM + UI / 前端",
        text: "组织“大屏视觉走查会”，拉齐 UI 与前端对“组件封装”和“动效细节”的理解。",
      },
      {
        index: "03",
        title: "强验收",
        role: "PM 兜底",
        text: "在研发阶段，作为 PM 介入走查代码，确保 3D 模型的加载光影、图表渲染不偏离设计稿，最终实现视觉 100% 还原。",
      },
    ],
  },
}
