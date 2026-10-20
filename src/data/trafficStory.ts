export interface TrafficShot {
  id: string
  title: string
  subtitle: string
  image: string
  images?: string[]
  ui: string
  valueKicker: string
  value: string
}

export const trafficStory = {
  tags: "智慧交通 / 集团级综合管控",
  title: "临港投控 · 公交与场站运行总览",
  overview:
    "作为临港投控集团“一图观全域”的核心子模块，本项目将原本散落在公交调度、场站监控、票务营收等系统中的孤立数据，统一映射至集团底图。核心难点在于高并发实时数据的秒级刷新与多源异构数据的口径统一。",
  duties: [
    {
      title: "产品设计与需求说明",
      text: "主导“一图观全域”交通板块的架构拆解。打通公交调度、场站监控等多源数据，设计“场站-线路-车辆”三级下钻链路。在地图视野中，实现实时车辆状态与运行轨迹的精准绑定，并规划客流与12345工单联动看板，辅助运力调度。",
    },
    {
      title: "全链路管控与交付",
      text: "担任全链路负责人，主导高并发实时数据的接入规范。重点攻克 10+ 底层系统接口拉通与数据口径统一；在交付阶段死磕地图渲染性能与图表动效，保障海量秒级数据在大屏切换时的丝滑体验与高质量验收。",
    },
  ],
  shots: [
    {
      id: "station",
      title: "交通运营与场站调度",
      subtitle: "场站、线路与在线车辆",
      image: "/works/traffic-01-station.jpg",
      ui: "地图居中，两侧放业务面板。左侧是场站建设进度和车位余量，右侧是准点率、排班执行率等公交运营指标，底部是 12345 工单趋势。点开车辆，可看到司机、车牌、动力、胎压、当前线路和在线车辆数。",
      valueKicker: "建管一体",
      value:
        "场站建设与公交运营放在同一屏。调度员能对照在线车辆位置和运行状态，及时处理服务工单，保障线路运行。",
    },
    {
      id: "group",
      title: "集团视角的跨板块数据穿透",
      subtitle: "公交与招商、房建同图",
      image: "/works/traffic-02-group.jpg",
      ui: "地图上展示企业分布与产业信息，右侧打通建设运营、房建运营与公交运营看板。",
      valueKicker: "一表掌经营",
      value:
        "公交的客流、里程与集团的招商引资、房建项目（公租房、人才公寓）落在同一张图上，在集团层面对照经营。",
    },
    {
      id: "finance",
      title: "业财一体与集团经济运行",
      subtitle: "投资、建设与板块经营",
      image: "/works/traffic-03-invest.jpg",
      images: [
        "/works/traffic-03-invest.jpg",
        "/works/traffic-04-project.jpg",
        "/works/traffic-05-finance.png",
      ],
      ui: "从交通视图切到集团经济运行。一侧看投资和建设进度，另一侧看公交、置业、房建的板块指标，并下钻到营收、费用和资产负债。",
      valueKicker: "业财对齐",
      value:
        "公交板块的营收和成本（能耗、人工）与集团财务报表打通。业务侧的运单、工单，可以对照到票款和支付。",
    },
  ] satisfies TrafficShot[],
}
