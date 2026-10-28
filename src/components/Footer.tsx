/**
 * Footer — THAZHAL premium footer
 * Topographic art background, editorial layout, elegant social links.
 */

import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { contact, nav, social } from '../data/content'
import { Art } from './ui'

export default function Footer() {
  const soc = [
    { n: 'X', I: Twitter, u: social.x },
    { n: 'LinkedIn', I: Linkedin, u: social.linkedin },
    { n: 'Instagram', I: Instagram, u: social.instagram },
  ]
  return (
    <footer className="relative overflow-hidden bg-navy pt-20 text-white">
      {/* Subtle topographic art background */}
      <Art variant={4} className="absolute inset-0 h-full w-full opacity-30" />

      {/* Geo grid subtle overlay */}
      <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-8" />

      <div className="wrap relative grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3 transition-opacity hover:opacity-85" aria-label="THAZHAL home">
            <img
              src="/images/logo.png"
              alt="THAZHAL Logo"
              className="h-9 w-auto max-w-[150px] object-contain"
            />
            <span className="font-sans text-xl font-bold tracking-[0.22em] text-white">THAZHAL</span>
          </Link>
          <p className="mt-4 max-w-[260px] text-[14px] leading-relaxed text-white/55">
            Geospatial intelligence for a more informed and sustainable future.
          </p>
          <div className="mt-6 flex gap-2.5">
            {soc.map(({ n, I, u }) =>
              u ? (
                <a
                  key={n}
                  href={u}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={n}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald hover:bg-emerald hover:text-navy hover:shadow-lg hover:shadow-emerald/20"
                >
                  <I size={16} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ) : (
                <span
                  key={n}
                  aria-label={`${n} (not configured)`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 text-white/25"
                >
                  <I size={16} />
                </span>
              )
            )}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">Explore</h4>
          <ul className="space-y-2.5">
            {[['Home', '/'], ['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, t]) => (
              <li key={t}>
                <Link
                  className="group inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-all duration-250 hover:translate-x-1 hover:text-emerald"
                  to={t}
                >
                  <span className="h-px w-0 bg-emerald transition-all duration-250 group-hover:w-2.5" />
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products + Solutions */}
        <div>
          <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">Products</h4>
          <ul className="space-y-2.5">
            {nav.products.map((p) => (
              <li key={p.to}>
                <Link
                  className="group inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-all duration-250 hover:translate-x-1 hover:text-emerald"
                  to={p.to}
                >
                  <span className="h-px w-0 bg-emerald transition-all duration-250 group-hover:w-2.5" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mb-4 mt-8 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">Solutions</h4>
          <ul className="space-y-2.5">
            {nav.solutions.map((p) => (
              <li key={p.to}>
                <Link
                  className="group inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-all duration-250 hover:translate-x-1 hover:text-emerald"
                  to={p.to}
                >
                  <span className="h-px w-0 bg-emerald transition-all duration-250 group-hover:w-2.5" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">Contact Us</h4>
          <p className="text-[13px] leading-relaxed text-white/55">
            Headquarters:
            <br />
            {contact.hq}
          </p>
          <a
            className="mt-4 inline-block text-[13px] text-white/55 transition-colors hover:text-emerald"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="wrap flex flex-col justify-between gap-3 py-5 text-[12px] text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} THAZHAL. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="transition-colors hover:text-emerald" to="/privacy">Privacy Policy</Link>
            <Link className="transition-colors hover:text-emerald" to="/terms">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
