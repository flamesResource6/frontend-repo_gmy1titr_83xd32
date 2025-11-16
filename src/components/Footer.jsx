export default function Footer() {
  return (
    <footer id="support" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg">DigiDocs</h3>
          <p className="mt-2 text-sm text-slate-400">Making government documentation easy, accessible, and stress‑free for everyone.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Services</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">PAN Card</a></li>
            <li><a href="#services" className="hover:text-white">Passport</a></li>
            <li><a href="#services" className="hover:text-white">Driving License</a></li>
            <li><a href="#services" className="hover:text-white">e‑Stamp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Why DigiDocs</a></li>
            <li><a href="#how" className="hover:text-white">How it works</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#support" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Get in touch</h4>
          <p className="mt-2 text-sm text-slate-400">Have questions? Our team is here to help you at every step of your application.</p>
          <a href="mailto:support@digidocs.in" className="inline-block mt-3 text-sm font-semibold text-white underline">support@digidocs.in</a>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} DigiDocs. All rights reserved.
      </div>
    </footer>
  )
}
