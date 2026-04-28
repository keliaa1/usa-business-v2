import { motion } from 'motion/react'
import BlurText from './BlurText'

const testimonials = [
  {
    quote:
      'I couldn\'t believe how quickly they got everything done. We had our business registered and operating in the US within a week. Their team handles all the paperwork and makes the entire process feel effortless.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      'My bank account was set up in less than 24 hours. I was worried about the process as a foreigner, but their team made everything so simple and clear. I was able to start receiving payments for my services almost immediately.',
    name: 'Marcus Webb',
    role: 'CEO, Arcline',
  },
  {
    quote:
      'The level of personalized support I received was incredible. They guided me through every step of the process and answered all my questions patiently. I feel confident running my business in the US thanks to their expertise.',
    name: 'Elena Voss',
    role: 'CEO, Helix',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Testimonials() {
  return (
    <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <span className="section-badge text-[#3c3b6e]">What They Say</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text="Don't take our word for it." delay={100} />
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map(({ quote, name, role }) => (
          <motion.div
            key={name}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col justify-between gap-6"
          >
            <p className="text-black/80 font-body font-light text-sm italic leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
            <div>
              <p className="text-[#3c3b6e] font-body font-medium text-sm">{name}</p>
              <p className="text-black/50 font-body font-light text-xs mt-0.5">{role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
