import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { whyChooseUs, services, heroButtons } from '../data/siteData'
import { MdOutlineWavingHand } from 'react-icons/md'

export default function Home() {
  return (
    <div className="page-container space-y-20">
      <section className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-3 rounded-full bg-[#2563EB]/15 px-4 py-2 text-sm font-semibold text-[#93C5FD]">
            Premium digital agency experience
          </span>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Digital Solutions That Help Your Business Grow
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Professional web design, graphic design, and social media management services for businesses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {heroButtons.map((button) =>
              button.to ? (
                <Link
                  key={button.label}
                  to={button.to}
                  className={
                    button.variant === 'secondary'
                      ? 'inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                      : 'btn-primary'
                  }
                >
                  {button.label}
                </Link>
              ) : (
                <a
                  key={button.label}
                  href={button.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {button.label}
                </a>
              ),
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Strategy</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                A polished digital strategy that aligns design, messaging, and business goals.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Growth</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Focused creative systems that strengthen your brand and improve customer perception.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0F172A] p-8 shadow-soft"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.3),_transparent_35%)]" />
          <div className="relative grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#2563EB]/10 px-4 py-2 text-sm font-semibold text-white">
                <MdOutlineWavingHand className="h-5 w-5" />
                High-end digital agency design
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-[#0F172A]/95 p-6 shadow-glow">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Creative systems</p>
                  <p className="mt-3 text-lg font-semibold text-white">Brand visuals optimized for modern audiences.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-white/5 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Web experience</p>
                    <p className="mt-3 text-base font-semibold">Striking landing pages and user flows.</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-white/5 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Brand identity</p>
                    <p className="mt-3 text-base font-semibold">Consistent design for every platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="About"
            title="A premium agency experience for business growth."
            description="RihlaTech Company delivers creative digital solutions with clarity, reliability, and strong commercial results. We focus on premium design, compelling brand moments, and fast delivery."
          />
        </div>
        <div className="grid gap-6 rounded-[2rem] border border-slate-800/70 bg-slate-950/90 p-8 shadow-soft">
          {['Professionalism', 'Creativity', 'Business growth', 'Reliability'].map((item) => (
            <div key={item} className="rounded-3xl bg-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-white">{item}</h3>
              <p className="mt-3 text-slate-300 leading-7">
                {item === 'Professionalism' && 'Clear communication, polished delivery, and a dedicated project approach.'}
                {item === 'Creativity' && 'Brand-led visuals and polished marketing assets that feel modern and premium.'}
                {item === 'Business growth' && 'Solutions built to support customer acquisition and measurable growth.'}
                {item === 'Reliability' && 'Dependable support, on-time delivery, and transparent collaboration.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Why choose us"
          title="Trusted by businesses who want premium digital work."
          description="RihlaTech blends creativity with strategy so every project is designed to turn more prospects into customers."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="glass-card p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#2563EB]/10 text-[#2563EB]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Services preview"
          title="Designed services for businesses that need a polished digital presence."
          description="Explore a hand-picked selection of the services that help brands perform across design, online presence, and social engagement."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
