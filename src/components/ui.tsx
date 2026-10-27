import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const palettes = [['#2E3D28', '#1a2418'], ['#1a2418', '#2E3D28'], ['#3D5234', '#2E3D28'], ['#2E3D28', '#3D5234'], ['#1a2418', '#3D5234']]

/** Generated topographic artwork — stand-in for photography. Pass real photos via the `image` field in content.ts. */
export function Art({ variant = 0, className = '', label }: { variant?: number; className?: string; label?: string }) {
  const [a, b] = palettes[variant % palettes.length]
  const id = `art${variant % palettes.length}`
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <rect width="800" height="600" fill={`url(#${id})`} />
      <g stroke="#A9B887" fill="none">
        {Array.from({ length: 16 }, (_, i) => (
          <ellipse key={i} cx={420 + Math.sin(i + variant) * 50} cy={300 + Math.cos(i * 1.3 + variant) * 40} rx={30 + i * 30} ry={20 + i * 21}
            strokeOpacity={i % 4 === 0 ? 0.28 : 0.1} transform={`rotate(${variant * 17 + i * 2.5} 420 300)`} />
        ))}
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" strokeOpacity=".05" />)}
        {Array.from({ length: 7 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} strokeOpacity=".05" />)}
      </g>
    </svg>
  )
}

export function Visual({ variant, image, label, className = '' }: { variant: number; image?: string; label: string; className?: string }) {
  return image
    ? <img src={image} alt={label} loading="lazy" className={`h-full w-full object-cover ${className}`} />
    : <Art variant={variant} label={label} className={`h-full w-full ${className}`} />
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export function Btn({ to, children, variant = 'primary', onClick }: { to?: string; children: ReactNode; variant?: 'primary' | 'ghost' | 'dark'; onClick?: () => void }) {
  const cls = {
    primary: 'bg-emerald text-navy hover:bg-white',
    ghost: 'border border-white/40 text-white hover:border-emerald hover:text-emerald',
    dark: 'bg-navy text-white hover:bg-forest',
  }[variant]
  const base = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${cls}`
  const inner = <>{children}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden /></>
  return to ? <Link to={to} className={base}>{inner}</Link> : <button type="button" onClick={onClick} className={base}>{inner}</button>
}

export function SectionHeading({ eyebrow, title, text, dark, center }: { eyebrow?: string; title: string; text?: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold leading-[1.15] sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-2xl text-base leading-relaxed ${center ? 'mx-auto' : ''} ${dark ? 'text-white/75' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}

export function CTA({ title = "Let's Turn Geospatial Data Into Meaningful Action.", text = "Have a project, a monitoring challenge, or an idea worth exploring? Let's discuss how THAZHAL's geospatial expertise can support your goals." }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-white section border-t border-slate-100">
      <div className="wrap relative">
        <Reveal>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-navy sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-500 leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Btn to="/contact">Talk to Our Team</Btn>
            <Btn to="/#solutions" variant="dark">Explore Our Solutions</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
