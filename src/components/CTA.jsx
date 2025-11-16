export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-tr from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">Start your application today</h2>
        <p className="mt-3 text-blue-50 max-w-2xl mx-auto">
          Tell us what you need and we’ll guide you through the process with simple steps, digital submissions, and live tracking.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#services" className="inline-flex justify-center items-center bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg shadow">
            Choose a service
          </a>
          <a href="#support" className="inline-flex justify-center items-center bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg border border-white/30">
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  )
}
