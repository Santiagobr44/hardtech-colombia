import { useLocation } from 'wouter'
import { useAppSelector } from '../../../hooks/store'
import { Product } from '../../../types.d'
import { useCartActions } from '../../cart/hooks/useCartActions'

export function ProductDetail({ product }: { product: Product }) {
  const { addToCartAction } = useCartActions()
  const cart = useAppSelector((state) => state.cart.cart)
  const isInCart = cart.some((item) => item.product.id === product.id)

  const [, setLocation] = useLocation()

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <button
        type="button"
        onClick={() => setLocation('/')}
        className="mb-4 text-gray-600 hover:text-gray-800 transition flex items-center"
      >
        ← Volver atrás
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Imagen del producto */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg"
        />

        {/* Información del producto */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.title}
          </h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-amber-500 mt-4">
            ${product.price}
          </p>
          <button
            type="button"
            onClick={() => addToCartAction(product)}
            className={`mt-6  text-white px-4 py-2 rounded-lg  ${
              isInCart
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-800 hover:bg-gray-900'
            }`}
            disabled={isInCart}
          >
            {isInCart ? 'Ya en el carrito' : 'Agregar al carrito'}
          </button>
        </div>

        {/* Botón de agregar al carrito */}
      </div>
    </div>
  )
}
