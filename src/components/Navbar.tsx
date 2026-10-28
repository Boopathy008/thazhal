/**
 * Navbar — THAZHAL premium navigation
 * 3D floating pill / modern 3D perspective animations, glass micro-interactions, smooth dropdowns.
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
      style={{ perspective: 1200 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'py-2.5'
          : 'py-4'
      }`}
    >
      <div className="wrap">
        <motion.div
          animate={{
            y: solid ? 0 : 2,
            scale: solid ? 0.99 : 1,
            rotateX: solid ? 0 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className={`flex h-[66px] items-center justify-between rounded-2xl px-6 transition-all duration-500 border ${
            solid
              ? 'border-white/15 bg-navy/90 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl'
              : 'border-white/10 bg-navy/60 shadow-[0_12px_36px_rgba(0,0,0,0.25)] backdrop-blur-xl'
          }`}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Logo with 3D depth */}
          <Link
            to="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            aria-label="THAZHAL home"
          >
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -5, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="flex items-center gap-3"
            >
              <img
                src="/images/logo.png"
                alt="THAZHAL Logo"
                className="h-9 w-auto max-w-[160px] object-contain brightness-105 drop-shadow-[0_4px_12px_rgba(169,184,135,0.25)]"
              />
              <span className="font-sans text-[18px] font-bold tracking-[0.22em] text-white">THAZHAL</span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-1.5 lg:flex" onMouseLeave={() => setHoveredTab(null)}>
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
                <motion.div
                  whileHover={{ y: -2, z: 20 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative z-10"
                >
                  <span>Home</span>
                  {hoveredTab === 'Home' && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute -inset-x-2 -inset-y-1 z-[-1] rounded-xl bg-white/10 border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md"
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                    />
                  )}
                  {isActive && !hoveredTab && (
                    <span className="absolute bottom-[-4px] left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald shadow-[0_0_8px_#A9B887]" />
                  )}
                </motion.div>
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
                  <motion.span
                    whileHover={{ y: -2, z: 20 }}
                    whileTap={{ y: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative z-10 flex items-center gap-1.5"
                  >
                    {g.key}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-250 ${open === g.key ? 'rotate-180 text-emerald' : ''}`}
                      aria-hidden
                    />
                  </motion.span>
                  {hoveredTab === g.key && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute -inset-x-2 -inset-y-1 z-0 rounded-xl bg-white/10 border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md"
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {open === g.key && (
                    <motion.ul
                      role="menu"
                      initial={{ opacity: 0, y: 14, rotateX: -14, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, rotateX: -10, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                      style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                      className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-white/15 bg-navy/95 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl ring-1 ring-white/10"
                    >
                      {g.items.map((it) => {
                        const I = icons[it.icon]
                        return (
                          <li key={it.to} role="none">
                            <NavLink
                              to={it.to}
                              role="menuitem"
                              className={({ isActive }) =>
                                `group flex gap-3.5 rounded-xl p-3 transition-all duration-200 ${
                                  isActive ? 'bg-forest/80 text-emerald' : 'hover:bg-white/10 hover:translate-x-1 hover:shadow-lg'
                                }`
                              }
                            >
                              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-all duration-200 group-hover:scale-110 group-hover:bg-emerald group-hover:text-navy group-hover:rotate-6">
                                <I size={16} aria-hidden />
                              </div>
                              <span>
                                <span className="block text-[13px] font-semibold text-white group-hover:text-emerald transition-colors">
                                  {it.label}
                                </span>
                                <span className="block text-[11px] leading-snug text-white/55 mt-0.5">
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
                    <motion.div
                      whileHover={{ y: -2, z: 20 }}
                      whileTap={{ y: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="relative z-10"
                    >
                      <span>{item}</span>
                      {hoveredTab === item && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute -inset-x-2 -inset-y-1 z-[-1] rounded-xl bg-white/10 border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md"
                          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                        />
                      )}
                      {isActive && !hoveredTab && (
                        <span className="absolute bottom-[-4px] left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald shadow-[0_0_8px_#A9B887]" />
                      )}
                    </motion.div>
                  )}
                </NavLink>
              )
            })}

            {/* 3D CTA button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2.5, rotateX: 5 }}
              whileTap={{ scale: 0.96, y: 1 }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link
                to="/contact"
                className="group relative ml-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-emerald px-5 py-2.5 text-[13px] font-bold text-navy shadow-[0_8px_20px_rgba(169,184,135,0.3)] transition-all duration-300 hover:bg-[#c0cfa0] hover:shadow-[0_12px_28px_rgba(169,184,135,0.45)]"
              >
                <span className="relative z-10">Let's Talk</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              </Link>
            </motion.div>
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
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0, rotateX: -10 }}
            animate={{ opacity: 1, height: 'calc(100vh - 80px)', rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: -10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="overflow-y-auto bg-navy/98 lg:hidden mt-2 border-t border-white/10"
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
