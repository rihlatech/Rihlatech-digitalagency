import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import PackageCard from '../components/PackageCard'
import AnimatedSection from '../components/AnimatedSection'
import { services, packages } from '../data/siteData'
import { containerStagger } from '../utils/animations'

export default function Services() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = 'Services | RihlaTech Company'
  }, [])

  return (
    <div className="page-container space-y-20">
      <AnimatedSection direction="left" className="space-y-8">
        <SectionHeader
          eyebrow="Services"
          title="Strategic services that move your business forward."
          description="From visual systems to web experiences and social media strategy, each service is built to feel premium, polished, and effective."
        />
        <motion.div
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="grid gap-6 xl:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection direction="right" className="space-y-8">
        <SectionHeader
          eyebrow="Business packages"
          title="Packages for companies that want a full digital launch or sustained growth." 
          description="Select the package that best fits your current stage, from launch-ready branding to premium digital support."
        />
        <motion.div
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="grid gap-6 xl:grid-cols-3"
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  )
}
