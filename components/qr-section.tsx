"use client"

import { motion } from "framer-motion"
import { QrCode, Smartphone, Gift, Heart } from "lucide-react"

// Apple-style easing
const appleEaseOut = [0.22, 1, 0.36, 1]

const steps = [
  {
    icon: Gift,
    title: "اختر الهدية",
    description: "تصفح مجموعتنا الفاخرة واختر الهدية المثالية",
  },
  {
    icon: QrCode,
    title: "أنشئ رمز QR",
    description: "نقوم بإنشاء رمز QR فريد لهديتك مع رسالتك الخاصة",
  },
  {
    icon: Smartphone,
    title: "شارك الهدية",
    description: "أرسل رمز QR للمستلم عبر أي وسيلة تفضلها",
  },
  {
    icon: Heart,
    title: "لحظة الفرح",
    description: "يمسح المستلم الرمز ليكتشف هديته المميزة",
  },
]

export default function QRSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1320] via-[#0a1018] to-[#0c1320]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.5) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEaseOut }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-5 tracking-tight">
              نظام الهدايا الذكي
            </h2>
            <p className="text-muted-foreground/70 text-base md:text-lg mb-12 leading-relaxed font-light max-w-md">
              تجربة إهداء عصرية وفريدة من نوعها. أنشئ لحظات لا تُنسى مع نظام رمز QR الخاص بنا
            </p>

            {/* Steps */}
            <div className="space-y-7">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: appleEaseOut }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                    <step.icon className="w-5 h-5 text-primary/80" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground/90 mb-1 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground/60 text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* QR Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEaseOut }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Very subtle glow */}
              <div className="absolute inset-0 bg-primary/[0.04] rounded-3xl blur-[60px]" />
              
              {/* QR Card */}
              <div className="relative rounded-3xl p-7 w-72 h-[360px] bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
                {/* Top decoration */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary/20 rounded-full" />
                
                {/* QR Code placeholder */}
                <div className="mt-7 mb-5 flex items-center justify-center">
                  <motion.div
    
  animate={{
    boxShadow: [
      "0 0 16px rgba(212, 175, 55, 0.1)",
      "0 0 28px rgba(212, 175, 55, 0.18)",
      "0 0 16px rgba(212, 175, 55, 0.1)"
    ]
  }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  className="w-40 h-40 bg-foreground/95 rounded-xl flex items-center justify-center p-3.5"
>
  <a
    href="/order"
    className="w-full h-full flex items-center justify-center bg-gold-gradient text-black font-bold text-xl rounded-xl hover:scale-105 transition"
  >
    سجل هنا
  </a>

          </motion.div>
                </div>

                {/* Gift info */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground/50 mb-0.5 font-light">هدية خاصة من</p>
                  <p className="text-lg font-semibold text-gold-gradient">لمن تحب</p>
                </div>

                {/* Scan prompt */}
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2"
                >
                  <span className="text-xs text-primary/70 font-light">هدية تهدى ولا تباع</span>
                </motion.div>
              </div>

              {/* Floating elements - more subtle */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center"
              >
                <Gift className="w-5 h-5 text-primary/70" />
              </motion.div>
              
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 w-10 h-10 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center"
              >
                <Heart className="w-4 h-4 text-primary/70" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
