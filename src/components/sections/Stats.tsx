import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'
import { useLang } from '../../i18n/LangContext'
import { getStats } from '../../constants/data'

/* Formats numbers to match the live site display: 1000k, 189898, 2398, 20m */
function formatStat(id: string, n: number): string {
  if (id === 'meters') return `${Math.round(n / 1000)}k`
  if (id === 'saving')  return `${n}m`
  return n.toLocaleString('tr-TR')
}

function StatCard({ id, value, label, description, started, delay = 0 }: {
  id: string; value: number; label: string; description?: string; started: boolean; delay?: number
}) {
  const count = useCounter(value, 2200, started)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-water water-shimmer rounded-2xl p-6 text-center relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="text-4xl md:text-5xl font-black mb-1">
        <span className="text-gradient-water">{formatStat(id, count)}</span>
      </div>
      <div className="text-white font-semibold text-base mb-1">{label}</div>
      {description && <div className="text-sky-300/50 text-sm">{description}</div>}
    </motion.div>
  )
}

export function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { T, lang } = useLang()
  const STATS = getStats(T)
  return (
    <section className="py-20" aria-label={lang === 'tr' ? 'İstatistikler' : 'Statistics'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <StatCard key={s.id} id={s.id} value={s.value} label={s.label} description={s.description} started={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
