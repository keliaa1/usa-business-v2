import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import BlurText from './BlurText'
import bitcoinGif from '../assets/bitcoin.gif'
import businessGif from '../assets/business.gif'
import creditcardGif from '../assets/creditcard.gif'

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
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-black text-sm font-body font-medium flex items-center gap-2 w-fit"
          >
            {cta}
            <ArrowUpRight size={16} />
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
  return (
    <section id="work" className="px-8 lg:px-16 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <span className="section-badge">Capabilities</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text="Pro features. Zero complexity." delay={110} />
        </h2>
      </div>

      <ChessRow
        title="Opening a Bank Account"
        body="At My USA Business, we offer easy and secure solutions for opening US bank accounts, offshore accounts, and crypto accounts for both individuals and businesses. Open a US account to access global financial services, enjoy the flexibility of offshore accounts, or manage your digital assets with crypto accounts."
        cta="Open an account"
        gif={bitcoinGif}
      />

      <ChessRow
        title="Create or expand your business into the international market."
        body="We provide you with the tools and support you need as an entrepreneur, business owner, or investor to achieve your goals and discover endless opportunities. Access international financial markets and take your business to the next level with us"
        cta="See how it works"
        gif={businessGif}
        reverse
      />

      <ChessRow
        title="Receive payments directly into your account in dollars"
        body="Offer your customers all payment methods: credit or debit card, cryptocurrency, Zelle and many more, so you can receive your payments quickly and securely, no matter which channel your customers choose."
        cta="View features"
        gif={creditcardGif}
      />
    </section>
  )
}
