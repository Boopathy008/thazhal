/**
 * Footer — THAZHAL premium footer
 * 3D perspective animations, dynamic 3D social spheres, interactive depth.
 */

import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { contact, nav, social } from '../data/content'
import { Art } from './ui'

export default function Footer() {
  const reduce = useReducedMotion()
  const soc = [
    { n: 'X', I: Twitter, u: social.x },
    { n: 'LinkedIn', I: Linkedin, u: social.linkedin },
    { n: 'Instagram', I: Instagram, u: social.instagram },
  ]

  return (
    <footer
      style={{ perspective: 1200 }}
      className="relative overflow-hidden bg-[#0A1208] pt-24 text-white"
    >
      {/* Subtle topographic art background */}
      <Art variant={4} className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" />

      {/* Geo grid subtle overlay */}
      <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />

      {/* Floating 3D ambient glow sphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-emerald/10 blur-[120px]"
      />

      <div className="wrap relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 35, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105"
              aria-label="THAZHAL home"
            >
              <motion.div
                whileHover={{ rotateY: 15, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="flex items-center gap-3"
              >
                <img
                  src="/images/logo.png"
                  alt="THAZHAL Logo"
                  className="h-10 w-auto max-w-[160px] object-contain drop-shadow-[0_4px_16px_rgba(169,184,135,0.3)]"
                />
                <span className="font-sans text-2xl font-bold tracking-[0.22em] text-white">THAZHAL</span>
              </motion.div>
            </Link>
            <p className="mt-5 max-w-[280px] text-[14px] leading-relaxed text-white/60">
              Geospatial intelligence and environmental innovation for a more resilient future.
            </p>

            {/* 3D Floating Social Spheres */}
            <div className="mt-8 flex gap-3">
              {soc.map(({ n, I, u }) =>
                u ? (
                  <motion.a
                    key={n}
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={n}
                    whileHover={{ scale: 1.15, y: -4, rotateZ: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white/70 shadow-[0_8px_16px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-emerald hover:bg-emerald hover:text-navy hover:shadow-[0_12px_24px_rgba(169,184,135,0.4)]"
                  >
                    <I size={17} className="transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                ) : (
                  <span
                    key={n}
                    aria-label={`${n} (not configured)`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 text-white/20"
                  >
                    <I size={17} />
                  </span>
                )
              )}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-emerald">Explore</h4>
            <ul className="space-y-3">
              {[['Home', '/'], ['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, t]) => (
                <li key={t}>
                  <Link
                    className="group inline-flex items-center gap-2 text-[14px] text-white/60 transition-all duration-200 hover:translate-x-1.5 hover:text-white"
                    to={t}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald/40 transition-all duration-200 group-hover:scale-125 group-hover:bg-emerald" />
                    <span>{l}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Solutions */}
          <div>
            <h4 className="mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-emerald">Products</h4>
            <ul className="space-y-3">
              {nav.products.map((p) => (
                <li key={p.to}>
                  <Link
                    className="group inline-flex items-center gap-2 text-[14px] text-white/60 transition-all duration-200 hover:translate-x-1.5 hover:text-white"
                    to={p.to}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald/40 transition-all duration-200 group-hover:scale-125 group-hover:bg-emerald" />
                    <span>{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-5 mt-8 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-emerald">Solutions</h4>
            <ul className="space-y-3">
              {nav.solutions.map((p) => (
                <li key={p.to}>
                  <Link
                    className="group inline-flex items-center gap-2 text-[14px] text-white/60 transition-all duration-200 hover:translate-x-1.5 hover:text-white"
                    to={p.to}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald/40 transition-all duration-200 group-hover:scale-125 group-hover:bg-emerald" />
                    <span>{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-emerald">Contact Us</h4>
            <p className="text-[13px] leading-relaxed text-white/60">
              Headquarters:
              <br />
              {contact.hq}
            </p>
            <motion.a
              whileHover={{ x: 2, color: '#A9B887' }}
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 transition-colors"
              href={`mailto:${contact.email}`}
            >
              <span>{contact.email}</span>
              <ArrowUpRight size={13} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar with 3D inset border */}
      <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="wrap flex flex-col justify-between gap-3 py-6 text-[12px] text-white/40 sm:flex-row">
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
