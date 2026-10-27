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

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" end className={link}>Home</NavLink>
          {groups.map((g) => (
            <div key={g.key} className="relative" onMouseEnter={() => setOpen(g.key)} onMouseLeave={() => setOpen(null)}>
              <button type="button" aria-expanded={open === g.key} aria-haspopup="true"
                onClick={() => setOpen(open === g.key ? null : g.key)}
                onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(g.key); setTimeout(() => (e.currentTarget.parentElement?.querySelector('[role=menuitem]') as HTMLElement)?.focus(), 30) } }}
                className={`flex items-center gap-1 px-3 py-2 text-base font-medium hover:text-emerald ${pathname.startsWith(`/${g.key.toLowerCase()}`) ? 'text-emerald' : 'text-white'}`}>
                {g.key}<ChevronDown size={14} className={`transition-transform ${open === g.key ? 'rotate-180' : ''}`} aria-hidden />
              </button>
              <AnimatePresence>
                {open === g.key && (
                  <motion.ul role="menu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full w-80 border border-white/10 bg-navy p-2 shadow-2xl">
                    {g.items.map((it) => { const I = icons[it.icon]; return (
                      <li key={it.to} role="none">
                        <NavLink to={it.to} role="menuitem" className={({ isActive }) => `flex gap-3 rounded p-3 transition-colors hover:bg-forest ${isActive ? 'bg-forest' : ''}`}>
                          <I size={18} className="mt-0.5 shrink-0 text-emerald" aria-hidden />
                          <span><span className="block text-sm font-semibold text-white">{it.label}</span><span className="block text-xs text-white/60">{it.desc}</span></span>
                        </NavLink>
                      </li>) })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
          <Link to="/contact" className="ml-4 rounded-full bg-emerald px-5 py-2.5 text-base font-semibold text-navy transition-colors hover:bg-white">Let's Talk</Link>
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
