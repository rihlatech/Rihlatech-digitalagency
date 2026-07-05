import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/90 text-xl font-semibold text-white shadow-soft backdrop-blur-xl transition hover:bg-slate-900"
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
