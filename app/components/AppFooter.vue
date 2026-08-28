<template>
  <footer class="bg-white border-t border-pink-200 mt-16 pt-12 pb-24 sm:pb-12 text-center text-xs text-gray-500 space-y-4">
    <div class="space-y-1">
      <h4 class="font-luxury font-bold text-[#c2185b] text-xl">
        💖 Healthy Mom, Happy Baby 💖
      </h4>
      <p class="text-sm font-semibold text-gray-700">
        Reservasi & Informasi Pelayanan:
      </p>
      <a 
        href="https://wa.me/6283872820966" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block text-base font-bold text-[#c2185b] hover:underline pt-1"
      >
        📱 0838-7282-0966
      </a>
    </div>

    <div class="pt-2">
      <NuxtLink 
        to="/login" 
        class="text-[11px] font-semibold text-gray-500 hover:text-[#c2185b] hover:underline"
      >
        🔐 Portal Owner & Bidan Login
      </NuxtLink>
    </div>

    <p class="pt-4 border-t border-pink-100 max-w-xs mx-auto text-[11px]">
      &copy; {{ new Date().getFullYear() }} Putri Mom & Baby Spa. All rights reserved.
    </p>
  </footer>
</template>
