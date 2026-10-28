/**
 * Hero — homepage hero with the authentic Originkit Terra Dusk 3D Earth globe.
 * Premium layout: editorial left text, interactive 3D globe right.
 * Design: taste-skill anti-slop + awesome-design-md Linear/Vercel principles.
 */

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Globe, Orbit, Satellite } from 'lucide-react'
import { Btn } from './ui'
import TerraDusk from './TerraDusk'

/* ── Animation factory ─────────────────────────────────────────── */
function item(i: number, reduce: boolean | null) {
  return {
    initial: reduce ? false : { opacity: 0, x: -28, filter: 'blur(6px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    transition: { duration: 0.85, delay: 0.12 + i * 0.14, ease: [0.22, 1, 0.36, 1] as const },
  }
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ background: '#020806' }}
    >
      {/* ── Subtle dot-grid texture on very dark background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(169,184,135,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── 3D Interactive Terra Dusk Globe ── */}
      <div className="pointer-events-auto absolute inset-0 z-0 flex items-center justify-end">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[65%] xl:w-[62%]">
          <TerraDusk
            background="transparent"
            size={760}
            sun="cursor"
            drag={true}
            hover={9}
            speed={7}
            stars={8}
            daylight={86}
            look={{
              clouds: 6,
              lights: 6,
              atmosphere: '#A9B887',
            }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          />
        </div>
      </div>

      {/* ── Left-to-right gradient veil keeping text sharp ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to right, rgba(2,8,6,0.97) 0%, rgba(2,8,6,0.93) 34%, rgba(2,8,6,0.68) 52%, rgba(2,8,6,0.18) 72%, transparent 100%)',
        }}
      />

      {/* ── Mobile bottom veil ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(2,8,6,0.96) 48%, rgba(2,8,6,0.6) 76%, transparent 100%)',
        }}
      />

      {/* ── (HUD overlays removed) ── */}

      {/* ── Hero content — strictly left-aligned ── */}
      <div className="wrap pointer-events-none relative z-10 w-full py-28 sm:py-36">
        <div className="pointer-events-auto max-w-lg text-left lg:max-w-xl">

          {/* Eyebrow glass badge */}
          <motion.div
            {...item(0, reduce)}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-md ring-1 ring-white/10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/90">
              Geospatial Intelligence · Environmental Innovation
            </span>
          </motion.div>

          {/* Heading — tight tracking, editorial feel */}
          <motion.h1
            {...item(1, reduce)}
            className="text-left font-display text-[42px] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
          >
            See the Earth{' '}
            <span className="text-emerald">Differently.</span>
            <br />
            Build a More{' '}
            <span className="text-emerald">Resilient</span>{' '}
            Future.
          </motion.h1>

          {/* Description */}
          <motion.p
            {...item(2, reduce)}
            className="mt-6 max-w-md text-left text-[15px] leading-[1.7] text-white/65 sm:text-base"
          >
            THAZHAL transforms geospatial data into meaningful intelligence, helping
            organisations understand environmental change, monitor critical infrastructure,
            and make informed decisions for a sustainable future.
          </motion.p>

          {/* Feature chips */}
          <motion.div
            {...item(3, reduce)}
            className="mt-6 flex flex-wrap items-center gap-2.5"
          >
            {[
              { icon: Satellite, label: 'Satellite Observation' },
              { icon: Orbit, label: 'Real-Time Analytics' },
              { icon: Globe, label: '3D Digital Twin' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/55 backdrop-blur-sm transition-all duration-300 hover:border-emerald/30 hover:text-emerald"
              >
                <Icon size={13} className="text-emerald" aria-hidden />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...item(4, reduce)} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Btn to="/#solutions">Explore Our Solutions</Btn>
            <Btn to="/about" variant="ghost">Discover THAZHAL</Btn>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <a
        href="#impact"
        aria-label="Scroll to content"
        className="pointer-events-auto absolute bottom-7 left-8 z-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-emerald"
      >
        <ChevronDown size={16} className={reduce ? '' : 'animate-bounce'} />
        <span>Scroll</span>
      </a>
    </section>
  )
}
