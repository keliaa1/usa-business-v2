import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import BlurText from './BlurText'

export default function Pricing() {
  return (
    <section id="pricing" className="px-8 lg:px-16 py-32 max-w-7xl mx-auto flex flex-col items-center relative">
      {/* Background ambient glow matching the #1d4ed8 color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: '#1d4ed8' }}
      />

      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 relative z-10">
        <span className="section-badge">Pricing</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text="Simple, transparent plans." delay={100} />
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm"
      >
        <div 
          className="rounded-3xl p-8 border border-white/10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(29, 78, 216, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%)',
            boxShadow: '0 8px 32px rgba(29, 78, 216, 0.15)'
          }}
        >
          {/* Top glow inside the card */}
          <div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[50px] opacity-40"
            style={{ backgroundColor: '#1d4ed8' }}
          />

          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="text-white text-xl font-body font-semibold">Pro</h3>
            <span 
              className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: '#1d4ed8' }}
            >
              Most Popular
            </span>
          </div>

          <p className="text-white/60 text-sm font-body font-light mb-6">Billed monthly</p>

          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-heading italic text-white">$19</span>
            <span className="text-white/60 font-body text-sm mb-1.5">/ month</span>
          </div>

          <p className="text-white/60 text-sm font-body font-light pb-8 border-b border-white/10 mb-8">
            Ideal for small teams.
          </p>

          <ul className="flex flex-col gap-4 mb-10">
            {['Access to all features', 'Up to 10 users', '5GB data per user', 'Priority support'].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-white/80 font-body text-sm">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center border border-[#1d4ed8]"
                  style={{ backgroundColor: 'rgba(29, 78, 216, 0.15)' }}
                >
                  <Check size={12} color="#1d4ed8" strokeWidth={3} />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button 
            className="w-full rounded-full py-3.5 text-white font-body font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: '#1d4ed8' }}
          >
            Get it now
          </button>
        </div>
      </motion.div>
    </section>
  )
}
