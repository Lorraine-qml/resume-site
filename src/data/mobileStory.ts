export interface MobileShot {
  id: string
  image: string
  caption: string
}

export interface MobilePoint {
  title: string
  body: string
}

export interface MobileMetric {
  id: string
  value: string
  label: string
}

export interface MobileBlock {
  id: string
  title: string
  lead: string
  points: MobilePoint[]
  shots: MobileShot[]
}

const home: MobileShot = {
  id: "home",
  image: "/works/mobile-04-home.png",
  caption: "综合服务首页",
}

const visitForm: MobileShot = {
  id: "visit-form",
  image: "/works/mobile-09-visit-form.png",
  caption: "访客申请表单",
}

const pass: MobileShot = {
  id: "pass",
  image: "/works/mobile-03-pass.png",
  caption: "通行码",
}

const meeting: MobileShot = {
  id: "meeting",
  image: "/works/mobile-scene1-meeting.png",
  caption: "会议室预约",
}

const mapGuide: MobileShot = {
  id: "map",
  image: "/works/mobile-scene1-map.png",
  caption: "地图导览",
}

const ticketList: MobileShot = {
  id: "ticket",
  image: "/works/mobile-scene2-ticket.png",
  caption: "报修工单列表",
}

const floorPlan: MobileShot = {
  id: "floor",
  image: "/works/mobile-scene2-floor.png",
  caption: "平面图定位",
}

export const mobileStory = {
  eyebrow: "[ To C / 一线 ] 轻量协同与触达",
  title: "移动现场触达",
  subtitle: "微应用端 | 园区访客与综合服务",
  metrics: [
    { id: "same", value: "100%", label: "多端数据同源" },
    { id: "speed", value: "50%", label: "现场响应提速" },
    { id: "paper", value: "0", label: "纸质登记表" },
  ] satisfies MobileMetric[],
  roleTags: ["产品负责人", "交互设计主导"],
  challengeTags: ["C端体验与B端严谨的平衡", "多端数据孤岛"],
  actionTags: ["全链路访客闭环", "园区服务超级入口", "多端数据强绑"],
  resultTags: ["通行效率提升 80%", "彻底无纸化"],
  hero: [home, visitForm, pass] satisfies MobileShot[],
  blocks: [
    {
      id: "service-hall",
      title: "全场景服务大厅",
      lead: "覆盖高频生活与办公诉求，让园区服务触手可及。",
      points: [
        {
          title: "空间导览，一键即达",
          body: "将园区物理空间数字化，提供餐饮、停车、厕所等 POI 的快捷检索。",
        },
        {
          title: "资源预约，时间可视",
          body: "会议室预约支持按时间段筛选，直观呈现设备状态与排期，减少沟通成本。",
        },
      ],
      shots: [meeting, mapGuide],
    },
    {
      id: "field-ops",
      title: "一线现场作业协同",
      lead: "多源工单统一流转，让现场执行降本增效。",
      points: [
        {
          title: "业务全覆盖",
          body: "聚合报修、巡检、安全、施工作业等多条业务线，统一入口。",
        },
        {
          title: "状态机流转",
          body: "从“待派单 → 待接单 → 处理中 → 待签字 / 验收 → 已关单”，严格管控每一个节点的业务闭环。",
        },
        {
          title: "空间精准定位",
          body: "深度结合室内平面图，用绿色引线精准定位检查点位，杜绝“打卡式”假巡检。",
        },
      ],
      shots: [ticketList, floorPlan],
    },
  ] satisfies MobileBlock[],
}
