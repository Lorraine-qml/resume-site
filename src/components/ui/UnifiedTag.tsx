type TagTone = "default" | "blue" | "gold" | "success"

interface UnifiedTagProps {
  children: string
  /** Show brand gold dot prefix. Defaults to true for default tone. */
  dot?: boolean
  tone?: TagTone
}

const toneClass: Record<TagTone, string> = {
  default: "border-line bg-surface text-copy",
  blue: "border-line bg-chip text-brand-blue",
  gold: "border-brand-gold/25 bg-brand-gold/10 text-brand-gold",
  success: "border-ok/25 bg-ok/10 text-ok",
}

/** Compact meta tag aligned with Career Path cards: light, secondary, with optional gold accent. */
export function UnifiedTag({ children, dot, tone = "default" }: UnifiedTagProps) {
  const showDot = dot ?? tone === "default"
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-md border px-2.5 py-1 text-xs font-medium ${toneClass[tone]}`}
    >
      {showDot ? <span className="mr-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" /> : null}
      {children}
    </span>
  )
}

interface UnifiedTagListProps {
  tags: string[]
  className?: string
  dot?: boolean
}

export function UnifiedTagList({ tags, className = "", dot = true }: UnifiedTagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {tags.map((tag) => (
        <li key={tag}>
          <UnifiedTag dot={dot}>{tag}</UnifiedTag>
        </li>
      ))}
    </ul>
  )
}
