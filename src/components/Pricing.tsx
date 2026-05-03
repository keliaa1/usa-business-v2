import { Check } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";
import { useLanguage } from "../contexts/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      className="px-8 lg:px-16 py-32 max-w-7xl mx-auto flex flex-col items-center relative"
    >
      {/* Background ambient glow matching the #1d4ed8 color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: "#3c3b6e" }}
      />

      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 relative z-10">
        <span className="section-badge text-[#3c3b6e]">{t.pricing.badge}</span>
        <h2 className="section-heading max-w-xl">
          <BlurText text={t.pricing.heading} delay={100} />
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm"
      >
        <div
          className="rounded-3xl p-8 border border-black/10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(60, 59, 110, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)",
            boxShadow: "0 8px 32px rgba(60, 59, 110, 0.1)",
          }}
        >
          {/* Top glow inside the card */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[50px] opacity-40"
            style={{ backgroundColor: "#3c3b6e" }}
          />

          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="text-black text-xl font-body font-semibold">{t.pricing.planName}</h3>
            <span
              className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "#3c3b6e" }}
            >
              {t.pricing.popularity}
            </span>
          </div>

          <p className="text-black/60 text-sm font-body font-light mb-6">
            {t.pricing.billing}
          </p>

          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-heading italic text-black">{t.pricing.price}</span>
            <span className="text-black/60 font-body text-sm mb-1.5">
              {t.pricing.period}
            </span>
          </div>

          <p className="text-black/60 text-sm font-body font-light pb-8 border-b border-black/10 mb-8">
            {t.pricing.description}
          </p>

          <ul className="flex flex-col gap-4 mb-10">
            {t.pricing.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-black/80 font-body text-sm"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: "rgba(60, 59, 110, 0.15)",
                    borderColor: "#3c3b6e",
                  }}
                >
                  <Check size={12} color="#3c3b6e" strokeWidth={3} />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button
            className="w-full rounded-full py-3.5 text-white font-body font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#3c3b6e" }}
          >
            {t.pricing.cta}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
