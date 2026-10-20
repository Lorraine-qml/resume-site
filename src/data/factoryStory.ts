export interface FactoryShot {
  id: string
  title: string
  subtitle: string
  image: string
  detailKicker: string
  detail: string
  valueKicker: string
  value: string
}

export const factoryShots: FactoryShot[] = [
  {
    id: "overview",
    title: "全要素总览",
    subtitle: "厂区尺度同时看人、机、料、法、环",
    image: "/works/factory-05-overview.jpg",
    detailKicker: "六块业务同屏",
    detail:
      "以厂区三维模型为底。左侧是人员出勤、机器状态、物料库存和工艺单元，右侧是安全生产天数、水电气用量和质量趋势。机器按维护、运行、等待、空闲区分，物料按马达、拉杆、齿条等件号盘点。底部从车间、产线、工艺设备继续下钻。",
    valueKicker: "打开黑盒",
    value: "管理者不用在 MES、WMS 和能耗系统之间来回切换，站在厂区尺度就能同时看见人、设备、物料和质量。",
  },
  {
    id: "campus",
    title: "厂区车间",
    subtitle: "从厂区点进一座具体车间",
    image: "/works/factory-02-campus.jpg",
    detailKicker: "车间档案",
    detail:
      "在厂区模型上点选车间，弹出名称、面积和用途，并给出进入车间的入口。右侧同步这班的出勤、实时产量与目标产量，以及用水、用电、用气。底部可在车间、厂线、工艺设备之间切换层级。",
    valueKicker: "下钻的第一跳",
    value: "先确认这是哪一座厂房、做什么、今天产出多少，再决定要不要进入车间内部。",
  },
  {
    id: "floor",
    title: "产线现场",
    subtitle: "走进车间看产线与工位",
    image: "/works/factory-03-floor.jpg",
    detailKicker: "产线落位",
    detail:
      "进入车间后，产线以三维工位铺开。点选产线可查看设备规模、产品类型和月产能力，以及这条产线服务的客户。底部仍可退回车间，或继续下到工艺设备。",
    valueKicker: "生产透明",
    value: "产线不再是表里的一行名字，管理者能按空间位置确认它在跑什么、能力落在哪。",
  },
  {
    id: "video",
    title: "视频监控",
    subtitle: "在三维现场里调取摄像头",
    image: "/works/factory-04-video.jpg",
    detailKicker: "视频挂接",
    detail:
      "摄像头图标落在三维场景中。点开后，实时画面以浮层叠在产线现场上，并标出所属产线与时间。关闭浮层后，仍停在同一条产线的空间位置。",
    valueKicker: "远程巡线",
    value: "异常不用先离开驾驶舱再去另开监控平台，在产线位置上就能核对现场画面。",
  },
  {
    id: "line",
    title: "产线信息",
    subtitle: "当班产量与可动率对照",
    image: "/works/factory-01-line.png",
    detailKicker: "产量查询",
    detail:
      "从产线进入信息面板，按产线和时间筛选。柱状图对照当班目标产量与实际产量，折线给出可动率。点到具体工位，可同时看到该工位的目标、实际和可动率。",
    valueKicker: "当班判断",
    value: "班组长不用导出报表，在当前产线上就能判断这一班是超产、欠产，还是设备可动率掉了下来。",
  },
]
