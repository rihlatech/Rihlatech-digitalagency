import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { navLinks } from '../data/siteData'
import { buttonMotion, cardVariants, containerStagger } from '../utils/animations'

const activeClass = 'text-white bg-slate-800/90 shadow-soft'
const baseClass = 'rounded-full px-4 py-2 text-sm font-medium transition'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18)

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? 'border-slate-700/80 bg-slate-950/98 shadow-soft'
          : 'border-slate-800/70 bg-slate-950/95'
      }`}
    >
      <div className="page-container flex h-20 items-center justify-between gap-6">
        <NavLink to="/" className="text-lg font-semibold tracking-tight text-white">
          RihlaTech Company
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : 'text-slate-300 hover:text-white hover:bg-slate-800/80'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <motion.a
            href="https://wa.me/254719310048"
            target="_blank"
            rel="noreferrer"
            {...(shouldReduceMotion ? {} : buttonMotion)}
            className="btn-primary whitespace-nowrap"
          >
            Request a Quote
          </motion.a>
        </nav>

        <motion.button
          type="button"
          onClick={() => setMenuOpen(true)}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-white transition hover:bg-slate-800 md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="text-2xl leading-none">☰</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-[min(88vw,360px)] border-l border-slate-800/80 bg-slate-950/98 p-6 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="text-lg font-semibold text-white"
                >
                  RihlaTech
                </NavLink>
                <motion.button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-white transition hover:bg-slate-800"
                >
                  ×
                </motion.button>
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerStagger}
                className="flex flex-col gap-3"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={cardVariants}>
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `${baseClass} block w-full text-left ${isActive ? activeClass : 'text-slate-300 hover:text-white hover:bg-slate-800/80'}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.a
                  href="https://wa.me/254719310048"
                  target="_blank"
                  rel="noreferrer"
                  variants={cardVariants}
                  {...(shouldReduceMotion ? {} : buttonMotion)}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                >
                  Request a Quote
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
