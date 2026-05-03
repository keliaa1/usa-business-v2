import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Play, MapPin, ChevronDown } from 'lucide-react'
import BlurText from './BlurText'
import { useLanguage } from '../contexts/LanguageContext'

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

const blurIn = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
}

export default function Hero() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedState, setSelectedState] = useState<string | null>(null)

  return (
    <section
      id="home"
      className="relative w-full flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/businessmenvid.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay -> Light overlay */}
      <div className="absolute inset-0 bg-white/50 z-0" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '300px', background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: '150px' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 liquid-glass rounded-full px-1 py-1 mb-8"
        >
          <span className="bg-black text-white rounded-full px-3 py-1 text-xs font-semibold font-body">
            {t.hero.new}
          </span>
          <span className="text-black/80 text-xs font-body pr-2">
            {t.hero.introducing}
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-black leading-[0.8] tracking-[-4px] mb-6 flex flex-col items-center">
          <BlurText
            text={t.hero.title1}
            delay={100}
            direction="bottom"
            animateBy="words"
          />
          <BlurText
            text={t.hero.title2}
            delay={100}
            direction="bottom"
            animateBy="words"
            className="mt-2 md:mt-4"
          />
        </h1>

        {/* Subtext */}
        <motion.p
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm md:text-base text-black/90 font-body font-light leading-tight max-w-md mb-8"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Action Bar (Buttons + State Selector) */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.1 }}
          className="relative z-[50] flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white/10 backdrop-blur-xl p-3 md:p-2 rounded-3xl md:rounded-full border border-white/20 shadow-2xl"
        >
          {/* Main CTA */}
          <a
            href="#contact"
            className="w-full md:w-auto liquid-glass-strong rounded-full px-8 py-3.5 text-black font-bold text-sm font-body flex items-center justify-center gap-2 cursor-pointer bg-[#3c3b6e] text-white hover:scale-105 transition-transform"
          >
            {t.hero.cta}
            <ArrowUpRight size={16} />
          </a>

          {/* Watch Film */}
          <button className="hidden sm:flex items-center gap-2 text-black text-sm font-body font-medium cursor-pointer hover:opacity-70 transition-opacity px-2">
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
              <Play size={14} fill="black" className="ml-0.5" />
            </div>
            {t.hero.watchFilm}
          </button>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block w-px h-8 bg-black/10 mx-2" />

          {/* State Selector */}
          <div className="relative w-full md:w-auto min-w-[260px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full md:w-auto bg-white rounded-full px-6 py-3 flex items-center justify-between gap-4 text-black font-body text-sm font-bold hover:bg-white/90 transition-all shadow-sm border border-black/5"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#3c3b6e]/10 p-1.5 rounded-lg text-[#3c3b6e]">
                  <MapPin size={16} />
                </div>
                <span className="truncate max-w-[150px]">
                  {selectedState ? selectedState : "Incorporate In..."}
                </span>
              </div>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full mt-4 left-0 right-0 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/10 overflow-hidden z-[100] max-h-[320px] overflow-y-auto"
                >
                  <div className="p-2 grid grid-cols-1 gap-1">
                    {US_STATES.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedState(state)
                          setIsOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between group
                          ${selectedState === state ? 'bg-[#3c3b6e] text-white' : 'text-black/70 hover:bg-black/5'}
                        `}
                      >
                        {state}
                        {selectedState === state && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
