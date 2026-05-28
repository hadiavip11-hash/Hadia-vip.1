import HeroSection from "@/components/hero-section"
import ProductGallery from "@/components/product-gallery"
import PackagesSection from "@/components/packages-section"
import QRSection from "@/components/qr-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
<main className="min-h-screen overflow-x-hidden">

     <video
  autoPlay
  muted
  loop
  playsInline
  className="fixed inset-0 w-full h-full object-cover -z-10"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>

      <HeroSection />
      <ProductGallery />
      <PackagesSection />
      <QRSection />
      <Footer />
    </main>
  )
}
