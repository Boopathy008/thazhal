import { usePageMeta } from '../hooks/usePageMeta'
export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'
  usePageMeta(title)
  return (
    <section className="section pt-40"><div className="wrap max-w-3xl">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-6 text-lg text-slate-700">This page is a placeholder. Add THAZHAL's official {title.toLowerCase()} text here (pages/Legal.tsx) before launch.</p>
    </div></section>
  )
}
