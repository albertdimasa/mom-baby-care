<template>
  <div class="min-h-screen bg-gradient-to-b from-[#fff5f7] via-pink-100/30 to-[#fff5f7] flex items-center justify-center p-4 sm:p-6">
    <div class="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-200 space-y-6">
      
      <!-- Header / Brand -->
      <div class="text-center space-y-2">
        <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-md overflow-hidden p-0.5 border border-pink-200">
          <img src="/favicon.png" alt="Putri Mom & Baby Spa Logo" class="w-full h-full object-cover rounded-full" />
        </div>
        <h1 class="font-luxury font-bold text-2xl text-[#c2185b] pt-1">
          Owner Portal Login
        </h1>
        <p class="text-xs text-gray-500 font-medium">
          Masuk ke Dashboard Kelola Layanan & Jadwal Reservasi
        </p>
      </div>

      <!-- Demo Account Quick Access Card -->
      <div class="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-200 space-y-3">
        <div class="flex justify-between items-center">
          <div class="font-bold text-xs text-[#c2185b] flex items-center space-x-1.5">
            <svg class="w-4 h-4 text-[#c2185b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span>Akun Demo (Akses Cepat)</span>
          </div>
          <span class="text-[10px] bg-pink-200/80 text-[#c2185b] font-extrabold px-2 py-0.5 rounded-full uppercase">Instant</span>
        </div>

        <button 
          type="button"
          @click="fillAndLoginDemo('owner', '123')"
          class="w-full bg-[#c2185b] hover:bg-pink-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition flex items-center justify-center space-x-2 cursor-pointer transform hover:scale-[1.01]"
        >
          <svg class="w-4 h-4 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span>Masuk Akun Demo (Bidan Miming)</span>
        </button>

        <div class="pt-1 flex items-center justify-between text-[11px] text-gray-600">
          <span>Username: <strong class="text-gray-800">owner</strong> / <strong class="text-gray-800">admin</strong></span>
          <span>Password: <strong class="text-gray-800">123</strong></span>
        </div>
      </div>

      <!-- Error Alert -->
      <div v-if="errorMessage" class="p-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-semibold text-center">
        {{ errorMessage }}
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">
            Username
          </label>
          <input 
            type="text" 
            v-model="username" 
            placeholder="Masukkan username (contoh: owner)"
            required 
            class="w-full px-4 py-3 text-sm rounded-2xl border border-pink-200 focus:outline-none focus:border-[#c2185b] bg-pink-50/20 text-gray-800"
          />
        </div>

        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">
            Password
          </label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Masukkan password"
            required 
            class="w-full px-4 py-3 text-sm rounded-2xl border border-pink-200 focus:outline-none focus:border-[#c2185b] bg-pink-50/20 text-gray-800"
          />
        </div>

        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
        >
          Masuk ke Dashboard &rarr;
        </button>
      </form>

      <!-- Back to Landing Page Link -->
      <div class="pt-2 text-center border-t border-pink-100">
        <NuxtLink to="/" class="text-xs font-bold text-[#c2185b] hover:underline inline-flex items-center space-x-1">
          <span>&larr; Kembali ke Halaman Utama</span>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function () {
      const { isAuthenticated } = useAuth()
      if (isAuthenticated.value) {
        return navigateTo('/dashboard')
      }
    }
  ]
})

const { login, isAuthenticated } = useAuth()
const username = ref('owner')
const password = ref('123')
const errorMessage = ref('')

onMounted(() => {
  if (isAuthenticated.value) {
    navigateTo('/dashboard')
  }
})

const handleLogin = () => {
  errorMessage.value = ''
  const result = login(username.value, password.value)
  if (result.success) {
    navigateTo('/dashboard')
  } else {
    errorMessage.value = result.message
  }
}

const fillAndLoginDemo = (u: string, p: string) => {
  username.value = u
  password.value = p
  handleLogin()
}

useSeoMeta({
  title: 'Login Owner | Putri Mom & Baby Spa',
  description: 'Portal masuk owner Bidan Putri Mom & Baby Spa'
})
</script>

