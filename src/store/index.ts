import { configureStore, Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import cartReducer from '../modules/cart/store/slice'
import filtersReducer from '../modules/filters/store/slice'

const persistanceLocalSorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
  }

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)

    // Verificar si la acción tiene un "type" antes de acceder a él
    if (typeof action === 'object' && action !== null && 'type' in action) {
      const { type } = action as { type: string } // Casting seguro

      if (type === 'cart/addToCart') {
        console.log('syncing with database')
        toast.success('Product added to cart')
      }
      if (type === 'cart/removeFromCart') {
        console.log('syncing with database')
        toast.success('Product removed from cart')
      }
      if (type === 'cart/clearCart') {
        console.log('syncing with database')
        toast.success('Cart cleared')
      }
    }

    console.log(store.getState())
  }

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(persistanceLocalSorageMiddleware)
      .concat(syncWithDatabaseMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
