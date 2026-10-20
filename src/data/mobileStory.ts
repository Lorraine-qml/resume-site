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

const listReview: MobileShot = {
  id: "list-review",
  image: "/works/mobile-07-list-review.png",
  caption: "待审核列表",
}

const pending: MobileShot = {
  id: "pending",
  image: "/works/mobile-11-pending.png",
  caption: "审核详情",
}

export const mobileStory = {
  eyebrow: "[ To C / 一线 ] 轻量协同与触达",
  title: "移动端与现场触达",
  subtitle: "微应用端 | 园区访客与综合服务",
  metrics: [
    { id: "same", value: "100%", label: "多端数据同源" },
    { id: "speed", value: "50%", label: "现场响应提速" },
    { id: "paper", value: "0", label: "纸质登记表" },
  ] satisfies MobileMetric[],
  roleTitle: "产品负责人 / 交互设计主导",
  role: "独立完成移动端需求调研、信息架构设计、UI/UE 规范制定，并协同前后端与中台团队完成全链路交付。",
  challenges: [
    {
      title: "C 端体验与 B 端严谨的矛盾",
      body: "一线人员和访客需要极简操作，底层审批与权限校验必须绝对严谨。",
    },
    {
      title: "数据孤岛",
      body: "移动端产生的访客、工单数据，需要实时同步至大屏和中台。",
    },
  ] satisfies MobilePoint[],
  actions: [
    {
      title: "全链路访客闭环",
      body: "自主登记 / 员工邀约 → 消息审批 → 生成通行码 → 门禁核销，覆盖待审核、通过、拒绝、过期。",
    },
    {
      title: "园区服务超级入口",
      body: "聚合停车、会议、健身等高频预约，打通一码通底座。",
    },
    {
      title: "多端数据强绑",
      body: "扫码记录与工单状态直连中台接口，手机派单、大屏同步进度。",
    },
  ] satisfies MobilePoint[],
  result: "彻底替代纸质登记，访客通行效率提升 80%。打通手机、中台与大屏，运营可实时掌控现场。",
  hero: [home, visitForm, pass] satisfies MobileShot[],
  blocks: [
    {
      id: "lifecycle",
      title: "从填报到过闸的完整状态机",
      lead: "不只是提供表单，而是设计了一套完整的访客动线：发起申请 → 消息审核 → 生成通行码 → 门禁核销。",
      points: [
        {
          title: "状态可视化",
          body: "列表卡片化流式布局，通过颜色（绿 / 红 / 橙）直观区分审核状态，降低保安与员工的辨识成本。",
        },
        {
          title: "操作热区优化",
          body: "审核详情页底部固定操作栏，按钮（拒绝 / 允许）落在单手拇指热区，方便随时随地处理。",
        },
      ],
      shots: [listReview, pending],
    },
  ] satisfies MobileBlock[],
}
