import { AddToCartIcon, RemoveFromCartIcon } from '../../../components/Icons'
import { useAppSelector } from '../../../hooks/store'
import { Product } from '../../../types.d'
import { useCartActions } from '../../cart/hooks/useCartActions'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const cart = useAppSelector((state) => state.cart.cart)
  const { addToCartAction, removeFromCartAction } = useCartActions()

  const isInCart = cart.some((item) => item.product.id === product.id)

  return (
    <li className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 flex flex-col items-center">
      <a href="#" className="block w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between items-center text-center w-full">
          <strong className="font-semibold text-lg truncate w-full text-gray-800">
            {product.title}
          </strong>
          <span className="text-lg font-bold text-amber-500">
            ${product.price}
          </span>
        </div>
      </a>
      <button
        type="button"
        className={`m-3 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg transition cursor-pointer
          ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-900'}`}
        onClick={() =>
          isInCart ? removeFromCartAction(product.id) : addToCartAction(product)
        }
      >
        {isInCart ? (
          <>
            <RemoveFromCartIcon />
            <span>Eliminar del carrito</span>
          </>
        ) : (
          <>
            <AddToCartIcon />
            <span>Añadir al carrito</span>
          </>
        )}
      </button>
    </li>
  )
}
