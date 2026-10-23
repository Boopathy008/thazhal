import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { Btn, CTA, Reveal, SectionHeading } from '../components/ui'
import { BlogCard, ProductCard, SolutionBlock } from '../components/Cards'
import { articles, partners, products, solutions, supporters } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

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
    <div className="flex flex-wrap items-center justify-center gap-6">
      {list.map((p, i) => (
        <div key={i} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-10 shadow-sm transition-shadow hover:shadow-md"
          style={{ height: '160px', width: '280px' }}>
          {p.logo
            ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" style={{ maxHeight: '110px' }} />
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


      <section className="relative overflow-hidden bg-white section">
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="About us" title="Welcome to THAZHAL" />
                    <p className="mt-4 font-display text-xl text-emerald">Innovation meets geospatial intelligence.</p>
            <p className="mt-6 text-lg text-slate-600">THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies, imagery analytics, and intelligent monitoring to help organizations better understand the world around them.</p>
            <p className="mt-4 text-lg text-slate-600">We bring data and technology together to support informed decision-making, environmental awareness, and more resilient infrastructure.</p>
            <ul className="mt-8 space-y-4 text-navy">{['Environmental Monitoring', 'Imagery Analytics for Informed Decision-Making', 'Cutting-Edge Technology for Comprehensive Surveys', 'Geospatial Intelligence for Infrastructure Assessment'].map((x) => <li key={x} className="flex items-center gap-3 text-lg"><span className="h-px w-6 shrink-0 bg-emerald" />{x}</li>)}</ul>
            <div className="mt-10"><Btn to="/contact">Contact Us</Btn></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
              <img src="/images/about.jpg" alt="About THAZHAL" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-gradient section">
        <div className="wrap">
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

      <section className="section-gradient section">
        <div className="wrap">
          <Reveal><SectionHeading dark title="From Observation to Insight" /></Reveal>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-emerald/50 md:block" aria-hidden />
            {[['01', 'Observe', 'Gather relevant geospatial information and imagery.'], ['02', 'Understand', 'Analyze spatial information to identify patterns, changes, and useful insights.'], ['03', 'Act', 'Support better-informed planning and decisions.']].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.12}><li className="relative"><span className="relative inline-block pr-4 font-display text-7xl font-bold text-emerald/60">{n}</span><h3 className="mt-4 text-2xl font-bold text-white">{t}</h3><p className="mt-3 text-lg text-white/75">{d}</p></li></Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white section">
        <div className="wrap">
          <Reveal><SectionHeading eyebrow="Our network" title="Working with Leading Organisations" text="Building meaningful connections with organizations working toward a more informed, resilient, and sustainable future." /></Reveal>
        </div>
        <div className="mt-12">
          <LogoMarquee list={partners} />
        </div>
        <div className="wrap">
          <h3 className="mb-10 mt-20 text-center text-3xl font-bold text-navy">Supported By</h3>
          <SupporterGrid list={supporters} />
        </div>
      </section>

      <section className="section-gradient section">
        <div className="wrap">
          <Reveal><SectionHeading dark eyebrow="Insights & perspectives" title="Ideas Shaping a Smarter, More Sustainable Future" text="Explore perspectives on geospatial intelligence, environmental monitoring, climate assessment, and infrastructure resilience." /></Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">{articles.slice(0, 3).map((a, i) => <Reveal key={a.slug} delay={i * 0.1}><BlogCard a={a} dark /></Reveal>)}</div>
          <p className="mt-12 text-lg"><Link to="/blog" className="font-semibold text-emerald underline underline-offset-4">View all articles →</Link></p>
        </div>
      </section>
      <CTA />
    </>
  )
}
