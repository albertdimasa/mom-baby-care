<template>
  <main id="services" class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
    <!-- Section Title Header -->
    <div class="text-center space-y-3">
      <span class="bg-pink-200/70 text-[#c2185b] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-pink-300">
        Daftar Harga & Perawatan
      </span>
      <h2 class="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c2185b]">
        Pilih Layanan Terbaik
      </h2>
      <p class="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
        Dirancang khusus untuk menjaga kesehatan, relaksasi, dan kebahagiaan Bunda dan buah hati.
      </p>
    </div>

    <!-- Layout Columns -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <!-- BABY CARE COLUMN -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-pink-200/80 space-y-6">
        <div class="flex items-center space-x-3 border-b border-pink-100 pb-4">
          <span class="text-3xl p-3 bg-pink-100 rounded-2xl shadow-inner">👶</span>
          <div>
            <h3 class="font-luxury font-bold text-2xl text-[#c2185b]">Baby Care</h3>
            <p class="text-xs text-gray-500 font-medium">Stimulasi & tumbuh kembang bayi</p>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="item in BABY_SERVICES"
            :key="item.id"
            :class="[
              'p-4 rounded-2xl transition border flex justify-between items-center',
              item.isNew
                ? 'bg-pink-50/90 border-pink-300'
                : 'bg-gradient-to-r from-pink-50/40 to-white hover:bg-pink-50/80 border-pink-100'
            ]"
          >
            <div>
              <div class="flex items-center space-x-2">
                <h4 class="font-semibold text-sm text-gray-800">{{ item.name }}</h4>
                <span
                  v-if="item.isNew"
                  class="bg-[#c2185b] text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold animate-pulse"
                >
                  BARU!
                </span>
              </div>
              <p v-if="item.subtitle" class="text-xs text-gray-500 font-medium mt-0.5">{{ item.subtitle }}</p>
            </div>
            <div class="flex items-center space-x-3 shrink-0">
              <span class="font-bold text-[#c2185b] text-sm">{{ item.priceDisplay }}</span>
              <button
                @click="handleAddToCart(item)"
                :class="[
                  'px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer',
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
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-pink-200/80 space-y-6">
        <div class="flex items-center space-x-3 border-b border-pink-100 pb-4">
          <span class="text-3xl p-3 bg-pink-100 rounded-2xl shadow-inner">👧</span>
          <div>
            <h3 class="font-luxury font-bold text-2xl text-[#c2185b]">Kids Care</h3>
            <p class="text-xs text-gray-500 font-medium">Perawatan relaksasi anak usia dini</p>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="item in KIDS_SERVICES"
            :key="item.id"
            class="p-4 rounded-2xl bg-gradient-to-r from-pink-50/40 to-white hover:bg-pink-50/80 transition border border-pink-100 flex justify-between items-center"
          >
            <div>
              <h4 class="font-semibold text-sm text-gray-800">{{ item.name }}</h4>
              <p v-if="item.subtitle" class="text-xs text-gray-500 font-medium mt-0.5">{{ item.subtitle }}</p>
            </div>
            <div class="flex items-center space-x-3 shrink-0">
              <span class="font-bold text-[#c2185b] text-sm">{{ item.priceDisplay }}</span>
              <button
                @click="handleAddToCart(item)"
                class="bg-pink-100 text-[#c2185b] hover:bg-[#c2185b] hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
              >
                + Pilih
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 bg-pink-50 rounded-2xl border border-pink-200 text-center">
          <p class="text-xs text-[#c2185b] font-semibold">💖 Layanan anak ditangani dengan sabar & kelembutan ekstra.</p>
        </div>
      </div>

      <!-- MOMMY CARE COLUMN -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-pink-200/80 space-y-6">
        <div class="flex items-center space-x-3 border-b border-pink-100 pb-4">
          <span class="text-3xl p-3 bg-pink-100 rounded-2xl shadow-inner">👩</span>
          <div>
            <h3 class="font-luxury font-bold text-2xl text-[#c2185b]">Mommy Care</h3>
            <p class="text-xs text-gray-500 font-medium">Prenatal, Nifas & Terapi Laktasi</p>
          </div>
        </div>

        <div class="space-y-3">
          <div
            v-for="item in MOM_SERVICES"
            :key="item.id"
            :class="[
              'p-3 rounded-2xl transition border flex justify-between items-center',
              item.isNew
                ? 'bg-pink-50/90 border-pink-300'
                : 'hover:bg-pink-50/60 border-transparent hover:border-pink-100'
            ]"
          >
            <div>
              <div class="flex items-center space-x-2">
                <h4 class="font-semibold text-xs sm:text-sm text-gray-800">{{ item.name }}</h4>
                <span
                  v-if="item.isNew"
                  class="bg-[#c2185b] text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse"
                >
                  BARU!
                </span>
              </div>
              <p v-if="item.subtitle" class="text-xs text-gray-500 font-medium">{{ item.subtitle }}</p>
            </div>
            <div class="flex items-center space-x-2 shrink-0">
              <span class="font-bold text-[#c2185b] text-sm">{{ item.priceDisplay }}</span>
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
import { BABY_SERVICES, KIDS_SERVICES, MOM_SERVICES } from '~/data/servicesData'
import type { ServiceItem } from '~/types/spa'

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
