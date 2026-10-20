export interface ConsoleModule {
  id: string
  label: string
}

export interface ConsolePoint {
  title: string
  body: string
}

export interface ConsoleFeature {
  id: string
  title: string
  kicker: string
  image: string
  images?: string[]
  /** Optional caption under the image stack (e.g. secondary screenshot note). */
  imageNote?: string
  lead: string
  points: ConsolePoint[]
}

export interface ConsoleLifecycleStage {
  id: string
  index: string
  title: string
  focus: string
  actions: string[]
}

export interface ConsoleLifecycleInsight {
  id: string
  title: string
  body: string
}

export interface ConsoleLifecycle {
  eyebrow: string
  title: string
  subtitle: string
  stages: ConsoleLifecycleStage[]
  insights: ConsoleLifecycleInsight[]
}

export interface ConsoleModuleStory {
  id: string
  label: string
  eyebrow?: string
  name: string
  pain: string
  role: string
  roleLabel?: string
  design: string
  designLabel?: string
  features: ConsoleFeature[]
  lifecycle?: ConsoleLifecycle
}

export interface ConsoleStory {
  kicker: string
  title: string
  summary: string
  modules: ConsoleModule[]
  stories: Record<string, ConsoleModuleStory>
}

export const consoleStory: ConsoleStory = {
  kicker: "[To B] 核心系统架构",
  title: "中台业务管理",
  summary:
    "禹翼平台 (Base → Pro 业务中台)。把园区资产、运营、物业、能源、安全与智能体收进同一套可配置中台，覆盖从建档、流转到 AI 协同的全流程。",
  modules: [
    { id: "asset", label: "资产管理" },
    { id: "ops", label: "运营管理" },
    { id: "property", label: "物业管理" },
    { id: "energy", label: "能源管理" },
    { id: "security", label: "安全管理" },
    { id: "agent", label: "智能体" },
  ],
  stories: {
    asset: {
      id: "asset",
      label: "资产管理",
      name: "禹翼 · 资产全生命周期管理中枢",
      pain: "传统台账管理导致“账实不符、运维难追溯、数据孤岛”，资产状态无法实时洞察。",
      role: "产品负责人 / 交互设计主导。独立完成从 0-1 的业务调研、信息架构、多端原型（PC 管理端 / 移动巡检端）及研发验收，确保系统能支撑多项目、多角色的复杂协同。",
      design: "以“一物一码”为数据底座，以“工单闭环”为流转引擎，将静态台账升级为动态的资产数字化经营。",
      features: [
        {
          id: "cockpit",
          title: "管理驾驶舱与工作台",
          kicker: "角色导向的首页降噪",
          image: "/works/console-asset-cockpit.png",
          lead: "针对资产管理员日常高频操作，设计了“数据总览 + 快捷入口 + 新手引导”的三段式布局。",
          points: [
            {
              title: "状态透传",
              body: "环形图直观呈现“在用 / 在库”资产占比，让管理者 3 秒感知资产健康度。",
            },
            {
              title: "动线引导",
              body: "底部的“基础设置 → 资产入库 → 日常操作”步骤条，大幅降低新用户学习成本，将复杂的系统初始化流程产品化、引导化。",
            },
          ],
        },
        {
          id: "list",
          title: "资产清单与台账",
          kicker: "复杂业务的高效执行界面",
          image: "/works/console-asset-list.png",
          lead: "这是系统使用频率最高的核心执行层，设计重点在于“信息密度与操作效率的平衡”。",
          points: [
            {
              title: "权限与状态隔离",
              body: "通过角色权限控制不同组织的数据可见性；用高饱和度胶囊 Tag（在库 / 在用）快速标识资产流转状态。",
            },
            {
              title: "多维度操作聚合",
              body: "将 RFID 发卡、打印标签、导入导出等批量操作收纳于顶部工具栏，并支持按原值、分类、存放地点做高级透视查询，满足盘点、交接等真实业务场景。",
            },
          ],
        },
      ],
      lifecycle: {
        eyebrow: "Asset Lifecycle",
        title: "资产全生命周期业务闭环",
        subtitle: "一物一码底座，追踪资产从“生”到“死”的每一次状态流转。",
        stages: [
          {
            id: "inbound",
            index: "01",
            title: "资产入库",
            focus: "生成资产码",
            actions: ["基础信息登记", "RFID / 条码打印"],
          },
          {
            id: "flow",
            index: "02",
            title: "日常流转",
            focus: "权属与位置变更",
            actions: ["资产领用", "资产借用", "资产调拨", "资产交接"],
          },
          {
            id: "ops",
            index: "03",
            title: "异常运维",
            focus: "工单与维修",
            actions: ["资产维修", "资产退库"],
          },
          {
            id: "check",
            index: "04",
            title: "盘点核对",
            focus: "账实相符校验",
            actions: ["资产盘点", "信息变更"],
          },
          {
            id: "exit",
            index: "05",
            title: "报废处置",
            focus: "生命周期终结",
            actions: ["资产报废", "资产处置"],
          },
        ],
        insights: [
          {
            id: "state",
            title: "状态驱动，而非功能堆砌",
            body: "摒弃传统“功能菜单”视角，将所有操作抽象为资产的“状态变更”。无论资产是在用、在库、在修还是已报废，用户均可在同一张列表下，基于当前状态触发合法业务动作，避免误操作。",
          },
          {
            id: "auth",
            title: "权限与流程的强隔离",
            body: "在领用、维修、报废等关键节点，内置多级审批流与角色权限校验。普通员工只能发起报修，维修工接单处理，资产管理员才拥有调拨与报废权限。",
          },
          {
            id: "trace",
            title: "数据闭环与追溯",
            body: "所有流转节点产生的时间、操作人、资金变动，均沉淀至资产的“数字画像”中，实现全链路操作可追溯。",
          },
        ],
      },
    },
    ops: {
      id: "ops",
      label: "运营管理",
      eyebrow: "[To B] 全流程模块 · 业财一体化中枢",
      name: "园区客户全生命周期与财务闭环",
      pain: "传统园区招商与财务脱节，线索跟进无记录、合同回款靠人工台账、逾期坏账风险高、日常运营（会议室 / 访客）数据孤岛。",
      role: "以“线索”为起点，以“合同”为基石，以“回款 / 发票”为终点，打造 LTC（线索到现金）全链路业务协同。",
      roleLabel: "业务主张",
      design: "配合运营驾驶舱，让管理者“看得清商机、管得住合同、收得回款项”。",
      designLabel: "设计主张",
      features: [
        {
          id: "ops-cockpit",
          title: "运营数据驾驶舱",
          kicker: "角色视角的业财全局感知",
          image: "/works/console-ops-cockpit.png",
          lead: "为运营总管量身定制的统筹看板。将原本分散的访客管理、会议室预约、账期金额、合同数量进行多源融合。",
          points: [
            {
              title: "预警机制",
              body: "右侧栏醒目展示应付款 / 应开票提醒，用红色角标和倒计时，将潜在业务风险前置。",
            },
            {
              title: "多源并置",
              body: "顶部指标卡与会议室使用态势同屏呈现，日常运营与账期、合同水位一览，打破访客 / 会议室等数据孤岛。",
            },
          ],
        },
        {
          id: "ops-customer",
          title: "客户与合同全生命周期管控",
          kicker: "从粗放跟进到精细化管理",
          image: "/works/console-ops-opportunity.png",
          lead: "从商机推进到合同与回款，把招商跟进与财务结果放在同一条业务链上，降低漏跟与坏账风险。",
          points: [
            {
              title: "阶段推进",
              body: "商机详情以阶段条呈现“验证客户 → 需求分析 → 方案报价 → 谈判审核 → 结束”，并配套阶段工作清单，降低销售漏跟风险。",
            },
            {
              title: "业财数据穿透",
              body: "顶部固定创建合同、创建回款等操作热区；下方 Tab 切换活动 / 资料 / 联系人 / 合同 / 产品，业务动作与财务结果同屏可追。",
            },
          ],
        },
        {
          id: "ops-finance",
          title: "业财一致性保障",
          kicker: "红绿灯式的财务风控",
          image: "/works/console-ops-crm.png",
          lead: "财务模块最看重准确性。通过列表页底部合计条实时展示总合同额与总回款额，做到账目清晰。",
          points: [
            {
              title: "自动核销与联查",
              body: "每笔回款、发票均与合同流水号强绑定。回款日期与开票日期支持高级筛选，方便快速定位逾期未付或应开未开的合同，规避税务与现金流风险。",
            },
            {
              title: "目标与完成可视",
              body: "合同金额目标及完成情况、即将到期 / 已到期预警，让管理层在一张图里看清达成率与风险敞口。",
            },
          ],
        },
      ],
      lifecycle: {
        eyebrow: "Lead to Cash",
        title: "LTC 业务全链路闭环",
        subtitle: "以线索为起点、合同为基石、回款开票为终点，打通园区招商与财务协同。",
        stages: [
          {
            id: "lead",
            index: "01",
            title: "线索获取",
            focus: "线索列表",
            actions: ["来源打标", "线索分配 / 认领", "转化为商机"],
          },
          {
            id: "opportunity",
            index: "02",
            title: "商机转化",
            focus: "客户建档",
            actions: ["联系人维护", "销售跟进记录", "商机金额评估"],
          },
          {
            id: "contract",
            index: "03",
            title: "签约合同",
            focus: "合同台账",
            actions: ["孵化 / 租赁 / 物业合同", "合同状态流转", "电子附件归档"],
          },
          {
            id: "payment",
            index: "04",
            title: "财务回款",
            focus: "回款计划",
            actions: ["分批回款登记", "逾期预警提示", "自动核销合同账目"],
          },
          {
            id: "invoice",
            index: "05",
            title: "开票归档",
            focus: "发票中心",
            actions: ["增值税专 / 普票", "发票状态核销", "财务报表导出"],
          },
        ],
        insights: [
          {
            id: "funnel",
            title: "漏斗可视，而非结果滞后",
            body: "把线索、商机、合同、回款放进同一漏斗，管理者随时看到阶段转化与目标达成，而不是月底才对账。",
          },
          {
            id: "alert",
            title: "风险前置，而非事后追缴",
            body: "应付款、应开票、合同到期等提醒前置到驾驶舱与列表角标，把坏账与漏开票风险挡在发生之前。",
          },
          {
            id: "finance",
            title: "业财同链，而非两套台账",
            body: "回款与发票强制绑定合同流水号，列表合计条实时对照合同额与回款额，保证账目可联查、可追溯。",
          },
        ],
      },
    },
    property: {
      id: "property",
      label: "物业管理",
      eyebrow: "[To B] 全流程模块 · 现场运维与服务中枢",
      name: "主动防御与被动响应的数智化闭环",
      pain: "传统物业往往是“救火式”被动服务（坏了才修），巡检靠纸笔、维保靠人记，服务质量无法量化考核，设备生命周期折损严重。",
      role: "以“巡检”为前置防线，以“工单”为核心流转引擎，以“维保”为长效保障。将线下物理空间（二维码点位）与线上系统强绑定，沉淀 SLA（服务等级）数据。",
      roleLabel: "业务主张",
      design: "实现物业运维的标准化与透明化，让服务从“救火”走向“防患于未然”。",
      designLabel: "设计主张",
      features: [
        {
          id: "property-dashboard",
          title: "物业服务驾驶舱",
          kicker: "SLA 驱动的服务度量",
          image: "/works/console-property-dashboard.png",
          lead: "这是物业主管的指挥中心。顶部指标卡直接透传“待派单、处理中、待关单”等工单池状态，防止任务积压。",
          points: [
            {
              title: "多源归口",
              body: "饼图清晰拆解工单来源（平台报修、微信小程序、电话），帮助管理者评估线上化推广效果。",
            },
            {
              title: "效率监控",
              body: "下方直接亮出“平均首次响应时长”与“平均解决时长”，让物业服务的 KPI 考核不再是糊涂账。",
            },
          ],
        },
        {
          id: "property-ticket",
          title: "工单全生命周期管理",
          kicker: "多维立体的工单台账",
          image: "/works/console-property-ticket.png",
          lead: "这是系统使用频率最高的执行界面。为兼顾调度员查单效率与业务严谨性，把空间、资产与紧急度放进同一张台账。",
          points: [
            {
              title: "空间与资产强绑定",
              body: "工单列表不仅包含问题类型与紧急程度，还直接关联空间位置（如园区附属设施 / 1F）和具体资产设备（如摄像机），方便维修人员精准定位故障源头。",
            },
            {
              title: "智能调度支持",
              body: "顶部组合筛选（来源、紧急度、状态）支持调度员快速将突发紧急工单派发给空闲人员。",
            },
          ],
        },
        {
          id: "property-prevent",
          title: "标准化的巡检与维保",
          kicker: "从被动维修走向主动预防",
          image: "/works/console-property-maintain.png",
          images: ["/works/console-property-maintain.png", "/works/console-property-inspect.png"],
          lead: "优秀的物业不仅是修得快，更是坏得少。把线下关键设施数字化，用 SOP 驱动计划生成与工单触发。",
          points: [
            {
              title: "线下空间数字化",
              body: "将机房、电梯、配电间等关键设施生成独立二维码（点位），安保 / 保洁人员通过手机扫码打卡，杜绝假巡检。",
            },
            {
              title: "标准化 SOP",
              body: "针对不同设备预设巡检 / 维保程序（如电梯 1 次 / 天、空调机组换季保养），系统自动生成计划并触发工单，确保设备生命周期得到专业养护。",
            },
          ],
        },
      ],
      lifecycle: {
        eyebrow: "Service Ops Loop",
        title: "物业运维服务全链路闭环",
        subtitle: "以巡检为防线、工单为引擎、维保为长效保障，打通计划、执行、异常到验收的现场服务链。",
        stages: [
          {
            id: "plan",
            index: "01",
            title: "计划制定",
            focus: "维保 / 巡检程序",
            actions: ["设定周期与频次", "定义巡检 SOP", "关联资产与空间"],
          },
          {
            id: "execute",
            index: "02",
            title: "现场执行",
            focus: "扫码打卡 / 巡视",
            actions: ["手机扫码防作弊", "拍照上传现场情况", "发现隐患一键上报"],
          },
          {
            id: "trigger",
            index: "03",
            title: "异常触发",
            focus: "设备故障 / 手动报修",
            actions: ["多端提交报修", "自动生成工单", "设定紧急程度"],
          },
          {
            id: "repair",
            index: "04",
            title: "派单维修",
            focus: "接单 / 处理 / 换件",
            actions: ["自动派单 / 抢单", "耗材 / 备件出库", "工时与进度记录"],
          },
          {
            id: "close",
            index: "05",
            title: "验收评价",
            focus: "关单 / SLA 考核",
            actions: ["结果确认", "满意度评价", "数据沉淀看板"],
          },
        ],
        insights: [
          {
            id: "sla",
            title: "SLA 度量，而非口头承诺",
            body: "把待派单、响应时长、解决时长沉到驾驶舱，服务质量可量化考核，主管一眼看见积压与短板。",
          },
          {
            id: "prevent",
            title: "主动预防，而非救火维修",
            body: "点位扫码 + 巡检 / 维保 SOP 自动触达，把隐患挡在故障之前，延长设备生命周期。",
          },
          {
            id: "closed",
            title: "工单闭环，而非口头交接",
            body: "从异常触发到派单、换件、关单全程留痕，空间与资产强绑定，责任可追溯、进度可调度。",
          },
        ],
      },
    },
    energy: {
      id: "energy",
      label: "能源管理",
      eyebrow: "[To B] 全流程模块 · 绿色低碳与精益运营中枢",
      name: "从“人工抄表”到“智能降本”的数据闭环",
      pain: "传统园区能耗是一笔糊涂账，人工抄表滞后且易错、设备跑冒滴漏无从察觉、多级用能（水 / 电 / 气）难以定位到具体的部门和空间。",
      role: "以“物联表计”为神经末梢，以“流向分析”为核心引擎。打通从底层硬件（电表 / 水表）到宏观报表的数据链路，实现能耗数据的可视、可查、可溯源、可预警。",
      roleLabel: "业务主张",
      design: "辅助管理者实现精细化节能，让每一度电、每一吨水都算得清、管得住。",
      designLabel: "设计主张",
      features: [
        {
          id: "energy-overview",
          title: "能源统计总览",
          kicker: "多维度的用能透视",
          image: "/works/console-energy-overview.png",
          lead: "为后勤主管打造的总览看板。不仅展示“今日 / 本月”的绝对用量，更通过折线图与环形图对比同环比趋势。",
          points: [
            {
              title: "能耗日历",
              body: "独创的能耗日历设计，用红黄绿标识每日用能健康度，快速定位异常耗能日。",
            },
            {
              title: "排名与占比",
              body: "右侧直观展示各表计 / 区域的能耗占比及 Top10 排名，让高耗能区域无处遁形，为节能改造提供数据支撑。",
            },
          ],
        },
        {
          id: "energy-flow",
          title: "流向分析与报表",
          kicker: "业务链路的可视化降维",
          image: "/works/console-energy-sankey.jpg",
          images: ["/works/console-energy-sankey.jpg", "/works/console-energy-report.png"],
          lead: "面对成百上千个电表，传统表格查询效率低。引入桑基图将抽象数据流具象化，并配套灵活报表体系保证数据闭环。",
          points: [
            {
              title: "穿透式溯源",
              body: "从园区总表一路流向“研发楼 → 1F → 配电间 → 具体电表”，流量粗细直观反映耗电量，任何一级跑冒滴漏一眼看穿。",
            },
            {
              title: "灵活报表体系",
              body: "支持按物理空间、上下游分类等维度生成报表，同时兼容物联设备的实时读数与老旧设备的手工抄表，保证数据完整闭环。",
            },
          ],
        },
        {
          id: "energy-alarm",
          title: "表计台账与阈值告警",
          kicker: "算得准，更要管得住",
          image: "/works/console-energy-alarm.png",
          lead: "硬件台账与风控规则引擎并重：既管得住成百上千表计的在线状态，也能把异常用能挡在损耗扩大之前。",
          points: [
            {
              title: "全生命周期硬件台账",
              body: "支持多达数百个电柜、仪表的在线状态监控。针对设备老化设计“换表”与“手工抄表”，确保设备更迭期间业务不中断。",
            },
            {
              title: "智能风控告警",
              body: "支持自定义阈值规则（如连续超出阈值 3 次触发告警）。将事后追责变为事前干预，系统可自动推送异常用能消息，降低能源损耗风险。",
            },
          ],
        },
      ],
      lifecycle: {
        eyebrow: "Energy Data Loop",
        title: "能源数据全链路闭环",
        subtitle: "以物联表计为末梢、流向分析为引擎，打通配置、采集、溯源、统计到风控的用能数据链。",
        stages: [
          {
            id: "config",
            index: "01",
            title: "基础配置",
            focus: "能源类型 / 表计",
            actions: ["定义能耗科目", "绑定物理空间", "电柜层级维护"],
          },
          {
            id: "collect",
            index: "02",
            title: "数据采集",
            focus: "实时物联 / 手工抄表",
            actions: ["自动化数据回传", "设备掉线监测", "换表 / 补录机制"],
          },
          {
            id: "trace",
            index: "03",
            title: "流向追踪",
            focus: "桑基图上下游溯源",
            actions: ["按空间 / 线路穿透", "损耗节点定位", "多级表计拓扑关联"],
          },
          {
            id: "analyze",
            index: "04",
            title: "统计分析",
            focus: "多维度报表 / 同环比",
            actions: ["能耗日历与排名", "生成导出报表", "用能趋势分析"],
          },
          {
            id: "risk",
            index: "05",
            title: "异常风控",
            focus: "阈值配置 / 工单触发",
            actions: ["设定告警阈值", "连续超标触发规则", "联动报修工单"],
          },
        ],
        insights: [
          {
            id: "calendar",
            title: "日历透视，而非月末对账",
            body: "红黄绿能耗日历让异常日一眼可见，今日 / 本月用量与同环比同屏呈现，用能健康度不再是糊涂账。",
          },
          {
            id: "sankey",
            title: "流向可视，而非表格迷宫",
            body: "桑基图把园区到电表的层级耗电具象化，流量粗细即损耗线索，跑冒滴漏可溯源到具体节点。",
          },
          {
            id: "threshold",
            title: "阈值前置，而非事后追责",
            body: "自定义连续超标规则自动告警并联动工单，把异常用能挡在扩大之前，真正管得住每一度电。",
          },
        ],
      },
    },
    security: {
      id: "security",
      label: "安全管理",
      eyebrow: "[To B] 全流程模块 · 软硬一体的物联安防中枢",
      name: "从“事后追溯”到“主动干预”的立体防护网",
      pain: "园区安防设备繁杂（视频、门禁、闸机、传感器），各子系统孤立运转，导致“看不过来、管不到位”；特别是生物医药等特殊园区，一旦发生气体泄漏等生命安全事故，传统人工巡检根本无法及时响应。",
      role: "打造统一的物联设备接入底座，将“人、车、物、空间”全面数字化。通过“设备台账管理 → 多源实时告警 → 智能事件分发 → 闭环处理追踪”，把安全隐患扼杀在摇篮里。",
      roleLabel: "业务主张",
      design: "用统一底座收拢碎片化子系统，让安保从“事后翻录像”变为“事前可预警、事中可派单、事后可复盘”。",
      designLabel: "设计主张",
      features: [
        {
          id: "security-awareness",
          title: "安防态势感知",
          kicker: "告警风暴的降噪与提效",
          image: "/works/console-security-events.png",
          images: ["/works/console-security-events.png", "/works/console-security-stats.png"],
          lead: "面对海量设备，系统不能变成“狼来了”。用分级分类研判 + 实时事件闭环，让安保主管看得清、管得住。",
          points: [
            {
              title: "分级分类研判",
              body: "统计大屏拆解报警趋势、等级占比与事件分类，并支持筛选频报事件 Top5（如视频误报），帮助优化设备阈值。",
            },
            {
              title: "实时事件闭环",
              body: "事件列表支持“未处理 / 处理中 / 已处理”状态流转，并展示推送状态，确保每一条安全告警都有人接单、有人兜底。",
            },
          ],
        },
        {
          id: "security-iot",
          title: "全场景物联设备底座",
          kicker: "软硬件一体的资产台账",
          image: "/works/console-security-parking.png",
          images: ["/works/console-security-parking.png", "/works/console-security-gate.png"],
          lead: "安全防范的基石是设备在线。将监控、门禁、通行闸机与停车场道闸纳入统一台账，清晰呈现总数、绑定与异常状态。",
          points: [
            {
              title: "统一管控",
              body: "成百上千监控探头、门禁、闸机与道闸统一纳管，指标卡透传设备总数、空间绑定与监测正常 / 异常数。",
            },
            {
              title: "空间与权限强绑定",
              body: "每台设备精准绑定空间位置与设备编号；配合门禁“关联渠道”与“人员清单”，实现人员通行与车辆放行的精细控制。",
            },
          ],
        },
      ],
      lifecycle: {
        eyebrow: "Security Ops Loop",
        title: "安防数据全链路闭环",
        subtitle: "以物联设备为底座，打通接入、监测、告警、处置到统计复盘的立体防护链；含实验室氧气浓度等生命线监测。",
        stages: [
          {
            id: "device",
            index: "01",
            title: "设备接入",
            focus: "监控 / 门禁 / 传感器",
            actions: ["设备绑定空间", "关联闸机渠道", "车辆 / 人员授权"],
          },
          {
            id: "monitor",
            index: "02",
            title: "实时监测",
            focus: "视频画面 / 气体浓度",
            actions: ["在线状态巡检", "氧气浓度分钟级刷新", "异常画面抓拍"],
          },
          {
            id: "alarm",
            index: "03",
            title: "智能告警",
            focus: "阈值触发 / 入侵识别",
            actions: ["告警级别划分", "频报事件过滤", "自动生成事件单"],
          },
          {
            id: "handle",
            index: "04",
            title: "事件处置",
            focus: "派单 / 接单 / 现场核验",
            actions: ["事件推送配置", "处理状态追踪", "闭环销项记录"],
          },
          {
            id: "analytics",
            index: "05",
            title: "统计分析",
            focus: "频报 Top / 趋势图",
            actions: ["生成安防报告", "优化巡检策略", "设备健康度评估"],
          },
        ],
        insights: [
          {
            id: "denoise",
            title: "降噪提效，而非告警淹没",
            body: "等级占比、分类拆解与频报 Top5 帮主管识别误报风暴，把注意力留给真正高危事件。",
          },
          {
            id: "iotbase",
            title: "统一底座，而非子系统孤岛",
            body: "监控、门禁、闸机、停车场纳入同一台账，空间与权限强绑定，人车通行可控可查。",
          },
          {
            id: "lifeline",
            title: "生命线前置，而非事后追溯",
            body: "气体浓度分钟级监测 + 异常联动告警与历史曲线，把生物医药园区的极限风险挡在扩散之前。",
          },
        ],
      },
    },
    agent: {
      id: "agent",
      label: "智能体",
      eyebrow: "[Tech] AI 赋能层 · 新一代人机协同工作台",
      name: "从“点按菜单”到“自然语言驱动”的交互革命",
      pain: "传统 B 端系统功能繁杂，用户查个数据要点开 5 个菜单、下钻 3 层结构；复杂的定时报表和巡检任务，极其消耗人工精力。",
      role: "基于底座的大模型能力，打造“智能体工作台”。将高频业务场景封装成独立的 Agent（如能源、安防、报表）。用户只需通过自然语言对话，或配置自动化运行任务，即可让 AI 接管繁琐的系统操作。",
      roleLabel: "业务主张",
      design: "实现真正的降本增效——从点菜单查数，升级为对话驱动与任务托管。",
      designLabel: "设计主张",
      features: [
        {
          id: "agent-workbench",
          title: "智能体工作台",
          kicker: "即插即用的智能体矩阵",
          image: "/works/console-agent-workbench.jpg",
          images: ["/works/console-agent-workbench.jpg", "/works/console-agent-chat.jpg"],
          lead: "打破单一 Chatbot 形态，将 AI 封装为能源管理、安防监控、设备维护等垂直业务专家。用户无需写 Prompt，点击卡片即可进入对应业务场景。",
          points: [
            {
              title: "任务自动化与运行监控",
              body: "左侧“我的任务”支持配置每日能耗报告、安全巡检等定时任务。通过运行中 / 已暂停 / 异常 / 已完成状态标签，像监控服务器一样盯住 AI 员工。",
            },
            {
              title: "意图识别与上下文记忆",
              body: "保留与各智能体的交互历史。例如询问“上周用了多少电”，AI 精准调用底层能源 API 返回数据；上下文留存便于随时回溯业务查询。",
            },
          ],
        },
      ],
      lifecycle: {
        eyebrow: "Agent Orchestration",
        title: "智能体与中台联动闭环",
        subtitle: "从意图输入到 Agent 匹配、底层 API 调用、结果反馈，再到沉淀监控，说明 AI 如何与数据底座、业务中台协同。",
        stages: [
          {
            id: "intent",
            index: "01",
            title: "用户意图输入",
            focus: "自然语言 / 定时任务",
            actions: ["语音 / 文本输入", "一键点击业务卡片"],
          },
          {
            id: "route",
            index: "02",
            title: "Agent 匹配",
            focus: "路由到能源 / 安防等",
            actions: ["意图识别与分发", "匹配专属业务模型"],
          },
          {
            id: "api",
            index: "03",
            title: "调用底层 API",
            focus: "读取数据底座 / 中台",
            actions: ["查询数据库", "执行控制指令"],
          },
          {
            id: "result",
            index: "04",
            title: "生成结果反馈",
            focus: "图表生成 / 触发工单",
            actions: ["结构化数据展示", "自动生成分析报告"],
          },
          {
            id: "monitor",
            index: "05",
            title: "沉淀与监控",
            focus: "历史记录 / 任务状态",
            actions: ["对话历史留存", "异常任务告警"],
          },
        ],
        insights: [
          {
            id: "matrix",
            title: "专家矩阵，而非万能聊天框",
            body: "把高频场景拆成可点击的垂直 Agent，降低 Prompt 门槛，让业务人员直接进入能源、安防、运维对话。",
          },
          {
            id: "autopilot",
            title: "任务托管，而非一次性问答",
            body: "定时报表与巡检以任务态运行，状态可监控、异常可告警，AI 从应答助手升级为可编排产线。",
          },
          {
            id: "grounded",
            title: "落地中台，而非空口生成",
            body: "意图经 Agent 路由后调用底座与中台 API，回答可追溯、可触发工单，真正接到业务闭环。",
          },
        ],
      },
    },
  },
}
