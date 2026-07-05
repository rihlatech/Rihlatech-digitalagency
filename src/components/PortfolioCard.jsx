import { motion, useReducedMotion } from 'framer-motion'
import { buttonMotion, cardVariants } from '../utils/animations'

export default function PortfolioCard({ icon: Icon, title, category, description, actionLink }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.03,
              y: -6,
              boxShadow: '0 24px 70px -34px rgba(37, 99, 235, 0.7)',
            }
      }
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass-card overflow-hidden"
    >
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-slate-950 p-6 text-white"
      >
        <div className="flex h-full flex-col justify-between rounded-[2rem] bg-slate-950/10 p-6 backdrop-blur-xl transition duration-500 group-hover:scale-[1.03]">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white shadow-glow">
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">{title}</p>
            <p className="text-sm text-slate-200/90">{category}</p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/18" />
      </motion.div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
        <motion.a
          href={actionLink}
          target="_blank"
          rel="noreferrer"
          {...(shouldReduceMotion ? {} : buttonMotion)}
          className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Request similar project
        </motion.a>
      </div>
    </motion.article>
  )
}
