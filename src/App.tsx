import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
//import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
