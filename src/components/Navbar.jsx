import { Menu, X, FileText, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services' , href: '#services'},
    { label: 'How it works', href: '#how' },
    { label: 'Why DigiDocs', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Support', href: '#support' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center text-white"><FileText size={18} /></div>
            <span className="text-xl font-bold text-slate-900">DigiDocs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#track" className="text-sm font-semibold text-slate-700 hover:text-slate-900">Track Status</a>
            <a href="#get-started" className="inline-flex items-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm transition-colors">
              Get Started <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-sm font-medium text-slate-700 hover:text-slate-900">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a href="#track" className="text-sm font-semibold text-slate-700 hover:text-slate-900">Track Status</a>
              <a href="#get-started" className="inline-flex items-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
