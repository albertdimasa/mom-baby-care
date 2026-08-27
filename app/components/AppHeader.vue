<template>
  <header class="glass-header sticky top-0 z-50 border-b border-pink-200/70 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
      <!-- Logo & Brand Title -->
      <div 
        class="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink-0"
        @click="scrollToTop"
      >
        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#c2185b] to-rose-600 text-white flex items-center justify-center text-base sm:text-xl shadow-md group-hover:scale-105 transition-transform">
          👑
        </div>
        <div>
          <span class="block font-luxury font-bold text-base sm:text-xl text-[#c2185b] leading-none tracking-tight">
            Putri Mom & Baby Spa
          </span>
          <span class="text-[9px] sm:text-xs tracking-wider uppercase text-gray-600 font-semibold pt-0.5 block">
            Bidan & Konselor Menyusui
          </span>
        </div>
      </div>
      
      <!-- Desktop Nav & Cart Action -->
      <div class="flex items-center space-x-3 sm:space-x-6">
        <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold text-[#4a2832]">
          <a href="#services" class="hover:text-[#c2185b] transition-colors">Layanan & Harga</a>
          <a href="#packages" class="hover:text-[#c2185b] transition-colors">Paket Newborn</a>
          <a href="#therapist" class="hover:text-[#c2185b] transition-colors">Profil Bidan</a>
        </nav>
        
        <button 
          @click="toggleCartModal"
          class="relative bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition transform hover:scale-105 flex items-center space-x-1.5 sm:space-x-2 cursor-pointer shrink-0"
        >
          <span>🛒 <span class="hidden sm:inline">Reservasi</span><span class="sm:hidden">Cart</span></span>
          <span 
            v-if="totalCartQty > 0"
            class="bg-white text-[#c2185b] text-[11px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-extrabold shadow-xs"
          >
            {{ totalCartQty }}
          </span>
        </button>

        <!-- Mobile Menu Hamburger Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden text-[#4a2832] hover:text-[#c2185b] p-2 rounded-xl border border-pink-200/80 bg-white/80 focus:outline-none cursor-pointer shrink-0"
          aria-label="Toggle Mobile Menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden bg-white/95 backdrop-blur-md border-b border-pink-200 px-6 py-4 space-y-3 shadow-lg"
      >
        <a 
          href="#services" 
          @click="isMobileMenuOpen = false"
          class="block py-2 text-sm font-bold text-[#4a2832] hover:text-[#c2185b] border-b border-pink-100/60"
        >
          ✨ Layanan & Harga
        </a>
        <a 
          href="#packages" 
          @click="isMobileMenuOpen = false"
          class="block py-2 text-sm font-bold text-[#4a2832] hover:text-[#c2185b] border-b border-pink-100/60"
        >
          🎁 Paket Newborn
        </a>
        <a 
          href="#therapist" 
          @click="isMobileMenuOpen = false"
          class="block py-2 text-sm font-bold text-[#4a2832] hover:text-[#c2185b]"
        >
          👩‍⚕️ Profil Bidan
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { toggleCartModal, totalCartQty } = useCart()
const isMobileMenuOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
