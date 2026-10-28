import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const palettes = [['#2E3D28', '#1a2418'], ['#1a2418', '#2E3D28'], ['#3D5234', '#2E3D28'], ['#2E3D28', '#3D5234'], ['#1a2418', '#3D5234']]

/** Generated topographic artwork — stand-in for photography. */
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
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 38, rotateX: 8, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

export function Card3D({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const reduce = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotX = -((y - centerY) / centerY) * 8
    const rotY = ((x - centerX) / centerX) * 8
    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        reduce
          ? {}
          : isHovered
          ? { rotateX, rotateY, scale: 1.03, z: 30 }
          : { rotateX: 0, rotateY: 0, scale: 1, z: 0 }
      }
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
      {/* Dynamic 3D lighting sheen overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.18 : 0,
          background: `radial-gradient(circle at ${50 + rotateY * 5}% ${50 - rotateX * 5}%, rgba(255,255,255,0.85), transparent 65%)`,
        }}
      />
    </motion.div>
  )
}

/**
 * 3D Animated Button with spring physics, elevation depth, and subtle glowing highlight
 */
export function Btn({
  to,
  children,
  variant = 'primary',
  onClick,
  className = '',
}: {
  to?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'dark'
  onClick?: () => void
  className?: string
}) {
  const reduce = useReducedMotion()

  const cls = {
    primary:
      'bg-emerald text-navy shadow-lg shadow-emerald/20 hover:bg-white hover:shadow-emerald/40 hover:shadow-xl',
    ghost:
      'border border-white/40 text-white backdrop-blur-sm hover:border-emerald hover:text-emerald hover:bg-emerald/10 hover:shadow-lg hover:shadow-emerald/10',
    dark:
      'bg-navy text-white shadow-lg shadow-navy/20 hover:bg-forest hover:shadow-xl hover:shadow-forest/30',
  }[variant]

  const base = `group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${cls} ${className}`

  const motionProps = reduce
    ? {}
    : {
        whileHover: { scale: 1.05, y: -2.5 },
        whileTap: { scale: 0.96, y: 1 },
        transition: { type: 'spring', stiffness: 420, damping: 22 },
      }

  const inner = (
    <>
      {/* Light sheen animation across button on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden
        />
      </span>
    </>
  )

  return to ? (
    <motion.div {...motionProps} className="inline-block">
      <Link to={to} className={base}>
        {inner}
      </Link>
    </motion.div>
  ) : (
    <motion.button type="button" onClick={onClick} {...motionProps} className={base}>
      {inner}
    </motion.button>
  )
}

export function SectionHeading({ eyebrow, title, text, dark, center }: { eyebrow?: string; title: string; text?: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald animate-ping" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      )}
      <h2 className={`text-3xl font-bold leading-[1.15] sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-2xl text-base leading-relaxed ${center ? 'mx-auto' : ''} ${dark ? 'text-white/75' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}

export function CTA({ title = "Let's Turn Geospatial Data Into Meaningful Action.", text = "Have a project, a monitoring challenge, or an idea worth exploring? Let's discuss how THAZHAL's geospatial expertise can support your goals." }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-white section border-t border-slate-100">
      {/* Background geospatial subtle grid line */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(#2E3D28 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="wrap relative">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <p className="eyebrow">Connect With Us</p>
          </div>
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
