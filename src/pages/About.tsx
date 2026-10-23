import { CTA, Reveal, SectionHeading, Art } from '../components/ui'
import { LogoMarquee } from './Home'
import { partners } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

export default function About() {
  usePageMeta('About', 'THAZHAL combines geospatial technologies, imagery analytics and intelligent monitoring.')
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-20 pt-36">
        <Art variant={0} className="absolute inset-0 h-full w-full opacity-60" />
        <div className="wrap relative"><p className="eyebrow mb-4">About us</p>
          <h1 className="max-w-4xl text-4xl font-bold text-white sm:text-6xl">Innovation meets geospatial intelligence.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies, imagery analytics, and intelligent monitoring to help organizations better understand the world around them.</p></div>
      </section>
      <section className="section"><div className="wrap grid gap-10 md:grid-cols-2">
        <Reveal><h2 className="text-3xl font-bold">Mission</h2><p className="mt-4 text-lg text-slate-700">To make geospatial intelligence more useful for environmental understanding, infrastructure assessment, and informed decision-making.</p></Reveal>
        <Reveal delay={0.1}><h2 className="text-3xl font-bold">Vision</h2><p className="mt-4 text-lg text-slate-700">To contribute to a future where better spatial information supports a more resilient and sustainable world.</p></Reveal>
      </div></section>
      <section className="bg-forest section"><div className="wrap grid gap-12 lg:grid-cols-2">
        <Reveal><SectionHeading dark title="Our approach" text="We bring data and technology together: gather relevant geospatial information, analyse it for patterns and change, and turn it into insight that supports planning and decisions." /></Reveal>
        <Reveal delay={0.1}><h3 className="font-display text-xl font-bold text-white">Areas of expertise</h3>
          <ul className="mt-5 space-y-3 text-white/85">{['Environmental Monitoring', 'Imagery Analytics for Informed Decision-Making', 'Cutting-Edge Technology for Comprehensive Surveys', 'Geospatial Intelligence for Infrastructure Assessment'].map((x) => <li key={x} className="flex gap-3"><span className="mt-3 h-px w-6 shrink-0 bg-emerald" />{x}</li>)}</ul></Reveal>
      </div></section>
      <section className="section"><div className="wrap">
        <h2 className="text-3xl font-bold">Industries served</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">{[['Infrastructure', 'Highways, bridges, urban systems and industrial facilities.'], ['Environmental', 'Forests, rivers, landscapes and environmental change.']].map(([t, d]) => <div key={t} className="border-l-2 border-emerald bg-white p-7"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-slate-600">{d}</p></div>)}</div>
      </div></section>
      <section className="bg-white section"><div className="wrap"><SectionHeading eyebrow="Our network" title="Customers and Partners" /></div><div className="mt-10"><LogoMarquee list={partners} /></div></section>
      <CTA />
    </>
  )
}
