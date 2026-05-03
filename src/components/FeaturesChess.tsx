import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import BlurText from './BlurText'
import bitcoinGif from '../assets/bitcoin.gif'
import businessGif from '../assets/business.gif'
import creditcardGif from '../assets/creditcard.gif'
import { useLanguage } from '../contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

interface RowProps {
  title: string
  body: string
  cta: string
  gif: string
  reverse?: boolean
}

function ChessRow({ title, body, cta, gif, reverse = false }: RowProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ staggerChildren: 0.15 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}
    >
      {/* Text side */}
      <div className="flex-1 flex flex-col gap-5 max-w-lg">
        <motion.h3
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading italic text-black leading-tight tracking-tight"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="section-body"
        >
          {body}
        </motion.p>
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-black text-sm font-body font-medium flex items-center gap-2 w-fit hover:bg-[#3c3b6e] hover:text-white transition duration-300"
          >
            {cta}
            <ArrowUpRight size={16} className='hover:bg-[#3c3b6e] hover:text-white' />
          </a>
        </motion.div>
      </div>

      {/* Image side */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="flex-1 w-full"
      >
        <div className="liquid-glass rounded-2xl overflow-hidden w-full">
          <img src={gif} alt={title} className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturesChess() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="px-8 lg:px-16 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <span className="section-badge text-[#3c3b6e]">{t.featuresChess.badge}</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text={t.featuresChess.heading} delay={110} />
        </h2>
      </div>

      <ChessRow
        title={t.featuresChess.row1.title}
        body={t.featuresChess.row1.body}
        cta={t.featuresChess.row1.cta}
        gif={bitcoinGif}
      />

      <ChessRow
        title={t.featuresChess.row2.title}
        body={t.featuresChess.row2.body}
        cta={t.featuresChess.row2.cta}
        gif={businessGif}
        reverse
      />

      <ChessRow
        title={t.featuresChess.row3.title}
        body={t.featuresChess.row3.body}
        cta={t.featuresChess.row3.cta}
        gif={creditcardGif}
      />
    </section>
  )
}
