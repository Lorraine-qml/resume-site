/**
 * Resolve a file under /public for production.
 * Keeps root-absolute URLs (correct for EdgeOne domain root & 二级域名).
 * If Vite `base` is a subpath (e.g. /resume/), prefixes it automatically.
 */
export function publicAsset(path: string): string {
  if (!path) return path
  if (/^(https?:|data:|blob:|tel:|mailto:|#)/i.test(path)) return path

  const base = import.meta.env.BASE_URL || "/"
  const clean = path.replace(/^\//, "")

  if (base === "./" || base === ".") {
    return `/${clean}`
  }

  const prefix = base.endsWith("/") ? base : `${base}/`
  return `${prefix}${clean}`
}
