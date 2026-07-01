import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { useLang } from '../../i18n/LangContext'

export function Hero() {
  const { T } = useLang()
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden" aria-label="Hero">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="/video/water-poster.jpg" aria-hidden="true">
        <source src="/video/water.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(13,77,89,0.55) 0%, rgba(8,99,107,0.45) 45%, rgba(2,40,64,0.55) 100%)' }} aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,11,24,0.15) 0%, transparent 35%, rgba(2,11,24,0.55) 100%)' }} aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start text-left max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.15] tracking-tight mb-6"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.35)', fontFamily: 'var(--font-heading)' }}
          >
            {T('hero_h1a')}<br />
            <span className="text-gradient-water">{T('hero_h1b')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
            style={{ textShadow: '0 1px 16px rgba(0,0,0,0.3)' }}
          >
            {T('hero_sub')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button variant="primary" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {T('hero_cta')} <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
