import { createContext, useState } from 'react'
import {
  Category,
  type Filter,
  type FiltersContextType,
  type FiltersProviderType,
} from '../types.d'

const defaultFilters: Filter = {
  category: Category.All,
  minPrice: 0,
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: defaultFilters,
  setFilters: () => {},
})

export function FiltersProvider({ children }: FiltersProviderType) {
  const [filters, setFilters] = useState(defaultFilters)

  return (
    <FiltersContext value={{ filters, setFilters }}>{children}</FiltersContext>
  )
}
