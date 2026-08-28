<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div 
        v-if="totalCartQty > 0" 
        class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg bg-[#4a2832] text-white p-3.5 sm:p-4 rounded-full shadow-2xl border-2 border-pink-300 flex items-center justify-between"
      >
        <div class="flex items-center space-x-3 pl-2">
          <div class="relative">
            <svg class="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="absolute -top-2 -right-2 bg-[#c2185b] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold border border-white">
              {{ totalCartQty }}
            </span>
          </div>
          <div>
            <div class="text-[10px] uppercase tracking-wider text-pink-200 font-bold">Total Reservasi:</div>
            <div class="font-extrabold text-sm sm:text-base text-white">
              {{ formatRupiah(totalCartPrice) }}
            </div>
          </div>
        </div>

        <button 
          @click="openCartModal"
          class="bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-5 py-2.5 rounded-full text-xs font-extrabold shadow-md transition transform hover:scale-105 cursor-pointer flex items-center space-x-1.5"
        >
          <span>Konfirmasi Order</span>
          <span>&rarr;</span>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { totalCartQty, totalCartPrice, formatRupiah, openCartModal } = useCart()
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, 20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
