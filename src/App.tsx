import { Toaster } from 'sonner'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './modules/Products/components/Products'
//import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './modules/cart/components/Cart'

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Products />
      <Footer />
      <Toaster richColors />
    </>
  )
}

export default App
