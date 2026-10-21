import {
  contacts,
  footerHeadline,
  footerIntent,
  footerProof,
  wechatProfile,
} from "../../data/content"
import { publicAsset } from "../../lib/asset"

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-blue text-white">
      <div className="mx-auto w-full px-6 py-6 md:py-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {/* Left · 文案与联系方式 */}
          <div className="min-w-0 max-w-3xl">
            <h2 className="text-xl font-semibold leading-snug tracking-tight md:text-2xl">
              {footerHeadline}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">{footerProof}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-3 text-sm text-white/80">
              {contacts.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-brand-gold">
                    <span className="text-white/50">{item.label}</span>
                    <span className="ml-2">{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right · 意向岗位 + 微信二维码 */}
          <div className="flex shrink-0 flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 lg:gap-14">
            <div className="flex w-fit max-w-full flex-col gap-2.5">
              <p className="text-xs tracking-[0.14em] text-white/50">{footerIntent.title}</p>
              <span className="inline-flex w-full items-center justify-center rounded-full border border-brand-gold bg-brand-gold/15 px-8 py-2 text-base font-semibold tracking-wide text-brand-gold shadow-gold-glow">
                {footerIntent.primary}
              </span>
              <p className="text-xs leading-relaxed whitespace-nowrap text-white/55">
                <span className="text-white/40">{footerIntent.edgeLabel}</span>
                <span className="mx-2 text-white/25">·</span>
                {footerIntent.edges.map((edge, index) => (
                  <span key={edge}>
                    {index > 0 ? <span className="mx-1.5 text-white/25">|</span> : null}
                    <span className="text-white/70">{edge}</span>
                  </span>
                ))}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-float">
                <img
                  src={publicAsset(wechatProfile.qr)}
                  alt="微信二维码"
                  className="h-full w-full rounded-md object-cover object-center"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{footerIntent.qrLead}</p>
                <p className="mt-1 text-xs text-white/60">{footerIntent.qrHint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
