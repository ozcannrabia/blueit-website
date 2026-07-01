import { useLang } from '../../i18n/LangContext'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { getIndustries } from '../../constants/data'

export function Industries() {
  const { T } = useLang()
  const INDUSTRIES = getIndustries(T)
  return (
    <section id="industries" className="py-24 lg:py-32" aria-label={T('industries_eyebrow')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('industries_eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {T('industries_h2a')} <span className="text-gradient-water">{T('industries_h2b')}</span>
          </h2>
          <p className="text-sky-200/60 text-lg max-w-2xl mx-auto">
            {T('industries_sub')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group glass-water rounded-2xl overflow-hidden relative water-shimmer"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent z-10" />

              {/* Photo */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(2,11,24,0.95) 0%, rgba(2,11,24,0.2) 60%, transparent 100%)' }}
                />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-bold text-xl">{ind.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sky-200/55 text-sm leading-relaxed mb-4 line-clamp-4">
                  {ind.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-xs font-semibold">{ind.stats}</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400/50 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
