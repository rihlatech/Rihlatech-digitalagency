import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../data/siteData'

const activeClass = 'text-slate-950 bg-white shadow-soft'
const baseClass = 'rounded-full px-4 py-2 text-sm font-medium transition'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-slate-200/70 backdrop-blur-xl bg-white/80"
    >
      <div className="page-container flex h-20 items-center justify-between gap-6">
        <a href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          RihlaTech Company
        </a>

        <nav className="flex flex-wrap items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'}`
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
      </div>
    </motion.header>
  )
}
