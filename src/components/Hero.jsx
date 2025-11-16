import { ShieldCheck, Timer, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldCheck size={14} /> Trusted Government Document Services
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Make Government Documentation Easy, Fast and Transparent
          </h1>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            DigiDocs is your all‑in‑one platform to apply for PAN Card, Passport, Driving License, and e‑Stamp completely online—no queues, no paperwork hassles, no multiple visits.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
              Get Started
            </a>
            <a href="#services" className="inline-flex justify-center items-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold px-6 py-3 rounded-lg">
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Timer size={16} className="text-blue-600" /> Real‑time tracking</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-blue-600" /> Secure & verified</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-blue-600" /> Pan‑India coverage</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                {title: 'PAN Card', desc: 'Apply or update PAN seamlessly'},
                {title: 'Passport', desc: 'New passport or renewals'},
                {title: 'Driving License', desc: 'Learner, renewal, duplicates'},
                {title: 'e‑Stamp', desc: 'Digital stamp papers instantly'},
              ].map((item) => (
                <div key={item.title} className="p-4 border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 text-sm text-slate-700">
              Submit details digitally, track progress in real time, and get expert support at every step.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
