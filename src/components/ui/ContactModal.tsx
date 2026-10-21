import { useEffect, useState, type ReactNode } from "react"
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

function QrScannerFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-brand-gold/25 bg-brand-blue/5 p-4 backdrop-blur-sm motion-safe:animate-frame-glow">
      {/* Scanner corner brackets — breathing pulse, staggered */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-brand-gold motion-safe:animate-corner-pulse"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-brand-gold motion-safe:animate-corner-pulse motion-safe:[animation-delay:350ms]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-brand-gold motion-safe:animate-corner-pulse motion-safe:[animation-delay:700ms]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-brand-gold motion-safe:animate-corner-pulse motion-safe:[animation-delay:1050ms]"
      />

      {/* Horizontal scan beam */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-[12%] h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent motion-safe:animate-scan-line"
      />

      {children}
    </div>
  )
}

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
            className="relative z-10 w-full max-w-[36rem] rounded-2xl bg-white px-6 py-6 shadow-modal sm:px-7 sm:py-7"
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

            <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-6">
              {/* Left · 60% — contact details */}
              <div className="min-w-0 sm:w-[60%] sm:pr-2">
                <h2 id="contact-modal-title" className="text-xl font-bold tracking-tight text-brand-blue">
                  {ownerName}
                  <span className="ml-2 font-medium">{wechatProfile.name}</span>
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">懂技术、通售前、精交付的复合型 PM</p>

                <ul className="mt-7 space-y-5">
                  {copyFields.map((item) => {
                    const done = copied === item.id
                    return (
                      <li key={item.id}>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-brand-gold">
                          {item.label}
                        </span>
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <span className="font-mono text-sm tracking-wide text-ink">{item.value}</span>
                          <button
                            type="button"
                            onClick={() => copyValue(item.id, item.value)}
                            aria-label={done ? `已复制${item.label}` : `复制${item.label}`}
                            className="text-muted transition-colors hover:text-brand-gold"
                          >
                            {done ? (
                              <Check className="h-3.5 w-3.5 text-brand-gold" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Right · 40% — deep-link / QR zone */}
              <div className="flex min-w-0 flex-col items-center justify-center sm:w-[40%]">
                <QrScannerFrame>
                  <div className="mx-auto h-[7.25rem] w-[7.25rem] overflow-hidden rounded-md bg-white">
                    <img
                      src={wechatProfile.qr}
                      alt="微信二维码"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </QrScannerFrame>
                <p className="mt-3 text-center text-[11px] leading-relaxed tracking-wide text-brand-blue">
                  扫码进一步了解我，
                  <br />
                  期待与您深入交流。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
