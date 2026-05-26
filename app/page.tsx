import HeroSection from "@/components/hero-section"
import ProductGallery from "@/components/product-gallery"
import PackagesSection from "@/components/packages-section"
import QRSection from "@/components/qr-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ProductGallery />
      <PackagesSection />
      <QRSection />
      <Footer />
    </main>
  )
}
