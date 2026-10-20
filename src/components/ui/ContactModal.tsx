import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy, X } from "lucide-react"
import { contacts, ownerName, wechatProfile } from "../../data/content"

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

interface CopyField {
  id: string
  label: string
  value: string
}

const phone = contacts.find((item) => item.label === "电话")
const email = contacts.find((item) => item.label === "邮箱")

const copyFields: CopyField[] = [
  { id: "mobile", label: "Mobile", value: phone?.value ?? "" },
  { id: "email", label: "Email", value: email?.value ?? "" },
  { id: "wechat", label: "WeChat", value: wechatProfile.wechatId },
]

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
      setCopied(null)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(null), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyValue = async (id: string, value: string) => {
    const markCopied = () => setCopied(id)
    try {
      await navigator.clipboard.writeText(value)
      markCopied()
      return
    } catch {
      const field = document.createElement("textarea")
      field.value = value
      field.setAttribute("readonly", "")
      field.className = "fixed left-[-9999px]"
      document.body.appendChild(field)
      field.select()
      const ok = document.execCommand("copy")
      field.remove()
      if (ok) markCopied()
    }
  }

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="关闭联系卡片"
            className="absolute inset-0 bg-black/45"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative z-10 w-full max-w-[25rem] rounded-2xl bg-white px-6 py-6 shadow-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[11px] tracking-[0.18em] text-muted">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                Contact
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="关闭"
                className="rounded-full p-1 text-muted transition-colors hover:text-brand-blue"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h2 id="contact-modal-title" className="mt-5 text-xl font-bold tracking-tight text-brand-blue">
              {ownerName}
              <span className="ml-2 font-medium">{wechatProfile.name}</span>
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">懂技术、通售前、精交付的复合型 PM</p>

            <ul className="mt-6 space-y-4">
              {copyFields.map((item) => {
                const done = copied === item.id
                return (
                  <li key={item.id}>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-brand-gold">{item.label}</span>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="font-mono text-sm tracking-wide text-ink">{item.value}</span>
                      <button
                        type="button"
                        onClick={() => copyValue(item.id, item.value)}
                        aria-label={done ? `已复制${item.label}` : `复制${item.label}`}
                        className="text-muted transition-colors hover:text-brand-gold"
                      >
                        {done ? <Check className="h-3.5 w-3.5 text-brand-gold" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex items-start gap-4">
              <p className="min-w-0 flex-1 border-t border-line pt-4 text-[10px] leading-relaxed text-muted">
                初步了解已加载。如有意向，扫码发起【深度需求对齐】
              </p>
              <div className="flex w-[6.75rem] shrink-0 flex-col items-center">
                <div className="rounded-lg border border-brand-gold/40 bg-gradient-to-br from-brand-gold/20 to-white p-1">
                  <div className="h-24 w-24 overflow-hidden rounded-md bg-white">
                    <img
                      src={wechatProfile.qr}
                      alt="微信二维码"
                      className="w-[132%] max-w-none -translate-x-[12%] -translate-y-[24%]"
                    />
                  </div>
                </div>
                <p className="mt-1.5 text-center text-[10px] tracking-[0.14em] text-muted">WeChat Scan</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
