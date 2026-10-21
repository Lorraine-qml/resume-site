import { useEffect, useState } from "react"

const HOME_SECTIONS = new Set(["bento", "portfolio", "architecture", "timeline"])

function scrollToDomId(id: string, attempts = 8) {
  const tryScroll = (left: number) => {
    const node = document.getElementById(id)
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    if (left <= 0) return
    window.requestAnimationFrame(() => tryScroll(left - 1))
  }
  window.requestAnimationFrame(() => tryScroll(attempts))
}

/**
 * Read the app path from location.hash (HashRouter-style).
 * `#/works/cockpit` → `/works/cockpit`
 * `#/portfolio` → `/portfolio`
 * `#/` or empty → `/`
 * Legacy `#portfolio` → `/portfolio`
 */
export function getPathname(): string {
  const raw = window.location.hash.replace(/^#/, "").trim()
  if (!raw || raw === "/") return "/"
  const path = (raw.startsWith("/") ? raw : `/${raw}`).split("?")[0] || "/"
  return path.replace(/\/+$/, "") || "/"
}

function toHash(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  if (clean === "/") return "#/"
  return `#${clean}`
}

/**
 * Navigate using hash routes for static hosting (Cloudflare drag-drop, etc.).
 * Accepts `/works/id`, `/portfolio`, `/`, or legacy `/#portfolio`.
 */
export function navigate(to: string) {
  const url = new URL(to, window.location.origin)
  let path = url.pathname || "/"

  // Legacy `/#section` → treat as home section route
  if (url.hash && (path === "/" || path === "")) {
    const section = url.hash.replace(/^#/, "").replace(/^\//, "")
    path = section ? `/${section}` : "/"
  }

  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1)

  const nextHash = toHash(path)
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash
  } else {
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  const first = path.replace(/^\//, "").split("/")[0] || ""
  if (HOME_SECTIONS.has(first)) {
    scrollToDomId(first)
  } else {
    window.scrollTo(0, 0)
  }
}

export function usePathname() {
  const [path, setPath] = useState(() => getPathname())

  useEffect(() => {
    const sync = () => setPath(getPathname())
    window.addEventListener("hashchange", sync)
    window.addEventListener("popstate", sync)
    return () => {
      window.removeEventListener("hashchange", sync)
      window.removeEventListener("popstate", sync)
    }
  }, [])

  return path
}

export function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    window.addEventListener("popstate", sync)
    window.addEventListener("hashchange", sync)
    return () => {
      window.removeEventListener("popstate", sync)
      window.removeEventListener("hashchange", sync)
    }
  }, [])

  return hash
}

export function isHomePath(path: string): boolean {
  if (path === "/") return true
  const first = path.replace(/^\//, "").split("/")[0] || ""
  return HOME_SECTIONS.has(first)
}

export { HOME_SECTIONS }
