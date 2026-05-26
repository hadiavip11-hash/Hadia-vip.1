"use client"

import { motion } from "framer-motion"
import { Gift, Sparkles, Crown } from "lucide-react"

// Apple-style easing
const appleEaseOut = [0.22, 1, 0.36, 1]

const packages = [
  {
    title: "الباقة الكلاسيكية",
    subtitle: "Classic Package",
    price: "٣٠,٠٠٠",
    currency: "د.ع",
    icon: Gift,
    description: "فرصة للفوز بجوائز قيّمة",
    prizes: ["٥٠,٠٠٠ د.ع", "١٠٠,٠٠٠ د.ع", "١٥٠,٠٠٠ د.ع"],
  },
  {
    title: "الباقة المميزة",
    subtitle: "Premium Package",
    price: "٤٠,٠٠٠",
    currency: "د.ع",
    icon: Sparkles,
    description: "جوائز أكبر وفرص أفضل",
    prizes: ["١٠٠,٠٠٠ د.ع", "١٥٠,٠٠٠ د.ع", "٢٠٠,٠٠٠ د.ع"],
  },
  {
    title: "باقة VIP",
    subtitle: "VIP Package",
    price: "٥٠,٠٠٠",
    currency: "د.ع",
    icon: Crown,
    description: "أعلى الجوائز للعملاء المميزين",
    prizes: ["١٥٠,٠٠٠ د.ع", "٢٥٠,٠٠٠ د.ع", "٥٠٠,٠٠٠ د.ع"],
    featured: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: appleEaseOut,
    },
  },
}

export default function PackagesSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1018] via-[#0c1320] to-[#0a1018]" />
      
      {/* Very subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEaseOut }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-5 tracking-tight">
            باقات السحب الحصرية
          </h2>
          <p className="text-muted-foreground/70 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            اختر باقتك وادخل السحب للفوز بجوائز نقدية قيّمة
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.5, ease: appleEaseOut } }}
              className={`relative group ${pkg.featured ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-5 py-1.5 bg-gradient-to-r from-primary to-amber text-primary-foreground text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`
                relative rounded-2xl p-7 md:p-8 h-full overflow-hidden
                bg-gradient-to-b from-white/[0.05] to-white/[0.02]
                border border-white/[0.08]
                ${pkg.featured ? 'border-primary/30 bg-gradient-to-b from-white/[0.07] to-white/[0.03]' : ''}
                backdrop-blur-sm
                transition-all duration-700 ease-out
                group-hover:border-primary/25
                group-hover:bg-gradient-to-b group-hover:from-white/[0.08] group-hover:to-white/[0.03]
              `}
              style={{
                boxShadow: pkg.featured 
                  ? "0 0 50px rgba(212,175,55,0.08), 0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"
                  : "0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
              >
                {/* Glassmorphism inner glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 50%)",
                  }}
                />

                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-xl mb-6 flex items-center justify-center 
                  transition-all duration-700 ease-out group-hover:scale-110
                  ${pkg.featured 
                    ? 'bg-gradient-to-br from-primary/20 to-primary/10' 
                    : 'bg-gradient-to-br from-primary/10 to-primary/5'
                  }
                `}>
                  <pkg.icon className={`w-7 h-7 ${pkg.featured ? 'text-primary' : 'text-primary/80'}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight">
                  {pkg.title}
                </h3>
                <p className="text-xs text-muted-foreground/40 mb-4 font-light tracking-wide">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <span className="text-3xl font-bold text-gold-gradient">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-primary/60 mr-1 font-medium">
                    {pkg.currency}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground/60 text-sm mb-6 font-light">
                  {pkg.description}
                </p>

                {/* Prize draws section */}
                <div className="mb-7">
                  <p className="text-xs text-muted-foreground/50 mb-3 font-medium">
                    فرص الفوز بالسحب:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.prizes.map((prize, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground/80 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${pkg.featured ? 'bg-primary' : 'bg-primary/60'}`} />
                        <span className="font-medium">{prize}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/9647857001992"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    block w-full py-3 px-6 rounded-xl text-center text-sm font-semibold
                    transition-all duration-500 ease-out
                    ${pkg.featured 
                      ? 'bg-gradient-to-r from-primary to-amber text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]' 
                      : 'bg-white/[0.05] border border-white/[0.1] text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    }
                  `}
                >
                  اشترك الآن
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
