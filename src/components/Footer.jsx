import { Link } from 'react-router-dom'
import { contactInfo, navLinks } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950/95 text-slate-300">
      <div className="page-container grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">RihlaTech Company</h2>
          <p className="max-w-md leading-7 text-slate-400">
            Helping businesses grow through professional digital solutions including web design, graphic design, and social media management.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Contact
          </h3>
          <p className="text-sm text-slate-300">WhatsApp: {contactInfo.phone}</p>
          <p className="text-sm text-slate-300">Email: {contactInfo.email}</p>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950/95 py-6 text-center text-sm text-slate-500">
        © 2026 RihlaTech Company. All Rights Reserved.
      </div>
    </footer>
  )
}
