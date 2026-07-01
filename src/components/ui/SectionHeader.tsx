import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}
