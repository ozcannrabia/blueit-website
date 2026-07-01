import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'
import { getSolutionMenu } from '../../constants/data'
import { useLang } from '../../i18n/LangContext'
import { cn } from '../../utils/cn'

export function Navbar() {
  const { lang, setLang, T } = useLang()
  const SOLUTION_MENU = getSolutionMenu(T)
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false); setDropdownOpen(false)
    if (!isHome) navigate('/' + href)
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goSolution = (slug: string) => {
    setDropdownOpen(false); setMobileOpen(false)
    navigate(`/cozumler/${slug}`)
  }

  const NAV = [
    { key: 'nav_why',           href: '#why' },
    { key: 'nav_solutions',     href: '#solutions', dropdown: true },
    { key: 'nav_sectors',       href: '#industries' },
    { key: 'nav_water_universe',href: '#water-universe' },
    { key: 'nav_about',         href: '#about' },
    { key: 'nav_contact',       href: '#contact' },
  ] as const

  // TR/EN toggle button
  const LangToggle = () => (
    <div className="flex items-center rounded-lg overflow-hidden border border-sky-500/20" style={{ background: 'rgba(14,165,233,0.06)' }}>
      {(['tr','en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            'px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer',
            lang === l
              ? 'text-white'
              : 'text-sky-400/50 hover:text-sky-300'
          )}
          style={lang === l ? { background: 'rgba(14,165,233,0.25)' } : {}}
        >
          {l}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'border-b border-sky-400/10 shadow-[0_8px_40px_rgba(6,182,212,0.08)]' : 'bg-transparent'
        )}
        style={scrolled ? { background: 'rgba(2,11,24,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Blueit">
            <img src="/blueit-logo.png" alt="Blueit Logo" className="h-9 lg:h-11 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => {
              if ('dropdown' in item) return (
                <div key="sol" ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(o => !o)}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-sky-100/80 hover:text-white rounded-lg transition-colors cursor-pointer font-medium"
                  >
                    {T('nav_solutions')}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', dropdownOpen && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 w-72 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        style={{ background: 'rgba(6,16,32,0.97)', border: '1px solid rgba(56,189,248,0.15)', backdropFilter: 'blur(24px)' }}
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
                        <div className="py-2">
                          {SOLUTION_MENU.map(s => (
                            <button key={s.slug} onClick={() => goSolution(s.slug)}
                              className="w-full text-left px-4 py-2.5 text-sm text-sky-200/70 hover:text-white hover:bg-sky-500/08 transition-colors cursor-pointer">
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
              return (
                <button key={item.href} onClick={() => scrollTo(item.href)}
                  className="group relative px-4 py-2 text-sm text-sky-100/80 hover:text-white rounded-lg transition-colors cursor-pointer font-medium">
                  {T(item.key as any)}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-sky-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LangToggle />
            <Button variant="primary" size="sm" onClick={() => scrollTo('#contact')}>{T('nav_demo')}</Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LangToggle />
            <button className="p-2 text-sky-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)} aria-label={lang === 'tr' ? 'Menü' : 'Menu'}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 border-b border-sky-400/10 lg:hidden overflow-y-auto max-h-[80vh]"
            style={{ background: 'rgba(2,11,24,0.97)', backdropFilter: 'blur(20px)' }}>
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV.filter(n => !('dropdown' in n)).map((item) => (
                <button key={item.href} onClick={() => scrollTo(item.href)}
                  className="w-full text-left px-4 py-3 text-sky-200/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer font-medium">
                  {T(item.key as any)}
                </button>
              ))}
              <div className="border-t border-sky-500/10 pt-3 mt-1">
                <p className="px-4 pb-2 text-xs font-semibold text-sky-400/60 uppercase tracking-widest">{T('nav_solutions')}</p>
                {SOLUTION_MENU.map(s => (
                  <button key={s.slug} onClick={() => goSolution(s.slug)}
                    className="w-full text-left px-4 py-2.5 text-sky-200/65 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer text-sm">
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="pt-3 mt-2 border-t border-sky-500/10 flex flex-col gap-2">
                <Button variant="primary" className="w-full justify-center" onClick={() => scrollTo('#contact')}>{T('nav_demo')}</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
