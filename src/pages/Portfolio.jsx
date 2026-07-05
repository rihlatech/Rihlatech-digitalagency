import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import PortfolioCard from '../components/PortfolioCard'
import AnimatedSection from '../components/AnimatedSection'
import { portfolioItems, portfolioQuoteLink } from '../data/siteData'
import { containerStagger } from '../utils/animations'

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = 'Portfolio | RihlaTech Company'
  }, [])

  return (
    <div className="page-container space-y-20">
      <AnimatedSection direction="up" className="space-y-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="A curated showcase of brand, web and campaign work." 
          description="Browse through a collection of premium digital projects, each built to feel clean, modern, and highly polished."
        />
        <motion.div
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="grid gap-6 xl:grid-cols-3"
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} actionLink={portfolioQuoteLink} />
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  )
}
