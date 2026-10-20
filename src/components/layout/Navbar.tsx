import { useCallback, useState, type MouseEvent } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { resumeFileName, resumeHref } from "../../data/content"
import { navigate } from "../../lib/route"
import { ContactModal } from "../ui/ContactModal"

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: "能力图谱", href: "#bento" },
  { label: "作品矩阵", href: "#portfolio" },
  { label: "职业路径", href: "#timeline" },
]

function followSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return
  if (window.location.pathname === "/") return
  event.preventDefault()
  navigate(`/${href}`)
}

function goHome(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  if (window.location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  navigate("/")
}

export function Navbar({ items = defaultItems }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const close = () => setOpen(false)
  const openContact = () => {
    setOpen(false)
    setContactOpen(true)
  }
  const closeContact = useCallback(() => setContactOpen(false), [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-blue/10 bg-white/80 shadow-soft backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-6 lg:px-10">
        <a
          href="/"
          onClick={goHome}
          className="inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70"
        >
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ok/50 motion-safe:animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-ok shadow-status" />
          </span>
          <span className="inline-flex items-baseline gap-x-1.5">
            <span className="text-base font-semibold tracking-wide text-brand-blue">Lorraine Qiao</span>
            <span className="text-sm font-light leading-none text-muted">|</span>
            <span className="text-sm font-medium text-brand-gold">产品 OS</span>
          </span>
        </a>
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => followSection(event, item.href)}
                  className="text-sm text-brand-blue/70 transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-12 flex items-center gap-3">
            <a
              href={resumeHref}
              download={resumeFileName}
              className="rounded-card border border-brand-blue/15 bg-white px-4 py-2 text-sm text-brand-blue transition-colors hover:border-brand-gold"
            >
              下载简历
            </a>
            <button
              type="button"
              onClick={openContact}
              className="inline-flex items-center gap-1.5 rounded-card bg-brand-blue px-4 py-2 text-sm text-white transition-colors hover:bg-brand-blue/90"
            >
              <MessageCircle className="h-4 w-4" />
              找我聊聊
            </button>
          </div>
        </div>
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
                <a
                  href={item.href}
                  onClick={(event) => {
                    close()
                    followSection(event, item.href)
                  }}
                  className="block text-lg text-brand-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeHref}
                download={resumeFileName}
                onClick={close}
                className="inline-flex rounded-card border border-brand-blue/15 bg-white px-4 py-2 text-base text-brand-blue"
              >
                下载简历
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center gap-1.5 rounded-card bg-brand-blue px-4 py-2 text-base text-white"
              >
                <MessageCircle className="h-4 w-4" />
                找我聊聊
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      <ContactModal open={contactOpen} onClose={closeContact} />
    </header>
  )
}
