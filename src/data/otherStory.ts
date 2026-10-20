export interface OtherCard {
  id: string
  title: string
  subtitle: string
  image: string
  detail: string
  highlight: string
}

export const otherStory = {
  tags: "其他行业",
  title: "泛行业场景与产品架构复用",
  overview:
    "依托沉淀的标准化驾驶舱底座与设计规范，能够快速适配不同垂直领域，完成从业务调研、架构抽象到高保真 UI 落地的全链路闭环。以下四个行业大屏，从需求梳理、原型设计到 UI 视觉风格把控，均由本人独立主导并跟进开发交付。",
  highlights: ["跨域产品架构", "全流程主导", "极速交付"],
  cards: [
    {
      id: "biobank",
      title: "生物医药与科研服务大屏",
      subtitle: "数智化策源平台 · 生物医药 / 科研",
      image: "/works/other-01-biobank.jpg",
      detail: "聚焦生物样本库与转化研究，将多源数据（B / D / T / M）结构化呈现，支撑科研决策与数据溯源。",
      highlight: "中间发散式拓扑图，表达科研数据流转与底层关系。",
    },
    {
      id: "building",
      title: "智慧楼宇与资产管理大屏",
      subtitle: "紫金科创中心看板 · 园区 / 物业",
      image: "/works/other-02-building.jpg",
      detail: "以三维建筑模型为底座，融合企业入驻、租约到期预警与设备负荷监控，把楼宇资产放在同一屏里运营。",
      highlight: "左侧新闻流与右侧实时监控并列，一屏兼顾人、企、物。",
    },
    {
      id: "factory",
      title: "智能制造与能耗监控大屏",
      subtitle: "易格斯工厂数据监控 · 工业 / 物联",
      image: "/works/other-03-factory.jpg",
      detail: "接入温湿度、震动等传感器与光伏储能数据，用实时告警工单和能耗趋势保障产线运行。",
      highlight: "中央现场画面，四周环绕数据面板。",
    },
    {
      id: "care",
      title: "智慧养老与安全通行大屏",
      subtitle: "惠南养老院智慧运维 · 民生 / 安防",
      image: "/works/other-04-care.png",
      detail: "围绕门禁通行、异常人员预警和通行时间分析，满足养老场景的安防查看。",
      highlight: "左侧树状设备结构，右侧用占比和趋势把通行情况摊开。",
    },
  ] satisfies OtherCard[],
}
