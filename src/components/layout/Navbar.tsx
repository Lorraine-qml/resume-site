import { useCallback, useEffect, useState, type MouseEvent } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { resumeFileName, resumeHref } from "../../data/content"
import { publicAsset } from "../../lib/asset"
import { navigate, usePathname } from "../../lib/route"
import { ContactModal } from "../ui/ContactModal"

interface NavItem {
  label: string
  href: string
  sectionId: string
}

interface NavbarProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: "能力图谱", href: "#bento", sectionId: "bento" },
  { label: "作品矩阵", href: "#portfolio", sectionId: "portfolio" },
  { label: "AI 架构", href: "#architecture", sectionId: "architecture" },
  { label: "职业路径", href: "#timeline", sectionId: "timeline" },
]

const homeScrollSections = ["bento", "portfolio", "architecture", "timeline"]

function scrollToSection(sectionId: string) {
  const node = document.getElementById(sectionId)
  if (!node) return
  // Align section top under fixed navbar; avoid leftover gap from previous section.
  node.scrollIntoView({ behavior: "smooth", block: "start" })
}

function followSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return
  event.preventDefault()
  const sectionId = href.slice(1)

  if (window.location.pathname !== "/") {
    navigate(`/${href}`)
    return
  }

  const next = `/${href}`
  if (`${window.location.pathname}${window.location.hash}` !== next) {
    window.history.pushState({}, "", next)
    window.dispatchEvent(new PopStateEvent("popstate"))
  }
  scrollToSection(sectionId)
}

function goHome(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  if (window.location.pathname === "/") {
    if (window.location.hash) {
      window.history.replaceState({}, "", window.location.pathname)
      window.dispatchEvent(new PopStateEvent("popstate"))
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  navigate("/")
}

function useActiveSection(sectionIds: string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActiveId(null)
      return
    }

    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (nodes.length === 0) return

    const syncFromScroll = () => {
      // Use viewport-relative tops — offsetTop breaks when ancestors are positioned/transformed.
      const marker = window.innerHeight * 0.28
      let current: string | null = null
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= marker) current = node.id
      }
      if (window.scrollY < 80) current = null
      setActiveId(current)

      // Keep URL hash in sync with the visible section so deep links don't stick forever.
      const nextHash = current ? `#${current}` : ""
      if (window.location.hash !== nextHash) {
        const url = `${window.location.pathname}${window.location.search}${nextHash}`
        window.history.replaceState({}, "", url)
      }
    }

    syncFromScroll()
    window.addEventListener("scroll", syncFromScroll, { passive: true })
    window.addEventListener("resize", syncFromScroll)
    return () => {
      window.removeEventListener("scroll", syncFromScroll)
      window.removeEventListener("resize", syncFromScroll)
    }
  }, [enabled, sectionIds.join("|")])

  return activeId
}

function navClassName(active: boolean) {
  return active
    ? "relative text-sm font-semibold text-brand-blue after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-gold"
    : "text-sm text-brand-blue/70 transition-colors hover:text-brand-blue"
}

export function Navbar({ items = defaultItems }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const path = usePathname()
  const onWorkRoute = path.startsWith("/works/")
  const onHome = path === "/"
  const scrollActive = useActiveSection(homeScrollSections, onHome)

  const close = () => setOpen(false)
  const openContact = () => {
    setOpen(false)
    setContactOpen(true)
  }
  const closeContact = useCallback(() => setContactOpen(false), [])

  const isItemActive = (item: NavItem) => {
    if (onWorkRoute) return item.sectionId === "portfolio"
    if (!onHome) return false
    // Scroll position is the source of truth — hash alone must not lock a tab forever.
    return scrollActive === item.sectionId
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-blue/10 bg-white/80 shadow-soft backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-6 lg:px-10">
        <a
          href="/"
          onClick={goHome}
          className="inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-70"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-blue text-[11px] font-bold tracking-tighter text-white"
          >
            LQ
          </span>
          <span className="inline-flex items-baseline gap-x-1.5">
            <span className="text-base font-semibold tracking-wide text-brand-blue">Lorraine Qiao</span>
            <span className="text-sm font-light leading-none text-muted">|</span>
            <span className="text-sm font-medium text-brand-gold">产品 OS</span>
          </span>
        </a>
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-8">
            {items.map((item) => {
              const active = isItemActive(item)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={(event) => followSection(event, item.href)}
                    className={navClassName(active)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="ml-12 flex items-center gap-3">
            <a
              href={publicAsset(resumeHref)}
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
            {items.map((item) => {
              const active = isItemActive(item)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={(event) => {
                      close()
                      followSection(event, item.href)
                    }}
                    className={`block text-lg ${active ? "font-semibold text-brand-blue" : "text-brand-blue/80"}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href={publicAsset(resumeHref)}
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
