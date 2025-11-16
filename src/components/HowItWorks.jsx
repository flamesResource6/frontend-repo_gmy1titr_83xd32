import { Upload, FileCheck2, Bell, MessageSquare } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: 'Submit Details Online',
      desc: 'Share your information and documents digitally—secure, paperless, and quick.'
    },
    {
      icon: FileCheck2,
      title: 'Verification & Processing',
      desc: 'We validate your details and process your application with the concerned authorities.'
    },
    {
      icon: Bell,
      title: 'Track in Real Time',
      desc: 'Get live status updates, milestone alerts, and estimated timelines.'
    },
    {
      icon: MessageSquare,
      title: 'Expert Support',
      desc: 'Reach out anytime via chat or call for guidance and issue resolution.'
    },
  ]

  return (
    <section id="how" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">How DigiDocs Works</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Designed for efficiency and convenience—go from application to approval with clarity at every step.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-indigo-600 text-white grid place-items-center">
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
