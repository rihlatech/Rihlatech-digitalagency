export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? <p className="mb-3 text-sm uppercase tracking-[0.32em] text-slate-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  )
}
