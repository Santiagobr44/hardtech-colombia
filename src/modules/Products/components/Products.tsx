import { useAppSelector } from '../../../hooks/store'
import { selectFilteredProducts } from '../store/selectors'
import { ProductCard } from './ProductCard'

export function Products() {
  const products = useAppSelector(selectFilteredProducts)

  return (
    <main className="p-6 ">
      <ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.slice(0, 16).map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </ul>
    </main>
  )
}
