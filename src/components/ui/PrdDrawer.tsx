import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface PrdDrawerProps {
  open: boolean
  onClose: () => void
  src?: string
}

const outline = [
  "1. 背景与目标",
  "2. 角色与权限模型",
  "3. 组织 / 角色 / 数据三层",
  "4. 状态机：草稿 → 审批 → 生效 → 回收",
  "5. 表单引擎字段与校验",
  "6. 自然语言到工单的闭环",
  "7. 接口与数据字典",
  "8. 验收用例",
]

export function PrdDrawer({ open, onClose, src }: PrdDrawerProps) {
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] bg-brand-blue/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="prd-drawer-title"
            className="absolute inset-y-0 right-0 flex w-4/5 flex-col bg-white shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-blue/10 px-5 py-3">
              <p id="prd-drawer-title" className="text-sm font-medium text-brand-blue">
                禹翼权限引擎 · PRD
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="关闭"
                className="rounded-full p-1.5 text-brand-blue/70 hover:bg-surface hover:text-brand-blue"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto bg-surface">
              {src ? (
                <iframe title="禹翼权限引擎 PRD" src={src} className="h-full w-full border-0" />
              ) : (
                <article className="mx-auto max-w-3xl space-y-4 px-4 py-6 sm:px-8">
                  <section className="rounded-card border border-brand-blue/10 bg-white p-8 shadow-soft">
                    <p className="text-xs tracking-[0.18em] text-brand-gold">PRD · V1</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue">
                      禹翼权限引擎
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-blue/70">
                      组织、角色、数据三层分开配置。状态从草稿走到生效，表单和工单沿同一套规则流转。
                    </p>
                  </section>
                  {outline.map((item) => (
                    <section
                      key={item}
                      className="rounded-card border border-dashed border-brand-blue/15 bg-white p-6"
                    >
                      <h3 className="text-base font-medium text-brand-blue">{item}</h3>
                      <p className="mt-3 text-sm text-brand-blue/45">截图 / 文档占位</p>
                      <div className="mt-4 h-24 rounded-card bg-surface" />
                    </section>
                  ))}
                </article>
              )}
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
