import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import { type Filter } from '../types.d'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(event.target.value)
    setFilters((prevState: Filter) => ({
      ...prevState,
      minPrice: newMinPrice,
    }))
  }

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value
    setFilters((prevState: Filter) => ({ ...prevState, category: newCategory }))
  }

  return (
    <aside className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
      <div className="mt-4 space-y-6">
        {/* Categoría */}
        <div>
          <label
            htmlFor={categoryFilterId}
            className="block text-md font-medium text-gray-800"
          >
            Categoría
          </label>
          <select
            name="category"
            id={categoryFilterId}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            value={filters.category}
            onChange={handleChangeCategory}
          >
            <option value="all">Todas las categorías</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Celulares</option>
            <option value="mobile-accessories">Accesorios</option>
          </select>
        </div>

        {/* Precio mínimo con Range */}
        <div>
          <label
            htmlFor={minPriceFilterId}
            className="block text-md font-medium text-gray-800"
          >
            Precio mínimo
          </label>
          <div className="flex items-center gap-4 mt-2">
            <input
              type="range"
              name="minPrice"
              id={minPriceFilterId}
              min="0"
              max="1000"
              value={filters.minPrice}
              onChange={handleChangeMinPrice}
              className="w-full appearance-none bg-gray-300 rounded-lg h-2 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <span className="text-sm font-medium text-gray-800 bg-gray-100 px-2 py-1 rounded-md">
              ${filters.minPrice}
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
