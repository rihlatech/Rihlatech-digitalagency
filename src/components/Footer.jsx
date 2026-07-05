import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { contactInfo, navLinks } from '../data/siteData'
import { buttonMotion, cardVariants, containerStagger } from '../utils/animations'

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 text-slate-300">
      <motion.div
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
        className="page-container grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr_1fr]"
      >
        <motion.div variants={cardVariants} className="space-y-4">
          <h2 className="text-xl font-semibold text-white">RihlaTech Company</h2>
          <p className="max-w-md leading-7 text-slate-400">
            Helping businesses grow through professional digital solutions including web design, graphic design, and social media management.
          </p>
        </motion.div>

        <motion.div variants={cardVariants}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={link.path} className="transition hover:text-white">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Contact
          </h3>
          <p className="text-sm text-slate-300">WhatsApp: {contactInfo.phone}</p>
          <p className="text-sm text-slate-300">Email: {contactInfo.email}</p>
          <motion.a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            {...(shouldReduceMotion ? {} : buttonMotion)}
            className="mt-5 inline-flex rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="border-t border-slate-800 bg-slate-950/95 py-6 text-center text-sm text-slate-500">
        © 2026 RihlaTech Company. All Rights Reserved.
      </div>
    </footer>
  )
}
