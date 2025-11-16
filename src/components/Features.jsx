import { Shield, Zap, Eye, Globe2 } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Zap, title: 'Fast Processing', desc: 'Optimized workflows and expert handling to reduce wait times.' },
    { icon: Eye, title: 'Transparent Tracking', desc: 'Know exactly where your application stands at every stage.' },
    { icon: Shield, title: 'Secure & Compliant', desc: 'Bank‑grade security and privacy‑first systems keep your data safe.' },
    { icon: Globe2, title: 'Pan‑India Coverage', desc: 'Available across all states with localized guidance and support.' },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Built for Trust, Speed, and Clarity</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A user‑friendly experience that keeps you informed and in control from start to finish.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white grid place-items-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
