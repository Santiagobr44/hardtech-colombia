import { useCart } from '../hooks/useCart'
import { type Product } from '../types.d'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

interface ProductsProps {
  products: Product[]
}

export function Products({ products }: ProductsProps) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.product.id === product.id)
  }

  return (
    <main className="p-6 ">
      <ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.slice(0, 16).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform  hover:scale-105 flex flex-col items-center"
            >
              <a href="#" className="block w-full">
                <img
                  src={product.thumbnail}
                  alt={product.title || 'Product image'}
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
                className={`m-3 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg  transition cursor-pointer
                ${isProductInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-900'}`}
                onClick={() => {
                  if (isProductInCart) {
                    removeFromCart(product)
                  } else {
                    addToCart(product)
                  }
                }}
              >
                {isProductInCart ? (
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
        })}
      </ul>
    </main>
  )
}
