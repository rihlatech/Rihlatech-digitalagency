import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import PageTransition from './PageTransition'

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <Navbar />
      <main className="bg-surface pb-20 pt-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
