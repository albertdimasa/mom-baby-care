export interface CartItem {
  id: string
  name: string
  price: number
  qty: number
}

export interface ServiceItem {
  id: string
  name: string
  subtitle?: string
  price: number
  priceDisplay: string
  isNew?: boolean
  category: 'baby' | 'kids' | 'mom'
}

export interface PackageItem {
  id: string
  title: string
  subtitle: string
  price: number
  priceDisplay: string
  tag: string
  features: string[]
}

export interface ReservationForm {
  name: string
  baby: string
  datetime: string
}
