import { useLang } from '../../i18n/LangContext'
import { motion } from 'framer-motion'
import { ArrowRight, Droplets } from 'lucide-react'
import { Button } from '../ui/Button'

export function CTA() {
  const { T } = useLang()
  return (
    <section className="py-16 lg:py-24" aria-label={T('cta_eyebrow')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass-water water-shimmer text-center px-8 py-16 md:py-20"
          style={{ border: '1px solid rgba(14,165,233,0.2)' }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(14,165,233,0.18) 0%, transparent 60%)' }}
            aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)' }}>
                <Droplets className="w-7 h-7 text-sky-400" />
              </div>
            </div>
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('cta_eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto leading-tight">
              {T('cta_h2a')}{' '}
              <span className="text-gradient-water">{T('cta_h2b')}</span>
            </h2>
            <p className="text-sky-200/60 text-lg mb-10 max-w-xl mx-auto">
              {T('cta_sub')}
            </p>
            <Button size="lg" variant="primary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {T('cta_btn')} <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
