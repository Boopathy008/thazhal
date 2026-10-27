import { Link, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Btn, CTA, Reveal, SectionHeading, Visual } from '../components/ui'
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
