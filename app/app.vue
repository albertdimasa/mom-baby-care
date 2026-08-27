<template>
  <div class="min-h-screen bg-[#fff5f7] text-[#4a2832] antialiased selection:bg-pink-500 selection:text-white flex flex-col justify-between">
    <AppHeader />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <AppFooter />
    
    <FloatingCartBar />
    <CartModal />
    <ToastNotification />
  </div>
</template>
