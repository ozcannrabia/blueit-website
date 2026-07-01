import { cn } from '../../utils/cn'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-250 cursor-pointer select-none',
        'focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-400 hover:to-cyan-400 active:scale-[0.98] shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35':
            variant === 'primary',
          'bg-white/5 text-sky-200 border border-sky-500/20 hover:bg-white/10 hover:border-sky-400/30 active:scale-[0.98] backdrop-blur-sm':
            variant === 'secondary',
          'text-sky-300 hover:text-white hover:bg-white/5 active:scale-[0.98]':
            variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
