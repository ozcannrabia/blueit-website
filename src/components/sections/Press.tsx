import { useLang } from '../../i18n/LangContext'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink, Calendar, ChevronLeft, ChevronRight,
  Radio, Tv, TrendingUp, Banknote, Globe, Recycle, Trophy, FileSearch, HeartPulse, Sparkles,
} from 'lucide-react'
import { getPressItems } from '../../constants/data'

const ICON_MAP: Record<string, React.ElementType> = {
  Radio, Tv, TrendingUp, Banknote, Globe, Recycle, Trophy, FileSearch, HeartPulse, Sparkles,
}

const PAGE_SIZE = 6
const FEATURED_COUNT = 3
const AUTOPLAY_MS = 5000

export function Press() {
  const { T } = useLang()
  const PRESS_ITEMS = getPressItems(T)
  /* ── Featured carousel (top 3 items, auto-rotating) ── */
  const featured = PRESS_ITEMS.slice(0, FEATURED_COUNT)
  const [slide, setSlide] = useState(0)

  const next = useCallback(() => setSlide(s => (s + 1) % featured.length), [featured.length])
  const prev = useCallback(() => setSlide(s => (s - 1 + featured.length) % featured.length), [featured.length])

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [next])

  /* ── Paginated grid (all items) ── */
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(PRESS_ITEMS.length / PAGE_SIZE)
  const pageItems = PRESS_ITEMS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const goToPage = (p: number) => {
    setPage(p)
    document.querySelector('#press-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const featuredItem = featured[slide]
  const FeaturedIcon = ICON_MAP[featuredItem.icon] ?? Sparkles

  return (
    <section id="press" className="py-24 lg:py-32" aria-label={T('press_h2')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('press_eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-gradient-water">{T('press_h2')}</span>
          </h2>
        </motion.div>

        {/* ── Featured auto-rotating carousel ── */}
        <div id="press-grid-top" className="relative mb-16">
          <div className="glass-water water-shimmer rounded-2xl overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={featuredItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Visual side */}
                <div
                  className="relative h-56 md:h-auto flex items-center justify-center overflow-hidden"
                  style={{ background: featuredItem.gradient }}
                >
                  {featuredItem.image ? (
                    <img
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <FeaturedIcon className="w-24 h-24 text-white/90" strokeWidth={1.25} />
                  )}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(2,11,24,0.25) 100%)' }} />
                </div>

                {/* Text side */}
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center w-fit px-2.5 py-0.5 rounded-full text-xs font-medium border border-sky-400/20 text-sky-400 mb-3"
                    style={{ background: 'rgba(14,165,233,0.08)' }}>
                    {featuredItem.source}
                  </span>
                  <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-3">
                    {featuredItem.title}
                  </h3>
                  <p className="text-sky-200/55 text-sm leading-relaxed mb-5 line-clamp-3">
                    {featuredItem.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sky-400/50 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredItem.date}
                    </div>
                    <span className="flex items-center gap-1 text-sky-400 text-sm font-medium cursor-pointer hover:text-sky-300 transition-colors">
                      {T('press_read')} <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sky-400/60 hover:text-sky-300 border border-sky-500/15 hover:border-sky-400/30 transition-colors cursor-pointer"
              aria-label={T('press_prev')}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {featured.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === slide ? 'w-6 bg-sky-400' : 'w-1.5 bg-sky-500/25 hover:bg-sky-500/40'}`}
                  aria-label={`Slayt ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sky-400/60 hover:text-sky-300 border border-sky-500/15 hover:border-sky-400/30 transition-colors cursor-pointer"
              aria-label={T('press_next')}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── All press grid (paginated) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {pageItems.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? Sparkles
              return (
                <article
                  key={item.id}
                  className="glass-water glass-water-hover rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                  <div className="relative h-32 flex items-center justify-center overflow-hidden" style={{ background: item.gradient }}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Icon className="w-10 h-10 text-white/85" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-sky-400/20 text-sky-400 mb-2.5"
                      style={{ background: 'rgba(14,165,233,0.06)' }}>
                      {item.source}
                    </span>
                    <h3 className="text-white font-semibold text-sm leading-snug mb-2.5 group-hover:text-sky-200 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sky-200/45 text-xs leading-relaxed mb-3 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-sky-400/45 text-xs">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400/40 group-hover:text-sky-400 transition-colors" />
                    </div>
                  </div>
                </article>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {page > 1 && (
              <button
                onClick={() => goToPage(page - 1)}
                className="text-sky-400/60 hover:text-sky-300 text-sm font-medium px-3 py-1.5 transition-colors cursor-pointer"
              >
                {T('press_prev')}
              </button>
            )}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    p === page
                      ? 'text-white border border-sky-400/40'
                      : 'text-sky-400/50 hover:text-sky-300 border border-transparent hover:border-sky-500/20'
                  }`}
                  style={p === page ? { background: 'rgba(14,165,233,0.15)' } : {}}
                >
                  {p}
                </button>
              ))}
            </div>
            {page < totalPages && (
              <button
                onClick={() => goToPage(page + 1)}
                className="text-sky-400/60 hover:text-sky-300 text-sm font-medium px-3 py-1.5 transition-colors cursor-pointer"
              >
                {T('press_next')}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
