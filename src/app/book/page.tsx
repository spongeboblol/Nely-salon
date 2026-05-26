'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import Footer from '@/components/sections/Footer'

const SERVICES = [
  "Men's Classic Cut",
  "Men's Fade",
  "Men's Textured Cut",
  'Beard Trim',
  'Full Beard Shape Up',
  'Hot Towel Shave',
  'Cut + Beard + Eyebrow',
  'Facial',
  'Blowout',
  'Perms',
  'Full Color',
  'Highlights',
  'Balayage',
  'Retouch',
  'Toner / Gloss',
  'Styling',
  "Kids' Cut",
  'Nails',
  'Manicure',
  'Mani-Pedi',
  'Eyelash Extensions',
  'Silk Press',
  'Braids (Consultation)',
  'Updo / Special Occasion',
  'Extensions (Consultation)',
  'Keratin Treatment',
]

const STYLISTS = ['No Preference', 'Bryan', 'Lolita', 'Nely', 'Leslie', 'Nora', 'Caro']

const TIMES = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full bg-ink border-b-2 border-white/10 focus:border-accent py-3 text-sm font-bold text-white placeholder:text-white/25 outline-none transition-colors duration-200'

const selectClass =
  'w-full bg-ink border-b-2 border-white/10 focus:border-accent py-3 text-sm font-bold text-white outline-none transition-colors duration-200 appearance-none'

export default function BookPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: '',
  })
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const res = await fetch('https://formspree.io/f/mojbkllp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const slideUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as [number, number, number, number], delay },
  })

  return (
    <main>
      <div ref={ref} className="min-h-screen bg-ink pt-28 md:pt-36 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left — info */}
            <div className="md:sticky md:top-28">
              <motion.p {...slideUp(0)} className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-5">
                Reservations
              </motion.p>
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: '102%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
                  style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
                  className="font-black text-white"
                >
                  Your chair
                  <br />
                  <span className="text-accent">awaits.</span>
                </motion.h1>
              </div>

              <motion.p {...slideUp(0.2)} className="text-base font-semibold text-white/50 leading-relaxed max-w-sm mb-10">
                Book online and we&apos;ll confirm your appointment within 24 hours.
                Walk-ins are always welcome — but appointments get priority seating.
              </motion.p>

              <motion.div {...slideUp(0.3)} className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-black">1</span>
                  </div>
                  <div>
                    <p className="font-black text-sm text-white">Choose your service</p>
                    <p className="text-xs font-semibold text-white/40 mt-0.5">Pick from our full menu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-black">2</span>
                  </div>
                  <div>
                    <p className="font-black text-sm text-white">Pick your time</p>
                    <p className="text-xs font-semibold text-white/40 mt-0.5">We&apos;re open Mon–Sun</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-black">3</span>
                  </div>
                  <div>
                    <p className="font-black text-sm text-white">We confirm via text or call</p>
                    <p className="text-xs font-semibold text-white/40 mt-0.5">Usually within a few hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...slideUp(0.45)} className="mt-10 p-5 border border-accent/20 bg-ink">
                <p className="text-xs font-black tracking-[0.14em] uppercase text-accent mb-1">Prefer to call?</p>
                <a href="tel:6265423328" className="text-lg font-black text-accent hover:text-white transition-colors duration-200">
                  (626) 542-3328
                </a>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div {...slideUp(0.15)}>
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-black">✓</span>
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-[-0.03em] mb-3">You&apos;re booked!</h2>
                  <p className="text-base font-semibold text-white/50 max-w-xs mx-auto leading-relaxed">
                    We&apos;ll reach out within 24 hours to confirm your appointment. See you soon!
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', phone: '', email: '', service: '', stylist: '', date: '', time: '', notes: '' }) }}
                    className="mt-8 text-xs font-black tracking-[0.14em] uppercase text-accent underline"
                  >
                    Book another appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal info */}
                  <div>
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-5">Personal Info</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-5">Service</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                          Service *
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className={selectClass}
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <span className="absolute right-0 bottom-4 pointer-events-none text-white/30 font-black">↓</span>
                      </div>
                      <div className="relative">
                        <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                          Preferred Stylist
                        </label>
                        <select
                          name="stylist"
                          value={form.stylist}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          {STYLISTS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <span className="absolute right-0 bottom-4 pointer-events-none text-white/30 font-black">↓</span>
                      </div>
                    </div>
                  </div>

                  {/* Date & time */}
                  <div>
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-5">
                      Date & Time
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className={inputClass}
                        />
                      </div>
                      <div className="relative">
                        <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                          className={selectClass}
                        >
                          <option value="">Select a time</option>
                          {TIMES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <span className="absolute right-0 bottom-4 pointer-events-none text-white/30 font-black">↓</span>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="text-[10px] font-black tracking-[0.16em] uppercase text-white/40 block mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Tell us anything useful — reference photos, allergies, special requests…"
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-accent text-white py-5 text-xs font-black tracking-[0.18em] uppercase rounded-full hover:bg-ink hover:text-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-3 group"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-ink rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Request Appointment
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs font-semibold text-white/30 mt-4">
                      We&apos;ll confirm via text or call within 24 hours.
                    </p>
                    {formState === 'error' && (
                      <p className="text-center text-xs font-semibold text-red-400 mt-2">
                        Something went wrong. Please call us at (626) 542-3328.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
