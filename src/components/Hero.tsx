/**
 * Hero — homepage hero with the TopologyField 3D interactive component.
 */

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Btn } from './ui'
import TopologyField from './TopologyField'

/* ── Animation factory ─────────────────────────────────────────── */
function item(i: number, reduce: boolean | null) {
  return {
    initial: reduce ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] as const },
  }
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ background: '#111a13' }}
    >
      {/* ── Topology Field Canvas Background ──────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-auto absolute inset-0 z-0 flex items-center justify-end"
      >
        <TopologyField
          background="transparent"
          edgeColor="#A9B887"
          nodeColor="#5EEAD4"
          density={140}
          dotSize={110}
          speed={40}
          hover={120}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        />
      </div>

      {/* ── Left-side dark gradient veil so text stays crisp & legible ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to right, rgba(17,26,19,0.95) 0%, rgba(17,26,19,0.85) 45%, rgba(17,26,19,0.4) 70%, transparent 100%)',
        }}
      />

      {/* ── Mobile bottom veil ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(17,26,19,0.95) 40%, rgba(17,26,19,0.6) 70%, transparent 100%)',
        }}
      />

      {/* ── Hero text ────────────────────────────────────────────────── */}
      <div className="wrap relative z-10 flex flex-col justify-center py-28 sm:py-32 lg:max-w-[55%]">
        <motion.p {...item(0, reduce)} className="eyebrow mb-5 text-xs sm:text-sm">
          Geospatial Intelligence · Environmental Innovation
        </motion.p>

        <motion.h1
          {...item(1, reduce)}
          className="max-w-2xl text-3xl font-bold leading-[1.07] text-white sm:text-5xl lg:text-6xl"
        >
          See the Earth{' '}
          <span className="text-emerald">Differently.</span>
          <br />
          Build a More{' '}
          <span className="text-emerald">Resilient</span> Future.
        </motion.h1>

        <motion.p
          {...item(2, reduce)}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          THAZHAL transforms geospatial data into meaningful intelligence, helping
          organisations understand environmental change, monitor critical infrastructure,
          and make informed decisions for a sustainable future.
        </motion.p>

        <motion.div {...item(3, reduce)} className="mt-9 flex flex-wrap gap-4">
          <Btn to="/#solutions">Explore Our Solutions</Btn>
          <Btn to="/about" variant="ghost">Discover THAZHAL</Btn>
        </motion.div>
      </div>

      {/* ── Scroll chevron ───────────────────────────────────────────── */}
      <a
        href="#impact"
        aria-label="Scroll to content"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-emerald"
      >
        <ChevronDown className={reduce ? '' : 'animate-bounce'} />
      </a>
    </section>
  )
}
