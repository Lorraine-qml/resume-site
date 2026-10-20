export interface ParkShot {
  id: string
  title: string
  subtitle: string
  image: string
  images?: string[]
  detailKicker: string
  detail: string
  valueKicker: string
  value: string
}

export const parkShots: ParkShot[] = [
  {
    id: "overview",
    title: "综合态势",
    subtitle: "园区尺度看楼栋经营",
    image: "/works/park-01-overview.jpg",
    images: [
      "/works/park-01-overview.jpg",
      "/works/park-01-aerial.jpg",
      "/works/park-01-light.jpg",
      "/works/park-01-en.jpg",
    ],
    detailKicker: "一图看经营",
    detail:
      "以园区三维为底，按楼栋看出租和经营情况。综合态势支持深色系、浅色系两种皮肤，并提供英文版，方便海外用户使用。",
    valueKicker: "先建立整体判断",
    value: "同一套页面可以按场合切换深色、浅色或英文，进园区先看清整体经营。",
  },
  {
    id: "asset",
    title: "资产分析",
    subtitle: "从楼栋下到楼层和设备",
    image: "/works/park-02-asset.jpg",
    images: ["/works/park-02-asset.jpg", "/works/park-03-space.jpg"],
    detailKicker: "楼层资产",
    detail:
      "楼层平面按层切换，房间和空调末端标在模型上。上方汇总总建筑面积、总出租面积、空间数和设备数。右侧看资产评分，以及风处理、水处理、消防、电等设备类型，下方是可检索的资产清单。",
    valueKicker: "资产落到房间",
    value: "资产不再只在表里，能按楼层定位到具体房间和设备。",
  },
  {
    id: "operation",
    title: "运营分析",
    subtitle: "从项目看到房间的经营",
    image: "/works/park-02-ops-map.jpg",
    images: [
      "/works/park-02-ops-map.jpg",
      "/works/park-02-ops-campus.jpg",
      "/works/park-02-ops-room.jpg",
    ],
    detailKicker: "经营对照",
    detail:
      "运营分析从项目地图看到楼栋和房间。地图上对照出租、收缴和续租，楼栋上挂面积与合同，房间里能看到租约状态和即将到期的合同。",
    valueKicker: "经营落在空间上",
    value: "招商和收缴放在同一张图上，按项目、楼栋、房间逐层看清经营。",
  },
  {
    id: "property",
    title: "物业分析",
    subtitle: "工单落在楼层和设备上",
    image: "/works/park-02-property.jpg",
    images: [
      "/works/park-02-property.jpg",
      "/works/park-02-property-order.jpg",
      "/works/park-02-property-light.jpg",
    ],
    detailKicker: "报修巡检维修",
    detail:
      "物业分析把报修、巡检和维修标在楼层平面上。上方看完成率和累计工单，右侧按分类、处理时长和运维排名对照，点开工单能看到报修来源、位置、设备和流转记录。页面支持深色系和浅色系。",
    valueKicker: "工单跟到房间",
    value: "报修、巡检和维修落在房间和设备上，物业按楼层跟进处理进度。",
  },
  {
    id: "biotech",
    title: "安全分析",
    subtitle: "告警标在楼层平面上",
    image: "/works/park-04-floor.jpg",
    images: [
      "/works/park-04-floor.jpg",
      "/works/park-05-security.jpg",
      "/works/park-05-access.jpg",
      "/works/park-05-parking.jpg",
      "/works/park-05-parking-detail.jpg",
    ],
    detailKicker: "楼层告警",
    detail: "把楼层里的报警、监控和消防收在同一张平面上，用来判断告警落点和处理情况。",
    valueKicker: "在平面上值班",
    value: "告警落在楼层空间里，值班时不用再离开模型去对监控和列表。",
  },
  {
    id: "energy",
    title: "能源分析",
    subtitle: "电和水落到楼层与电表",
    image: "/works/park-06-energy.jpg",
    images: ["/works/park-06-energy.jpg", "/works/park-06-meter.jpg"],
    detailKicker: "分项能耗",
    detail:
      "在楼层上点开电表，查看今日耗电、本月耗电和电费。左侧按办公、实验、机房等用电类型拆开，右侧对比今日与昨日、本月与上月。底部可在电和水之间切换。",
    valueKicker: "能耗可追溯",
    value: "能耗能追到具体楼层和电表，方便对照哪类空间在耗能。",
  },
]
