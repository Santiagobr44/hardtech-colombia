import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CartItemType, Product } from '../../../types.d'

const DEFAULT_STATE = {
  cart: [],
}

interface CartState {
  cart: CartItemType[]
}

const initialState: CartState = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState) {
    try {
      const parsedState = JSON.parse(persistedState) as { cart: CartState }
      return parsedState.cart
    } catch (error) {
      console.error('Error parsing persisted state:', error)
      return DEFAULT_STATE
    }
  }
  return DEFAULT_STATE
})()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ product, quantity: 1 })
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      const index = state.cart.findIndex(
        (item) => item.product.id === productId
      )

      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1
        } else {
          state.cart.splice(index, 1)
        }
      }
    },

    clearCart: (state) => {
      state.cart = []
    },
  },
})

export default cartSlice.reducer

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
