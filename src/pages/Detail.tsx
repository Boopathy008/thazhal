import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, Trees, Leaf, LineChart, ShieldAlert, Building2, Monitor, LayoutGrid, AlertCircle, Sprout, Headphones, Waves, CloudRain, Sun, Mountain, TrendingUp, Thermometer, Wind, RefreshCw, Zap, Landmark, Shield } from 'lucide-react'
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
  const isSwoad = slug === 'swoad'
  const isClimateAudit = slug === 'climate-audit'

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
      ) : isSwoad ? (
        /* ── Custom SWOAD / Water Body Monitoring Sections ── */
        <>
          {/* Section 1 — Why to use this product */}
          <section className="bg-white section">
            <div className="wrap">
              <Reveal>
                <p className="eyebrow mb-3 text-amber-500 font-bold uppercase tracking-wider text-xs">OUR PRODUCTS</p>
                <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl max-w-xl">
                  Why to use this product ?
                </h2>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-500">
                  Monitor the surface water body at your fingertips and make proactive decisions with advanced analytics.
                  Tackle water scarcity by leveraging historical data from satellites, enabling informed and effective
                  management strategies.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
                  {[
                    'Comprehensive analysis',
                    'Environmental sustainability',
                    'Data-driven approach & Technology leverage',
                    'Advanced analytics & Water scarcity',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 text-amber-500">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-bold text-navy leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Section 2 — Why you should have this */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — features grid */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl mb-10">
                      Why you should have this
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                      {[
                        {
                          icon: Building2,
                          title: 'City administration',
                          desc: 'Unified application specific portals for smart workflow improving transparency.',
                        },
                        {
                          icon: Monitor,
                          title: 'Real-time monitoring',
                          desc: 'Drone based assessment of all government assets.',
                        },
                        {
                          icon: LayoutGrid,
                          title: 'Infrastructure',
                          desc: 'Leverages solutions for city developments maintaining effectiveness.',
                        },
                        {
                          icon: AlertCircle,
                          title: 'Emergency management',
                          desc: 'Customized warning alerts on extreme events.',
                        },
                        {
                          icon: Sprout,
                          title: 'Sustainable developments',
                          desc: 'Active monitoring and actionable developments of natural/economic resources.',
                        },
                        {
                          icon: Headphones,
                          title: 'Decision support',
                          desc: 'Provides solutions on task management for that last miles visibility.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                              <Icon size={22} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — dam image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1} className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-[4/5] border border-slate-200">
                      <img
                        src="/images/swoad.jpg"
                        alt="Water body monitoring — dam infrastructure"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isClimateAudit ? (
        /* ── Custom Climate Audit Sections ── */
        <>
          {/* Section 1 — Why to use this product */}
          <section className="bg-white section">
            <div className="wrap">
              <Reveal>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-500">OUR PRODUCTS</p>
                <h2 className="max-w-xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                  Why to use this product ?
                </h2>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-500">
                  Equips organizations with the tools to forecast, prepare for and reduce climate-related disruptions.
                  Understanding climate risks allows companies to protect long term value, ensuring business continuity
                  and investor confidence. Identifying location-specific hazards helps to prioritize adaptation actions
                  at any level.
                </p>
                <div className="mt-10 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
                  {[
                    'Comprehensive vulnerability Assessment and Risk Scoring',
                    'Environmental sustainability',
                    'Data-driven approach & Technology leverage',
                    'Advanced analytics & Water scarcity',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 text-amber-500">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-bold leading-snug text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Section 2 — List of Hazards */}
          <section className="section bg-slate-50">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">List of Hazards</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
                {[
                  {
                    icon: Waves,
                    title: 'Flood',
                    desc: 'Evaluate the frequency and intensity of flooding events including river overflows, storm surges and sudden flash floods that pose serious threats to assets and livelihoods.',
                  },
                  {
                    icon: CloudRain,
                    title: 'Extreme Rainfall',
                    desc: 'Evaluate patterns of intense and prolonged rainfall that increase the risk of urban flooding, waterlogging, infrastructure damage and disruption to essential services.',
                  },
                  {
                    icon: Sun,
                    title: 'Drought',
                    desc: 'Identify areas vulnerable to prolonged water scarcity, affecting agriculture, groundwater levels and industrial operations.',
                  },
                  {
                    icon: Mountain,
                    title: 'Landslide',
                    desc: 'Identify landslide-prone zones triggered by heavy rainfall, soil erosion or seismic activity which can endanger lives, block transport routes, and damage property.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Sea Level Rise',
                    desc: 'Assess long-term sea level rise and tidal intrusion risks that threaten coastal infrastructure, freshwater supplies and low-lying communities.',
                  },
                  {
                    icon: Thermometer,
                    title: 'Temperature',
                    desc: 'Identify geographic areas and sectors at risk from rising temperatures and heat stress, enabling targeted mitigation for health, productivity and infrastructure stability.',
                  },
                  {
                    icon: Wind,
                    title: 'Wind',
                    desc: 'Analyze high-wind events, including cyclonic gusts and storm winds, that can damage buildings, power lines, transportation systems and outdoor operations.',
                  },
                  {
                    icon: RefreshCw,
                    title: 'Cyclone',
                    desc: 'Analyze cyclone-prone zones and wind damage potential to safeguard critical assets and minimize downtime.',
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <Reveal key={item.title} delay={i * 0.05}>
                      <div className="flex gap-4 items-start">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                          <Icon size={24} aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-[17px] font-bold text-navy">{item.title}</h3>
                          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Section 3 — Who Can We Assist? */}
          <section className="section bg-white overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — audience grid */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="mb-10 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Who Can We Assist?
                    </h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                      {[
                        {
                          icon: Building2,
                          title: 'Real Estate Developers and Investors',
                          desc: 'Protect long-term asset value, optimize site selection and ensure climate-resilient investments with forward-looking risk insights tailored for real estate development and acquisitions.',
                        },
                        {
                          icon: Zap,
                          title: 'Energy Companies',
                          desc: 'Strengthen infrastructure, reduce downtime, and optimize future investments against rising temperatures, extreme weather, and supply chain disruptions.',
                        },
                        {
                          icon: Landmark,
                          title: 'Banks and Financial Institutions',
                          desc: 'Future-proof lending and investment strategies by integrating climate risk into asset valuations, credit risk models, and regulatory compliance frameworks.',
                        },
                        {
                          icon: Shield,
                          title: 'Insurance Providers',
                          desc: 'Strengthen risk assessments, optimize policy offerings, and reduce claims volatility by integrating climate hazard insights into insurance workflows.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                              <Icon size={22} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — cyclone satellite image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1}>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/4.5]">
                      <img
                        src="/images/climate-audit.jpg"
                        alt="Climate risk — satellite view of cyclone"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
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
