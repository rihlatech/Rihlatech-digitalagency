import { motion, useReducedMotion } from 'framer-motion'
import { buttonMotion, cardVariants } from '../utils/animations'

export default function ServiceCard({ icon: Icon, title, description, features, quoteLink }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.035,
              y: -6,
              boxShadow: '0 24px 70px -34px rgba(37, 99, 235, 0.7)',
            }
      }
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="glass-card p-8"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/90 text-white shadow-glow">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-400">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.a
        href={quoteLink}
        target="_blank"
        rel="noreferrer"
        {...(shouldReduceMotion ? {} : buttonMotion)}
        className="mt-8 inline-flex rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
      >
        Request a Quote
      </motion.a>
    </motion.article>
  )
}
