import { useState } from 'react'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import logoIcon from '../assets/logo.webp'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.whyChooseUs, id: 'why-choose-us' },
    { name: t.nav.benefits, id: 'benefits' },
    { name: t.nav.pricing, id: 'pricing' },
  ]

  const languages = [
    { name: 'English', code: 'en' as const },
    { name: 'Spanish', code: 'es' as const },
  ]

  return (
    <>
      <nav className="fixed top-0 md:top-4 left-0 right-0 z-[60] px-6 lg:px-16 py-4 flex items-center justify-between bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-black/5 md:border-none">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-sm">
          <img src={logoIcon} alt="Studio logo" className="h-8 md:h-12 lg:h-14 w-auto object-contain" />
        </div>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3 py-2 text-sm font-medium text-black/90 font-body rounded-full hover:bg-black/10 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="relative ml-1">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-black text-white rounded-full px-3.5 py-1.5 text-sm font-medium font-body hover:bg-black/90 transition-colors duration-200"
            >
              <Globe size={14} />
              {language === 'en' ? 'English' : 'Spanish'}
              <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[140px] py-1 border border-black/5 z-[70]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-black hover:bg-black/5 transition-colors font-body font-medium flex items-center justify-between"
                    >
                      {lang.name}
                      {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Language Button (Mobile) */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center justify-center bg-black text-white rounded-full p-2.5 text-sm"
            >
              <Globe size={18} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-black/5 min-w-[140px] overflow-hidden z-[70]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                      className="w-full text-left px-5 py-4 text-sm text-black font-medium border-b border-black/5 last:border-none active:bg-black/5 flex items-center justify-between"
                    >
                      {lang.name}
                      {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-black bg-black/5 rounded-full active:bg-black/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-white pt-24 px-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-heading italic text-black/90 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="mt-auto pb-12">
              <p className="text-black/40 text-sm font-body uppercase tracking-widest mb-4">Socials</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5" />
                <div className="w-10 h-10 rounded-full bg-black/5" />
                <div className="w-10 h-10 rounded-full bg-black/5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
