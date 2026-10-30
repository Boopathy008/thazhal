import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, Trees, Leaf, LineChart, ShieldAlert } from 'lucide-react'
import { Btn, Card3D, CTA, Reveal, SectionHeading, Visual } from '../components/ui'
import { Detail as D, details, pathOf } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

export default function DetailPage({ kind }: { kind: D['kind'] }) {
  const { slug } = useParams()
  const d = details.find((x) => x.kind === kind && x.slug === slug)
  usePageMeta(d?.name ?? 'Not found', d?.summary)
  if (!d) return <NotFound />
  const related = d.related.map((p) => details.find((x) => pathOf(x) === p)).filter(Boolean) as D[]
  const label = kind === 'product' ? 'Product' : 'Solution'
  const isForest = slug === 'forest-intelligence'

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy pb-16 pt-32">
        <div className="absolute inset-0"><Visual variant={d.variant} image={d.image} label={`${d.name} visual`} /></div>
        <div className="absolute inset-0 bg-navy/60" />
        <div className="wrap relative">
          <p className="eyebrow mb-3">{label}</p>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">{d.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{d.tagline}</p>
          <div className="mt-7"><Btn to="/contact">Talk to Our Team</Btn></div>
        </div>
      </section>

      {isForest ? (
        /* ── Custom Forest Intelligence Section ── */
        <section className="bg-white section">
          <div className="wrap space-y-16">
            <Reveal>
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                  Monitor Forest Health, Track Deforestation, and Support Carbon Assessment with Thazhal’s Geospatial Intelligence
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Leverage satellite imagery, remote sensing, GIS, and AI-powered analytics to monitor forest ecosystems,
                  assess vegetation changes, and support afforestation and carbon assessment initiatives.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Canopy Density & Tree Cover Change Detection',
                    'Plantation Monitoring & Carbon Stock Estimation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base font-semibold text-navy">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                        <ArrowRight size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 3 Interactive 3D Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch pt-4">
              {[
                {
                  id: 'card-1',
                  num: '01',
                  icon: Trees,
                  title: 'Forest Health Monitoring',
                  desc: 'Monitor canopy density, tree cover, vegetation health, and changes across forest blocks using Earth Observation (EO) data and geospatial analytics. Integrate available environmental datasets to assess forest conditions and generate GIS-based maps, monitoring reports, and decision-support insights for conservation planning and impact assessment.',
                },
                {
                  id: 'card-2',
                  num: '02',
                  icon: LineChart,
                  title: 'Carbon Stock Estimation & Plantation Planning',
                  desc: 'Assess plantation areas, map vegetation, and evaluate afforestation sites using satellite imagery, GIS, and remote sensing techniques. Support tree counting, species classification where data permits, vegetation structure analysis, and carbon stock estimation to help inform restoration planning and carbon assessment initiatives.',
                },
                {
                  id: 'card-3',
                  num: '03',
                  icon: ShieldAlert,
                  title: 'Deforestation & Biodiversity Monitoring',
                  desc: 'Use satellite-based change detection, Land Use and Land Cover (LULC) classification, and spatial analysis to identify forest cover loss, encroachment, invasive species, and ecosystem changes. Support forest departments and environmental organisations with geospatial insights for conservation planning, ecosystem monitoring, and restoration activities.',
                },
              ].map((card, i) => {
                const Icon = card.icon
                return (
                  <Reveal key={card.id} delay={i * 0.1} className="h-full">
                    <Card3D className="h-full">
                      <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-350 hover:border-emerald/40 hover:shadow-xl hover:shadow-navy/5">
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                              <Icon size={24} aria-hidden />
                            </div>
                            <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-emerald transition-colors">
                              {card.num}
                            </span>
                          </div>
                          <h3 className="mt-6 text-xl font-bold leading-snug text-navy group-hover:text-forest transition-colors">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                            {card.desc}
                          </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-emerald">
                          <span>Intelligence Layer</span>
                        </div>
                      </div>
                    </Card3D>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        /* ── Default Sections for other pages ── */
        <>
          <section className="section"><div className="wrap grid gap-12 lg:grid-cols-3">
            <Reveal><SectionHeading title="Overview" /></Reveal>
            <Reveal className="space-y-5 text-lg text-slate-700 lg:col-span-2"><p className="font-display text-2xl text-navy">{d.summary}</p>{d.overview.map((p) => <p key={p}>{p}</p>)}</Reveal>
          </div></section>

          <section className="bg-white section"><div className="wrap grid gap-14 md:grid-cols-2">
            <Reveal><h2 className="text-3xl font-bold">{kind === 'product' ? 'Intended use cases' : 'Potential applications'}</h2>
              <ul className="mt-6 space-y-3">{d.uses.map((u) => <li key={u} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald" size={20} aria-hidden />{u}</li>)}</ul></Reveal>
            <Reveal delay={0.1}><h2 className="text-3xl font-bold">Benefits</h2>
              <ul className="mt-6 space-y-3">{d.benefits.map((u) => <li key={u} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald" size={20} aria-hidden />{u}</li>)}</ul></Reveal>
          </div></section>
        </>
      )}

      <section className="bg-forest section"><div className="wrap">
        <Reveal><SectionHeading dark title={kind === 'product' ? 'How it works' : 'Geospatial intelligence in practice'} /></Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{d.steps.map((s, i) => <li key={s.title} className="border-t border-emerald/60 pt-5"><span className="font-mono text-sm text-emerald">{String(i + 1).padStart(2, '0')}</span><h3 className="mt-2 text-xl font-bold text-white">{s.title}</h3><p className="mt-2 text-white/70">{s.text}</p></li>)}</ol>
      </div></section>

      <section className="section"><div className="wrap grid gap-14 lg:grid-cols-2">
        <div><h2 className="text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-slate2/30 border-y border-slate2/30">{d.faqs.map((f) => <details key={f.q} className="group py-4"><summary className="cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary><p className="mt-2 text-slate-600">{f.a}</p></details>)}</div></div>
        <div><h2 className="text-3xl font-bold">Related</h2>
          <ul className="mt-6 space-y-3">{related.map((r) => <li key={r.slug}><Link to={pathOf(r)} className="block border border-slate2/30 bg-white p-5 transition-shadow hover:shadow-lg"><span className="font-display text-lg font-bold">{r.name}</span><span className="block text-sm text-slate-600">{r.tagline}</span></Link></li>)}</ul></div>
      </div></section>
      <CTA title={`Interested in ${d.name}?`} text="Tell us about your project and we will get back to you." />
    </>
  )
}
