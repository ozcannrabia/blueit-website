import { useLang } from '../../i18n/LangContext'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Factory, Droplet } from 'lucide-react'

export function WaterCrisis() {
  const { T } = useLang()
  const FACTORS = [
    { icon: Users,    label: T('crisis_f1') },
    { icon: TrendingUp, label: T('crisis_f2') },
    { icon: Factory,  label: T('crisis_f3') },
    { icon: Droplet,  label: T('crisis_f4') },
  ]
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" aria-label={T('crisis_eyebrow')}>
      {/* Drought video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        poster="/video/drought-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/drought.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(2,11,24,0.92) 0%, rgba(2,11,24,0.65) 55%, rgba(2,11,24,0.35) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(2,11,24,0.9) 0%, transparent 30%, transparent 80%, rgba(2,11,24,0.6) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            {T('crisis_eyebrow')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.6)' }}
          >
            {T('crisis_h2a')}
            <br />
            <span className="text-gradient-water">{T('crisis_h2b')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            className="text-sky-100/75 text-lg leading-relaxed mb-10"
            style={{ textShadow: '0 1px 20px rgba(0,0,0,0.5)' }}
          >
            {T('crisis_body')}
          </motion.p>

          {/* Contributing factors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {FACTORS.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center text-center gap-2 px-3 py-4 rounded-xl border border-sky-400/15"
                style={{ background: 'rgba(14,165,233,0.06)', backdropFilter: 'blur(8px)' }}
              >
                <f.icon className="w-5 h-5 text-sky-400" />
                <span className="text-sky-200/70 text-xs font-medium leading-tight">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
