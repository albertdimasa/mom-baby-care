import type { CartItem } from '~/types/spa'

export interface ReservationRecord {
  id: string
  clientName: string
  babyInfo: string
  datetime: string
  items: CartItem[]
  totalPrice: number
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled'
  createdAt: string
}

export const useReservations = () => {
  const reservations = useState<ReservationRecord[]>('reservations_list', () => [])

  const initialSampleData: ReservationRecord[] = [
    {
      id: 'RES-1001',
      clientName: 'Bunda Siti Rahma',
      babyInfo: 'Baby Alula, 6 bulan',
      datetime: '2026-08-28 10:00',
      items: [
        { id: '1', name: 'Baby Spa (massage, gym, swim, baby bath)', price: 200000, qty: 1 }
      ],
      totalPrice: 200000,
      status: 'Confirmed',
      createdAt: '2026-08-27 08:30'
    },
    {
      id: 'RES-1002',
      clientName: 'Bunda Anita',
      babyInfo: 'Baby Kenzo, 2 minggu',
      datetime: '2026-08-29 14:00',
      items: [
        { id: '2', name: 'Paket Perawatan Newborn - 3 Hari', price: 500000, qty: 1 }
      ],
      totalPrice: 500000,
      status: 'Pending',
      createdAt: '2026-08-27 09:15'
    },
    {
      id: 'RES-1003',
      clientName: 'Bunda Dewi',
      babyInfo: '-',
      datetime: '2026-08-30 11:00',
      items: [
        { id: '3', name: 'Nifas Massage + Oksitosin + Laktasi (90 menit)', price: 180000, qty: 1 }
      ],
      totalPrice: 180000,
      status: 'Completed',
      createdAt: '2026-08-26 15:40'
    }
  ]

  // Initialize from localStorage or sample data
  onMounted(() => {
    if (import.meta.client) {
      const saved = localStorage.getItem('owner_reservations')
      if (saved) {
        try {
          reservations.value = JSON.parse(saved)
        } catch (e) {
          reservations.value = initialSampleData
        }
      } else {
        reservations.value = initialSampleData
        saveToLocalStorage()
      }
    }
  })

  const saveToLocalStorage = () => {
    if (import.meta.client) {
      localStorage.setItem('owner_reservations', JSON.stringify(reservations.value))
    }
  }

  const addReservation = (clientName: string, babyInfo: string, datetime: string, items: CartItem[], totalPrice: number) => {
    const newRecord: ReservationRecord = {
      id: 'RES-' + Math.floor(1000 + Math.random() * 9000),
      clientName,
      babyInfo: babyInfo || '-',
      datetime,
      items: JSON.parse(JSON.stringify(items)),
      totalPrice,
      status: 'Pending',
      createdAt: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })
    }
    reservations.value.unshift(newRecord)
    saveToLocalStorage()
    return newRecord
  }

  const updateReservationStatus = (id: string, status: ReservationRecord['status']) => {
    const record = reservations.value.find((r) => r.id === id)
    if (record) {
      record.status = status
      saveToLocalStorage()
    }
  }

  const deleteReservation = (id: string) => {
    reservations.value = reservations.value.filter((r) => r.id !== id)
    saveToLocalStorage()
  }

  return {
    reservations,
    addReservation,
    updateReservationStatus,
    deleteReservation
  }
}
