import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface AiWorkspaceProps {
  className?: string
}

export function AiWorkspace({ className = "" }: AiWorkspaceProps) {
  const [pinned, setPinned] = useState(false)
  const [hovered, setHovered] = useState(false)
  const open = pinned || hovered

  return (
    <div
      className={`w-[14.5rem] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-white/70 bg-line/80 shadow-float backdrop-blur-md"
      >
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "收起 AI 协作台" : "展开 AI 协作台"}
          onClick={() => setPinned((value) => !value)}
          className="flex w-full items-center gap-1.5 px-2.5 py-2 text-left"
        >
          <span aria-hidden="true" className="text-xs leading-none">
            🤖
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-mac-green animate-blink" />
          <span className="min-w-0 truncate text-[11px] tracking-wide text-ink">💬 AI 协作台 (1条新消息)</span>
        </button>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="notice"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-1.5 overflow-hidden px-2.5 pb-2.5"
            >
              <p className="whitespace-nowrap rounded-md bg-white/80 px-1.5 py-0.5 text-[11px] leading-4 text-ink">
                需求解析完毕，原型草稿已生成。
              </p>
              <p className="whitespace-nowrap rounded-md bg-brand-blue px-1.5 py-0.5 text-[11px] leading-4 text-white">
                收到！正在疯狂 Coding。⌨️
              </p>
              <p className="whitespace-nowrap font-mono text-[10px] leading-4 tracking-wide text-muted">
                [■■■■■□] Building...
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
