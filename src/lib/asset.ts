/**
 * Resolve a file under /public for production.
 * Keeps root-absolute URLs (correct for EdgeOne domain root & 二级域名).
 * If Vite `base` is a subpath (e.g. /resume/), prefixes it automatically.
 * Idempotent: already-prefixed paths are returned as-is.
 */
export function publicAsset(path: string): string {
  if (!path) return path
  if (/^(https?:|data:|blob:|tel:|mailto:|#)/i.test(path)) return path

  const base = import.meta.env.BASE_URL || "/"
  const prefix = base.endsWith("/") ? base : `${base}/`

  // Avoid double-prefix when callers already resolved via publicAsset()
  if (prefix !== "/" && (path === prefix.slice(0, -1) || path.startsWith(prefix))) {
    return path
  }

  const clean = path.replace(/^\//, "")

  if (base === "./" || base === ".") {
    return `/${clean}`
  }

  return `${prefix}${clean}`
}
