import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { CheckCircle2, Loader2 } from 'lucide-react'

export const interests = ['SWOAD', 'Climate Audit', 'Fire Audit', 'Environmental Monitoring', 'Infrastructure Monitoring', 'General Enquiry'] as const
const schema = z.object({
  name: z.string().trim().min(2, 'Enter your full name.'),
  email: z.string().trim().min(1, 'Enter your work email.').email('Enter a valid email address.'),
  company: z.string().trim().min(2, 'Enter your company or organization.'),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, 'Enter a valid phone number.').optional().or(z.literal('')),
  interest: z.enum(interests, { errorMap: () => ({ message: 'Choose an area of interest.' }) }),
  message: z.string().trim().min(10, 'Tell us a little more (at least 10 characters).'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please accept the privacy policy to continue.' }) }),
  website: z.string().max(0).optional(), // honeypot
})
type Values = z.infer<typeof schema>

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
const input = 'w-full border border-slate2/50 bg-white px-4 py-3 text-navy placeholder:text-slate2 focus:border-emerald'

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) })
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')
  const [err, setErr] = useState('')

  const onSubmit = async (v: Values) => {
    setStatus('idle'); setErr('')
    if (v.website) return // bot
    if (!endpoint) { setStatus('error'); setErr('The contact service is not configured yet. Set VITE_CONTACT_ENDPOINT (see README), or email us directly.'); return }
    try {
      const { website, ...data } = v
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      if (!r.ok) throw new Error()
      setStatus('ok'); reset()
    } catch { setStatus('error'); setErr('Your message could not be sent. Please try again or email us directly.') }
  }

  if (status === 'ok') return (
    <div role="status" className="border border-emerald/40 bg-white p-10 text-center">
      <CheckCircle2 className="mx-auto text-emerald" size={40} aria-hidden />
      <h3 className="mt-4 text-2xl font-bold">Message sent</h3>
      <p className="mt-2 text-slate-600">Thank you. Our team will get back to you soon.</p>
    </div>
  )

  const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) => (
    <div><label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>{children}
      {error && <p id={`${id}-e`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}</div>
  )
  const a = (id: string, bad?: unknown) => ({ id, 'aria-invalid': !!bad, 'aria-describedby': bad ? `${id}-e` : undefined })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Field id="name" label="Full Name *" error={errors.name?.message}><input {...a('name', errors.name)} {...register('name')} autoComplete="name" className={input} /></Field>
      <Field id="email" label="Work Email *" error={errors.email?.message}><input type="email" {...a('email', errors.email)} {...register('email')} autoComplete="email" className={input} /></Field>
      <Field id="company" label="Company / Organization *" error={errors.company?.message}><input {...a('company', errors.company)} {...register('company')} autoComplete="organization" className={input} /></Field>
      <Field id="phone" label="Phone Number (optional)" error={errors.phone?.message}><input type="tel" {...a('phone', errors.phone)} {...register('phone')} autoComplete="tel" className={input} /></Field>
      <Field id="interest" label="Area of Interest *" error={errors.interest?.message}>
        <select {...a('interest', errors.interest)} {...register('interest')} defaultValue="" className={input}>
          <option value="" disabled>Select an option</option>{interests.map((i) => <option key={i}>{i}</option>)}
        </select>
      </Field>
      <Field id="message" label="Message *" error={errors.message?.message}><textarea rows={5} {...a('message', errors.message)} {...register('message')} className={input} /></Field>
      <div className="absolute -left-[9999px]" aria-hidden><label>Leave blank<input tabIndex={-1} autoComplete="off" {...register('website')} /></label></div>
      <div>
        <label className="flex items-start gap-3 text-sm"><input type="checkbox" {...register('consent')} aria-invalid={!!errors.consent} className="mt-1 h-4 w-4 accent-emerald" />
          <span>I agree to the <Link to="/privacy" className="underline">Privacy Policy</Link>. *</span></label>
        {errors.consent && <p role="alert" className="mt-1 text-sm text-red-700">{errors.consent.message}</p>}
      </div>
      {status === 'error' && <p role="alert" className="border border-red-300 bg-red-50 p-3 text-sm text-red-800">{err}</p>}
      <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 font-semibold text-white transition-colors hover:bg-forest disabled:opacity-60">
        {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden />}{isSubmitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
