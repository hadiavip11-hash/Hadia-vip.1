"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useMemo } from "react"

// Smooth easing
const smoothEase = [0.25, 0.1, 0.25, 1]

// Generate stable particle positions
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 17.3) % 100}%`,
    top: `${(i * 23.7) % 100}%`,
    size: 1 + (i % 3) * 0.5,
    duration: 10 + (i % 5) * 3,
    delay: (i % 10) * 0.8,
  }))
}

// Generate stable stars
function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 13.7) % 100}%`,
    top: `${(i * 7.3) % 50}%`,
    size: 0.8 + (i % 2) * 0.4,
    opacity: 0.15 + (i % 4) * 0.08,
    twinkleDuration: 5 + (i % 4),
    twinkleDelay: (i % 8) * 0.5,
  }))
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03])
  
  const particles = useMemo(() => generateParticles(18), [])
  const stars = useMemo(() => generateStars(35), [])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Baghdad night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070a12] via-[#0a0f1a] to-[#0d1424]" />
      
      {/* Subtle warm horizon glow - Baghdad night atmosphere */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 opacity-30"
        style={{
          background: "linear-gradient(to top, rgba(140,100,40,0.08) 0%, transparent 100%)",
        }}
      />
      
      {/* Stars layer - subtle night sky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-white/70"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            }}
            transition={{
              duration: star.twinkleDuration,
              repeat: Infinity,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Very subtle ambient glow - reduced intensity */}
      <div 
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(200,160,60,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Watermark Logo - elegant and visible */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[340px] h-[400px] md:w-[420px] md:h-[500px]">
          {/* Soft golden glow behind logo */}
          <div 
            className="absolute inset-0 blur-[60px] opacity-[0.12]"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)",
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.065] blur-[2px]"
            style={{
              filter: "drop-shadow(0 0 40px rgba(212,175,55,0.15))",
            }}
          >
            <img
              src="/images/logo.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating gold particles - subtle dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              background: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0) 70%)",
            }}
            animate={{
              y: [-10, -80, -10],
              opacity: [0, 0.4, 0],
              scale: [0.6, 1, 0.6],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
        >
          {/* Small logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: smoothEase }}
            className="mb-10"
          >
            <img 
              src="/images/logo.jpg" 
              alt="هديّة" 
              className="w-16 h-20 md:w-20 md:h-24 mx-auto object-contain rounded-lg"
              style={{
                filter: "drop-shadow(0 4px 20px rgba(212,175,55,0.15))",
              }}
            />
          </motion.div>

          {/* Main headline - clean and sharp */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance"
            style={{
              color: "#d4af37",
            }}
          >
            أهدِ من القلب إلى القلب
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: smoothEase }}
            className="text-lg md:text-xl text-neutral-400 mb-14 font-light leading-relaxed"
          >
            منصة الهدايا الفاخرة الأولى في العراق
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: smoothEase }}
          >
            <button 
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-10 py-4 font-medium text-base rounded-full overflow-hidden transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8972a 100%)",
                color: "#0a0f1a",
                boxShadow: "0 4px 20px rgba(212,175,55,0.2)",
              }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                اكتشف الهدايا
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(135deg, #e8c84a 0%, #d4af37 100%)",
                }}
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-primary/25 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [2, 14, 2], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-2 bg-primary/50 rounded-full mt-1.5"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
