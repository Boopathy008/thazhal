/**
 * Hero — homepage hero with the authentic Originkit Terra Dusk 3D Earth globe.
 * Clean layout: Hero text strictly aligned on the left, interactive 3D globe filling right side.
 */

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Globe, Orbit, Satellite } from 'lucide-react'
import { Btn } from './ui'
import TerraDusk from './TerraDusk'

/* ── Animation factory ─────────────────────────────────────────── */
function item(i: number, reduce: boolean | null) {
  return {
    initial: reduce ? false : { opacity: 0, x: -36, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    transition: { duration: 0.8, delay: 0.15 + i * 0.16, ease: [0.22, 1, 0.36, 1] as const },
  }
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ background: '#02040A' }}
    >
      {/* ── 3D Interactive Terra Dusk Globe ────────────────────────── */}
      {/* pointer-events-auto and proper z-index so hover and drag work seamlessly */}
      <div className="pointer-events-auto absolute inset-0 z-0 flex items-center justify-end">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[65%] xl:w-[60%]">
          <TerraDusk
            background="transparent"
            size={760}
            sun="cursor"
            drag={true}
            hover={8.5}
            speed={7}
            stars={7}
            daylight={86}
            look={{
              clouds: 6,
              lights: 6,
              atmosphere: '#A9B887', // Brand sage green atmosphere glow
            }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          />
        </div>
      </div>

      {/* ── High-contrast gradient veil to keep left side text razor sharp (pointer-events-none so it doesn't block mouse) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to right, rgba(2,4,10,0.96) 0%, rgba(2,4,10,0.92) 36%, rgba(2,4,10,0.65) 54%, rgba(2,4,10,0.15) 75%, transparent 100%)',
        }}
      />

      {/* ── Mobile bottom veil for readable text on smaller viewports ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(2,4,10,0.95) 45%, rgba(2,4,10,0.6) 75%, transparent 100%)',
        }}
      />

      {/* ── Floating 3D Geospatial Satellites & Orbital telemetry markers ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {/* Orbit ring 1 */}
        <div 
          className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full border border-emerald/15 opacity-40 animate-spin"
          style={{ animationDuration: '65s' }}
        />
        {/* Orbit ring 2 */}
        <div 
          className="absolute right-[5%] top-[8%] h-[680px] w-[680px] rounded-full border border-dashed border-emerald/20 opacity-30 animate-spin"
          style={{ animationDuration: '95s', animationDirection: 'reverse' }}
        />

        {/* Floating Telemetry Coordinates Tag */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute right-8 top-28 hidden lg:flex items-center gap-2 rounded-lg border border-emerald/20 bg-navy/60 px-3 py-1.5 backdrop-blur-md text-[11px] font-mono text-emerald/90 shadow-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-ping" />
          <span>LAT 13.0827° N · LON 80.2707° E · ORBIT SYNCHRONIZED</span>
        </motion.div>

        {/* Floating Real-time Altitude Tag */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-12 bottom-20 hidden lg:flex items-center gap-2 rounded-lg border border-white/10 bg-navy/60 px-3 py-1.5 backdrop-blur-md text-[11px] font-mono text-white/70 shadow-xl"
        >
          <Satellite size={13} className="text-emerald" />
          <span>ALT 550KM · MULTISPECTRAL RESOLUTION 0.5M</span>
        </motion.div>
      </div>

      {/* ── Hero content: Strictly aligned to the left side ─────────── */}
      {/* wrap has pointer-events-none with inner items pointer-events-auto so globe behind can be clicked/dragged freely */}
      <div className="wrap pointer-events-none relative z-10 w-full py-28 sm:py-36">
        <div className="pointer-events-auto max-w-xl text-left lg:max-w-2xl">
          {/* Geospatial Radar Eyebrow Badge */}
          <motion.div
            {...item(0, reduce)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-emerald">
              Geospatial Intelligence · Environmental Innovation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...item(1, reduce)}
            className="text-left text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            See the Earth{' '}
            <span className="text-emerald">Differently.</span>
            <br />
            Build a More{' '}
            <span className="text-emerald">Resilient</span> Future.
          </motion.h1>

          {/* Description */}
          <motion.p
            {...item(2, reduce)}
            className="mt-6 max-w-xl text-left text-base leading-relaxed text-white/75 sm:text-lg"
          >
            THAZHAL transforms geospatial data into meaningful intelligence, helping
            organisations understand environmental change, monitor critical infrastructure,
            and make informed decisions for a sustainable future.
          </motion.p>

          {/* Feature Badges for Geospatial Tech */}
          <motion.div
            {...item(3, reduce)}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-white/60"
          >
            <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/5 px-2.5 py-1 backdrop-blur-sm">
              <Satellite size={15} className="text-emerald" /> Satellite Observation
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/5 px-2.5 py-1 backdrop-blur-sm">
              <Orbit size={15} className="text-emerald" /> Real-Time Analytics
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/5 px-2.5 py-1 backdrop-blur-sm">
              <Globe size={15} className="text-emerald" /> 3D Digital Twin
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...item(4, reduce)} className="mt-9 flex flex-wrap items-center gap-4">
            <Btn to="/#solutions">Explore Our Solutions</Btn>
            <Btn to="/about" variant="ghost">Discover THAZHAL</Btn>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll chevron indicator ─────────────────────────────────── */}
      <a
        href="#impact"
        aria-label="Scroll to content"
        className="pointer-events-auto absolute bottom-6 left-8 z-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 transition-colors hover:text-emerald"
      >
        <ChevronDown size={18} className={reduce ? '' : 'animate-bounce'} />
        <span>Scroll Down</span>
      </a>
    </section>
  )
}
