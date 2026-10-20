import { useEffect, useState } from "react"

export function navigate(to: string) {
  const url = new URL(to, window.location.origin)
  const next = `${url.pathname}${url.search}${url.hash}`
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (next !== current) window.history.pushState({}, "", next)
  window.dispatchEvent(new PopStateEvent("popstate"))
  if (url.hash) {
    window.requestAnimationFrame(() => {
      document.querySelector(url.hash)?.scrollIntoView()
    })
  } else {
    window.scrollTo(0, 0)
  }
}

export function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const sync = () => setPath(window.location.pathname)
    window.addEventListener("popstate", sync)
    return () => window.removeEventListener("popstate", sync)
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
