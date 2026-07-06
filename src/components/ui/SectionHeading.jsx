import Reveal from './Reveal'

// Eyebrow + display headline + optional subcopy. Defaults to dark text on light
// backgrounds; pass `dark` for use on navy sections.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}) {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  const titleColor = dark ? 'text-white' : 'text-navy-900'
  const subColor = dark ? 'text-white/70' : 'text-muted'

  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignClasses}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-brand" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.7rem] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subColor}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
