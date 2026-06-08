import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../data/siteData'

const activeClass = 'text-white bg-slate-800/90 shadow-soft'
const baseClass = 'rounded-full px-4 py-2 text-sm font-medium transition'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl"
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
          <a
            href="https://wa.me/254719310048"
            target="_blank"
            rel="noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Request a Quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-white transition hover:bg-slate-800 md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="text-2xl leading-none">☰</span>
        </button>
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
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-white transition hover:bg-slate-800"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `${baseClass} w-full text-left ${isActive ? activeClass : 'text-slate-300 hover:text-white hover:bg-slate-800/80'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <a
                  href="https://wa.me/254719310048"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
