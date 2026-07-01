import { motion } from 'framer-motion'
import { INVESTORS } from '../../constants/data'
import { useLang } from '../../i18n/LangContext'

export function SocialProof() {
  const { T } = useLang()
  return (
    <section className="py-12 border-y border-sky-500/08" aria-label={T('investors_title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sky-400/40 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
          {T('investors_title')}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {INVESTORS.map((inv, i) => (
            <motion.span
              key={inv.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="text-sky-200/25 font-bold text-base hover:text-sky-200/60 transition-colors duration-300 cursor-default"
            >
              {inv.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
