import { Briefcase, Shield, Lock } from 'lucide-react'
import { motion } from 'motion/react'
import BlurText from './BlurText'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface CardProps {
  icon: LucideIcon
  title: string
  body: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturesGrid() {
  const { t } = useLanguage()

  const cards: CardProps[] = [
    {
      icon: Briefcase,
      title: t.featuresGrid.card1.title,
      body: t.featuresGrid.card1.body,
    },
    {
      icon: Shield,
      title: t.featuresGrid.card2.title,
      body: t.featuresGrid.card2.body,
    },
    {
      icon: Lock,
      title: t.featuresGrid.card3.title,
      body: t.featuresGrid.card3.body,
    },
  ]

  return (
    <section id="why-choose-us" className="px-8 lg:px-16 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <span className="section-badge text-[#3c3b6e]">{t.featuresGrid.badge}</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text={t.featuresGrid.heading} delay={110} />
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {cards.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-4"
          >
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <Icon size={20} className="text-black" />
            </div>
            <h3 className="text-black font-body font-semibold text-lg">{title}</h3>
            <p className="section-body text-sm leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
