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
      className="h-14 w-14 overflow-hidden rounded-full shadow-lift transition-transform duration-200 hover:-translate-y-0.5"
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </button>
  )
}
