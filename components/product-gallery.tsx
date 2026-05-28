"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useMemo } from "react"

const smoothEase = [0.22, 1, 0.36, 1]

const products = [
  {
    id: 1,
    image: "/images/bracelet-1.png",
    title: "سوار الأناقة الذهبية",
    description: "سوار فاخر من الأحجار الطبيعية مع تعليقة ورقة ذهبية",
    featured: true,
  },
  {
    id: 2,
    image: "/images/bracelet-2.png",
    title: "سوار السحر الأخضر",
    description: "تصميم راقٍ يجمع بين جمال الطبيعة وفخامة الذهب",
    featured: false,
  },
  {
    id: 3,
    image: "/images/brand-card.jpg",
    title: "بطاقة هديّة VIP",
    description: "بطاقة العضوية الحصرية مع رمز QR للهدايا المميزة",
    featured: false,
  },
  {
    id: 4,
    image: "/images/keychain.jpg",
    title: "ميدالية هديّة الفاخرة",
    description: "ميدالية أنيقة تحمل هوية العلامة التجارية",
    featured: false,
  },
]

function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 19.7) % 100}%`,
    top: `${(i * 27.3) % 100}%`,
    size: 1 + (i % 3) * 0.4,
    duration: 12 + (i % 6) * 2,
    delay: (i % 8) * 1,
  }))
}

export default function ProductGallery() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const particles = useMemo(() => generateParticles(12), [])

  return (
    <section 
      id="products"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] via-[#0a1020] to-[#0d1424]" />
      
      {/* Subtle ambient glow */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(180,140,50,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
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
              background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)",
            }}
            animate={{
              y: [-5, -60, -5],
              opacity: [0, 0.35, 0],
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: smoothEase }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="inline-block text-sm tracking-[0.25em] uppercase mb-4"
            style={{ color: "rgba(212,175,55,0.7)" }}
          >
            مجموعتنا الفاخرة
          </motion.span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#d4af37" }}
          >
            هدايا تليق بمن تحب
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            اكتشف تشكيلتنا من الهدايا الفاخرة المصممة بعناية لتعبر عن أسمى معاني الحب والتقدير
          </p>
        </motion.div>

        {/* Featured Product - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
          className="mb-12"
        >
          <div 
            className="relative group rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(20,25,40,0.9) 0%, rgba(15,20,35,0.95) 100%)",
              border: "1px solid rgba(212,175,55,0.12)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative aspect-square md:aspect-auto overflow-hidden">
                <motion.img
                  src={products[0].image}
                  alt={products[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Spotlight overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 60%)",
                  }}
                />
              </div>
              
              {/* Content side */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <span 
                  className="inline-block w-fit text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6"
                  style={{ 
                    background: "rgba(212,175,55,0.1)",
                    color: "#d4af37",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  المنتج المميز
                </span>
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#d4af37" }}
                >
                  {products[0].title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-8">
                  {products[0].description}
                </p>
                <a
                  href="https://wa.me/9647857001992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-400"
                  style={{
                    background: "linear-gradient(135deg, #d4af37 0%, #b8972a 100%)",
                    color: "#0a0f1a",
                    boxShadow: "0 4px 15px rgba(212,175,55,0.2)",
                  }}
                >
                  اطلب الآن
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(1).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 + index * 0.15, ease: smoothEase }}
              className="group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(145deg, rgba(20,25,40,0.85) 0%, rgba(15,20,35,0.9) 100%)",
                  border: "1px solid rgba(212,175,55,0.08)",
                  boxShadow: "0 4px 25px rgba(0,0,0,0.25)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover spotlight */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, transparent 60%)",
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#d4af37" }}
                  >
                    {product.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: smoothEase }}
          className="mt-16"
        >
          <div 
            className="relative rounded-3xl overflow-hidden mx-auto max-w-2xl"
            style={{
              border: "1px solid rgba(212,175,55,0.1)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <video
             src="/videos/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[9/16] md:aspect-video object-cover"
            />
            {/* Subtle overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(10,15,26,0.4) 0%, transparent 30%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
