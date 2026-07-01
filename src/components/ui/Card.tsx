import { cn } from '../../utils/cn'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6',
        hover &&
          'transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]',
        glow && 'glow-blue',
        className
      )}
    >
      {children}
    </div>
  )
}
