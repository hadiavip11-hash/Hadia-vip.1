"use client"

import { motion } from "framer-motion"
import { Instagram, MessageCircle, Facebook } from "lucide-react"

// Apple-style easing
const appleEaseOut = [0.22, 1, 0.36, 1]

// TikTok icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/Hadiavip1?locale=ar_AR", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/hadia_vip.1/", label: "Instagram" },
  { icon: TikTokIcon, href: "https://tiktok.com/@hadia_vip", label: "TikTok" },
  { icon: MessageCircle, href: "https://wa.me/9647857001992", label: "WhatsApp" },
]

export default function Footer() {
  return (
    <footer className="relative py-14 md:py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060910] to-[#0a1018]" />
      
      {/* Top border - very subtle */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Brand Card Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: appleEaseOut }}
          className="flex justify-center mb-12"
        >
          <div 
            className="relative w-48 h-auto rounded-xl overflow-hidden"
            style={{
              boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 60px rgba(212,175,55,0.06)",
            }}
          >
            <img 
              src="/images/brand-card.jpg" 
              alt="Hadia VIP Card" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: appleEaseOut }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/images/logo.jpg" 
              alt="هديّة" 
              className="w-14 h-[68px] object-contain rounded-lg"
              style={{
                filter: "drop-shadow(0 0 12px rgba(212,175,55,0.08))",
              }}
            />
          </div>

          {/* Tagline */}
          <p className="text-xl font-semibold text-gold-gradient mb-1 tracking-tight">
            هديّة
          </p>
          <p className="text-muted-foreground/50 text-sm font-light mb-7">
            أهدِ من القلب إلى القلب
          </p>

          {/* Social links */}
          <div className="flex gap-3 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: appleEaseOut }}
                className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-foreground/60 transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                aria-label={social.label}
              >
                {typeof social.icon === 'function' ? (
                  <social.icon />
                ) : (
                  <social.icon className="w-4 h-4" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.a
            href="https://wa.me/9647857001992"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: appleEaseOut }}
            className="mb-10 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-amber text-primary-foreground text-sm font-medium transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          >
            تواصل معنا عبر واتساب
          </motion.a>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border/30 to-transparent mb-7" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/40 text-center font-light">
            {new Date().getFullYear()} هديّة. جميع الحقوق محفوظة
          </p>
          <p className="text-[10px] text-muted-foreground/25 mt-1.5 font-light">
            صُنع بحب في العراق
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
