"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Check, Loader2, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const appleEaseOut = [0.22, 1, 0.36, 1]

const packages = [
  {
    id: "30000",
    name: "باقة 30,000",
    price: "30,000 IQD",
    draws: ["50,000", "100,000", "150,000"],
  },
  {
    id: "40000",
    name: "باقة 40,000",
    price: "40,000 IQD",
    draws: ["100,000", "150,000", "200,000"],
  },
  {
    id: "50000",
    name: "باقة 50,000",
    price: "50,000 IQD",
    draws: ["150,000", "250,000", "500,000"],
    featured: true,
  },
]

export default function OrderPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    packageId: "",
    notes: "",
  })
 const [isSubmitting, setIsSubmitting] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)

const handleChange = (e: any) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = async (e: any) => {
  e.preventDefault()

  const selectedPackage = packages.find(
    (p) => p.id === formData.packageId
  )

  setIsSubmitting(true)

  const message = `
طلب جديد من هدية VIP

*الاسم الكامل:* ${formData.fullName}
*رقم الهاتف:* ${formData.phone}
*العنوان:* ${formData.address}
*الباقة:* ${selectedPackage?.name}
${formData.notes ? `*ملاحظات:* ${formData.notes}` : ""}
`
 window.open(
    `https://wa.me/9647857001992?text=${encodeURIComponent(message)}`,
    "_blank"
  )
setIsSubmitting(false)
  }
    return (
   <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#060912] via-[#0a1018] to-[#0c1320]" />
      
      {/* Subtle star field */}
    <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Soft ambient glow */}
      <div 
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEaseOut }}
            className="text-center mb-10"
          >
            <Link 
              href="/"
              className="inline-block mb-6"
            >
              <motion.img
                src="/images/logo.jpg"
                alt="Hadia VIP"
                className="w-20 h-24 object-contain mx-auto opacity-90"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-3 tracking-tight">
              طلب هدية VIP
            </h1>
            <p className="text-muted-foreground/60 text-sm font-light">
              أكمل بياناتك واختر الباقة المناسبة
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: appleEaseOut }}
               className="text-center py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 flex items-center justify-center mx-auto mb-6"
                  style={{
                    boxShadow: "0 0 40px rgba(212,175,55,0.15)",
                  }}
                >
                  <Check className="w-10 h-10 text-[#d4af37]" />
                </motion.div>
                <h2 className="text-xl font-semibold text-foreground/90 mb-2">
                  تم استلام طلبك بنجاح
                </h2>
                <p className="text-muted-foreground/60 text-sm mb-6">
                  جاري فتح واتساب لإكمال الطلب...
                </p>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5 text-[#d4af37]/60 mx-auto" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.1, ease: appleEaseOut }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Form Card */}
                <div 
                  className="rounded-2xl p-6 md:p-8 space-y-5"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/20 transition-all duration-300 text-sm"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/20 transition-all duration-300 text-sm"
                      placeholder="07xxxxxxxxx"
                      dir="ltr"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      العنوان الكامل
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/20 transition-all duration-300 text-sm"
                      placeholder="المحافظة، المنطقة، أقرب نقطة دالة"
                    />
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-3">
                      اختر الباقة
                    </label>
                    <div className="space-y-3">
                      {packages.map((pkg) => (
                        <motion.label
                          key={pkg.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.packageId === pkg.id
                              ? "bg-[#d4af37]/10 border-[#d4af37]/40"
                              : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                          } border`}
                          style={pkg.featured && formData.packageId === pkg.id ? {
                            boxShadow: "0 0 20px rgba(212,175,55,0.1)",
                          } : {}}
                        >
                          <input
                            type="radio"
                            name="packageId"
                            value={pkg.id}
                            checked={formData.packageId === pkg.id}
                            onChange={handleChange}
                            required
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                            formData.packageId === pkg.id
                              ? "border-[#d4af37] bg-[#d4af37]"
                              : "border-white/20"
                          }`}>
                            {formData.packageId === pkg.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-[#0a1018] rounded-full"
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground/90 text-sm">
                                {pkg.name}
                              </span>
                              {pkg.featured && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] font-medium">
                                  VIP
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground/50 mb-2">
                              السعر: {pkg.price}
                            </p>
                            <div className="flex items-center gap-1.5">
                              <Gift className="w-3 h-3 text-[#d4af37]/60" />
                              <span className="text-xs text-[#d4af37]/80">
                                السحوبات: {pkg.draws.join(" - ")} IQD
                              </span>
                            </div>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      ملاحظات إضافية
                      <span className="text-muted-foreground/40 font-normal mr-1">(اختياري)</span>
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/20 transition-all duration-300 text-sm resize-none"
                      placeholder="أي تفاصيل إضافية تود إضافتها..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.packageId}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: formData.packageId 
                      ? "linear-gradient(135deg, #d4af37 0%, #b8972a 100%)"
                      : "rgba(212,175,55,0.2)",
                    color: formData.packageId ? "#0a1018" : "rgba(212,175,55,0.6)",
                    boxShadow: formData.packageId ? "0 4px 24px rgba(212,175,55,0.2)" : "none",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <span>إرسال الطلب عبر واتساب</span>
                      <ArrowRight className="w-5 h-5 rotate-180" />
                    </>
                  )}
                </motion.button>

                {/* Back Link */}
                <div className="text-center pt-2">
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground/50 hover:text-[#d4af37]/70 transition-colors duration-300"
                  >
                    العودة للصفحة الرئيسية
                  </Link>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
