const LOGOS = [
  { src: '/logos/sabanci.png',    alt: 'Sabancı' },
  { src: '/logos/brisa.png',      alt: 'Brisa' },
  { src: '/logos/kworks.png',     alt: 'KWORKS' },
  { src: '/logos/is-bankasi.png', alt: 'Türkiye İş Bankası' },
  { src: '/logos/ulker.png',      alt: 'Ülker' },
  { src: '/logos/otokoc.png',     alt: 'Otokoç' },
  { src: '/logos/poyraz-boya.png',alt: 'Poyraz Boya' },
  { src: '/logos/turk-tuborg.png',alt: 'Türk Tuborg' },
]

// Duplicate for seamless infinite loop
const LOOP = [...LOGOS, ...LOGOS]

import { useLang } from '../../i18n/LangContext'

export function Clients() {
  const { T } = useLang()
  return (
    <section
      className="py-10 overflow-hidden border-y border-gray-100"
      style={{ background: '#FFFFFF' }}
      aria-label="Clients"
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7">
        <p className="text-center text-slate-400 text-xs font-semibold tracking-[0.25em] uppercase">
          {T('clients_title')}
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #fff, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #fff, transparent)' }} />

        <div
          className="flex items-center gap-0"
          style={{ animation: 'clients-scroll 28s linear infinite' }}
        >
          {LOOP.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 sm:px-10"
              style={{ height: '56px' }}
            >
              <img
                src={logo.src}
                alt={i < LOGOS.length ? logo.alt : ''}
                aria-hidden={i >= LOGOS.length}
                loading="lazy"
                draggable={false}
                className="h-8 sm:h-9 w-auto object-contain select-none"
                style={{ maxWidth: '140px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clients-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
