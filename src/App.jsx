import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    })
  }, [location.pathname, shouldReduceMotion])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
