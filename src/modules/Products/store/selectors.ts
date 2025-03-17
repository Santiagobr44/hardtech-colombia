import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../../store'
import { type Product } from '../../../types.d'

export const selectProducts = (state: RootState) => state.filters.products
export const selectFilters = (state: RootState) => state.filters

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    return products.filter((product: Product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
)
