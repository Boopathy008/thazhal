import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { BlogCard } from '../components/Cards'
import { articles, categories } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const PAGE = 3
export default function Blog() {
  usePageMeta('Blog', 'Perspectives on geospatial intelligence, environmental monitoring and infrastructure resilience.')
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [n, setN] = useState(PAGE)
  const list = useMemo(() => articles.filter((a) => (cat === 'All' || a.category === cat) && `${a.title} ${a.excerpt}`.toLowerCase().includes(q.toLowerCase())), [cat, q])
  return (
    <>
      <section className="bg-navy pb-16 pt-36"><div className="wrap"><p className="eyebrow mb-4">Insights & perspectives</p>
        <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-6xl">Ideas Shaping a Smarter, More Sustainable Future</h1>
        <p className="mt-4 text-sm text-white/50">Articles are draft content until final copy and dates are supplied.</p></div></section>
      <section className="section"><div className="wrap">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((c) => <button key={c} type="button" aria-pressed={cat === c} onClick={() => { setCat(c); setN(PAGE) }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${cat === c ? 'border-navy bg-navy text-white' : 'border-slate2/50 hover:border-emerald'}`}>{c}</button>)}
          </div>
          <label className="relative block md:w-72"><span className="sr-only">Search articles</span><Search size={16} className="absolute left-3 top-3.5 text-slate2" aria-hidden />
            <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setN(PAGE) }} placeholder="Search articles" className="w-full border border-slate2/50 bg-white py-3 pl-9 pr-3 focus:border-emerald" /></label>
        </div>
        {list.length === 0 ? <p className="mt-16 text-lg text-slate-600">No articles match. Try a different keyword or choose All.</p> : (
          <div className="mt-12 grid gap-10 md:grid-cols-3">{list.slice(0, n).map((a) => <BlogCard key={a.slug} a={a} />)}</div>)}
        {n < list.length && <div className="mt-14 text-center"><button type="button" onClick={() => setN(n + PAGE)} className="rounded-full bg-navy px-7 py-3 font-semibold text-white hover:bg-forest">Load more</button></div>}
      </div></section>
    </>
  )
}
