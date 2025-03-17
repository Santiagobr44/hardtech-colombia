import { useAppDispatch } from '../../../hooks/store'
import { type Product } from '../../../types.d'
import { addToCart, clearCart, removeFromCart } from '../store/slice'

export const useCartActions = () => {
  const dispatch = useAppDispatch()

  const addToCartAction = (product: Product) => {
    dispatch(addToCart(product))
  }

  const removeFromCartAction = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const clearCartAction = () => {
    dispatch(clearCart())
  }

  return { addToCartAction, removeFromCartAction, clearCartAction }
}
