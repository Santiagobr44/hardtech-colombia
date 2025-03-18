import { Products } from '../modules/Products/components/Products'
import { Footer } from './Footer'
import { Header } from './Header'

export function HomePage() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  )
}
