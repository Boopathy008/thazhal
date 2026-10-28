/**
 * Navbar — THAZHAL premium navigation
 * Glass morphism pill hover, smooth dropdown, Linear-inspired micro-interactions.
 */

import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, ChevronDown, Flame, Layers, Menu, Thermometer, Trees, X, LucideIcon } from 'lucide-react'
import { nav } from '../data/content'

const icons: Record<string, LucideIcon> = { Layers, Thermometer, Flame, Trees, Building2 }
const groups = [{ key: 'Products', items: nav.products }, { key: 'Solutions', items: nav.solutions }]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [sub, setSub] = useState<string | null>(null)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const ref = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { setOpen(null); setMobile(false); setSub(null) }, [pathname])
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [mobile])
  useEffect(() => {
    const click = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(null) }
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false) } }
    document.addEventListener('mousedown', click)
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', click); document.removeEventListener('keydown', key) }
  }, [])

  const solid = scrolled || mobile

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-350 ${
        solid
          ? 'border-b border-white/8 bg-navy/92 backdrop-blur-xl shadow-lg shadow-navy/20'
          : 'bg-transparent'
      }`}
    >
      <div className="wrap flex h-[70px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-85" aria-label="THAZHAL home">
          <img
            src="/images/logo.png"
            alt="THAZHAL Logo"
            className="h-9 w-auto max-w-[160px] object-contain brightness-105"
          />
          <span className="font-sans text-[18px] font-bold tracking-[0.22em] text-white">THAZHAL</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHoveredTab(null)}>
          {/* Home */}
          <NavLink
            to="/"
            end
            onMouseEnter={() => setHoveredTab('Home')}
            className={({ isActive }) =>
              `relative px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                isActive ? 'text-emerald' : 'text-white/80 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">Home</span>
                {hoveredTab === 'Home' && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full bg-white/8 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive && !hoveredTab && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald" />
                )}
              </>
            )}
          </NavLink>

          {/* Dropdowns */}
          {groups.map((g) => (
            <div
              key={g.key}
              className="relative"
              onMouseEnter={() => { setOpen(g.key); setHoveredTab(g.key) }}
              onMouseLeave={() => { setOpen(null) }}
            >
              <button
                type="button"
                aria-expanded={open === g.key}
                aria-haspopup="true"
                onClick={() => setOpen(open === g.key ? null : g.key)}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                  pathname.startsWith(`/${g.key.toLowerCase()}`) ? 'text-emerald' : 'text-white/80 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {g.key}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-250 ${open === g.key ? 'rotate-180 text-emerald' : ''}`}
                    aria-hidden
                  />
                </span>
                {hoveredTab === g.key && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full bg-white/8 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {open === g.key && (
                  <motion.ul
                    role="menu"
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 340, damping: 26 }}
                    style={{ transformOrigin: 'top left' }}
                    className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-white/12 bg-navy/96 p-2.5 shadow-2xl backdrop-blur-xl"
                  >
                    {g.items.map((it) => {
                      const I = icons[it.icon]
                      return (
                        <li key={it.to} role="none">
                          <NavLink
                            to={it.to}
                            role="menuitem"
                            className={({ isActive }) =>
                              `group flex gap-3 rounded-xl p-3 transition-all duration-250 ${
                                isActive ? 'bg-forest/70 text-emerald' : 'hover:bg-white/8'
                              }`
                            }
                          >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-all duration-250 group-hover:bg-emerald group-hover:text-navy">
                              <I size={16} aria-hidden />
                            </div>
                            <span>
                              <span className="block text-[13px] font-semibold text-white group-hover:text-emerald transition-colors">
                                {it.label}
                              </span>
                              <span className="block text-[11px] leading-snug text-white/50 mt-0.5">
                                {it.desc}
                              </span>
                            </span>
                          </NavLink>
                        </li>
                      )
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Static links */}
          {['About', 'Blog', 'Contact'].map((item) => {
            const path = `/${item.toLowerCase()}`
            return (
              <NavLink
                key={item}
                to={path}
                onMouseEnter={() => setHoveredTab(item)}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                    isActive ? 'text-emerald' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item}</span>
                    {hoveredTab === item && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 z-0 rounded-full bg-white/8 border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {isActive && !hoveredTab && (
                      <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald" />
                    )}
                  </>
                )}
              </NavLink>
            )
          })}

          {/* CTA button */}
          <Link
            to="/contact"
            className="group relative ml-3 overflow-hidden rounded-full bg-emerald px-5 py-2 text-[13px] font-bold text-navy shadow-md shadow-emerald/20 transition-all duration-300 hover:bg-[#c0cfa0] hover:shadow-lg hover:shadow-emerald/25 hover:scale-[1.03]"
          >
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-600 ease-out group-hover:translate-x-full" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 text-white lg:hidden transition-colors hover:text-emerald"
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 70px)' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-y-auto bg-navy/98 lg:hidden"
          >
            <div className="wrap flex flex-col gap-0.5 py-6">
              <Link to="/" className="py-3 text-base font-medium text-white/80 border-b border-white/5">Home</Link>
              {groups.map((g) => (
                <div key={g.key} className="border-b border-white/5">
                  <button
                    type="button"
                    aria-expanded={sub === g.key}
                    onClick={() => setSub(sub === g.key ? null : g.key)}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-white/80"
                  >
                    {g.key}
                    <ChevronDown size={16} className={`transition-transform duration-250 ${sub === g.key ? 'rotate-180 text-emerald' : 'text-white/40'}`} aria-hidden />
                  </button>
                  {sub === g.key && g.items.map((it) => (
                    <Link key={it.to} to={it.to} className="block border-l-2 border-emerald/40 py-2.5 pl-4 text-[13px] text-white/65 hover:text-emerald transition-colors">
                      {it.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link to="/about" className="py-3 text-base font-medium text-white/80 border-b border-white/5">About</Link>
              <Link to="/blog" className="py-3 text-base font-medium text-white/80 border-b border-white/5">Blog</Link>
              <Link to="/contact" className="py-3 text-base font-medium text-white/80 border-b border-white/5">Contact</Link>
              <Link to="/contact" className="mt-5 rounded-full bg-emerald px-6 py-3 text-center text-sm font-bold text-navy transition-all hover:bg-[#c0cfa0]">
                Let's Talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
