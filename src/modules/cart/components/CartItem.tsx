import { type Product } from '../../../types'

interface CartItemProps {
  product: Product
  quantity: number
  addToCart: () => void
  removeFromCart: () => void
}

export function CartItem({
  product,
  addToCart,
  quantity,
  removeFromCart,
}: CartItemProps) {
  const { title, thumbnail, price } = product
  return (
    <li className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg shadow">
      <img src={thumbnail} alt="laptop" className="w-16 h-16 rounded-md" />
      <div className="flex-1">
        <strong className="text-gray-800 block">{title}</strong>
        <span className="text-amber-500 font-bold">${price}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-800">{quantity}</span>
        <button
          type="button"
          className="bg-gray-500 w-7 text-white px-2 py-1 rounded hover:bg-gray-800 transition cursor-pointer"
          aria-label="Aumentar cantidad"
          onClick={() => addToCart()}
        >
          +
        </button>
        <button
          type="button"
          className="bg-gray-500 w-7 text-white px-2 py-1 rounded hover:bg-gray-800 transition cursor-pointer"
          aria-label="Reducir cantidad"
          onClick={() => removeFromCart()}
        >
          -
        </button>
      </div>
    </li>
  )
}
