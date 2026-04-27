import { motion } from 'motion/react'
import HlsVideo from './HlsVideo'
import BlurText from './BlurText'

const HLS_URL = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function CtaFooter() {
  return (
    <footer id="contact" className="relative flex flex-col justify-end" style={{ minHeight: '800px' }}>
      {/* HLS Video background */}
      <HlsVideo
        src={HLS_URL}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" style={{ height: '300px' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white max-w-3xl mb-6">
          <BlurText text="Your next website starts here." delay={100} />
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-8">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>

        <div className="flex items-center gap-4 mb-32">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium transition-transform hover:scale-105 active:scale-95">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium transition-transform hover:scale-105 active:scale-95 hover:bg-white/90">
            View Pricing
          </button>
        </div>

        {/* Footer bar */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 mt-auto">
          <p className="text-white/40 text-xs font-body mb-4 md:mb-0">
            &copy; 2026 Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-body">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-body">Terms</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-body">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
