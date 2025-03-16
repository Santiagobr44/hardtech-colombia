import { useCallback, useState } from 'react'
import { useCart } from '../hooks/useCart'
import { type Product } from '../types'
import { CartItem } from './CartItem'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { cart, clearCart, addToCart, removeFromCart } = useCart()

  const handleAddToCart = useCallback(
    (product: Product) => () => addToCart(product),
    [addToCart]
  )

  const handleRemoveFromCart = useCallback(
    (product: Product) => () => removeFromCart(product),
    [removeFromCart]
  )

  return (
    <>
      {/* Botón flotante para abrir el carrito */}
      {!isOpen && (
        <button
          type="button"
          className="fixed top-6 right-6 bg-gray-800 hover:bg-gray-900 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir carrito"
        >
          <CartIcon />
        </button>
      )}

      {/* Overlay oscuro cuando el carrito está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Carrito de compras */}
      <aside
        className={`fixed top-0 right-0 h-full w-110 bg-gray-900 opacity-95 backdrop-blur-md p-6 transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl rounded-l-2xl`}
        role="dialog"
        aria-labelledby="cart-title"
      >
        {/* Botón para cerrar */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar carrito"
        >
          ✕
        </button>

        <h2 id="cart-title" className="text-xl font-semibold text-white mb-6">
          Tu carrito
        </h2>

        <ul className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              addToCart={handleAddToCart(item.product)}
              removeFromCart={handleRemoveFromCart(item.product)}
              quantity={item.quantity}
            />
          ))}
        </ul>

        {/* Botón para vaciar el carrito */}
        {cart.length > 0 && (
          <button
            type="button"
            className="mt-6 flex items-center justify-center w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
            aria-label="Vaciar carrito"
            onClick={clearCart}
          >
            <ClearCartIcon />
            Vaciar carrito
          </button>
        )}
      </aside>
    </>
  )
}
