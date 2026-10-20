export interface GardenShot {
  id: string
  title: string
  subtitle: string
  image: string
  uiKicker: string
  ui: string
  valueKicker: string
  value: string
}

export const gardenStory = {
  tags: "智慧园林 / 公众服务",
  title: "青西郊野公园 & 上海植物园 · 智慧管控平台",
  overview:
    "相比复杂的政企中台，本项目更侧重于轻量级信息聚合与大屏可视化展示。核心难点在于如何将繁杂的园林日常运营数据（客流、停车、设施、气象）进行有效降噪，在一屏内为公众提供直观导览，为管理者提供全局视角。",
  duties: [
    {
      title: "产品说明",
      text: "主导繁杂园林运营数据（客流、停车、设施）的降噪聚合。针对公众导览与管理监控双重视角，将跨部门底层需求转化为清晰的大屏组件指标，输出高精度原型，并制定 UI 与前端交互规范。",
    },
    {
      title: "全链路管控与交付",
      text: "作为核心 PM，制定敏捷冲刺计划并管控整体研发进度。高效协调前后端资源，攻坚 3D 模型渲染与多源数据联调，把控上线节奏，保障项目按期高质量验收交付。",
    },
  ],
  shots: [
    {
      id: "botanic",
      title: "上海植物园 BIM 可视化综合运维",
      subtitle: "设备与空间落在三维场景上",
      image: "/works/garden-01-botanic.jpg",
      uiKicker: "远距离阅读",
      ui: "左侧采用设备、空间分类树状结构，中间以 3D 场景为主视觉，右侧辅以安全告警与检测指标。整体布局克制，符合大屏远距离阅读习惯。",
      valueKicker: "立体台账",
      value:
        "打通园区资产与设备台账，实现从平面台账到立体空间的映射。管理者可直观查看风处理系统、消防设施等设备的运行状态，并实时接收气象与土壤监测数据。",
    },
    {
      id: "guide",
      title: "青西郊野公园 · 园区导览与停车调度",
      subtitle: "地图导航与停车余位",
      image: "/works/garden-02-guide.jpg",
      uiKicker: "导览大屏",
      ui: "采用中心地图导航加两侧核心服务面板的导览大屏布局。地图上清晰标注观光车路线、停车场及服务点。",
      valueKicker: "停车引导",
      value:
        "面向公众的电子导游，直观展示观光车时刻表和服务热线。底部的 P1–P5 停车场看板通过颜色区分余位，缓解节假日园区的交通与停车引导压力。",
    },
    {
      id: "spots",
      title: "青西郊野公园 · 热门景点与服务公示",
      subtitle: "景点介绍与游园路线",
      image: "/works/garden-03-spots.jpg",
      uiKicker: "模块化公示",
      ui: "图文并茂的模块化设计。左上角展示实时客流，中间是大莲湖等热门景点的图片与介绍，右下角提供湿地体验游等游园路线方案。",
      valueKicker: "降低寻路",
      value: "为游客提供游园攻略。园林公告与卫生间、餐饮店等设施公示，降低游客的寻路成本。",
    },
    {
      id: "flow",
      title: "青西郊野公园 · 客流趋势与活动预约看板",
      subtitle: "客流波峰与预约榜单",
      image: "/works/garden-04-flow.jpg",
      uiKicker: "客流波峰",
      ui: "用折线图展示今日客流量的波峰波谷，对照大湿地与保育区。右侧用榜单展示活动预约和景区预约情况。",
      valueKicker: "动态调度",
      value: "帮助园区管理方掌握各时段客流拥挤度，并按活动预约量动态调度安保和保洁资源。",
    },
  ] satisfies GardenShot[],
}
