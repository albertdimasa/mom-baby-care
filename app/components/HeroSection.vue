<template>
  <section class="relative overflow-hidden py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fff5f7] via-pink-100/40 to-[#fff5f7]">
    <!-- Ambient glow accents -->
    <div class="absolute -top-10 left-1/4 w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-10 w-80 h-80 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"></div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
      
      <!-- Left Column: Copy & CTAs -->
      <div class="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
        <!-- Eyebrow Badge -->
        <div class="inline-flex items-center space-x-2 bg-white/90 text-[#c2185b] text-[11px] sm:text-xs font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider border border-pink-200 shadow-xs">
          <img src="/favicon.png" alt="Logo" class="w-4 h-4 rounded-full inline-block border border-pink-200" />
          <span>Home Care & Spa Resmi 2026</span>
        </div>

        <!-- Main Headline -->
        <h1 class="font-luxury text-2xl sm:text-5xl lg:text-6xl font-extrabold text-[#c2185b] leading-tight">
          Perawatan Ibu & Bayi <br class="hidden sm:inline"> dengan Sentuhan Penuh Kasih
        </h1>

        <!-- Subtitle -->
        <p class="text-xs sm:text-base text-gray-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
          Nikmati kenyamanan perawatan relaksasi, pemulihan nifas, terapi laktasi, dan stimulasi tumbuh kembang si kecil yang ditangani langsung oleh bidan profesional di rumah Anda.
        </p>

        <!-- Highlights Row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
          <div class="bg-white/80 p-3 sm:p-3.5 rounded-2xl border border-pink-200/80 shadow-xs flex items-center space-x-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#c2185b] to-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-xs uppercase text-[#c2185b]">Bidan Bersertifikat</h4>
              <p class="text-[10px] sm:text-[11px] text-gray-600">Perawatan aman oleh tenaga medis.</p>
            </div>
          </div>

          <div class="bg-white/80 p-3 sm:p-3.5 rounded-2xl border border-pink-200/80 shadow-xs flex items-center space-x-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#c2185b] to-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-xs uppercase text-[#c2185b]">Oil Baby Safe</h4>
              <p class="text-[10px] sm:text-[11px] text-gray-600">Bahan alami & steril hypoallergenic.</p>
            </div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
          <a 
            href="#services" 
            class="w-full sm:w-auto bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Lihat Daftar Layanan</span>
          </a>
          <a 
            href="https://wa.me/6283872820966?text=Halo%20Putri%20Mom%20%26%20Baby%20Spa,%20saya%20ingin%20konsultasi%20dan%20reservasi." 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full sm:w-auto bg-white hover:bg-pink-50 text-[#c2185b] border-2 border-[#c2185b] px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition flex items-center justify-center space-x-2 cursor-pointer"
          >
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Hubungi WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Interactive Quick Featured Widget -->
      <div class="lg:col-span-5">
        <div class="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-8 shadow-2xl border border-pink-200 space-y-4 sm:space-y-5">
          <div class="flex justify-between items-center border-b border-pink-100 pb-3">
            <div>
              <span class="bg-pink-100 text-[#c2185b] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Rekomendasi Favorit
              </span>
              <h3 class="font-luxury font-bold text-lg sm:text-xl text-[#c2185b] mt-1">Layanan Terpopuler</h3>
            </div>
            <svg class="w-5 h-5 text-[#c2185b]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>

          <div class="space-y-3">
            <!-- Popular Service 1 -->
            <div class="p-3 sm:p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200/80 flex items-center justify-between hover:bg-pink-50 transition gap-2">
              <div class="min-w-0">
                <h4 class="font-bold text-xs sm:text-sm text-gray-800 truncate">Baby Spa Complete</h4>
                <p class="text-[11px] text-gray-500 truncate">Massage, gym, swim & baby bath</p>
                <div class="text-xs font-bold text-[#c2185b] pt-0.5">Rp 200.000</div>
              </div>
              <button 
                @click="addToCart('Baby Spa (massage, gym, swim, baby bath)', 200000)"
                class="bg-[#c2185b] text-white hover:bg-pink-700 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs transition cursor-pointer shrink-0"
              >
                + Pilih
              </button>
            </div>

            <!-- Popular Service 2 -->
            <div class="p-3 sm:p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200/80 flex items-center justify-between hover:bg-pink-50 transition gap-2">
              <div class="min-w-0">
                <h4 class="font-bold text-xs sm:text-sm text-gray-800 truncate">Nifas + Oksitosin + Laktasi</h4>
                <p class="text-[11px] text-gray-500 truncate">Perawatan nifas & laktasi (90 min)</p>
                <div class="text-xs font-bold text-[#c2185b] pt-0.5">Rp 180.000</div>
              </div>
              <button 
                @click="addToCart('Nifas Massage + Oksitosin + Laktasi (90 menit)', 180000)"
                class="bg-[#c2185b] text-white hover:bg-pink-700 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs transition cursor-pointer shrink-0"
              >
                + Pilih
              </button>
            </div>

            <!-- Popular Service 3 -->
            <div class="p-3 sm:p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200/80 flex items-center justify-between hover:bg-pink-50 transition gap-2">
              <div class="min-w-0">
                <h4 class="font-bold text-xs sm:text-sm text-gray-800 truncate">Paket Newborn 3 Hari</h4>
                <p class="text-[11px] text-gray-500 truncate">Memandikan, tali pusat & massage</p>
                <div class="text-xs font-bold text-[#c2185b] pt-0.5">Rp 500.000</div>
              </div>
              <button 
                @click="addToCart('Paket Perawatan Newborn - 3 Hari', 500000)"
                class="bg-[#c2185b] text-white hover:bg-pink-700 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs transition cursor-pointer shrink-0"
              >
                + Pilih
              </button>
            </div>
          </div>

          <div class="pt-2 text-center">
            <a href="#services" class="text-xs font-bold text-[#c2185b] hover:underline flex items-center justify-center space-x-1">
              <span>Lihat Semua 15+ Layanan & Paket</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { addToCart } = useCart()
</script>
