import { useLang } from '../../i18n/LangContext'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { getOffices } from '../../constants/data'

export function Contact() {
  const { T } = useLang()
  const OFFICES = getOffices(T)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" aria-label={T('contact_eyebrow')}>
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(14,165,233,0.06) 0%, transparent 60%)' }}
        aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">{T('contact_eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {T('contact_h2a')} <span className="text-gradient-water">{T('contact_h2b')}</span>
          </h2>
          <p className="text-sky-200/60 text-lg max-w-xl mx-auto">
            {T('contact_sub')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Office cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-water rounded-2xl p-6 water-shimmer relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
                <h3 className="text-sky-300 font-semibold text-sm uppercase tracking-widest mb-3">{office.title}</h3>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <p className="text-sky-200/50 text-sm">{office.hours}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="glass-water rounded-2xl p-6"
            >
              <p className="text-sky-400 text-sm font-semibold mb-2">{T('contact_email')}</p>
              <a href="mailto:info@blueitfuture.com" className="text-white hover:text-sky-300 transition-colors text-sm">
                info@blueitfuture.com
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-water rounded-2xl p-8 water-shimmer relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(6,214,160,0.1)', border: '1px solid rgba(6,214,160,0.3)' }}>
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{T('contact_success_h')}</h3>
                <p className="text-sky-200/60">{T('contact_success_p')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'name',    label: T('contact_name'),        type: 'text',  placeholder: T('contact_name_ph') },
                    { key: 'email',   label: T('contact_email'),        type: 'email', placeholder: T('contact_email_ph') },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-sky-300/70 text-xs font-semibold uppercase tracking-widest mb-2">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-sky-400/30 text-sm outline-none border border-sky-500/15 focus:border-sky-400/40 transition-colors"
                        style={{ background: 'rgba(14,165,233,0.05)' }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sky-300/70 text-xs font-semibold uppercase tracking-widest mb-2">{T('contact_company')}</label>
                  <input
                    type="text"
                    placeholder={T('contact_company_ph')}
                    value={form.company}
                    onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-sky-400/30 text-sm outline-none border border-sky-500/15 focus:border-sky-400/40 transition-colors"
                    style={{ background: 'rgba(14,165,233,0.05)' }}
                  />
                </div>

                <div>
                  <label className="block text-sky-300/70 text-xs font-semibold uppercase tracking-widest mb-2">{T('contact_message')}</label>
                  <textarea
                    rows={4}
                    placeholder={T('contact_msg_ph')}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-sky-400/30 text-sm outline-none border border-sky-500/15 focus:border-sky-400/40 transition-colors resize-none"
                    style={{ background: 'rgba(14,165,233,0.05)' }}
                  />
                </div>

                <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                  {T('contact_submit')} <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
