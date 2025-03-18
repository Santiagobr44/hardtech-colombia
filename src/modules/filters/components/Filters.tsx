import { useAppSelector } from '../../../hooks/store'
import { useFiltersActions } from '../hooks/useFiltersActions'

export function Filters() {
  const filters = useAppSelector((state) => state.filters)
  const { setCategoryAction, setMinPriceAction } = useFiltersActions()

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPriceAction(Number(event.target.value))
  }

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategoryAction(event.target.value)
  }

  return (
    <aside className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg">
      {/* Categoría */}
      <div className="flex items-center gap-2">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">
          Categoría:
        </label>
        <select
          id="category"
          className="p-1 border border-gray-300 rounded-md text-sm focus:outline-none cursor-pointer"
          value={filters.category}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
          <option value="mobile-accessories">Accesorios</option>
        </select>
      </div>

      {/* Precio mínimo con Range */}
      <div className="flex items-center gap-2">
        <label htmlFor="minPrice" className="text-sm font-medium text-gray-700">
          Precio:
        </label>
        <input
          type="range"
          id="minPrice"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
          className="w-20 h-1 bg-gray-300 rounded-lg cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">
          ${filters.minPrice}
        </span>
      </div>
    </aside>
  )
}
