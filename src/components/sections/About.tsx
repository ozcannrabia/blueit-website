import { useLang } from '../../i18n/LangContext'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Droplets } from 'lucide-react'

export function About() {
  const { T } = useLang()
  const VALUES = [
    { icon: Target, title: T('about_v1_t'), desc: T('about_v1_d') },
    { icon: Eye,    title: T('about_v2_t'), desc: T('about_v2_d') },
    { icon: Heart,  title: T('about_v3_t'), desc: T('about_v3_d') },
  ]
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" aria-label={T('about_eyebrow')}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(6,214,160,0.05) 0%, transparent 60%)' }}
        aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('about_eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {T('about_h2a')}{' '}
            <span className="text-gradient-water">{T('about_h2b')}</span>
          </h2>
          <p className="text-sky-200/60 text-lg max-w-2xl mx-auto">
            {T('about_sub')}
          </p>
        </motion.div>

        {/* Globe visual + mission text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Animated globe placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Outer rings */}
            {[1, 2, 3].map((n) => (
              <div key={n} className="absolute rounded-full border border-sky-400/10"
                style={{
                  width:  `${n * 120 + 160}px`,
                  height: `${n * 120 + 160}px`,
                  animation: `pulse-ring ${3 + n}s ease-out infinite`,
                  animationDelay: `${n * 0.5}s`,
                }} aria-hidden="true" />
            ))}

            {/* Center globe card */}
            <div className="relative w-64 h-64 rounded-full flex items-center justify-center glass-water border border-sky-400/20"
              style={{ background: 'radial-gradient(circle at 35% 35%, rgba(14,165,233,0.25) 0%, rgba(6,214,160,0.1) 50%, rgba(2,11,24,0.8) 100%)' }}>
              <div className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3), rgba(6,214,160,0.15))' }}>
                <Droplets className="w-16 h-16 text-sky-300/80" />
              </div>

              {/* Orbit dot */}
              <div className="absolute inset-0 rounded-full"
                style={{ animation: 'spin 8s linear infinite' }} aria-hidden="true">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400/60 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
              </div>
            </div>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </motion.div>

          {/* Mission text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{T('about_mission_h')}</h3>
            <p className="text-sky-200/70 text-lg leading-relaxed mb-6">
              {T('about_mission_p')}
            </p>
            <p className="text-sky-200/50 text-base leading-relaxed mb-8">
              {T('about_mission_body')}
            </p>

            {/* SDG badges */}
            <div className="flex flex-wrap gap-2">
              {[T('why_sdg_badge1'), T('why_sdg_badge2'), T('why_sdg_badge3')].map(sdg => (
                <span key={sdg}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-500/20 text-emerald-400"
                  style={{ background: 'rgba(6,214,160,0.08)' }}>
                  {sdg}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision + Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-water glass-water-hover water-shimmer rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-400/20 mb-4"
                style={{ background: 'rgba(14,165,233,0.1)' }}>
                <v.icon className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{v.title}</h3>
              <p className="text-sky-200/55 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team / Join us teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 glass-water rounded-2xl p-8 relative overflow-hidden water-shimmer"
          style={{ border: '1px solid rgba(6,214,160,0.15)' }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">{T('about_join_h')}</h3>
              <p className="text-sky-200/55 text-sm max-w-lg">
                {T('about_join_p')}
              </p>
            </div>
            <a href="mailto:info@blueitfuture.com"
              className="flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-sm text-emerald-300 border border-emerald-500/25 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all duration-200 whitespace-nowrap"
              style={{ background: 'rgba(6,214,160,0.06)' }}>
              {T('about_join_btn')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
