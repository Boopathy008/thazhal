import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export const interests = [
  'SWOAD',
  'Climate Audit',
  'Fire Audit',
  'Environmental Monitoring',
  'Infrastructure Monitoring',
  'General Enquiry',
] as const

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

const inputClass =
  'w-full rounded-xl border border-slate-200/90 bg-white/80 px-4 py-3.5 text-[14px] text-navy placeholder:text-slate-400 backdrop-blur-sm transition-all duration-300 outline-none hover:border-emerald/50 focus:border-emerald focus:bg-white focus:shadow-[0_4px_20px_rgba(169,184,135,0.25)] focus:ring-2 focus:ring-emerald/20'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) })
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')
  const [err, setErr] = useState('')

  const onSubmit = async (v: Values) => {
    setStatus('idle')
    setErr('')
    if (v.website) return // bot
    if (!endpoint) {
      setStatus('error')
      setErr('The contact service is not configured yet. Set VITE_CONTACT_ENDPOINT (see README), or email us directly.')
      return
    }
    try {
      const { website, ...data } = v
      const r = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!r.ok) throw new Error()
      setStatus('ok')
      reset()
    } catch {
      setStatus('error')
      setErr('Your message could not be sent. Please try again or email us directly.')
    }
  }

  if (status === 'ok') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        role="status"
        className="rounded-2xl border border-emerald/30 bg-emerald/5 p-12 text-center backdrop-blur-md shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald/20 text-emerald">
          <CheckCircle2 size={36} aria-hidden />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-navy">Message Sent Successfully</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
          Thank you for reaching out. A THAZHAL geospatial specialist will contact you shortly.
        </p>
      </motion.div>
    )
  }

  const Field = ({
    id,
    label,
    error,
    children,
  }: {
    id: string
    label: string
    error?: string
    children: React.ReactNode
  }) => (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-navy/90 tracking-wide">
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          id={`${id}-e`}
          role="alert"
          className="mt-1.5 text-xs font-medium text-red-600"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )

  const a = (id: string, bad?: unknown) => ({
    id,
    'aria-invalid': !!bad,
    'aria-describedby': bad ? `${id}-e` : undefined,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl border border-slate-200/80 bg-white/70 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="name" label="Full Name *" error={errors.name?.message}>
            <input {...a('name', errors.name)} {...register('name')} autoComplete="name" placeholder="John Doe" className={inputClass} />
          </Field>
          <Field id="email" label="Work Email *" error={errors.email?.message}>
            <input type="email" {...a('email', errors.email)} {...register('email')} autoComplete="email" placeholder="john@company.com" className={inputClass} />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="company" label="Company / Organization *" error={errors.company?.message}>
            <input {...a('company', errors.company)} {...register('company')} autoComplete="organization" placeholder="Acme Environmental" className={inputClass} />
          </Field>
          <Field id="phone" label="Phone Number (optional)" error={errors.phone?.message}>
            <input type="tel" {...a('phone', errors.phone)} {...register('phone')} autoComplete="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
          </Field>
        </div>

        <Field id="interest" label="Area of Interest *" error={errors.interest?.message}>
          <select {...a('interest', errors.interest)} {...register('interest')} defaultValue="" className={inputClass}>
            <option value="" disabled>Select your geospatial challenge or solution</option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label="Message *" error={errors.message?.message}>
          <textarea
            rows={5}
            {...a('message', errors.message)}
            {...register('message')}
            placeholder="Tell us about your project scope, monitoring requirements, or geospatial queries..."
            className={inputClass}
          />
        </Field>

        {/* honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden>
          <label>
            Leave blank
            <input tabIndex={-1} autoComplete="off" {...register('website')} />
          </label>
        </div>

        <div>
          <label className="flex items-start gap-3 text-[13px] text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register('consent')}
              aria-invalid={!!errors.consent}
              className="mt-1 h-4 w-4 rounded accent-emerald transition-transform hover:scale-110"
            />
            <span>
              I agree to the <Link to="/privacy" className="underline hover:text-emerald">Privacy Policy</Link> and give consent to THAZHAL to process my details. *
            </span>
          </label>
          {errors.consent && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.consent.message}
            </motion.p>
          )}
        </div>

        {status === 'error' && (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {err}
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-navy px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_10px_25px_-5px_rgba(46,61,40,0.5)] transition-all hover:bg-forest hover:shadow-[0_20px_35px_-5px_rgba(46,61,40,0.7)] disabled:opacity-60"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden />
                <span>Sending Message…</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </>
            )}
          </span>
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
        </motion.button>
      </form>
    </motion.div>
  )
}
