import { useLang } from '../../i18n/LangContext'
import { motion } from 'framer-motion'
import { GitBranch, FlaskConical, FileBarChart, ShieldCheck, Scale, Leaf, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getFeatures, getSolutionMenu } from '../../constants/data'

const ICON_MAP: Record<string, React.ElementType> = { GitBranch, FlaskConical, FileBarChart, ShieldCheck, Scale, Leaf }

const BADGE_COLOR: Record<string, string> = {
  'flow-mapping':        'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'quality-platform':    'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'footprint-reporting': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'risk-analysis':       'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'carbon-footprint':    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

export function Features() {
  const { T } = useLang()
  const navigate = useNavigate()
  const FEATURES = getFeatures(T)
  const SOLUTION_MENU = getSolutionMenu(T)

  const goToSolution = (featureId: string) => {
    const menu = SOLUTION_MENU.find(s => s.id === featureId)
    if (menu) navigate(`/cozumler/${menu.slug}`)
  }

  return (
    <section id="solutions" className="py-24 lg:py-32 relative" aria-label={T('solutions_eyebrow')}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('solutions_eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {T('solutions_h2a')} <span className="text-gradient-water">{T('solutions_h2b')}</span>
          </h2>
          <p className="text-sky-200/60 text-lg max-w-2xl mx-auto">
            {T('solutions_sub')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = ICON_MAP[f.icon]
            return (
              <motion.button
                key={f.id}
                type="button"
                onClick={() => goToSolution(f.id)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="glass-water glass-water-hover water-shimmer rounded-2xl overflow-hidden relative group text-left cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent z-10" />

                {f.image && (
                  <div className="relative h-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)' }}>
                    <img
                      src={f.image}
                      alt={f.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(2,11,24,0.85) 100%)' }} />
                  </div>
                )}

                <div className="p-6">
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }} aria-hidden="true" />

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-400/20 group-hover:border-sky-400/40 transition-colors"
                      style={{ background: 'rgba(14,165,233,0.1)' }}>
                      {Icon && <Icon className="w-5 h-5 text-sky-400" />}
                    </div>
                    {f.badge && (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${BADGE_COLOR[f.id] ?? 'bg-sky-500/10 text-sky-400 border-sky-500/20'}`}>
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">{f.title}</h3>
                  <p className="text-sky-200/55 text-sm leading-relaxed mb-4">{f.description}</p>

                  <div className="flex items-center gap-1.5 text-sky-400/60 text-xs font-medium group-hover:text-sky-400 transition-colors">
                    {T('solutions_cta')}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
