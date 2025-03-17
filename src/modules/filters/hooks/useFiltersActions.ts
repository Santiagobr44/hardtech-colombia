import { useAppDispatch } from '../../../hooks/store'
import { setCategory, setMinPrice } from '../store/slice'

export const useFiltersActions = () => {
  const dispatch = useAppDispatch()

  const setCategoryAction = (category: string) => {
    dispatch(setCategory(category))
  }

  const setMinPriceAction = (minPrice: number) => {
    dispatch(setMinPrice(minPrice))
  }

  return { setCategoryAction, setMinPriceAction }
}
