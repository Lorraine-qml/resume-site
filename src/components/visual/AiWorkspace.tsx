import { motion } from "framer-motion"
import { Bot, Code2 } from "lucide-react"

interface AiWorkspaceProps {
  className?: string
}

export function AiWorkspace({ className = "" }: AiWorkspaceProps) {
  return (
    <div className={`flex w-[11.5rem] flex-col gap-2 ${className}`} aria-label="AI 写作协作对话">
      <motion.div
        initial={{ opacity: 0, y: 6, x: -4 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
        className="mr-4 self-start rounded-xl bg-white/80 px-2.5 py-1.5 text-[12px] leading-snug text-ink shadow-bubble backdrop-blur-md"
      >
        <span className="inline-flex items-center gap-1">
          <Bot className="h-3 w-3 shrink-0 text-brand-gold" strokeWidth={1.75} />
          原型及 PRD 已生成
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6, x: 4 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.45, delay: 0.55, ease: "easeOut" }}
        className="ml-4 self-end rounded-xl bg-white/80 px-2.5 py-1.5 text-[12px] leading-snug text-brand-blue shadow-bubble backdrop-blur-md"
      >
        <span className="inline-flex items-center gap-1">
          <Code2 className="h-3 w-3 shrink-0 text-brand-gold" strokeWidth={1.75} />
          收到，Coding 中...
        </span>
      </motion.div>
    </div>
  )
}
