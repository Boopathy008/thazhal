/**
 * Home.tsx — THAZHAL homepage
 * Premium editorial layout: taste-skill anti-slop + Linear/Vercel design system.
 */

import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { Btn, CTA, Reveal, SectionHeading, Card3D } from '../components/ui'
import { BlogCard, ProductCard, SolutionBlock } from '../components/Cards'
import { articles, partners, products, solutions, supporters } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import { Layers, Activity, Compass, ShieldCheck } from 'lucide-react'

export function LogoMarquee({ list, slow = false }: { list: { name: string; logo: string }[]; slow?: boolean }) {
  const items = [...list, ...list]
  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)' }}>
      <div className={slow ? 'marquee-track-slow' : 'marquee-track'}>
        {items.map((p, i) => (
          <div
            key={i}
            className="mx-4 flex shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white px-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald/30"
            style={{ height: '160px', width: '280px' }}
          >
            {p.logo
              ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" style={{ maxHeight: '110px' }} />
              : <span className="font-mono text-xs text-slate-300">Logo</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SupporterGrid({ list }: { list: { name: string; logo: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 items-stretch">
      {list.map((p, i) => (
        <div
          key={i}
          className="flex h-32 items-center justify-center rounded-xl border border-slate-200/80 bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald/30 hover:-translate-y-0.5"
        >
          {p.logo
            ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-20 max-w-full object-contain" />
            : <span className="font-mono text-xs text-slate-300">Logo</span>}
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  usePageMeta('THAZHAL')
  return (
    <>
      <Hero />

      {/* ── Stats strip — geospatial data metrics ── */}
      <section id="impact" className="relative border-y border-emerald/15 section-gradient py-12 text-white overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />
        <div className="wrap relative grid grid-cols-2 gap-5 sm:grid-cols-4">
          {[
            { icon: Layers,     label: 'Observation Satellites', val: '24/7',   desc: 'Real-time constellation links' },
            { icon: Activity,   label: 'Analytics Resolution',   val: '< 0.5m', desc: 'High-precision multispectral' },
            { icon: Compass,    label: 'Monitored Acreage',      val: '1.2M+',  desc: 'Land, forest & water systems' },
            { icon: ShieldCheck,label: 'Predictive Accuracy',    val: '99.4%',  desc: 'AI-driven hazard modeling' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <div className="group relative flex flex-col gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-350 hover:border-emerald/35 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-emerald/8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald/12 text-emerald transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={18} aria-hidden />
                    </div>
                    <span className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.val}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-emerald">{stat.label}</h4>
                    <p className="mt-0.5 text-[12px] text-white/50">{stat.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── About us ── */}
      <section className="relative overflow-hidden bg-white section">
        {/* Dot-grid texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow="About us" title="Welcome to THAZHAL" />
              <p className="mt-4 text-[15px] font-medium text-forest">
                Innovation meets geospatial intelligence.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies,
                imagery analytics, and intelligent monitoring to help organizations better understand the world around them.
              </p>
              <p className="mt-3.5 text-[15px] leading-relaxed text-slate-500">
                We bring data and technology together to support informed decision-making, environmental awareness,
                and more resilient infrastructure.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  'Environmental Monitoring with Satellite Precision',
                  'Imagery Analytics for Informed Decision-Making',
                  'Cutting-Edge Technology for Comprehensive Surveys',
                  'Geospatial Intelligence for Infrastructure Assessment',
                ].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-[14px] text-navy group">
                    <span className="h-[2px] w-5 shrink-0 rounded-full bg-emerald transition-all duration-300 group-hover:w-8 group-hover:bg-forest" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Btn to="/contact">Contact Us</Btn>
              </div>
            </Reveal>
          </div>

          {/* Image — 5 cols, reduced size */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.1} className="w-full max-w-[320px]">
              <Card3D className="aspect-[4/4.5] overflow-hidden rounded-2xl shadow-xl border border-slate-200/60">
                <div className="relative h-full w-full group overflow-hidden">
                  <img
                    src="/images/about.jpg"
                    alt="About THAZHAL"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Scan line */}
                  <div className="scan-line pointer-events-none" />
                  {/* Corner geospatial label */}
                  <div className="absolute bottom-3 left-3 hud-tag text-[9px]">
                    <span className="h-1 w-1 rounded-full bg-emerald animate-ping-slow" />
                    GEOSPATIAL CORE
                  </div>
                </div>
              </Card3D>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our products ── */}
      <section className="section-gradient section relative overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-12" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Our products"
              title="Purpose-Built Intelligence. Real-World Impact."
              text="Explore technology and services designed to help organizations assess risk, understand environmental conditions, and make better-informed decisions."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="bg-white section">
        <div className="wrap space-y-24">
          <Reveal>
            <SectionHeading title="Technology That Connects Data to Decisions" />
          </Reveal>
          {solutions.map((s, i) => (
            <Reveal key={s.slug}>
              <SolutionBlock s={s} flip={i % 2 === 1} light />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── From Observation to Insight ── */}
      <section className="section-gradient section relative overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-12" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading dark title="From Observation to Insight" />
          </Reveal>
          <ol className="relative mt-14 grid gap-7 md:grid-cols-3 items-stretch">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald/40 to-transparent md:block" aria-hidden />
            {[
              ['01', 'Observe', 'Gather relevant geospatial information and imagery from satellites and sensors.'],
              ['02', 'Understand', 'Analyze spatial information to identify patterns, changes, and meaningful insights.'],
              ['03', 'Act', 'Support better-informed planning, decisions, and environmental interventions.'],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.1} className="h-full flex flex-col">
                <Card3D className="h-full flex flex-col">
                  <li className="relative flex flex-1 flex-col justify-start rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-350 hover:border-emerald/35 hover:bg-white/[0.07] list-none">
                    {/* number */}
                    <span className="font-display text-6xl font-bold text-emerald/40 leading-none">{n}</span>
                    {/* step dot on the horizontal line */}
                    <div className="absolute -top-[1.5px] left-8 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-emerald bg-navy md:block" />
                    <h3 className="mt-5 text-xl font-bold text-white">{t}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">{d}</p>
                  </li>
                </Card3D>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Our Network & Supported By ── */}
      <section className="bg-white section">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              eyebrow="Our network"
              title="Working with Leading Organisations"
              text="Building meaningful connections with organizations working toward a more informed, resilient, and sustainable future."
            />
          </Reveal>
        </div>
        <div className="mt-12">
          <LogoMarquee list={partners} />
        </div>
        <div className="wrap mt-20">
          <Reveal>
            <SectionHeading
              eyebrow="Backed by excellence"
              title="Supported By"
              text="Organizations and institutions championing our geospatial and environmental innovations."
            />
          </Reveal>
          <div className="mt-10">
            <SupporterGrid list={supporters} />
          </div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="section-gradient section relative overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-12" />
        <div className="wrap relative">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <SectionHeading
                dark
                eyebrow="Insights & perspectives"
                title="Latest from THAZHAL"
                text="Explore how geospatial intelligence transforms environmental management, infrastructure, and resilience."
              />
              <Link
                to="/blog"
                className="shrink-0 text-sm font-semibold text-emerald transition-all duration-300 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1"
              >
                View all 8 articles →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {articles.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08} className="h-full">
                <BlogCard a={a} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
