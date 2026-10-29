/**
 * Navbar — THAZHAL premium navigation
 * 3D floating desktop bar + rock-solid, fully clickable mobile menu portal
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

  // Auto-close mobile menu on route change
  useEffect(() => {
    setOpen(null)
    setMobile(false)
    setSub(null)
  }, [pathname])

  // Manage body scroll when mobile menu is open
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [mobile])

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMobile(false)
      }
    }
    document.addEventListener('keydown', key)
    return () => document.removeEventListener('keydown', key)
  }, [])

  const solid = scrolled

  return (
    <>
      <header
        ref={ref}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          solid ? 'py-2.5' : 'py-3 sm:py-4'
        }`}
      >
        <div className="wrap">
          <motion.div
            animate={{
              y: solid ? 0 : 2,
              scale: solid ? 0.99 : 1,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className={`flex h-[66px] items-center justify-between rounded-2xl px-5 sm:px-6 transition-all duration-500 border ${
              solid
                ? 'border-white/15 bg-[#090A0F]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl'
                : 'border-white/10 bg-[#090A0F]/85 shadow-[0_12px_36px_rgba(0,0,0,0.3)] backdrop-blur-xl'
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
              aria-label="THAZHAL home"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/logo.png"
                  alt="THAZHAL Logo"
                  className="h-9 w-auto max-w-[150px] object-contain brightness-105 drop-shadow-[0_4px_12px_rgba(56,189,248,0.3)]"
                />
                <span className="font-sans text-[18px] font-bold tracking-[0.22em] text-white">THAZHAL</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
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
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className="relative z-10"
                  >
                    <span>Home</span>
                    {hoveredTab === 'Home' && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute -inset-x-2 -inset-y-1 z-[-1] rounded-xl bg-white/10 border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md"
                        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                      />
                    )}
                    {isActive && !hoveredTab && (
                      <span className="absolute bottom-[-4px] left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald shadow-[0_0_8px_#38BDF8]" />
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
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
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
                        className="absolute -inset-x-2 -inset-y-1 z-0 rounded-xl bg-white/10 border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md"
                        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {open === g.key && (
                      <motion.ul
                        role="menu"
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                        className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-white/20 bg-[#090A0F] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10"
                        style={{ backgroundColor: '#090A0F' }}
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
                                    isActive ? 'bg-white/15 text-emerald' : 'hover:bg-white/10 hover:translate-x-1'
                                  }`
                                }
                              >
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald/20 text-emerald transition-all duration-200 group-hover:scale-110 group-hover:bg-emerald group-hover:text-navy group-hover:rotate-6">
                                  <I size={17} aria-hidden />
                                </div>
                                <span>
                                  <span className="block text-[14px] font-bold text-white group-hover:text-emerald transition-colors">
                                    {it.label}
                                  </span>
                                  <span className="block text-[12px] leading-snug text-slate-300 mt-0.5 group-hover:text-white/80">
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
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        className="relative z-10"
                      >
                        <span>{item}</span>
                        {hoveredTab === item && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute -inset-x-2 -inset-y-1 z-[-1] rounded-xl bg-white/10 border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md"
                            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                          />
                        )}
                        {isActive && !hoveredTab && (
                          <span className="absolute bottom-[-4px] left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald shadow-[0_0_8px_#38BDF8]" />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                )
              })}

              {/* 3D CTA button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2.5 }}
                whileTap={{ scale: 0.96, y: 1 }}
                transition={{ type: 'spring', stiffness: 450, damping: 22 }}
              >
                <Link
                  to="/contact"
                  className="group relative ml-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-emerald px-5 py-2.5 text-[13px] font-bold text-navy shadow-[0_8px_20px_rgba(56,189,248,0.35)] transition-all duration-300 hover:bg-[#7dd3fc] hover:shadow-[0_12px_28px_rgba(56,189,248,0.5)]"
                >
                  <span className="relative z-10">Let's Talk</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Hamburger Button with direct z-index and pointer-events */}
            <button
              type="button"
              className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden transition-all active:scale-95 hover:border-emerald/40 hover:text-emerald"
              aria-label={mobile ? 'Close menu' : 'Open menu'}
              aria-expanded={mobile}
              onClick={() => setMobile((prev) => !prev)}
            >
              {mobile ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </header>

      {/* Standalone Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[95] flex flex-col bg-[#090A0F] pt-[84px] pb-8 px-6 overflow-y-auto lg:hidden"
          >
            {/* Background cyber grid */}
            <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-20" />

            <nav aria-label="Mobile Navigation" className="relative z-10 flex flex-col flex-1 gap-1">
              <Link
                to="/"
                onClick={() => setMobile(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-xl font-bold text-white transition-colors hover:text-emerald active:text-emerald"
              >
                <span>Home</span>
              </Link>

              {groups.map((g) => (
                <div key={g.key} className="border-b border-white/10 py-2">
                  <button
                    type="button"
                    aria-expanded={sub === g.key}
                    onClick={() => setSub((curr) => (curr === g.key ? null : g.key))}
                    className="flex w-full items-center justify-between py-3 text-xl font-bold text-white transition-colors hover:text-emerald active:text-emerald"
                  >
                    <span>{g.key}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${sub === g.key ? 'rotate-180 text-emerald' : 'text-white/40'}`}
                      aria-hidden
                    />
                  </button>
                  {sub === g.key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="my-2 space-y-2 pl-2"
                    >
                      {g.items.map((it) => (
                        <Link
                          key={it.to}
                          to={it.to}
                          onClick={() => setMobile(false)}
                          className="block rounded-xl border-l-2 border-emerald bg-white/[0.05] p-3.5 text-white/90 hover:bg-white/[0.1] hover:text-emerald transition-all"
                        >
                          <span className="block text-[15px] font-bold text-white">{it.label}</span>
                          <span className="block text-xs text-white/60 mt-0.5">{it.desc}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <Link
                to="/about"
                onClick={() => setMobile(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-xl font-bold text-white transition-colors hover:text-emerald active:text-emerald"
              >
                <span>About</span>
              </Link>

              <Link
                to="/blog"
                onClick={() => setMobile(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-xl font-bold text-white transition-colors hover:text-emerald active:text-emerald"
              >
                <span>Blog</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobile(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-xl font-bold text-white transition-colors hover:text-emerald active:text-emerald"
              >
                <span>Contact</span>
              </Link>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  onClick={() => setMobile(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-emerald py-4 text-center text-base font-bold text-navy shadow-[0_10px_25px_rgba(56,189,248,0.4)] transition-all active:scale-95"
                >
                  Let's Talk
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
