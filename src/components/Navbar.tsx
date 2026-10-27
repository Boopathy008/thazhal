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

  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { setOpen(null); setMobile(false); setSub(null) }, [pathname])
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [mobile])
  useEffect(() => {
    const click = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(null) }
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false) } }
    document.addEventListener('mousedown', click); document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', click); document.removeEventListener('keydown', key) }
  }, [])

  const link = ({ isActive }: { isActive: boolean }) => `px-3 py-2 text-base font-medium transition-colors hover:text-emerald ${isActive ? 'text-emerald' : 'text-white'}`
  const solid = scrolled || mobile

  return (
    <header ref={ref} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'border-b border-white/10 bg-navy/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" aria-label="THAZHAL home">
          <img
            src="/images/logo.png"
            alt="THAZHAL Logo"
            className="h-10 w-auto max-w-[170px] object-contain brightness-105"
          />
          <span className="font-sans text-xl font-bold tracking-[0.2em] text-white">THAZHAL</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1.5 lg:flex" onMouseLeave={() => setHoveredTab(null)}>
          <NavLink
            to="/"
            end
            onMouseEnter={() => setHoveredTab('Home')}
            className={({ isActive }) =>
              `relative px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive ? 'text-emerald' : 'text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10 transition-transform duration-300 inline-block hover:scale-105">
                  Home
                </span>
                {hoveredTab === 'Home' && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 z-0 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg shadow-emerald/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {isActive && !hoveredTab && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-emerald" />
                )}
              </>
            )}
          </NavLink>

          {groups.map((g) => (
            <div
              key={g.key}
              className="relative"
              onMouseEnter={() => {
                setOpen(g.key)
                setHoveredTab(g.key)
              }}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                aria-expanded={open === g.key}
                aria-haspopup="true"
                onClick={() => setOpen(open === g.key ? null : g.key)}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
                  pathname.startsWith(`/${g.key.toLowerCase()}`) ? 'text-emerald' : 'text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5 transition-transform duration-300 hover:scale-105">
                  {g.key}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${open === g.key ? 'rotate-180 text-emerald' : ''}`}
                    aria-hidden
                  />
                </span>
                {hoveredTab === g.key && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 z-0 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg shadow-emerald/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
              <AnimatePresence>
                {open === g.key && (
                  <motion.ul
                    role="menu"
                    initial={{ opacity: 0, y: 12, rotateX: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, rotateX: -10, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                    style={{ transformOrigin: 'top center', perspective: 800 }}
                    className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-white/15 bg-navy/95 p-3 shadow-2xl backdrop-blur-xl"
                  >
                    {g.items.map((it) => {
                      const I = icons[it.icon]
                      return (
                        <li key={it.to} role="none">
                          <NavLink
                            to={it.to}
                            role="menuitem"
                            className={({ isActive }) =>
                              `group flex gap-3.5 rounded-xl p-3 transition-all duration-300 ${
                                isActive ? 'bg-forest/80 text-emerald' : 'hover:bg-white/10 hover:translate-x-1.5'
                              }`
                            }
                          >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald group-hover:text-navy group-hover:shadow-md group-hover:shadow-emerald/20">
                              <I size={17} aria-hidden />
                            </div>
                            <span>
                              <span className="block text-sm font-semibold text-white transition-colors group-hover:text-emerald">
                                {it.label}
                              </span>
                              <span className="block text-xs text-white/60 leading-snug">
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

          {['About', 'Blog', 'Contact'].map((item) => {
            const path = `/${item.toLowerCase()}`
            return (
              <NavLink
                key={item}
                to={path}
                onMouseEnter={() => setHoveredTab(item)}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-emerald' : 'text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 transition-transform duration-300 inline-block hover:scale-105">
                      {item}
                    </span>
                    {hoveredTab === item && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 z-0 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg shadow-emerald/10"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    {isActive && !hoveredTab && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-emerald" />
                    )}
                  </>
                )}
              </NavLink>
            )
          })}

          <Link
            to="/contact"
            className="group relative ml-4 overflow-hidden rounded-full bg-emerald px-5 py-2 text-sm font-bold text-navy shadow-md shadow-emerald/20 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg hover:shadow-emerald/30"
          >
            <span className="relative z-10 inline-flex items-center gap-1.5">
              Let's Talk
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          </Link>
        </nav>

        <button type="button" className="p-2 text-white lg:hidden" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'calc(100vh - 72px)' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-y-auto bg-navy lg:hidden">
            <div className="wrap flex flex-col gap-1 py-6">
              <Link to="/" className="py-3 text-lg text-white">Home</Link>
              {groups.map((g) => (
                <div key={g.key}>
                  <button type="button" aria-expanded={sub === g.key} onClick={() => setSub(sub === g.key ? null : g.key)} className="flex w-full items-center justify-between py-3 text-lg text-white">
                    {g.key}<ChevronDown className={`transition-transform ${sub === g.key ? 'rotate-180' : ''}`} aria-hidden />
                  </button>
                  {sub === g.key && g.items.map((it) => <Link key={it.to} to={it.to} className="block border-l border-emerald/40 py-2.5 pl-4 text-white/80">{it.label}</Link>)}
                </div>
              ))}
              <Link to="/about" className="py-3 text-lg text-white">About</Link>
              <Link to="/blog" className="py-3 text-lg text-white">Blog</Link>
              <Link to="/contact" className="py-3 text-lg text-white">Contact</Link>
              <Link to="/contact" className="mt-4 rounded-full bg-emerald px-6 py-3 text-center font-semibold text-navy">Let's Talk</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
