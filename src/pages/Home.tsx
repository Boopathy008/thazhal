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
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
      <div className={slow ? 'marquee-track-slow' : 'marquee-track'}>
        {items.map((p, i) => (
          <div key={i} className="mx-5 flex shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-10 shadow-sm transition-shadow hover:shadow-md"
            style={{ height: '170px', width: '300px' }}>
            {p.logo
              ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" style={{ maxHeight: '120px' }} />
              : <span className="font-mono text-xs text-slate2">Logo</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SupporterGrid({ list }: { list: { name: string; logo: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 items-stretch">
      {list.map((p, i) => (
        <div key={i} className="flex h-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald/40">
          {p.logo
            ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-24 max-w-full object-contain" />
            : <span className="font-mono text-xs text-slate2">Logo</span>}
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

      {/* ── Interactive Geospatial Stats Strip ── */}
      <section className="relative border-y border-emerald/20 bg-navy py-10 text-white overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="wrap relative grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { icon: Layers, label: 'Observation Satellites', val: '24/7', desc: 'Real-time constellation links' },
            { icon: Activity, label: 'Analytics Resolution', val: '< 0.5m', desc: 'High-precision multispectral' },
            { icon: Compass, label: 'Monitored Acreage', val: '1.2M+', desc: 'Land, forest & water systems' },
            { icon: ShieldCheck, label: 'Predictive Accuracy', val: '99.4%', desc: 'AI-driven hazard modeling' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <div className="group relative flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-emerald/40 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-emerald/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.val}</span>
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-emerald">{stat.label}</h4>
                  <p className="mt-1 text-xs text-white/60">{stat.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── About Section with 3D Tilt Artwork (Image Size Reduced) ── */}
      <section className="relative overflow-hidden bg-white section">
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow="About us" title="Welcome to THAZHAL" />
              <p className="mt-4 font-display text-lg text-emerald">Innovation meets geospatial intelligence.</p>
              <p className="mt-5 text-base text-slate-600">THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies, imagery analytics, and intelligent monitoring to help organizations better understand the world around them.</p>
              <p className="mt-3.5 text-base text-slate-600">We bring data and technology together to support informed decision-making, environmental awareness, and more resilient infrastructure.</p>
              <ul className="mt-6 space-y-3 text-navy">
                {[
                  'Environmental Monitoring with Satellite Precision',
                  'Imagery Analytics for Informed Decision-Making',
                  'Cutting-Edge Technology for Comprehensive Surveys',
                  'Geospatial Intelligence for Infrastructure Assessment'
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2.5 text-base group">
                    <span className="h-1.5 w-5 shrink-0 bg-emerald rounded-full transition-all group-hover:w-8 group-hover:bg-forest" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-9"><Btn to="/contact">Contact Us</Btn></div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.1} className="w-full max-w-sm">
              <Card3D className="aspect-square overflow-hidden rounded-2xl shadow-xl border border-slate-200">
                <div className="relative h-full w-full group overflow-hidden">
                  <img src="/images/about.jpg" alt="About THAZHAL" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* 3D Scanning Line Effect on image */}
                  <div className="pointer-events-none absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-geo-scan" />
                </div>
              </Card3D>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-gradient section relative overflow-hidden">
        {/* Subtle moving grid background in dark section */}
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-10" />
        <div className="wrap relative">
          <Reveal><SectionHeading dark eyebrow="Our products" title="Purpose-Built Intelligence. Real-World Impact." text="Explore technology and services designed to help organizations assess risk, understand environmental conditions, and make better-informed decisions." /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">{products.map((p, i) => <Reveal key={p.slug} delay={i * 0.1} className="h-full"><ProductCard p={p} /></Reveal>)}</div>
        </div>
      </section>

      <section id="solutions" className="bg-white section">
        <div className="wrap space-y-24">
          <Reveal><SectionHeading title="Technology That Connects Data to Decisions" /></Reveal>
          {solutions.map((s, i) => <Reveal key={s.slug}><SolutionBlock s={s} flip={i % 2 === 1} light /></Reveal>)}
        </div>
      </section>

      {/* ── From Observation to Insight (Equal Height Cards) ── */}
      <section className="section-gradient section relative overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-10" />
        <div className="wrap relative">
          <Reveal><SectionHeading dark title="From Observation to Insight" /></Reveal>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-3 items-stretch">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-emerald/50 md:block" aria-hidden />
            {[['01', 'Observe', 'Gather relevant geospatial information and imagery.'], ['02', 'Understand', 'Analyze spatial information to identify patterns, changes, and useful insights.'], ['03', 'Act', 'Support better-informed planning and decisions.']].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.12} className="h-full flex flex-col">
                <Card3D className="h-full flex flex-col">
                  <li className="relative flex flex-1 flex-col justify-start rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-emerald/40 hover:bg-white/[0.06]">
                    <span className="relative inline-block font-display text-5xl font-bold text-emerald/60">{n}</span>
                    <h3 className="mt-4 text-xl font-bold text-white">{t}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{d}</p>
                  </li>
                </Card3D>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Our Network & Supported By (Aligned Left) ── */}
      <section className="bg-white section">
        <div className="wrap">
          <Reveal><SectionHeading eyebrow="Our network" title="Working with Leading Organisations" text="Building meaningful connections with organizations working toward a more informed, resilient, and sustainable future." /></Reveal>
        </div>
        <div className="mt-12">
          <LogoMarquee list={partners} />
        </div>
        <div className="wrap mt-20">
          <Reveal>
            <SectionHeading eyebrow="Backed by Excellence" title="Supported By" text="Organizations and institutions championing our geospatial and environmental innovations." />
          </Reveal>
          <div className="mt-10">
            <SupporterGrid list={supporters} />
          </div>
        </div>
      </section>

      <section className="section-gradient section relative overflow-hidden">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-10" />
        <div className="wrap relative">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <SectionHeading dark eyebrow="Insights & perspectives" title="Latest from THAZHAL" text="Explore how geospatial intelligence transforms environmental management, infrastructure, and resilience." />
              <Link to="/blog" className="text-sm font-semibold text-emerald hover:text-white transition-colors shrink-0">View all 8 articles →</Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {articles.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1} className="h-full">
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
