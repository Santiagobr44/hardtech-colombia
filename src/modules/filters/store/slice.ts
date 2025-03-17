import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products as initialProducts } from '../../../mocks/products.json'
import { Product } from '../../../types.d'

export interface FiltersState {
  category: string
  minPrice: number
  products: Product[]
}
const initialState: FiltersState = {
  category: 'all',
  minPrice: 0,
  products: initialProducts,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload
    },
  },
})

export default filtersSlice.reducer
export const { setCategory, setMinPrice } = filtersSlice.actions
