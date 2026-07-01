import { cn } from '../../utils/cn'

interface BadgeProps {
  children: string
  variant?: 'blue' | 'cyan' | 'green'
  className?: string
}

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase',
        {
          'bg-blue-500/10 text-blue-400 border border-blue-500/20': variant === 'blue',
          'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20': variant === 'cyan',
          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20': variant === 'green',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
