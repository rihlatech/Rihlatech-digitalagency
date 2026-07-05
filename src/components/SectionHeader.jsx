import { motion, useReducedMotion } from 'framer-motion'
import { heroTextVariants } from '../utils/animations'

export default function SectionHeader({ eyebrow, title, description }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className="mb-10 max-w-2xl">
        {eyebrow ? <p className="mb-3 text-sm uppercase tracking-[0.32em] text-slate-400">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-8 text-slate-300">{description}</p> : null}
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 max-w-2xl"
    >
      {eyebrow ? (
        <motion.p
          custom={0}
          variants={heroTextVariants}
          className="mb-3 text-sm uppercase tracking-[0.32em] text-slate-400"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        custom={0.08}
        variants={heroTextVariants}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          custom={0.16}
          variants={heroTextVariants}
          className="mt-4 text-base leading-8 text-slate-300"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
