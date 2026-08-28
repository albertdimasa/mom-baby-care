<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isCartOpen" 
        class="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-xs"
        @click.self="closeCartModal"
      >
        <div class="bg-white w-full max-w-lg rounded-t-[2.5rem] sm:rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto border border-pink-200">
          <!-- Modal Header -->
          <div class="flex justify-between items-center border-b border-pink-100 pb-4">
            <div>
              <h3 class="font-luxury font-bold text-xl text-[#c2185b]">
                Konfirmasi Reservasi
              </h3>
              <p class="text-xs text-gray-500 font-medium">
                Layanan yang Anda pilih
              </p>
            </div>
            <button 
              @click="closeCartModal"
              class="w-8 h-8 rounded-full bg-pink-100 text-[#c2185b] font-bold flex items-center justify-center hover:bg-pink-200 transition cursor-pointer"
            >
              &times;
            </button>
          </div>

          <!-- Cart Items Container -->
          <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
            <div v-if="cart.length === 0" class="text-xs text-gray-400 text-center py-6 font-medium">
              Belum ada layanan yang dipilih.
            </div>
            <div 
              v-for="(item, index) in cart" 
              :key="item.id"
              class="flex justify-between items-center bg-pink-50/60 p-3 rounded-2xl text-xs border border-pink-100"
            >
              <div>
                <p class="font-bold text-[#c2185b] text-sm">{{ item.name }}</p>
                <p class="text-gray-500 font-medium">
                  {{ formatRupiah(item.price) }} x {{ item.qty }}
                </p>
              </div>
              <div class="flex items-center space-x-3">
                <span class="font-bold text-gray-700">
                  {{ formatRupiah(item.price * item.qty) }}
                </span>
                <button 
                  @click="removeFromCart(index)"
                  class="text-red-500 hover:text-red-700 font-bold w-6 h-6 rounded-full bg-white border border-red-200 flex items-center justify-center cursor-pointer"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          <!-- Total Calculation -->
          <div class="border-t border-pink-100 pt-3 flex justify-between items-center font-bold text-sm">
            <span class="text-gray-700">Total Estimasi:</span>
            <span class="text-[#c2185b] text-xl font-extrabold">
              {{ formatRupiah(totalCartPrice) }}
            </span>
          </div>

          <!-- Reservation Form -->
          <form @submit.prevent="handleCheckout" class="space-y-3 pt-2">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">
                Nama Bunda / Klien *
              </label>
              <input 
                type="text" 
                v-model="form.name"
                placeholder="Contoh: Bunda Siti"
                required
                class="w-full px-4 py-2.5 text-sm rounded-2xl border border-pink-200 focus:outline-none focus:border-[#c2185b] bg-pink-50/30 text-gray-800"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">
                Nama & Usia Bayi (jika ada)
              </label>
              <input 
                type="text" 
                v-model="form.baby"
                placeholder="Contoh: Baby Alula, 6 bulan"
                class="w-full px-4 py-2.5 text-sm rounded-2xl border border-pink-200 focus:outline-none focus:border-[#c2185b] bg-pink-50/30 text-gray-800"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">
                Rencana Tanggal & Jam Kunjungan *
              </label>
              <input 
                type="datetime-local" 
                v-model="form.datetime"
                required
                class="w-full px-4 py-2.5 text-sm rounded-2xl border border-pink-200 focus:outline-none focus:border-[#c2185b] bg-pink-50/30 text-gray-800"
              />
            </div>

            <!-- Action Buttons -->
            <div class="pt-3 flex space-x-3">
              <button 
                type="button" 
                @click="closeCartModal"
                class="w-1/2 py-3 rounded-2xl border border-pink-200 text-gray-600 font-bold text-xs hover:bg-pink-50 transition cursor-pointer"
              >
                Batal
              </button>
              <button 
                type="submit"
                class="w-1/2 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Kirim ke WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { ReservationForm } from '~/types/spa'

const { cart, isCartOpen, closeCartModal, removeFromCart, totalCartPrice, formatRupiah, checkoutWhatsApp } = useCart()

const form = reactive<ReservationForm>({
  name: '',
  baby: '',
  datetime: ''
})

const handleCheckout = () => {
  checkoutWhatsApp(form)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
