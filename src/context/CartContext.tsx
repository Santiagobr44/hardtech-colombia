import { createContext, useReducer } from 'react'
import { CartInitialState, cartReducer } from '../reducers/cartReducer'
import {
  type CartContextType,
  type CartProviderType,
  type Product,
} from '../types.d'

// 1. Crear el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined)

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, CartInitialState)

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (product: Product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return { state, addToCart, removeFromCart, clearCart }
}

// 2. Crear el provider
export function CartProvider({ children }: CartProviderType) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext>
  )
}
