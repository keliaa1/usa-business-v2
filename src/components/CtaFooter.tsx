import { MapPin, Phone, Mail, ThumbsUp } from 'lucide-react'
import BlurText from './BlurText'
import { useLanguage } from '../contexts/LanguageContext'

export default function CtaFooter() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="relative bg-[#f8f9fa] overflow-hidden border-t border-black/5">
      {/* Background Glows */}
      <div
        className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ backgroundColor: '#3c3b6e' }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-300 via-red-300 to-green-300 rounded-full blur-[130px] opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-52 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-start">
            <h2 className="text-6xl md:text-[5rem] font-heading italic text-[#3c3b6e] leading-[1.1] tracking-tight mb-16">
              <BlurText text={t.footer.heading} delay={100} />
            </h2>

            {/* Dot Grid Pattern */}
            <svg className="w-64 h-48 opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#000000" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotGrid)" />
            </svg>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Address */}
            <div className="flex gap-6">
              <div className="text-black mt-1">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-black font-body font-bold text-2xl mb-2 tracking-tight">{t.footer.address}</h3>
                <p className="text-black/60 font-body text-sm mb-0.5">London</p>
                <p className="text-black/60 font-body text-sm">25 Wilton Road, Victoria, London, SW1V 1LW</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <div className="text-black mt-1">
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-black font-body font-bold text-2xl mb-2 tracking-tight">{t.footer.phone}</h3>
                <p className="text-black/60 font-body text-sm">+44 7551 450 400</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex gap-6">
              <div className="text-black mt-1">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-black font-body font-bold text-2xl mb-2 tracking-tight">{t.footer.mail}</h3>
                <a href="mailto:hello@baseone.uk" className="text-black/60 hover:text-black transition-colors font-body text-sm">
                  hello@baseone.uk
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex gap-6 mt-4">
              <div className="text-black mt-1">
                <ThumbsUp size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-black font-body font-bold text-2xl mb-4 tracking-tight">{t.footer.followUs}</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-16 mt-16 border-t border-black/10">
          <p className="text-black/40 text-xs font-body mb-4 md:mb-0">
            &copy; 2026 My USA Business. {t.footer.rights}
          </p>
          <div className="items-center gap-6 hidden md:flex">
            <a href="#" className="text-black/40 hover:text-black transition-colors text-xs font-body">{t.footer.privacy}</a>
            <a href="#" className="text-black/40 hover:text-black transition-colors text-xs font-body">{t.footer.terms}</a>
            <a href="#" className="text-black/40 hover:text-black transition-colors text-xs font-body">{t.footer.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
