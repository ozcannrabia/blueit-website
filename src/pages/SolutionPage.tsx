import { useLang } from '../i18n/LangContext'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, GitBranch, FlaskConical, FileBarChart,
  ShieldCheck, Scale, Leaf, Map, FileText, Lightbulb, ClipboardList,
  ShieldAlert, TrendingUp, CheckCircle
} from 'lucide-react'
import { getFeatures, getSolutionMenu } from '../constants/data'
import { Button } from '../components/ui/Button'
import type { Feature } from '../types'

const ICON_MAP: Record<string, React.ElementType> = {
  GitBranch, FlaskConical, FileBarChart, ShieldCheck, Scale, Leaf,
  Map, FileText, Lightbulb, ClipboardList, ShieldAlert, TrendingUp, CheckCircle,
}

const BADGE_STYLE: Record<string, string> = {
  'flow-mapping':        'bg-sky-500/10 text-sky-400 border-sky-500/25',
  'quality-platform':    'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
  'footprint-reporting': 'bg-teal-500/10 text-teal-400 border-teal-500/25',
  'risk-analysis':       'bg-blue-500/10 text-blue-400 border-blue-500/25',
  'carbon-footprint':    'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
}

function HeroMockup({ feature }: { feature: Feature }) {
  const Icon = ICON_MAP[feature.icon] ?? Leaf
  return (
    <div className="relative rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(6,182,212,0.08))' }}>
      {feature.image ? (
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-auto rounded-2xl"
          style={{ maxHeight: '440px', objectFit: 'contain' }}
        />
      ) : (
        <div className="h-72 flex flex-col items-center justify-center text-center p-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 border border-sky-400/30"
            style={{ background: 'rgba(14,165,233,0.15)', backdropFilter: 'blur(8px)' }}>
            <Icon className="w-10 h-10 text-sky-300" />
          </div>
          {feature.badge && (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${BADGE_STYLE[feature.id] ?? ''}`}>
              {feature.badge}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export function SolutionPage() {
  const { T } = useLang()
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const FEATURES = getFeatures(T)
  const SOLUTION_MENU = getSolutionMenu(T)

  const menuItem = SOLUTION_MENU.find(s => s.slug === slug)
  const feature: Feature | undefined = FEATURES.find(f => f.id === menuItem?.id)

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#020B18' }}>
        <p className="text-sky-200/60 text-lg mb-6">{T('sol_back')}</p>
        <Button variant="primary" onClick={() => navigate('/')}>{T('sol_back')}</Button>
      </div>
    )
  }

  const Icon = ICON_MAP[feature.icon] ?? Leaf
  const currentIdx = SOLUTION_MENU.findIndex(s => s.slug === slug)
  const prevItem = currentIdx > 0 ? SOLUTION_MENU[currentIdx - 1] : null
  const nextItem = currentIdx < SOLUTION_MENU.length - 1 ? SOLUTION_MENU[currentIdx + 1] : null

  return (
    <div className="min-h-screen" style={{ background: '#020B18' }}>
      {/* Mini navbar */}
      <div className="fixed top-0 inset-x-0 z-50 border-b border-sky-500/10"
        style={{ background: 'rgba(2,11,24,0.9)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sky-300/70 hover:text-white text-sm font-medium transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {T('sol_back')}
          </button>
          <a href="/" className="flex items-center">
            <img src="/blueit-logo.png" alt="Blueit" className="h-8 w-auto" />
          </a>
          <Button variant="primary" size="sm" onClick={() => navigate('/#contact')}>
            {T('sol_demo')}
          </Button>
        </div>
      </div>

      {/* Hero section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-sky-400/25"
                  style={{ background: 'rgba(14,165,233,0.12)' }}>
                  <Icon className="w-6 h-6 text-sky-400" />
                </div>
                {feature.badge && (
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${BADGE_STYLE[feature.id] ?? ''}`}>
                    {feature.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                {menuItem?.label ?? feature.title}
              </h1>

              <p className="text-sky-200/65 text-lg leading-relaxed mb-8">
                {feature.longDescription ?? feature.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary" size="lg"
                  onClick={() => navigate('/#contact')}
                >
                  {T('sol_contact_btn')} <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="secondary" size="lg"
                  onClick={() => navigate('/#solutions')}
                >
                  {T('sol_all_btn')}
                </Button>
              </div>
            </motion.div>

            {/* Right: hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HeroMockup feature={feature} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      {feature.capabilities && feature.capabilities.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-sky-500/08">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">{T('sol_features_eyebrow')}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {T('sol_features_h')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {feature.capabilities.map((cap, i) => {
                const CapIcon = ICON_MAP[cap.icon] ?? Lightbulb
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    className="glass-water water-shimmer rounded-2xl p-6 relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-sky-400/20 flex-shrink-0"
                        style={{ background: 'rgba(14,165,233,0.1)' }}>
                        <CapIcon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{cap.title}</h3>
                        <p className="text-sky-200/50 text-xs leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="glass-water water-shimmer rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ border: '1px solid rgba(14,165,233,0.2)' }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(14,165,233,0.15) 0%, transparent 60%)' }} />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {T('sol_cta_h')}
              </h2>
              <p className="text-sky-200/60 mb-8 max-w-xl mx-auto">
                {T('sol_cta_sub')}
              </p>
              <Button variant="primary" size="lg" onClick={() => navigate('/#contact')}>
                {T('sol_cta_btn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-sky-500/08">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {prevItem ? (
            <button
              onClick={() => navigate(`/cozumler/${prevItem.slug}`)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-sky-500/20 group-hover:border-sky-400/40 transition-colors"
                style={{ background: 'rgba(14,165,233,0.06)' }}>
                <ArrowLeft className="w-4 h-4 text-sky-400 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <div className="text-left">
                <p className="text-sky-400/50 text-xs mb-0.5">{T('sol_prev')}</p>
                <p className="text-sky-200/70 text-sm font-medium line-clamp-1 max-w-48 group-hover:text-white transition-colors">{prevItem.label}</p>
              </div>
            </button>
          ) : <div />}

          {nextItem ? (
            <button
              onClick={() => navigate(`/cozumler/${nextItem.slug}`)}
              className="flex items-center gap-3 group cursor-pointer text-right"
            >
              <div className="text-right">
                <p className="text-sky-400/50 text-xs mb-0.5">{T('sol_next')}</p>
                <p className="text-sky-200/70 text-sm font-medium line-clamp-1 max-w-48 group-hover:text-white transition-colors">{nextItem.label}</p>
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-sky-500/20 group-hover:border-sky-400/40 transition-colors"
                style={{ background: 'rgba(14,165,233,0.06)' }}>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ) : <div />}
        </div>
      </section>
    </div>
  )
}
