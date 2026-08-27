<template>
  <header class="glass-header sticky top-0 z-50 border-b border-pink-200/70 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
      <!-- Logo & Brand Title -->
      <div 
        class="flex items-center space-x-3 cursor-pointer group"
        @click="scrollToTop"
      >
        <div class="w-11 h-11 rounded-full bg-gradient-to-tr from-[#c2185b] to-rose-600 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
          👑
        </div>
        <div>
          <span class="block font-luxury font-bold text-lg sm:text-xl text-[#c2185b] leading-none tracking-tight">
            Putri Mom & Baby Spa
          </span>
          <span class="text-[10px] sm:text-xs tracking-wider uppercase text-gray-600 font-semibold pt-0.5 block">
            Bidan & Konselor Menyusui
          </span>
        </div>
      </div>
      
      <!-- Nav & Cart Action -->
      <div class="flex items-center space-x-4 sm:space-x-6">
        <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold text-[#4a2832]">
          <a href="#services" class="hover:text-[#c2185b] transition-colors">Layanan & Harga</a>
          <a href="#packages" class="hover:text-[#c2185b] transition-colors">Paket Newborn</a>
          <a href="#therapist" class="hover:text-[#c2185b] transition-colors">Profil Bidan</a>
        </nav>
        
        <button 
          @click="toggleCartModal"
          class="relative bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition transform hover:scale-105 flex items-center space-x-2 cursor-pointer"
        >
          <span>🛒 Reservasi</span>
          <span 
            v-if="totalCartQty > 0"
            class="bg-white text-[#c2185b] text-xs w-5 h-5 rounded-full flex items-center justify-center font-extrabold shadow-xs"
          >
            {{ totalCartQty }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { toggleCartModal, totalCartQty } = useCart()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
