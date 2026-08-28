<template>
  <div class="min-h-screen bg-[#fff5f7] text-[#4a2832] antialiased selection:bg-pink-500 selection:text-white flex flex-col justify-between">
    <AppHeader v-if="!isDashboardRoute" />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <AppFooter v-if="!isDashboardRoute" />
    
    <FloatingCartBar v-if="!isDashboardRoute" />
    <CartModal />
    <ToastNotification />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isDashboardRoute = computed(() => route.path.startsWith('/dashboard') || route.path.startsWith('/login'))
</script>

