interface SectionHeadingProps {
  kicker: string
  title: string
  description?: string
}

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs tracking-[0.22em] text-brand-blue/45">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-blue md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-brand-blue/70">{description}</p>
      ) : null}
    </div>
  )
}
