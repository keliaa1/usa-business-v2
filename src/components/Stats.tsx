import { motion } from 'motion/react'
import HlsVideo from './HlsVideo'
import BlurText from './BlurText'

const HLS_URL = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

const stats = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export default function Stats() {
  return (
    <section className="relative py-32">
      {/* Desaturated HLS video background */}
      <HlsVideo
        src={HLS_URL}
        className="absolute inset-0 w-full h-full object-cover z-0"
        desaturate
      />

      {/* Gradient fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Stats card */}
      <div className="relative z-10 px-8 lg:px-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="liquid-glass rounded-3xl p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <span className="section-badge">By the numbers</span>
            <h2 className="section-heading mt-4">
              <BlurText text="Results that speak." delay={100} />
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  {value}
                </span>
                <span className="text-white/60 font-body font-light text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
