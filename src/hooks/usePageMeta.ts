import { useEffect } from 'react'
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title === 'THAZHAL' ? 'THAZHAL — Geospatial Intelligence' : `${title} | THAZHAL`
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
