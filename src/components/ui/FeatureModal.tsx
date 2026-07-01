import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Map, FileText, Lightbulb, ClipboardList, ShieldAlert, TrendingUp,
  FlaskConical, ArrowRight,
} from 'lucide-react'
import { Button } from './Button'
import { useLang } from '../../i18n/LangContext'
import type { Feature } from '../../types'

const CAP_ICON_MAP: Record<string, React.ElementType> = {
  Map, FileText, Lightbulb, ClipboardList, ShieldAlert, TrendingUp, FlaskConical,
}

interface FeatureModalProps {
  feature: Feature | null
  onClose: () => void
}

export function FeatureModal({ feature, onClose }: FeatureModalProps) {
  const { T } = useLang()
  useEffect(() => {
    if (!feature) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [feature, onClose])

  return (
    <AnimatePresence>
      {feature && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="feature-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(2,8,18,0.75)', backdropFilter: 'blur(6px)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl glass-water"
            style={{ background: 'rgba(6,16,32,0.97)', border: '1px solid rgba(56,189,248,0.18)' }}
          >
            {/* Header banner */}
            <div
              className="relative px-6 sm:px-8 pt-8 pb-8 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.18), rgba(6,182,212,0.10))' }}
            >
              {feature.image && (
                <img
                  src={feature.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
              )}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,16,32,0.4) 0%, rgba(6,16,32,0.92) 100%)' }} aria-hidden="true" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sky-300/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
                aria-label={T('sol_back')}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative">
                {feature.badge && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border border-sky-400/30 text-sky-300 mb-4"
                    style={{ background: 'rgba(14,165,233,0.12)' }}>
                    {feature.badge}
                  </span>
                )}
                <h2 id="feature-modal-title" className="text-2xl sm:text-3xl font-bold text-white leading-tight pr-10">
                  {feature.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-8">
              <p className="text-sky-200/65 text-base leading-relaxed mb-8">
                {feature.longDescription ?? feature.description}
              </p>

              {feature.capabilities && feature.capabilities.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {feature.capabilities.map((cap) => {
                    const CapIcon = CAP_ICON_MAP[cap.icon] ?? Lightbulb
                    return (
                      <div key={cap.title} className="flex gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center border border-sky-400/20 flex-shrink-0"
                          style={{ background: 'rgba(14,165,233,0.1)' }}
                        >
                          <CapIcon className="w-4 h-4 text-sky-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">{cap.title}</h4>
                          <p className="text-sky-200/50 text-xs leading-relaxed">{cap.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="pt-6 border-t border-sky-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sky-300/50 text-sm">{T('sol_cta_h')}</p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose()
                    setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
                  }}
                >
                  {T('sol_contact_btn')} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
