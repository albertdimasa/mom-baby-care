import type { CartItem, ReservationForm } from '~/types/spa'

export const useCart = () => {
  const cart = useState<CartItem[]>('cart', () => [])
  const isCartOpen = useState<boolean>('isCartOpen', () => false)
  const activeTab = useState<string>('activeTab', () => 'all')
  const toast = useState<{ message: string; id: number }>('toast', () => ({
    message: '',
    id: 0
  }))

  const addToCart = (name: string, price: number) => {
    const existing = cart.value.find((item) => item.name === name)
    if (existing) {
      existing.qty += 1
    } else {
      cart.value.push({
        id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
        name,
        price,
        qty: 1
      })
    }
    showToast(`${name} berhasil ditambahkan!`)
  }

  const removeFromCart = (index: number) => {
    cart.value.splice(index, 1)
  }

  const toggleCartModal = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const openCartModal = () => {
    isCartOpen.value = true
  }

  const closeCartModal = () => {
    isCartOpen.value = false
  }

  const setActiveTab = (tab: string) => {
    activeTab.value = tab
  }

  const showToast = (message: string) => {
    toast.value = {
      message,
      id: Date.now()
    }
  }

  const formatRupiah = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    })
      .format(amount)
      .replace('Rp', 'Rp ')
  }

  const totalCartQty = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.qty, 0)
  })

  const totalCartPrice = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  })

  const checkoutWhatsApp = (form: ReservationForm) => {
    if (cart.value.length === 0) {
      alert('Silakan pilih minimal satu layanan terlebih dahulu.')
      return false
    }

    if (!form.name.trim()) {
      alert('Mohon masukkan Nama Bunda/Klien.')
      return false
    }

    if (!form.datetime) {
      alert('Mohon tentukan rencana tanggal & jam kunjungan.')
      return false
    }

    let message = `Halo Putri Mom & Baby Spa, saya ingin melakukan reservasi:\n\n`
    message += `*Nama Bunda:* ${form.name.trim()}\n`
    if (form.baby.trim()) {
      message += `*Nama/Usia Bayi:* ${form.baby.trim()}\n`
    }
    message += `*Jadwal:* ${form.datetime}\n\n`
    message += `*Layanan yang Dipilih:*\n`

    let total = 0
    cart.value.forEach((item, idx) => {
      const sub = item.price * item.qty
      total += sub
      message += `${idx + 1}. ${item.name} (x${item.qty}) - ${formatRupiah(sub)}\n`
    })

    message += `\n*Total Estimasi:* ${formatRupiah(total)}\n\nMohon konfirmasi ketersediaannya. Terima kasih!`

    const encoded = encodeURIComponent(message)
    const waUrl = `https://wa.me/6283872820966?text=${encoded}`
    window.open(waUrl, '_blank')
    return true
  }

  return {
    cart,
    isCartOpen,
    activeTab,
    toast,
    addToCart,
    removeFromCart,
    toggleCartModal,
    openCartModal,
    closeCartModal,
    setActiveTab,
    showToast,
    formatRupiah,
    totalCartQty,
    totalCartPrice,
    checkoutWhatsApp
  }
}
