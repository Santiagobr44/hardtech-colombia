export interface CartItemType {
  product: Product
  quantity: number
}

export interface Filter {
  category: Category
  minPrice: number
}

export interface FiltersContextType {
  filters: Filter
  setFilters: React.Dispatch<React.SetStateAction<Filter>>
}

export interface FiltersProviderType {
  children: React.ReactNode
}

declare module './config.js' {
  export const IS_DEVELOPMENT: boolean
}

export interface APIResults {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export enum AvailabilityStatus {
  InStock = 'In Stock',
  LowStock = 'Low Stock',
  OutOfStock = 'Out of Stock',
}

export enum Category {
  All = 'all',
  Laptops = 'laptops',
  MobileAccessories = 'mobile-accessories',
  Smartphones = 'smartphones',
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export enum ReturnPolicy {
  NoReturnPolicy = 'No return policy',
  The30DaysReturnPolicy = '30 days return policy',
  The60DaysReturnPolicy = '60 days return policy',
  The7DaysReturnPolicy = '7 days return policy',
  The90DaysReturnPolicy = '90 days return policy',
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}
