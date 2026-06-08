import { useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import PortfolioCard from '../components/PortfolioCard'
import { portfolioItems, portfolioQuoteLink } from '../data/siteData'

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | RihlaTech Company'
  }, [])
  return (
    <div className="page-container space-y-20">
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="A curated showcase of brand, web and campaign work." 
          description="Browse through a collection of premium digital projects, each built to feel clean, modern, and highly polished."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} actionLink={portfolioQuoteLink} />
          ))}
        </div>
      </section>
    </div>
  )
}
