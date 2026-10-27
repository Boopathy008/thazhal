import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { articles } from '../data/content'
import { Visual, CTA } from '../components/ui'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

function renderParagraph(text: string, key: number) {
  // Check if line is an H3 heading (### Heading)
  if (text.startsWith('### ')) {
    return (
      <h3 key={key} className="mt-8 mb-4 font-display text-2xl font-bold text-navy sm:text-3xl">
        {text.replace('### ', '')}
      </h3>
    )
  }

  // Parse bold and line breaks within paragraphs
  const lines = text.split('\n')
  return (
    <div key={key} className="space-y-3">
      {lines.map((line, lIndex) => {
        // Simple bold parser for **bold** text
        const parts = line.split(/(\*\*.*?\*\*)/g)
        return (
          <p key={lIndex} className="text-base leading-relaxed text-slate-700 sm:text-lg">
            {parts.map((part, pIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={pIndex} className="font-semibold text-navy">
                    {part.slice(2, -2)}
                  </strong>
                )
              }
              return part
            })}
          </p>
        )
      })}
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const a = articles.find((x) => x.slug === slug)
  usePageMeta(a?.title ?? 'Not found', a?.excerpt)
  if (!a) return <NotFound />
  return (
    <>
      <section className="bg-navy pb-14 pt-36">
        <div className="wrap max-w-3xl">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-emerald hover:underline">
            <ArrowLeft size={16} aria-hidden />All articles
          </Link>
          <p className="eyebrow mb-3">
            {a.category} · {a.date} · by {a.author ?? 'Thazhal'}
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-5xl">{a.title}</h1>
        </div>
      </section>
      <article className="section bg-white">
        <div className="wrap max-w-3xl">
          <div className="mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Visual variant={a.variant} image={a.image} label={`Cover for ${a.title}`} />
          </div>
          <div className="space-y-6">
            {a.body.map((p, i) => renderParagraph(p, i))}
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
