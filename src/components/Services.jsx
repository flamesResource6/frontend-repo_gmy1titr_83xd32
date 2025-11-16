import { IdCard, Passport, Car, Stamp, ChevronRight } from 'lucide-react'

export default function Services() {
  const items = [
    { icon: IdCard, title: 'PAN Card', desc: 'New PAN, corrections, and reissue with end‑to‑end online support.' },
    { icon: Passport, title: 'Passport', desc: 'Fresh applications, renewals, and police verification facilitation.' },
    { icon: Car, title: 'Driving License', desc: 'Learner’s, permanent, renewal, and duplicate license assistance.' },
    { icon: Stamp, title: 'e‑Stamp', desc: 'Instant digital stamp papers with legally valid documentation.' },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">All‑in‑One Government Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Apply for essential documents without queues or confusion. We simplify every step with clear guidance and real‑time updates.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 border border-slate-200 rounded-2xl hover:shadow-md hover:border-blue-200 transition-all bg-white">
              <div className="h-12 w-12 rounded-xl bg-blue-600 text-white grid place-items-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <a href="#get-started" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700">
                Start now <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
