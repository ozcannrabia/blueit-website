import { useLang } from '../../i18n/LangContext'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'
import { getBlogPosts, type BlogCategoryKey } from '../../constants/data'

type CategoryFilter = 'all' | BlogCategoryKey

const CATEGORY_COLOR: Record<BlogCategoryKey, string> = {
  wu_cat_su:    'border-sky-400/25 text-sky-300',
  wu_cat_iklim: 'border-emerald-400/25 text-emerald-300',
  wu_cat_iyi:   'border-amber-400/25 text-amber-300',
}

export function WaterUniverse() {
  const { T, lang } = useLang()
  const [filter, setFilter] = useState<CategoryFilter>('all')
  const BLOG_POSTS = getBlogPosts(T)
  const CATEGORIES: CategoryFilter[] = ['all', 'wu_cat_su', 'wu_cat_iklim', 'wu_cat_iyi']

  const filtered = useMemo(
    () => filter === 'all' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.categoryKey === filter),
    [filter, BLOG_POSTS]
  )

  return (
    <section id="water-universe" className="relative" aria-label={T('wu_title')}>
      {/* Hero banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src="/water-universe/underwater.jpg"
          alt={T('wu_title')}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(2,11,24,0.45) 0%, rgba(2,11,24,0.75) 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(120deg, rgba(13,77,89,0.35) 0%, rgba(2,40,64,0.45) 100%)' }}
        />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-200 mb-4 border border-sky-400/25"
              style={{ background: 'rgba(14,165,233,0.12)', backdropFilter: 'blur(8px)' }}>
              <BookOpen className="w-3.5 h-3.5" /> {T('wu_eyebrow')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">{T('wu_title')}</h2>
          </motion.div>
        </div>
      </div>

      {/* Intro: text + molecule image */}
      <div className="py-20 lg:py-28" style={{ background: '#020B18' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-sky-400/15 order-2 lg:order-1"
            >
              <img
                src="/water-universe/molecule.jpg"
                alt={lang === 'tr' ? 'Su molekülleri' : 'Water molecules'}
                loading="lazy"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-sky-200/65 text-base leading-relaxed mb-4">
                {T('wu_p1')}
              </p>
              <p className="text-sky-200/50 text-sm leading-relaxed">
                {T('wu_p2')}
              </p>
            </motion.div>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'border-sky-400/40 text-white'
                    : 'border-sky-500/15 text-sky-300/50 hover:text-sky-200/80 hover:border-sky-400/25'
                }`}
                style={filter === cat ? { background: 'rgba(14,165,233,0.15)' } : {}}
              >
                {cat === 'all' ? T('wu_all') : T(cat)}
              </button>
            ))}
          </motion.div>

          {/* Article grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-water glass-water-hover water-shimmer rounded-2xl p-6 relative overflow-hidden cursor-pointer group"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mb-3 ${CATEGORY_COLOR[post.categoryKey] ?? 'border-sky-400/25 text-sky-300'}`}
                    style={{ background: 'rgba(14,165,233,0.06)' }}
                  >
                    {post.category}
                  </span>

                  <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-sky-200 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sky-200/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sky-400/45 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <span className="flex items-center gap-1 text-sky-400/60 text-xs font-medium group-hover:text-sky-400 transition-colors">
                      {T('wu_read_more')}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
