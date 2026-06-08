import { useState } from 'react'
import { contactInfo } from '../data/siteData'
import {
  isEmailJsConfigured,
  sendAutoReplyEmail,
  sendBusinessEmail,
} from '../utils/emailService'
import SectionHeader from '../components/SectionHeader'

const validateEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [copyLabel, setCopyLabel] = useState('Copy Email')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Full Name is required.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email Address is required.'
    } else if (!validateEmail(formData.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    if (!isEmailJsConfigured()) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.',
      })
      return
    }

    setLoading(true)

    try {
      await sendBusinessEmail(formData)
      await sendAutoReplyEmail(formData)

      setStatus({
        type: 'success',
        message:
          'Message sent successfully. Please check your email for confirmation.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus({
        type: 'error',
        message:
          'Failed to send message. Please try again or contact us via WhatsApp.',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopyLabel('Copied!')
      window.setTimeout(() => setCopyLabel('Copy Email'), 2000)
    } catch {
      setCopyLabel('Copy failed')
      window.setTimeout(() => setCopyLabel('Copy Email'), 2000)
    }
  }

  return (
    <div className="page-container space-y-16">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Contact"
            title="Connect with RihlaTech for your next digital project."
            description="Send a message, start a WhatsApp chat, or use the form below to reach our team quickly."
          />
          <div className="space-y-4 rounded-[2rem] border border-slate-800/70 bg-slate-950/95 p-8 shadow-soft">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">WhatsApp Business</p>
              <p className="mt-2 text-2xl font-semibold text-white">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
              <p className="mt-2 text-base leading-7 text-slate-300">{contactInfo.email}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                WhatsApp Chat
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {copyLabel}
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/95 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Send a message</h3>
          <p className="mt-3 text-slate-300">Share your details and project goals, and we’ll get back to you promptly.</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your full name"
                className={`mt-3 w-full rounded-3xl border px-5 py-4 bg-slate-900 text-slate-100 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 ${
                  errors.name ? 'border-rose-500 bg-rose-950/20' : 'border-slate-700'
                }`}
              />
              {errors.name ? <p className="mt-2 text-sm text-rose-400">{errors.name}</p> : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className={`mt-3 w-full rounded-3xl border px-5 py-4 bg-slate-900 text-slate-100 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 ${
                  errors.email ? 'border-rose-500 bg-rose-950/20' : 'border-slate-700'
                }`}
              />
              {errors.email ? <p className="mt-2 text-sm text-rose-400">{errors.email}</p> : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Project subject"
                className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your project goals"
                className={`mt-3 w-full rounded-3xl border px-5 py-4 bg-slate-900 text-slate-100 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 ${
                  errors.message ? 'border-rose-500 bg-rose-950/20' : 'border-slate-700'
                }`}
              />
              {errors.message ? <p className="mt-2 text-sm text-rose-400">{errors.message}</p> : null}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary w-full ${loading ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status.message ? (
            <div className="mt-6 space-y-3">
              <p
                className={`text-sm font-medium ${
                  status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {status.message}
              </p>
              {status.type === 'error' ? (
                <a
                  href="https://wa.me/254719310048?text=Hello%20RihlaTech,%20I%20tried%20to%20contact%20you%20via%20email%20but%20it%20didn't%20work."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Contact via WhatsApp
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}
