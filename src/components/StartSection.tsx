import { ArrowUpRight } from 'lucide-react'
import HlsVideo from './HlsVideo'
import BlurText from './BlurText'

const HLS_URL = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

export default function StartSection() {
  return (
    <section id="services" className="relative" style={{ minHeight: '700px' }}>
      {/* HLS Video background */}
      <HlsVideo
        src={HLS_URL}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 py-32 gap-6"
        style={{ minHeight: '700px', justifyContent: 'center' }}
      >
        <span className="section-badge">How It Works</span>

        <h2 className="section-heading max-w-2xl">
          <BlurText text="You dream it. We ship it." delay={120} />
        </h2>

        <p className="section-body max-w-md">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch.
          All in days, not quarters.
        </p>

        <a
          href="#contact"
          className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium flex items-center gap-2 mt-2"
        >
          Get Started
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
