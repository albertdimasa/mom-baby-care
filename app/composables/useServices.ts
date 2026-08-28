import { BABY_SERVICES, KIDS_SERVICES, MOM_SERVICES } from '~/data/servicesData'
import type { ServiceItem } from '~/types/spa'

export const useServices = () => {
  const babyServices = useState<ServiceItem[]>('services_baby', () => BABY_SERVICES)
  const kidsServices = useState<ServiceItem[]>('services_kids', () => KIDS_SERVICES)
  const momServices = useState<ServiceItem[]>('services_mom', () => MOM_SERVICES)

  if (import.meta.client) {
    const savedBaby = localStorage.getItem('services_baby')
    const savedKids = localStorage.getItem('services_kids')
    const savedMom = localStorage.getItem('services_mom')

    if (savedBaby) {
      try { babyServices.value = JSON.parse(savedBaby) } catch (e) {}
    }
    if (savedKids) {
      try { kidsServices.value = JSON.parse(savedKids) } catch (e) {}
    }
    if (savedMom) {
      try { momServices.value = JSON.parse(savedMom) } catch (e) {}
    }
  }

  function saveToStorage() {
    if (import.meta.client) {
      localStorage.setItem('services_baby', JSON.stringify(babyServices.value))
      localStorage.setItem('services_kids', JSON.stringify(kidsServices.value))
      localStorage.setItem('services_mom', JSON.stringify(momServices.value))
    }
  }

  const addService = (
    category: 'baby' | 'kids' | 'mom', 
    service: Omit<ServiceItem, 'id' | 'category' | 'priceDisplay'> & { priceDisplay?: string }
  ) => {
    const id = `${category}-${Date.now()}`
    const priceDisplay = service.priceDisplay || (service.price >= 1000 ? `${Math.round(service.price / 1000)}K` : `Rp ${service.price}`)
    const newService: ServiceItem = {
      id,
      category,
      name: service.name,
      subtitle: service.subtitle || '',
      price: Number(service.price),
      priceDisplay,
      isNew: service.isNew ?? true
    }

    if (category === 'baby') {
      babyServices.value.push(newService)
    } else if (category === 'kids') {
      kidsServices.value.push(newService)
    } else {
      momServices.value.push(newService)
    }

    saveToStorage()
    return newService
  }

  const updateService = (id: string, updatedData: Partial<ServiceItem>) => {
    const updateItemInList = (list: ServiceItem[]) => {
      const idx = list.findIndex(s => s.id === id)
      const item = list[idx]
      if (idx !== -1 && item) {
        const price = updatedData.price !== undefined ? Number(updatedData.price) : item.price
        const priceDisplay = updatedData.priceDisplay || (price >= 1000 ? `${Math.round(price / 1000)}K` : `Rp ${price}`)
        list[idx] = {
          id: item.id,
          name: updatedData.name ?? item.name,
          subtitle: updatedData.subtitle !== undefined ? updatedData.subtitle : item.subtitle,
          price,
          priceDisplay,
          isNew: updatedData.isNew !== undefined ? updatedData.isNew : item.isNew,
          category: updatedData.category ?? item.category
        }
        return true
      }
      return false
    }

    if (!updateItemInList(babyServices.value)) {
      if (!updateItemInList(kidsServices.value)) {
        updateItemInList(momServices.value)
      }
    }

    saveToStorage()
  }

  const deleteService = (id: string) => {
    babyServices.value = babyServices.value.filter(s => s.id !== id)
    kidsServices.value = kidsServices.value.filter(s => s.id !== id)
    momServices.value = momServices.value.filter(s => s.id !== id)
    saveToStorage()
  }

  const resetToDefault = () => {
    babyServices.value = JSON.parse(JSON.stringify(BABY_SERVICES))
    kidsServices.value = JSON.parse(JSON.stringify(KIDS_SERVICES))
    momServices.value = JSON.parse(JSON.stringify(MOM_SERVICES))
    saveToStorage()
  }

  return {
    babyServices,
    kidsServices,
    momServices,
    addService,
    updateService,
    deleteService,
    resetToDefault
  }
}
