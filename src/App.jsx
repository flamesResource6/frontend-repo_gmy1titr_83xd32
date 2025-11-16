import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Features />
        {/* Optional placeholder for pricing */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Simple, transparent pricing</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Pay only for what you use. No hidden fees. Get a clear cost breakdown before you proceed.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {["Basic", "Standard", "Priority"].map((tier, idx) => (
                <div key={tier} className={`p-6 rounded-2xl border ${idx===2 ? 'border-blue-300 bg-white shadow-md' : 'border-slate-200 bg-white'}`}>
                  <h3 className="font-semibold">{tier}</h3>
                  <p className="mt-1 text-sm text-slate-600">Ideal for {tier === 'Basic' ? 'single services' : tier === 'Standard' ? 'most users' : 'urgent processing'}</p>
                  <div className="mt-4 text-3xl font-extrabold">{idx===0 ? '₹499' : idx===1 ? '₹999' : '₹1,999'}<span className="text-base font-normal text-slate-500">/service</span></div>
                  <ul className="mt-4 space-y-2 text-sm text-left">
                    <li>Online application assistance</li>
                    <li>Document verification</li>
                    <li>{idx>0 ? 'Real‑time status tracking' : 'Email updates'}</li>
                    <li>{idx===2 ? 'Priority processing & support' : 'Standard support'}</li>
                  </ul>
                  <a href="#get-started" className="mt-6 inline-flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                    Get started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
