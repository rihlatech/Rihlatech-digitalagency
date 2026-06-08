import { motion } from 'framer-motion'

export default function PortfolioCard({ icon: Icon, title, category, description, actionLink }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass-card overflow-hidden"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-slate-950 p-6 text-white">
        <div className="flex h-full flex-col justify-between rounded-[2rem] bg-slate-950/10 p-6 backdrop-blur-xl">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white shadow-glow">
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">{title}</p>
            <p className="text-sm text-slate-200/90">{category}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
        <a
          href={actionLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Request similar project
        </a>
      </div>
    </motion.article>
  )
}
