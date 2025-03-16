import { type cartActionType, type CartItem } from '../types.d'

export const CartInitialState: CartItem[] = JSON.parse(
  window.localStorage.getItem('cart') || '[]'
) as CartItem[]

// update local storage
export const updateLocalStorage = (cart: CartItem[]) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const cartReducer = (
  state: CartItem[],
  action: cartActionType
): CartItem[] => {
  const { type } = action

  if (type === 'ADD_TO_CART') {
    const product = action.payload
    if (!product) return state
    const productInCartIndex = state.findIndex(
      (item) => item.product.id === product.id
    )

    if (productInCartIndex >= 0) {
      const newState = state.map((item, index) =>
        index === productInCartIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      updateLocalStorage(newState)
      return newState
    }

    const newState = [...state, { product, quantity: 1 }]

    updateLocalStorage(newState)
    return newState
  }

  if (type === 'REMOVE_FROM_CART') {
    const newState = state
      .map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) // Eliminamos solo si la cantidad llega a 0

    updateLocalStorage(newState)
    return newState
  }

  if (type === 'CLEAR_CART') {
    updateLocalStorage([])
    return []
  }

  return state
}
