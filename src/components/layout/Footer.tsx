import { useLang } from '../../i18n/LangContext'
import { Mail, MapPin, ExternalLink, X as XIcon } from 'lucide-react'
import { getNavItems } from '../../constants/data'

export function Footer() {
  const { T } = useLang()
  const navItems = getNavItems(T)
  return (
    <footer className="border-t border-sky-500/08" style={{ background: '#020B18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Real logo + description */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4" aria-label="Blueit">
              <img
                src="/blueit-logo.png"
                alt="Blueit"
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(1.05)' }}
              />
            </a>
            <p className="text-sky-200/40 text-sm leading-relaxed max-w-xs mb-5">
              {T('footer_desc')}
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://linkedin.com/company/blueitfuture', label: 'LinkedIn', Icon: ExternalLink },
                { href: 'https://twitter.com/Blueitfuture',          label: 'X',        Icon: XIcon       },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sky-400/40 hover:text-sky-300 transition-all duration-200 border border-sky-500/10 hover:border-sky-400/30"
                  style={{ background: 'rgba(14,165,233,0.04)' }} aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sky-400/60 font-semibold text-xs uppercase tracking-widest mb-5">{T('footer_platform')}</h3>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="text-sky-200/40 text-sm hover:text-sky-200/80 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sky-400/60 font-semibold text-xs uppercase tracking-widest mb-5">{T('footer_contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@blueitfuture.com"
                  className="flex items-center gap-2 text-sky-200/40 text-sm hover:text-sky-200/80 transition-colors">
                  <Mail className="w-3.5 h-3.5" /> info@blueitfuture.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sky-200/40 text-sm">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>Bornova / İzmir &amp; Beşiktaş / İstanbul</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-sky-500/06 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sky-400/25 text-sm">© {new Date().getFullYear()} Blueit. {T('footer_rights')}</p>
          <div className="flex gap-6">
            {([['footer_privacy','#'],['footer_terms','#']] as const).map(([key, href]) => (
              <a key={key} href={href} className="text-sky-400/25 text-sm hover:text-sky-400/50 transition-colors">{T(key)}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
