<template>
  <section id="packages" class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <div class="bg-gradient-to-r from-white via-pink-50/70 to-white rounded-[2.5rem] p-8 sm:p-12 shadow-lg border border-pink-200 space-y-10">
      
      <!-- Section Header -->
      <div class="text-center space-y-2">
        <span class="bg-[#c2185b] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs">
          🎁 Paket Hemat Spesial
        </span>
        <h2 class="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c2185b]">
          Paket Perawatan Newborn
        </h2>
        <p class="text-sm text-gray-600 font-medium max-w-lg mx-auto">
          Perawatan komprehensif pasca melahirkan langsung di rumah Bunda oleh bidan berpengalaman.
        </p>
      </div>

      <!-- Comparison Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 3 Hari Package -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl transition-all">
          <div class="absolute top-0 right-0 bg-pink-100 text-[#c2185b] text-xs font-extrabold px-4 py-2 rounded-bl-2xl uppercase tracking-wider border-l border-b border-pink-200">
            PAKET 3 HARI
          </div>
          <div>
            <h3 class="font-luxury font-bold text-2xl text-[#c2185b] mb-1">Paket Newborn 3 Hari</h3>
            <p class="text-xs text-gray-500 font-medium mb-3">Perawatan harian rutin bayi baru lahir</p>
            <div class="text-4xl font-extrabold text-[#c2185b] mb-4">
              Rp 500.000
            </div>
            <ul class="text-xs sm:text-sm space-y-3 text-gray-700 font-medium border-t border-pink-100 pt-4">
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-pink-100 text-[#c2185b] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Memandikan & menjemur bayi harian</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-pink-100 text-[#c2185b] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Perawatan tali pusat higienis</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-pink-100 text-[#c2185b] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Potong kuku & bersih lidah/telinga</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-pink-100 text-[#c2185b] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Baby massage 1x/hari (total 3x)</span>
              </li>
            </ul>
          </div>
          <button 
            @click="addToCart('Paket Perawatan Newborn - 3 Hari', 500000)"
            class="w-full bg-[#c2185b] hover:bg-pink-700 text-white py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition transform group-hover:scale-[1.01] cursor-pointer"
          >
            Pilih Paket 3 Hari
          </button>
        </div>

        <!-- 7 Hari Package (Featured) -->
        <div class="bg-gradient-to-b from-white via-pink-50/50 to-white rounded-3xl p-6 sm:p-8 border-2 border-[#c2185b] shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div class="absolute top-0 right-0 bg-gradient-to-r from-[#c2185b] to-rose-600 text-white text-xs font-extrabold px-4 py-2 rounded-bl-2xl uppercase tracking-wider shadow-sm">
            🔥 PAKET REKOMENDASI UTAMA (7 HARI)
          </div>
          <div>
            <h3 class="font-luxury font-bold text-2xl text-[#c2185b] mb-1">Paket Newborn 7 Hari</h3>
            <p class="text-xs text-gray-500 font-medium mb-3">Perawatan komprehensif Ibu & Bayi</p>
            <div class="text-4xl font-extrabold text-[#c2185b] mb-4">
              Rp 1.250.000
            </div>
            <ul class="text-xs sm:text-sm space-y-3 text-gray-700 font-medium border-t border-pink-200 pt-4">
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-[#c2185b] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Memandikan & menjemur bayi rutin 7 hari</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-[#c2185b] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Perawatan tali pusat, kuku, lidah & telinga</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="w-5 h-5 rounded-full bg-[#c2185b] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Totok wajah bayi & Baby massage 4x</span>
              </li>
              <li class="flex items-center space-x-3 font-bold text-[#c2185b]">
                <span class="w-5 h-5 rounded-full bg-[#c2185b] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Nifas massage khusus pemulihan Bunda</span>
              </li>
              <li class="flex items-center space-x-3 font-bold text-[#c2185b]">
                <span class="w-5 h-5 rounded-full bg-[#c2185b] text-white flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Oksitosin + laktasi massage (2x)</span>
              </li>
            </ul>
          </div>
          <button 
            @click="addToCart('Paket Perawatan Newborn - 7 Hari', 1250000)"
            class="w-full bg-gradient-to-r from-[#c2185b] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-lg transition transform group-hover:scale-[1.01] cursor-pointer"
          >
            Pilih Paket 7 Hari (Rekomendasi)
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { addToCart } = useCart()
</script>
