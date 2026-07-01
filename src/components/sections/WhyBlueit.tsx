import { motion } from 'framer-motion'
import { useLang } from '../../i18n/LangContext'
import type { TKey } from '../../i18n/translations'

const TOPICS: { id: string; titleKey: TKey; image: string; paragraphKeys: TKey[]; reverse: boolean }[] = [
  { id: 'water-carbon', titleKey: 'why_t1_title', image: '/why-blueit/water-carbon-banner.jpg', paragraphKeys: ['why_t1_p1', 'why_t1_p2'], reverse: false },
  { id: 'blue-deal',    titleKey: 'why_t2_title', image: '/why-blueit/blue-deal-network.jpg',   paragraphKeys: ['why_t2_p1', 'why_t2_p2'], reverse: true  },
  { id: 'virtual-water',titleKey: 'why_t3_title', image: '/why-blueit/virtual-water-river.jpg', paragraphKeys: ['why_t3_p1', 'why_t3_p2'], reverse: false },
  { id: 'tech-infra',   titleKey: 'why_t4_title', image: '/why-blueit/tech-infra-globe.jpg',    paragraphKeys: ['why_t4_p1'],              reverse: true  },
  { id: 'regulation',   titleKey: 'why_t5_title', image: '/why-blueit/regulation-coast.jpg',    paragraphKeys: ['why_t5_p1'],              reverse: false },
]

export function WhyBlueit() {
  const { T, lang } = useLang()
  return (
    <section id="why" className="relative" aria-label={T('why_eyebrow')}>
      <div className="py-20 lg:py-28" style={{ background: '#020B18' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('why_eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
              {T('why_h2a')} <span className="text-gradient-water">{T('why_h2b')}</span>
            </h2>
          </motion.div>

          {/* Intro + SDG grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                {T('why_sdg_h')}
              </h3>
              <p className="text-sky-200/65 text-base leading-relaxed mb-4">
                {T('why_sdg_p1')}
              </p>
              <p className="text-sky-200/50 text-sm leading-relaxed">
                {T('why_sdg_p2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-sky-400/15"
            >
              <img
                src="/why-blueit/sdg-grid.jpg"
                alt={lang === 'tr' ? 'BM Sürdürülebilir Kalkınma Hedefleri' : 'UN Sustainable Development Goals'}
                loading="lazy"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Topic blocks — alternating image/text */}
          <div className="flex flex-col gap-20 lg:gap-24">
            {TOPICS.map((topic) => (
              <div
                key={topic.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${topic.reverse ? 'lg:[direction:rtl]' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: topic.reverse ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border border-sky-400/15 relative water-shimmer"
                  style={{ direction: 'ltr' }}
                >
                  <img
                    src={topic.image}
                    alt={T(topic.titleKey)}
                    loading="lazy"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: topic.reverse ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{ direction: 'ltr' }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                    {T(topic.titleKey)}
                  </h3>
                  {topic.paragraphKeys.map((pKey, i) => (
                    <p
                      key={pKey}
                      className={`leading-relaxed mb-4 last:mb-0 ${i === 0 ? 'text-sky-200/65 text-base' : 'text-sky-200/50 text-sm'}`}
                    >
                      {T(pKey)}
                    </p>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
