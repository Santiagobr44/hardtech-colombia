import { useState } from 'react'
import { CartIcon, ClearCartIcon } from '../../../components/Icons'
import { useAppSelector } from '../../../hooks/store'
import { useCartActions } from '../hooks/useCartActions'
import { CartItem } from './CartItem'

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const cart = useAppSelector((state) => state.cart.cart)

  const { addToCartAction, removeFromCartAction, clearCartAction } =
    useCartActions()

  return (
    <>
      {/* Botón flotante para abrir el carrito */}
      {!isOpen && (
        <button
          type="button"
          className="fixed top-6 right-6 bg-gray-800 hover:bg-gray-900 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 text-white cursor-pointer z-50"
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
        className={`fixed top-0 right-0 h-full w-110 bg-white p-6 transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl rounded-l-2xl`}
        role="dialog"
        aria-labelledby="cart-title"
      >
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-800 text-center ">
              No hay productos en tu carrito
            </p>
            <button
              type="button"
              className="bg-gray-800 text-white p-2 items-center justify-center rounded-lg hover:bg-gray-900 transition cursor-pointer 0"
              onClick={() => setIsOpen(false)}
            >
              Explorar tienda
            </button>
          </div>
        ) : (
          <>
            {/* Botón para cerrar */}
            <button
              type="button"
              className="absolute font-bold top-4 right-4 text-gray-400 hover:text-gray-800 transition cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar carrito"
            >
              ✕
            </button>
            {/* Título del carrito */}
            <h2
              id="cart-title"
              className="text-xl font-semibold text-gray-800 mb-6 "
            >
              Tu carrito
            </h2>
          </>
        )}

        <ul className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              addToCart={() => addToCartAction(item.product)}
              removeFromCart={() => removeFromCartAction(item.product.id)}
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
            onClick={() => clearCartAction()}
          >
            <ClearCartIcon />
            Vaciar carrito
          </button>
        )}
      </aside>
    </>
  )
}
