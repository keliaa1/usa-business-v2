import { motion } from 'motion/react'
import BlurText from './BlurText'
import { useLanguage } from '../contexts/LanguageContext'
import { ArrowRight } from 'lucide-react'
import why1 from '../assets/why-1.png'
import why2 from '../assets/why-2.png'
import why3 from '../assets/why-3.png'
import why4 from '../assets/why-4.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturesGrid() {
  const { t } = useLanguage()

  return (
    <section id="why-choose-us" className="px-8 lg:px-16 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <span className="section-badge text-[#3c3b6e]">{t.whyChooseUs.badge}</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text={t.whyChooseUs.heading} delay={110} />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[280px]">
        {/* Card 1: Tall (Left) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:col-span-2 md:row-span-2 liquid-glass rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="absolute inset-0 z-0">
            <img src={why1} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-white font-heading text-2xl mb-8 leading-tight italic">
              {t.whyChooseUs.card1.body}
            </h3>
            <a href="#contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300 w-fit group/btn">
              {t.whyChooseUs.card1.cta}
              <div className="bg-white rounded-full p-1 text-black group-hover/btn:bg-black group-hover/btn:text-white transition-colors">
                <ArrowRight size={14} />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Card 2: Wide Top */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:col-span-3 md:row-span-1 liquid-glass rounded-3xl p-8 flex flex-col justify-end overflow-hidden relative group"
        >
          <div className="absolute inset-0 z-0">
            <img src={why2} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>
          <div className="relative z-10">
             <h3 className="text-white font-heading text-2xl max-w-[280px] leading-tight italic">
              <span className="opacity-70">Trusted by</span> entrepreneurs & innovators worldwide.
            </h3>
          </div>
        </motion.div>

        {/* Card 3: Small Top */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:col-span-1 md:row-span-1 liquid-glass rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group bg-[#f0f0f0]"
        >
          <div className="relative z-10">
            <h2 className="text-5xl font-heading text-black mb-1 italic">{t.whyChooseUs.card3.title}</h2>
            <p className="text-black/60 text-[10px] leading-tight font-body uppercase tracking-widest">{t.whyChooseUs.card3.body}</p>
          </div>
          <div className="absolute bottom-[-15px] right-[-15px] w-32 h-32 opacity-90 group-hover:scale-110 transition-transform duration-500">
            <img src={why3} alt="" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Card 4: Wide Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:col-span-4 md:row-span-1 liquid-glass rounded-3xl p-8 flex flex-col justify-center overflow-hidden relative group"
        >
          <div className="absolute inset-0 z-0">
             <img src={why4} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-white font-heading text-2xl leading-tight italic">
              {t.whyChooseUs.card4.body.split('transforms')[0]}
              <span className="opacity-60">transforms {t.whyChooseUs.card4.body.split('transforms')[1]}</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
