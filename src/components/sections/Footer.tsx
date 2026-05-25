import Link from 'next/link'

const HOURS = [
  { day: 'Mon – Fri', hours: '10:30am – 7pm' },
  { day: 'Saturday', hours: '8am – 7pm' },
  { day: 'Sunday', hours: '9am – 3pm' },
]

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/book', label: 'Book Now' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-14 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-[-0.04em] text-white hover:text-accent transition-colors duration-200">
              NELY&apos;S
            </Link>
            <p className="mt-3 text-sm font-semibold text-white/40 leading-relaxed max-w-xs">
              Salon & Barbershop. Where every cut tells a story.
            </p>
            <a
              href="https://www.instagram.com/nelys_salonandbarbershop?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs font-black tracking-[0.14em] uppercase text-accent hover:text-white transition-colors duration-200"
            >
              <span>@nelys_salonandbarbershop</span>
              <span>↗</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-5">Navigate</p>
            <ul className="space-y-3">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-bold text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-5">Hours</p>
            <ul className="space-y-2">
              {HOURS.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-6 text-sm">
                  <span className="font-bold text-white/40">{day}</span>
                  <span className={`font-black ${hours === 'Closed' ? 'text-white/20' : 'text-white/80'}`}>
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-5">Contact</p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/25 mb-1">Address</p>
                <p className="text-sm font-bold text-white/70 leading-relaxed">
                  10623 Garvey Ave<br />
                  El Monte, CA 91733
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/25 mb-1">Phone</p>
                <a
                  href="tel:6265423328"
                  className="text-sm font-black text-white/70 hover:text-accent transition-colors duration-200"
                >
                  (626) 542-3328
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/25 mb-1">Email</p>
                <a
                  href="mailto:Extreambeauty33@gmail.com"
                  className="text-sm font-black text-white/70 hover:text-accent transition-colors duration-200"
                >
                  Extreambeauty33@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/25">
            © {new Date().getFullYear()} Nely&apos;s Salon & Barbershop. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/25">
              Made with love in [El monte,CA]
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
