import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

const partners = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

const blurIn = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
  visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden w-full flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-network-of-lines-and-dots-in-a-dark-space-114-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" />

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
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white/80 text-xs font-body pr-2">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] mb-6 flex flex-col items-center">
          <BlurText
            text="The Website Your Brand"
            delay={100}
            direction="bottom"
            animateBy="words"
          />
          <BlurText
            text="Deserves"
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
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-8"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.{' '}
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-4"
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-body font-medium flex items-center gap-2 cursor-pointer"
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>
          <button className="flex items-center gap-2 text-white text-sm font-body font-light cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Play size={12} fill="white" className="ml-0.5" />
            </div>
            Watch the Film
          </button>
        </motion.div>

        {/* Partners bar */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-auto pt-16 pb-8 flex flex-col items-center gap-6"
          style={{ marginTop: '80px' }}
        >
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body text-white/70">
            Trusted by the teams behind
          </span>
          <div className="flex items-center gap-12 md:gap-16">
            {partners.map((p) => (
              <span key={p} className="text-2xl md:text-3xl font-heading italic text-white">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
