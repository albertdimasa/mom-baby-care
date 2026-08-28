<template>
  <header class="glass-header sticky top-0 z-50 border-b border-pink-200/70 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
      <!-- Logo & Brand Title -->
      <div 
        class="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink-0"
        @click="scrollToTop"
      >
        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden p-0.5 border border-pink-200 shrink-0">
          <img src="/favicon.png" alt="Putri Mom & Baby Spa Logo" class="w-full h-full object-cover rounded-full" />
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
      
      <!-- Desktop Nav & Actions -->
      <div class="flex items-center space-x-3 sm:space-x-5">
        <nav class="hidden md:flex items-center space-x-5 text-sm font-semibold text-[#4a2832]">
          <a href="#services" class="hover:text-[#c2185b] transition-colors">Layanan & Harga</a>
          <a href="#packages" class="hover:text-[#c2185b] transition-colors">Paket Newborn</a>
          <a href="#therapist" class="hover:text-[#c2185b] transition-colors">Profil Bidan</a>
        </nav>
        
        <button 
          @click="toggleCartModal"
          class="relative bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition transform hover:scale-105 flex items-center space-x-1.5 sm:space-x-2 cursor-pointer shrink-0"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span><span class="hidden sm:inline">Reservasi</span><span class="sm:hidden">Cart</span></span>
          <span 
            v-if="totalCartQty > 0"
            class="bg-white text-[#c2185b] text-[11px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-extrabold shadow-xs ml-1"
          >
            {{ totalCartQty }}
          </span>
        </button>

        <NuxtLink 
          :to="isAuthenticated ? '/dashboard' : '/login'" 
          class="hidden sm:inline-flex items-center space-x-1.5 text-xs font-bold text-[#c2185b] bg-pink-100 hover:bg-pink-200 px-3.5 py-2 rounded-full transition"
        >
          <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>{{ isAuthenticated ? 'Dashboard' : 'Login Owner' }}</span>
        </NuxtLink>

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
          class="flex items-center space-x-2 py-2 text-sm font-bold text-[#4a2832] hover:text-[#c2185b] border-b border-pink-100/60"
        >
          <svg class="w-4 h-4 text-[#c2185b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span>Layanan & Harga</span>
        </a>
        <a 
          href="#packages" 
          @click="isMobileMenuOpen = false"
          class="flex items-center space-x-2 py-2 text-sm font-bold text-[#4a2832] hover:text-[#c2185b] border-b border-pink-100/60"
        >
          <svg class="w-4 h-4 text-[#c2185b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm9 1a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2V11a2 2 0 012-2h18zM4 14h16v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z" />
          </svg>
          <span>Paket Newborn</span>
        </a>
        <a 
          href="#therapist" 
          @click="isMobileMenuOpen = false"
          class="flex items-center space-x-2 py-2 text-sm font-bold text-[#4a2832] hover:text-[#c2185b] border-b border-pink-100/60"
        >
          <svg class="w-4 h-4 text-[#c2185b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Profil Bidan</span>
        </a>
        <NuxtLink 
          :to="isAuthenticated ? '/dashboard' : '/login'" 
          @click="isMobileMenuOpen = false"
          class="flex items-center space-x-2 py-2 text-sm font-bold text-[#c2185b]"
        >
          <svg class="w-4 h-4 text-[#c2185b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>{{ isAuthenticated ? 'Portal Dashboard Owner' : 'Login Owner / Bidan' }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { toggleCartModal, totalCartQty } = useCart()
const { isAuthenticated } = useAuth()
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
