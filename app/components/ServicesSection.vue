<template>
  <main id="services" class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8 sm:space-y-10">
    <!-- Section Title Header -->
    <div class="text-center space-y-2 sm:space-y-3">
      <span class="bg-pink-200/70 text-[#c2185b] text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-pink-300">
        Daftar Harga & Perawatan
      </span>
      <h2 class="font-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-[#c2185b]">
        Pilih Layanan Terbaik
      </h2>
      <p class="text-xs sm:text-base text-gray-600 font-medium max-w-xl mx-auto px-2">
        Dirancang khusus untuk menjaga kesehatan, relaksasi, dan kebahagiaan Bunda dan buah hati.
      </p>
    </div>

    <!-- Layout Columns -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
      <!-- BABY CARE COLUMN -->
      <div class="bg-white rounded-3xl p-5 sm:p-8 shadow-md border border-pink-200/80 space-y-5 sm:space-y-6">
        <div class="flex items-center space-x-3 border-b border-pink-100 pb-3.5">
          <div class="p-2.5 sm:p-3 bg-pink-100 rounded-2xl shadow-inner text-[#c2185b]">
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-luxury font-bold text-xl sm:text-2xl text-[#c2185b]">Baby Care</h3>
            <p class="text-[11px] sm:text-xs text-gray-500 font-medium">Stimulasi & tumbuh kembang bayi</p>
          </div>
        </div>

        <div class="space-y-3 sm:space-y-4">
          <div
            v-for="item in babyServices"
            :key="item.id"
            :class="[
              'p-3 sm:p-4 rounded-2xl transition border flex justify-between items-center gap-2',
              item.isNew
                ? 'bg-pink-50/90 border-pink-300'
                : 'bg-gradient-to-r from-pink-50/40 to-white hover:bg-pink-50/80 border-pink-100'
            ]"
          >
            <div class="min-w-0">
              <div class="flex items-center space-x-1.5 flex-wrap">
                <h4 class="font-semibold text-xs sm:text-sm text-gray-800">{{ item.name }}</h4>
                <span
                  v-if="item.isNew"
                  class="bg-[#c2185b] text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse"
                >
                  BARU!
                </span>
              </div>
              <p v-if="item.subtitle" class="text-[11px] text-gray-500 font-medium mt-0.5">{{ item.subtitle }}</p>
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <span class="font-bold text-[#c2185b] text-xs sm:text-sm">{{ item.priceDisplay }}</span>
              <button
                @click="handleAddToCart(item)"
                :class="[
                  'px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer',
                  item.isNew
                    ? 'bg-[#c2185b] text-white hover:bg-pink-700'
                    : 'bg-pink-100 text-[#c2185b] hover:bg-[#c2185b] hover:text-white'
                ]"
              >
                + Pilih
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- KIDS CARE COLUMN -->
      <div class="bg-white rounded-3xl p-5 sm:p-8 shadow-md border border-pink-200/80 space-y-5 sm:space-y-6">
        <div class="flex items-center space-x-3 border-b border-pink-100 pb-3.5">
          <div class="p-2.5 sm:p-3 bg-pink-100 rounded-2xl shadow-inner text-[#c2185b]">
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-luxury font-bold text-xl sm:text-2xl text-[#c2185b]">Kids Care</h3>
            <p class="text-[11px] sm:text-xs text-gray-500 font-medium">Perawatan relaksasi anak usia dini</p>
          </div>
        </div>

        <div class="space-y-3 sm:space-y-4">
          <div
            v-for="item in kidsServices"
            :key="item.id"
            class="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-pink-50/40 to-white hover:bg-pink-50/80 transition border border-pink-100 flex justify-between items-center gap-2"
          >
            <div class="min-w-0">
              <h4 class="font-semibold text-xs sm:text-sm text-gray-800">{{ item.name }}</h4>
              <p v-if="item.subtitle" class="text-[11px] text-gray-500 font-medium mt-0.5">{{ item.subtitle }}</p>
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <span class="font-bold text-[#c2185b] text-xs sm:text-sm">{{ item.priceDisplay }}</span>
              <button
                @click="handleAddToCart(item)"
                class="bg-pink-100 text-[#c2185b] hover:bg-[#c2185b] hover:text-white px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
              >
                + Pilih
              </button>
            </div>
          </div>
        </div>

        <div class="p-3.5 bg-pink-50 rounded-2xl border border-pink-200 text-center flex items-center justify-center space-x-1.5">
          <svg class="w-4 h-4 text-[#c2185b] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <p class="text-xs text-[#c2185b] font-semibold">Layanan anak ditangani dengan sabar & kelembutan ekstra.</p>
        </div>
      </div>

      <!-- MOMMY CARE COLUMN -->
      <div class="bg-white rounded-3xl p-5 sm:p-8 shadow-md border border-pink-200/80 space-y-5 sm:space-y-6">
        <div class="flex items-center space-x-3 border-b border-pink-100 pb-3.5">
          <div class="p-2.5 sm:p-3 bg-pink-100 rounded-2xl shadow-inner text-[#c2185b]">
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-luxury font-bold text-xl sm:text-2xl text-[#c2185b]">Mommy Care</h3>
            <p class="text-[11px] sm:text-xs text-gray-500 font-medium">Prenatal, Nifas & Terapi Laktasi</p>
          </div>
        </div>

        <div class="space-y-2.5 sm:space-y-3">
          <div
            v-for="item in momServices"
            :key="item.id"
            :class="[
              'p-2.5 sm:p-3 rounded-2xl transition border flex justify-between items-center gap-2',
              item.isNew
                ? 'bg-pink-50/90 border-pink-300'
                : 'hover:bg-pink-50/60 border-transparent hover:border-pink-100'
            ]"
          >
            <div class="min-w-0">
              <div class="flex items-center space-x-1.5 flex-wrap">
                <h4 class="font-semibold text-xs sm:text-sm text-gray-800">{{ item.name }}</h4>
                <span
                  v-if="item.isNew"
                  class="bg-[#c2185b] text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse"
                >
                  BARU!
                </span>
              </div>
              <p v-if="item.subtitle" class="text-[11px] text-gray-500 font-medium">{{ item.subtitle }}</p>
            </div>
            <div class="flex items-center space-x-2 shrink-0">
              <span class="font-bold text-[#c2185b] text-xs sm:text-sm">{{ item.priceDisplay }}</span>
              <button
                @click="handleAddToCart(item)"
                :class="[
                  'px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer',
                  item.isNew
                    ? 'bg-[#c2185b] text-white hover:bg-pink-700'
                    : 'bg-pink-100 text-[#c2185b] hover:bg-[#c2185b] hover:text-white'
                ]"
              >
                + Pilih
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ServiceItem } from '~/types/spa'

const { babyServices, kidsServices, momServices } = useServices()
const { addToCart } = useCart()

const handleAddToCart = (item: ServiceItem) => {
  let displayName = item.name
  if (item.subtitle) {
    displayName += ` ${item.subtitle}`
  }
  if (item.isNew) {
    displayName += ' (BARU!)'
  }
  addToCart(displayName, item.price)
}
</script>
