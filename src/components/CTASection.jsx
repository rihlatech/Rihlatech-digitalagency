import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { buttonMotion } from '../utils/animations'

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="glass-panel overflow-hidden px-6 py-12 sm:px-10"
    >
      <div className="page-container grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Ready to grow</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-200 leading-8">
            Let RihlaTech help you build a strong online presence and attract more customers.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <motion.a
            href="https://wa.me/254719310048"
            target="_blank"
            rel="noreferrer"
            {...(shouldReduceMotion ? {} : buttonMotion)}
            className="btn-primary"
          >
            Request a Quote
          </motion.a>
          <motion.div {...(shouldReduceMotion ? {} : buttonMotion)}>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
