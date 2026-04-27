import { motion } from 'motion/react'
import BlurText from './BlurText'

const testimonials = [
  {
    quote:
      'A complete rebuild in five days. The result outperformed everything we\'d spent months building before.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      'Conversions up 4x. That\'s not a typo. The design just works differently when it\'s built on real data.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      'They didn\'t just design our site. They defined our brand. World-class doesn\'t begin to cover it.',
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
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
        <span className="section-badge">What They Say</span>
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
              <p className="text-black font-body font-medium text-sm">{name}</p>
              <p className="text-black/50 font-body font-light text-xs mt-0.5">{role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
