import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Article, Detail, pathOf } from '../data/content'
import { Visual, Card3D } from './ui'

export function ImageCard({ title, text, to, variant, image }: { title: string; text: string; to: string; variant: number; image?: string }) {
  return (
    <Link to={to} className="group relative block aspect-[4/5] overflow-hidden bg-navy sm:aspect-[5/6]">
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"><Visual variant={variant} image={image} label={`${title} imagery`} /></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="mt-3 max-w-md text-white/75">{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald">Read More <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden /></span>
      </div>
    </Link>
  )
}

export function ProductCard({ p }: { p: Detail }) {
  return (
    <Card3D className="h-full">
      <Link to={pathOf(p)} className="group flex h-full flex-col overflow-hidden bg-white rounded-2xl border border-slate-200/80 shadow-md transition-shadow duration-300 hover:shadow-2xl">
        <div className="aspect-[4/3] overflow-hidden"><div className="h-full transition-transform duration-700 group-hover:scale-105"><Visual variant={p.variant} image={p.image} label={`${p.name} visual`} /></div></div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="text-xl font-bold text-navy">{p.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{p.summary}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">Explore {p.name}<ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden /></span>
        </div>
      </Link>
    </Card3D>
  )
}

export function SolutionBlock({ s, flip, light }: { s: Detail; flip?: boolean; light?: boolean }) {
  const heading = light ? 'text-navy' : 'text-white'
  const body    = light ? 'text-slate-600' : 'text-white/70'
  const list    = light ? 'text-navy'     : 'text-white/85'
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={`aspect-[4/3] overflow-hidden rounded-xl ${flip ? 'lg:order-2' : ''}`}><Visual variant={s.variant} image={s.image} label={`${s.name} visual`} /></div>
      <div>
        <h3 className={`text-2xl font-bold sm:text-3xl ${heading}`}>{s.name}</h3>
        <p className={`mt-4 text-base leading-relaxed ${body}`}>{s.summary}</p>
        <ul className={`mt-5 space-y-2.5 text-sm ${list}`}>{s.uses.map((u) => <li key={u} className="flex gap-2.5"><span className="mt-2 h-px w-4 shrink-0 bg-emerald" />{u}</li>)}</ul>
        <Link to={pathOf(s)} className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">Explore {s.name}<ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden /></Link>
      </div>
    </div>
  )
}

export function BlogCard({ a, dark }: { a: Article; dark?: boolean }) {
  return (
    <Card3D className="h-full">
      <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${
        dark ? 'border-white/10 bg-navy/60 backdrop-blur-sm' : 'border-slate-200/80 bg-white shadow-md'
      }`}>
        <Link to={`/blog/${a.slug}`} className="flex flex-1 flex-col">
          <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-900/40">
            <div className="h-full transition-transform duration-700 group-hover:scale-105">
              <Visual variant={a.variant} image={a.image} label={`Cover for ${a.title}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald">
            <span>{a.date}</span>
            <span className="text-white/40">·</span>
            <span className={dark ? 'text-white/70' : 'text-slate-500'}>by {a.author ?? 'Thazhal'}</span>
          </div>
          <h3 className={`mt-2.5 flex-1 text-lg font-bold leading-snug ${dark ? 'text-white group-hover:text-emerald' : 'text-navy group-hover:text-emerald'}`}>
            {a.title}
          </h3>
          <p className={`mt-2.5 text-sm line-clamp-3 leading-relaxed ${dark ? 'text-white/65' : 'text-slate-600'}`}>
            {a.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald transition-all duration-300 group-hover:translate-x-1.5">
            READ MORE <ArrowUpRight size={14} aria-hidden />
          </span>
        </Link>
      </article>
    </Card3D>
  )
}
