import { useRoute } from 'wouter'
import { useAppSelector } from '../../../hooks/store'
import { Product } from '../../../types.d'
import { ProductDetail } from '../components/ProductDetail'

export function ProductDetailPage() {
  const [match, params] = useRoute('/product/:id')
  const product = useAppSelector((state) =>
    state.filters.products.find((p) => p.id === Number(params?.id))
  ) as Product

  if (!match || !product) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p>Producto no encontrado</p>
      </div>
    )
  }

  return <ProductDetail product={product} />
}

export default ProductDetailPage
