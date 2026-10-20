import { Button } from "../ui/Button"
import { contacts, footerHeadline, footerProof, resumeFileName, resumeHref } from "../../data/content"

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-blue text-white">
      <div className="mx-auto flex w-full flex-col gap-5 px-6 pb-5 pt-8 md:gap-6 md:pb-6 md:pt-10 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            {footerHeadline}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{footerProof}</p>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            {contacts.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-brand-gold">
                  <span className="text-white/50">{item.label}</span>
                  <span className="ml-2">{item.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <Button variant="gold" href={resumeHref} download={resumeFileName}>
            下载完整 PDF
          </Button>
        </div>
      </div>
    </footer>
  )
}
