interface AvatarBubbleProps {
  src: string
  onAvatarClick?: () => void
  avatarLabel?: string
}

export function AvatarBubble({
  src,
  onAvatarClick,
  avatarLabel = "打开联系方式",
}: AvatarBubbleProps) {
  return (
    <button
      type="button"
      onClick={onAvatarClick}
      aria-label={avatarLabel}
      className="group relative flex h-14 w-14 items-center justify-center"
    >
      {/* Soft ripple rings — paused when user prefers reduced motion */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-brand-gold/50 motion-safe:animate-ripple"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-brand-gold/35 motion-safe:animate-ripple motion-safe:[animation-delay:900ms]"
      />

      {/* Breathing ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-0.5 rounded-full bg-brand-gold/15 motion-safe:animate-pulse"
      />

      <span className="relative h-14 w-14 overflow-hidden rounded-full shadow-lift ring-2 ring-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:ring-brand-gold/60">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </span>
    </button>
  )
}
