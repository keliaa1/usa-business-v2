import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import logoIcon from '../assets/logo.webp'

const navLinks = ['Home', 'Why Choose Us', 'Benefits', 'Pricing']

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('English')

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logoIcon} alt="Studio logo" className="h-20 w-auto object-contain" />
      </div>

      {/* Center nav pill — desktop only */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0.5">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            {link}
          </a>
        ))}
        
        {/* Language Selector */}
        <div className="relative ml-1">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body hover:bg-white/90 transition-colors duration-200"
          >
            <Globe size={14} />
            {language}
            <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {langOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-lg overflow-hidden min-w-[120px] py-1">
              <button
                onClick={() => {
                  setLanguage('English')
                  setLangOpen(false)
                }}
                className="w-full text-left px-4 py-2 text-sm text-black hover:bg-black/5 transition-colors font-body font-medium"
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('Spanish')
                  setLangOpen(false)
                }}
                className="w-full text-left px-4 py-2 text-sm text-black hover:bg-black/5 transition-colors font-body font-medium"
              >
                Spanish
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Language Selector */}
      <div className="md:hidden relative">
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-1.5 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body"
        >
          <Globe size={14} />
          {language}
          <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
        </button>

        {langOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-lg overflow-hidden min-w-[120px] py-1">
            <button
              onClick={() => {
                setLanguage('English')
                setLangOpen(false)
              }}
              className="w-full text-left px-4 py-2 text-sm text-black hover:bg-black/5 transition-colors font-body font-medium"
            >
              English
            </button>
            <button
              onClick={() => {
                setLanguage('Spanish')
                setLangOpen(false)
              }}
              className="w-full text-left px-4 py-2 text-sm text-black hover:bg-black/5 transition-colors font-body font-medium"
            >
              Spanish
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
