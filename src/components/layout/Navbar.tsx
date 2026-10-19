import { useState } from "react"
import { Menu, X } from "lucide-react"
import { resumeFileName, resumeHref } from "../../data/content"

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brand?: string
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: "能力图谱", href: "#bento" },
  { label: "作品矩阵", href: "#portfolio" },
  { label: "职业路径", href: "#timeline" },
]

export function Navbar({
  brand = "乔美玲 · 产品与交付图谱",
  items = defaultItems,
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-blue/10 bg-white/80 shadow-soft backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="text-sm font-medium tracking-wide text-brand-blue">
          {brand}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-brand-blue/70 transition-colors hover:text-brand-blue"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeHref}
              download={resumeFileName}
              className="rounded-card border border-brand-blue/15 px-4 py-2 text-sm text-brand-blue transition-colors hover:border-brand-gold"
            >
              下载简历
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="rounded-card p-2 text-brand-blue md:hidden"
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-50 border-t border-brand-blue/10 bg-white px-6 py-8 md:hidden">
          <ul className="space-y-5">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close} className="block text-lg text-brand-blue">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeHref}
                download={resumeFileName}
                onClick={close}
                className="block text-lg text-brand-gold"
              >
                下载简历
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
