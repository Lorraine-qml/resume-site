import { ArrowUpRight } from "lucide-react"
import { navigate } from "../../lib/route"
import { Button } from "../ui/Button"

export type PlatformAppId = "cockpit" | "console" | "neural" | "mobile"

/** 名称与作品矩阵四大板块标题保持一致 */
export const platformApps: { id: PlatformAppId; label: string; href: string }[] = [
  { id: "cockpit", label: "宏观决策驾驶舱", href: "/works/cockpit" },
  { id: "console", label: "中台业务管理", href: "/works/console" },
  { id: "neural", label: "后台数据底座", href: "/works/neural" },
  { id: "mobile", label: "移动现场触达", href: "/works/mobile" },
]

interface PlatformAppSwitchProps {
  current: PlatformAppId
  /** 右侧预留固定头像空间 */
  className?: string
}

export function PlatformAppSwitch({ current, className = "" }: PlatformAppSwitchProps) {
  const others = platformApps.filter((app) => app.id !== current)

  return (
    <div
      className={`flex shrink-0 flex-wrap items-center justify-end gap-x-2 gap-y-1.5 ${className}`}
    >
      <p className="text-[10px] tracking-[0.16em] text-brand-gold">快捷平台应用浏览</p>
      <ul className="flex flex-wrap justify-end gap-2">
        {others.map((app) => (
          <li key={app.id}>
            <Button
              variant="ghost"
              onClick={() => navigate(app.href)}
              className="px-3 py-1.5 text-xs shadow-none"
            >
              {app.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
