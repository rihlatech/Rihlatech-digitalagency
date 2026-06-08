import { useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import PackageCard from '../components/PackageCard'
import { services, packages } from '../data/siteData'

export default function Services() {
  useEffect(() => {
    document.title = 'Services | RihlaTech Company'
  }, [])
  return (
    <div className="page-container space-y-20">
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Services"
          title="Strategic services that move your business forward."
          description="From visual systems to web experiences and social media strategy, each service is built to feel premium, polished, and effective."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Business packages"
          title="Packages for companies that want a full digital launch or sustained growth." 
          description="Select the package that best fits your current stage, from launch-ready branding to premium digital support."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </section>
    </div>
  )
}
