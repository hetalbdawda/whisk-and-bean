import { CartProvider } from './cart/CartContext'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Menu from './components/Menu'
import OurStory from './components/OurStory'
import AllergyInfo from './components/AllergyInfo'
import GiftCards from './components/GiftCards'
import Rewards from './components/Rewards'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <HeroCarousel />
        <OurStory />
        <Menu />
        <AllergyInfo />
        <GiftCards />
        <Rewards />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}

export default App
