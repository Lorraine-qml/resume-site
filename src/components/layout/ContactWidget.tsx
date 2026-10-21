import { useCallback, useState } from "react"
import { publicAsset } from "../../lib/asset"
import { AvatarBubble } from "../ui/AvatarBubble"
import { ContactModal } from "../ui/ContactModal"

export function ContactWidget() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <div className="fixed right-[30px] top-1/2 z-50 -translate-y-1/2">
        <AvatarBubble
          src={publicAsset("/avatar-v2.jpg")}
          onAvatarClick={() => setOpen(true)}
          avatarLabel="找我聊聊"
        />
      </div>
      <ContactModal open={open} onClose={close} />
    </>
  )
}
