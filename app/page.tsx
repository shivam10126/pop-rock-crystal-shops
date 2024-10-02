import ProductListing from '@/components/Product'
import Hero from '../components/hero'
import AgatePhoneGrip from '@/components/AgatePhoneGrip'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductListing />
      <AgatePhoneGrip />
      <Footer />
    </main>
  )
}