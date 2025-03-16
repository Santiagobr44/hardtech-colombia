import { use } from 'react'
import { FiltersContext } from '../context/FiltersContext'
import { type Product } from '../types'

export function useFilters() {
  const { filters, setFilters } = use(FiltersContext)

  const filterProducts = (products: Product[]): Product[] => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
