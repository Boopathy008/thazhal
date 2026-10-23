import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { articles } from '../data/content'
import { Visual, CTA } from '../components/ui'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const a = articles.find((x) => x.slug === slug)
  usePageMeta(a?.title ?? 'Not found', a?.excerpt)
  if (!a) return <NotFound />
  return (
    <>
      <section className="bg-navy pb-14 pt-36"><div className="wrap max-w-3xl">
        <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-emerald"><ArrowLeft size={16} aria-hidden />All articles</Link>
        <p className="eyebrow mb-3">{a.category} · {a.date}</p>
        <h1 className="text-3xl font-bold text-white sm:text-5xl">{a.title}</h1>
      </div></section>
      <article className="section"><div className="wrap max-w-3xl">
        <div className="mb-10 aspect-[16/9] overflow-hidden"><Visual variant={a.variant} label={`Cover for ${a.title}`} /></div>
        <div className="space-y-5 text-lg leading-relaxed text-slate-700">{a.body.map((p) => <p key={p}>{p}</p>)}</div>
      </div></article>
      <CTA />
    </>
  )
}
