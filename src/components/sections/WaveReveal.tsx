import { motion } from 'framer-motion'
import { Droplets, TrendingDown, Gauge } from 'lucide-react'
import { useLang } from '../../i18n/LangContext'

export function WaveReveal() {
  const { T } = useLang()
  return (
    <section className="relative" aria-label="Wave Reveal">
      <div className="relative pt-24 pb-32 lg:pt-28 lg:pb-40" style={{ background: '#F4FAFC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-sky-600 text-sm font-semibold tracking-widest uppercase mb-5">
            {T('wave_eyebrow')}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] pb-1" style={{ color: '#0B2540' }}>
            {T('wave_h2')}
          </motion.h2>
        </div>
      </div>

      <div className="relative -mt-20 sm:-mt-24" style={{ background: '#020B18' }}>
        <svg viewBox="0 0 1440 120" className="absolute -top-px left-0 w-full h-16 sm:h-24" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440,0 L0,0 Z" fill="#F4FAFC" />
        </svg>
        <div className="relative pt-28 sm:pt-36 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                  {T('wave_h3').split('görünür')[0]}<span className="text-gradient-water">görünür</span>{T('wave_h3').includes('görünür') ? ' kılıyoruz.' : ''}
                </h3>
                <p className="text-sky-200/65 text-lg leading-relaxed">{T('wave_body')}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}
                className="flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full flex items-center justify-center"
                  style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(6,214,160,0.08) 60%, transparent 100%)' }}>
                  <div className="absolute inset-0 rounded-full border border-sky-400/20 animate-[pulse-ring_3s_ease-out_infinite]" />
                  <div className="text-center">
                    <div className="text-5xl font-black text-gradient-water mb-1">%60</div>
                    <div className="text-sky-200/60 text-sm font-medium px-4">{T('wave_pct')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {([
                { Icon: TrendingDown, val: T('wave_s1_val'), lbl: T('wave_s1_lbl') },
                { Icon: Gauge,        val: T('wave_s2_val'), lbl: T('wave_s2_lbl') },
                { Icon: Droplets,     val: T('wave_s3_val'), lbl: T('wave_s3_lbl') },
              ] as const).map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  className="glass-water water-shimmer rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-sky-400/20 flex-shrink-0" style={{ background: 'rgba(14,165,233,0.1)' }}>
                    <h.Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{h.val}</div>
                    <div className="text-sky-300/50 text-sm">{h.lbl}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
