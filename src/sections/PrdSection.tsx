import { useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { PrdDrawer } from "../components/ui/PrdDrawer"
import { prdHref } from "../data/content"

const tags = ["复杂权限逻辑", "状态机流转", "B 端表单引擎", "AI 意图闭环"]

export function PrdSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="prd" className="scroll-mt-20 bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.2em] text-brand-blue/45">文档沉淀</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-blue">
            产品需求文档（PRD）体系化输出能力
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-brand-blue/10 bg-surface px-3 py-1 text-xs text-brand-blue/75"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-brand-blue/75">
            熟练掌握需求调研、业务流程图（Visio / ProcessOn）、状态机图、数据字典及接口定义。能独立输出从
            0 到 1 的完整 PRD、开发详细设计及用例分析。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-card border border-brand-blue/10 bg-surface p-5 shadow-soft">
            <div className="rounded-card border border-dashed border-brand-blue/15 bg-white p-6">
              <div className="flex items-center gap-2 text-brand-blue/50">
                <FileText className="h-4 w-4" />
                <p className="text-xs tracking-[0.14em]">目录</p>
              </div>
              <p className="mt-4 text-xl font-semibold text-brand-blue">禹翼权限引擎</p>
              <ol className="mt-4 space-y-2 text-sm text-brand-blue/60">
                <li>1. 角色与三层权限</li>
                <li>2. 状态机流转</li>
                <li>3. 表单引擎与数据字典</li>
                <li>4. AI 意图到工单</li>
              </ol>
              <p className="mt-6 text-center text-xs text-brand-blue/40">截图 / 文档占位</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-4 w-full rounded-card border border-brand-gold bg-white px-4 py-3 text-sm text-brand-blue transition-colors hover:bg-brand-gold hover:text-brand-blue"
            >
              在线预览代表 PRD：禹翼权限引擎
            </button>
          </div>
        </motion.div>
      </div>
      <PrdDrawer open={open} onClose={() => setOpen(false)} src={prdHref || undefined} />
    </section>
  )
}
