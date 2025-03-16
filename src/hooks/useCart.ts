import { use } from 'react'
import { CartContext } from '../context/CartContext'

export const useCart = () => {
  const cart = use(CartContext)

  if (cart === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return cart
}
