import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { contacts, resumeFileName, resumeHref, wechatProfile } from "../../data/content"

const contactIcons = {
  电话: Phone,
  邮箱: Mail,
}

export function ContactWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-label="联系方式"
            className="fixed top-1/2 right-[30px] z-50 max-h-[calc(100dvh-48px)] w-[340px] max-w-[calc(100vw-60px)] overflow-y-auto rounded-[20px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: "calc(-50% + 10px)" }}
            animate={{ opacity: 1, y: "-50%" }}
            exit={{ opacity: 0, y: "calc(-50% + 10px)" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm tracking-[2px] text-brand-blue/40">联系我</p>
            <ul className="space-y-3.5">
              {contacts.map((item) => {
                const Icon = contactIcons[item.label as keyof typeof contactIcons]
                return (
                  <li key={item.label}>
                    <a href={item.href} className="flex items-center gap-3">
                      {Icon ? <Icon className="h-4 w-4 shrink-0 text-brand-blue/35" strokeWidth={1.75} /> : null}
                      <span>
                        <span className="block text-xs text-brand-blue/40">{item.label}</span>
                        <span className="mt-0.5 block text-lg font-semibold text-ink">{item.value}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="mx-auto mt-5 h-40 w-40 overflow-hidden rounded-2xl">
              <img
                src={wechatProfile.qr}
                alt="微信二维码"
                className="w-[138%] max-w-none -translate-x-[14%] -translate-y-[26%]"
              />
            </div>
            <p className="mt-2 text-center text-xs text-brand-blue/40">微信扫码</p>
            <a
              href={resumeHref}
              download={resumeFileName}
              className="mt-5 flex h-12 items-center justify-center rounded-lg bg-brand-blue text-sm text-white transition-opacity hover:opacity-90"
            >
              下载简历
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "关闭联系方式" : "打开联系方式"}
        className="group fixed bottom-[30px] right-[30px] z-50 h-14 w-14 overflow-hidden rounded-full shadow-lift transition-transform duration-300 ease-out hover:scale-105"
      >
        <img src="/avatar-v2.jpg" alt="" className="h-full w-full object-cover" />
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-brand-blue px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          联系我
        </span>
      </button>
    </>
  )
}
