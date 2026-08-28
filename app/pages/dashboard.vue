<template>
  <div class="min-h-screen bg-[#fff5f7] text-[#4a2832]">
    <!-- Top Navigation Header -->
    <header class="bg-white border-b border-pink-200 sticky top-0 z-40 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden p-0.5 border border-pink-200">
            <img src="/favicon.png" alt="Putri Mom & Baby Spa Logo" class="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h1 class="font-luxury font-bold text-lg text-[#c2185b] leading-tight">
              Dashboard Owner & Bidan
            </h1>
            <p class="text-xs text-gray-500 font-medium">
              Putri Mom & Baby Spa Control Panel
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <NuxtLink 
            to="/" 
            target="_blank"
            class="bg-pink-100 hover:bg-pink-200 text-[#c2185b] px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5"
          >
            <svg class="w-4 h-4 text-[#c2185b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>Lihat Website</span>
          </NuxtLink>

          <button 
            @click="logout"
            class="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
          >
            <span>Logout</span>
            <svg class="w-4 h-4 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      <!-- Welcome Card -->
      <div class="bg-gradient-to-r from-white via-pink-50/80 to-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span class="bg-[#c2185b] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Selamat Datang Bidan
          </span>
          <h2 class="font-luxury font-bold text-2xl sm:text-3xl text-[#c2185b] mt-2">
            Miming Putri Pratiwi, A.Md, Keb
          </h2>
          <p class="text-xs sm:text-sm text-gray-600 font-medium pt-0.5">
            Kelola jadwal kunjungan reservasi dan katalog layanan Putri Mom & Baby Spa secara real-time.
          </p>
        </div>

        <div class="bg-white p-3.5 rounded-2xl border border-pink-200 text-right shadow-xs shrink-0">
          <div class="text-[11px] text-gray-500 font-medium">Status Server</div>
          <div class="text-xs font-bold text-emerald-600 flex items-center justify-end space-x-1.5 pt-0.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Online & Terhubung</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex space-x-2 border-b border-pink-200 pb-3 overflow-x-auto">
        <button 
          @click="activeTab = 'overview'"
          :class="[
            'px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer inline-flex items-center space-x-2',
            activeTab === 'overview'
              ? 'bg-[#c2185b] text-white shadow-md'
              : 'bg-white text-[#c2185b] border border-pink-200 hover:bg-pink-50'
          ]"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Ringkasan Stat</span>
        </button>

        <button 
          @click="activeTab = 'reservations'"
          :class="[
            'px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer relative inline-flex items-center space-x-2',
            activeTab === 'reservations'
              ? 'bg-[#c2185b] text-white shadow-md'
              : 'bg-white text-[#c2185b] border border-pink-200 hover:bg-pink-50'
          ]"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Jadwal Reservasi</span>
          <span 
            v-if="pendingCount > 0"
            class="ml-2 bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold"
          >
            {{ pendingCount }} Pending
          </span>
        </button>

        <button 
          @click="activeTab = 'services'"
          :class="[
            'px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer inline-flex items-center space-x-2',
            activeTab === 'services'
              ? 'bg-[#c2185b] text-white shadow-md'
              : 'bg-white text-[#c2185b] border border-pink-200 hover:bg-pink-50'
          ]"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Kelola Layanan</span>
        </button>
      </div>

      <!-- TAB 1: OVERVIEW -->
      <div v-if="activeTab === 'overview'" class="space-y-8">
        <!-- Stat Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm space-y-2">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Reservasi</div>
            <div class="font-luxury font-extrabold text-3xl text-[#c2185b]">{{ reservations.length }}</div>
            <p class="text-xs text-gray-500">Reservasi terdaftar</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm space-y-2">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Perlu Konfirmasi</div>
            <div class="font-luxury font-extrabold text-3xl text-amber-600">{{ pendingCount }}</div>
            <p class="text-xs text-gray-500">Status pending</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm space-y-2">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Reservasi Confirmed</div>
            <div class="font-luxury font-extrabold text-3xl text-blue-600">{{ confirmedCount }}</div>
            <p class="text-xs text-gray-500">Siap dikunjungi</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm space-y-2">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Estimasi Nilai Order</div>
            <div class="font-luxury font-extrabold text-2xl text-[#c2185b]">{{ formatRupiah(totalRevenue) }}</div>
            <p class="text-xs text-gray-500">Total nilai reservasi</p>
          </div>
        </div>

        <!-- Recent Reservations Preview -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm space-y-4">
          <div class="flex justify-between items-center border-b border-pink-100 pb-4">
            <h3 class="font-luxury font-bold text-xl text-[#c2185b]">Reservasi Terbaru</h3>
            <button @click="activeTab = 'reservations'" class="text-xs font-bold text-[#c2185b] hover:underline">
              Lihat Semua &rarr;
            </button>
          </div>

          <div class="space-y-3">
            <div 
              v-for="item in reservations.slice(0, 3)" 
              :key="item.id"
              class="p-4 rounded-2xl bg-pink-50/50 border border-pink-200/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div>
                <div class="flex items-center space-x-2">
                  <span class="font-bold text-sm text-[#c2185b]">{{ item.clientName }}</span>
                  <span 
                    :class="[
                      'text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase',
                      item.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                      item.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
                    ]"
                  >
                    {{ item.status }}
                  </span>
                </div>
                <p class="text-xs text-gray-600 pt-0.5">Jadwal: {{ item.datetime }} ({{ item.babyInfo }})</p>
              </div>

              <div class="text-right">
                <div class="font-bold text-sm text-[#c2185b]">{{ formatRupiah(item.totalPrice) }}</div>
                <div class="text-[11px] text-gray-500">{{ item.items.length }} Layanan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: JADWAL RESERVASI -->
      <div v-if="activeTab === 'reservations'" class="space-y-6">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm space-y-6">
          
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-pink-100 pb-4">
            <div>
              <h3 class="font-luxury font-bold text-2xl text-[#c2185b]">Jadwal Kunjungan Reservasi</h3>
              <p class="text-xs text-gray-500 font-medium">Daftar reservasi masuk dari Klien / Bunda</p>
            </div>

            <!-- Status Filter -->
            <div class="flex space-x-1.5 overflow-x-auto pb-1">
              <button 
                v-for="st in ['Semua', 'Pending', 'Confirmed', 'Completed', 'Cancelled']" 
                :key="st"
                @click="reservationFilter = st"
                :class="[
                  'px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer',
                  reservationFilter === st
                    ? 'bg-[#c2185b] text-white'
                    : 'bg-pink-50 text-[#c2185b] hover:bg-pink-100'
                ]"
              >
                {{ st }}
              </button>
            </div>
          </div>

          <!-- Reservation List -->
          <div class="space-y-4">
            <div v-if="filteredReservations.length === 0" class="text-center py-10 text-gray-400 text-xs font-medium">
              Tidak ada reservasi ditemukan untuk filter ini.
            </div>

            <div 
              v-for="res in filteredReservations" 
              :key="res.id"
              class="bg-gradient-to-r from-pink-50/30 to-white p-5 rounded-3xl border border-pink-200 space-y-4 shadow-xs"
            >
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-pink-100 pb-3">
                <div>
                  <div class="flex items-center space-x-2">
                    <span class="text-xs font-bold text-gray-400">ID: {{ res.id }}</span>
                    <span 
                      :class="[
                        'text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase',
                        res.status === 'Pending' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                        res.status === 'Confirmed' ? 'bg-blue-100 text-blue-800 border border-blue-300' :
                        res.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-gray-100 text-gray-800'
                      ]"
                    >
                      {{ res.status }}
                    </span>
                  </div>
                  <h4 class="font-luxury font-bold text-xl text-[#c2185b] mt-1">{{ res.clientName }}</h4>
                  <p class="text-xs text-gray-600 font-medium flex items-center space-x-1 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#c2185b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Bayi: {{ res.babyInfo }}</span>
                  </p>
                </div>

                <div class="text-left sm:text-right">
                  <div class="text-xs text-gray-500 font-medium flex items-center sm:justify-end space-x-1">
                    <svg class="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Rencana Jadwal Kunjungan:</span>
                  </div>
                  <div class="text-sm font-bold text-gray-800">{{ res.datetime }}</div>
                </div>
              </div>

              <!-- Services ordered list -->
              <div class="space-y-1.5">
                <div class="text-xs font-bold text-gray-700">Layanan yang Dipesan:</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div 
                    v-for="item in res.items" 
                    :key="item.id"
                    class="bg-white p-2.5 rounded-xl border border-pink-100 text-xs flex justify-between items-center"
                  >
                    <span class="font-semibold text-gray-800">{{ item.name }} (x{{ item.qty }})</span>
                    <span class="font-bold text-[#c2185b]">{{ formatRupiah(item.price * item.qty) }}</span>
                  </div>
                </div>
              </div>

              <!-- Footer Actions & Total -->
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2 border-t border-pink-100">
                <div class="flex items-center space-x-2">
                  <span class="text-xs text-gray-500">Total Tagihan:</span>
                  <span class="font-luxury font-bold text-lg text-[#c2185b]">{{ formatRupiah(res.totalPrice) }}</span>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                  <!-- Change Status Dropdown / Buttons -->
                  <button 
                    v-if="res.status !== 'Confirmed'"
                    @click="updateReservationStatus(res.id, 'Confirmed')"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                  >
                    ✓ Konfirmasi
                  </button>

                  <button 
                    v-if="res.status !== 'Completed'"
                    @click="updateReservationStatus(res.id, 'Completed')"
                    class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                  >
                    Selesai
                  </button>

                  <button 
                    v-if="res.status !== 'Cancelled'"
                    @click="updateReservationStatus(res.id, 'Cancelled')"
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Batal
                  </button>

                  <a 
                    :href="getWhatsAppClientLink(res)"
                    target="_blank"
                    class="bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xs flex items-center space-x-1"
                  >
                    <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>WA Client</span>
                  </a>

                  <button 
                    @click="deleteReservation(res.id)"
                    class="text-red-500 hover:text-red-700 p-1.5 rounded-xl hover:bg-red-50 transition cursor-pointer"
                    title="Hapus Reservasi"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: KELOLA LAYANAN -->
      <div v-if="activeTab === 'services'" class="space-y-6">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-pink-100 pb-4">
            <div>
              <h3 class="font-luxury font-bold text-2xl text-[#c2185b]">Katalog Layanan & Harga</h3>
              <p class="text-xs text-gray-500 font-medium">Tambah, edit, atau hapus daftar perawatan Baby Care, Kids Care, dan Mommy Care</p>
            </div>

            <div class="flex items-center space-x-2">
              <button 
                @click="openAddServiceModal()"
                class="bg-[#c2185b] hover:bg-pink-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-sm cursor-pointer"
              >
                <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Tambah Layanan Baru</span>
              </button>

              <button 
                @click="handleResetServices"
                class="bg-pink-100 hover:bg-pink-200 text-[#c2185b] px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1"
                title="Reset Katalog ke Data Bawaan"
              >
                <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Baby Services List -->
            <div class="bg-pink-50/50 p-5 rounded-3xl border border-pink-200 space-y-4">
              <div class="flex justify-between items-center">
                <h4 class="font-luxury font-bold text-lg text-[#c2185b] flex items-center space-x-1.5">
                  <svg class="w-5 h-5 text-[#c2185b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Baby Care Services</span>
                </h4>
                <button 
                  @click="openAddServiceModal('baby')"
                  class="text-[11px] font-bold text-[#c2185b] hover:underline cursor-pointer"
                >
                  + Tambah
                </button>
              </div>

              <div class="space-y-2">
                <div 
                  v-for="item in babyServices" 
                  :key="item.id"
                  class="bg-white p-3 rounded-2xl border border-pink-100 text-xs flex justify-between items-center gap-2 group hover:border-pink-300 transition"
                >
                  <div class="min-w-0">
                    <div class="flex items-center space-x-1 flex-wrap">
                      <span class="font-bold text-gray-800">{{ item.name }}</span>
                      <span v-if="item.isNew" class="bg-[#c2185b] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">BARU</span>
                    </div>
                    <div v-if="item.subtitle" class="text-[10px] text-gray-500 truncate">{{ item.subtitle }}</div>
                  </div>

                  <div class="flex items-center space-x-2 shrink-0">
                    <span class="font-bold text-[#c2185b]">{{ item.priceDisplay }}</span>
                    <div class="flex items-center space-x-1">
                      <button 
                        @click="openEditServiceModal(item)"
                        class="p-1.5 rounded-lg text-gray-500 hover:text-[#c2185b] hover:bg-pink-50 transition cursor-pointer"
                        title="Edit Layanan"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        @click="handleDeleteService(item)"
                        class="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                        title="Hapus Layanan"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Kids Services List -->
            <div class="bg-pink-50/50 p-5 rounded-3xl border border-pink-200 space-y-4">
              <div class="flex justify-between items-center">
                <h4 class="font-luxury font-bold text-lg text-[#c2185b] flex items-center space-x-1.5">
                  <svg class="w-5 h-5 text-[#c2185b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Kids Care Services</span>
                </h4>
                <button 
                  @click="openAddServiceModal('kids')"
                  class="text-[11px] font-bold text-[#c2185b] hover:underline cursor-pointer"
                >
                  + Tambah
                </button>
              </div>

              <div class="space-y-2">
                <div 
                  v-for="item in kidsServices" 
                  :key="item.id"
                  class="bg-white p-3 rounded-2xl border border-pink-100 text-xs flex justify-between items-center gap-2 group hover:border-pink-300 transition"
                >
                  <div class="min-w-0">
                    <div class="flex items-center space-x-1 flex-wrap">
                      <span class="font-bold text-gray-800">{{ item.name }}</span>
                      <span v-if="item.isNew" class="bg-[#c2185b] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">BARU</span>
                    </div>
                    <div v-if="item.subtitle" class="text-[10px] text-gray-500 truncate">{{ item.subtitle }}</div>
                  </div>

                  <div class="flex items-center space-x-2 shrink-0">
                    <span class="font-bold text-[#c2185b]">{{ item.priceDisplay }}</span>
                    <div class="flex items-center space-x-1">
                      <button 
                        @click="openEditServiceModal(item)"
                        class="p-1.5 rounded-lg text-gray-500 hover:text-[#c2185b] hover:bg-pink-50 transition cursor-pointer"
                        title="Edit Layanan"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        @click="handleDeleteService(item)"
                        class="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                        title="Hapus Layanan"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mommy Services List -->
            <div class="bg-pink-50/50 p-5 rounded-3xl border border-pink-200 space-y-4">
              <div class="flex justify-between items-center">
                <h4 class="font-luxury font-bold text-lg text-[#c2185b] flex items-center space-x-1.5">
                  <svg class="w-5 h-5 text-[#c2185b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Mommy Care Services</span>
                </h4>
                <button 
                  @click="openAddServiceModal('mom')"
                  class="text-[11px] font-bold text-[#c2185b] hover:underline cursor-pointer"
                >
                  + Tambah
                </button>
              </div>

              <div class="space-y-2 max-h-96 overflow-y-auto pr-1">
                <div 
                  v-for="item in momServices" 
                  :key="item.id"
                  class="bg-white p-3 rounded-2xl border border-pink-100 text-xs flex justify-between items-center gap-2 group hover:border-pink-300 transition"
                >
                  <div class="min-w-0">
                    <div class="flex items-center space-x-1 flex-wrap">
                      <span class="font-bold text-gray-800">{{ item.name }}</span>
                      <span v-if="item.isNew" class="bg-[#c2185b] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">BARU</span>
                    </div>
                    <div v-if="item.subtitle" class="text-[10px] text-gray-500 truncate">{{ item.subtitle }}</div>
                  </div>

                  <div class="flex items-center space-x-2 shrink-0">
                    <span class="font-bold text-[#c2185b]">{{ item.priceDisplay }}</span>
                    <div class="flex items-center space-x-1">
                      <button 
                        @click="openEditServiceModal(item)"
                        class="p-1.5 rounded-lg text-gray-500 hover:text-[#c2185b] hover:bg-pink-50 transition cursor-pointer"
                        title="Edit Layanan"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        @click="handleDeleteService(item)"
                        class="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                        title="Hapus Layanan"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Service Add/Edit Modal Dialog -->
    <Transition name="fade">
      <div 
        v-if="isServiceModalOpen"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        @click.self="isServiceModalOpen = false"
      >
        <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-pink-200 shadow-2xl space-y-5">
          <div class="flex justify-between items-center border-b border-pink-100 pb-3">
            <h4 class="font-luxury font-bold text-xl text-[#c2185b] flex items-center space-x-2">
              <svg v-if="editingServiceId" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <svg v-else class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>{{ editingServiceId ? 'Edit Layanan' : 'Tambah Layanan Baru' }}</span>
            </h4>
            <button 
              @click="isServiceModalOpen = false"
              class="text-gray-400 hover:text-gray-600 text-lg font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>

          <form @submit.prevent="handleSaveService" class="space-y-4 text-xs">
            <div>
              <label class="block font-bold text-gray-700 mb-1">Kategori Layanan</label>
              <select 
                v-model="serviceForm.category"
                class="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-pink-50/20 text-gray-800 focus:outline-none focus:border-[#c2185b]"
              >
                <option value="baby">Baby Care</option>
                <option value="kids">Kids Care</option>
                <option value="mom">Mommy Care</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-gray-700 mb-1">Nama Layanan *</label>
              <input 
                type="text" 
                v-model="serviceForm.name"
                placeholder="Contoh: Totok Wajah + Masker"
                required
                class="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-pink-50/20 text-gray-800 focus:outline-none focus:border-[#c2185b]"
              />
            </div>

            <div>
              <label class="block font-bold text-gray-700 mb-1">Subtitle / Keterangan (Opsional)</label>
              <input 
                type="text" 
                v-model="serviceForm.subtitle"
                placeholder="Contoh: (45 menit / relaksasi)"
                class="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-pink-50/20 text-gray-800 focus:outline-none focus:border-[#c2185b]"
              />
            </div>

            <div>
              <label class="block font-bold text-gray-700 mb-1">Harga Layanan (Rp) *</label>
              <input 
                type="number" 
                v-model.number="serviceForm.price"
                placeholder="150000"
                min="0"
                step="5000"
                required
                class="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-pink-50/20 text-gray-800 focus:outline-none focus:border-[#c2185b]"
              />
            </div>

            <div class="flex items-center space-x-2 pt-1">
              <input 
                type="checkbox" 
                id="isNewService" 
                v-model="serviceForm.isNew"
                class="w-4 h-4 text-[#c2185b] rounded border-pink-300 focus:ring-[#c2185b]"
              />
              <label for="isNewService" class="font-semibold text-gray-700 cursor-pointer">
                Tampilkan Badge "BARU!"
              </label>
            </div>

            <div class="flex items-center justify-end space-x-2 pt-3 border-t border-pink-100">
              <button 
                type="button" 
                @click="isServiceModalOpen = false"
                class="px-4 py-2.5 rounded-xl text-gray-600 font-bold bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
              >
                Batal
              </button>

              <button 
                type="submit" 
                class="px-5 py-2.5 rounded-xl text-white font-bold bg-[#c2185b] hover:bg-pink-700 transition shadow-md cursor-pointer"
              >
                Simpan Layanan
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { ServiceItem } from '~/types/spa'
import type { ReservationRecord } from '~/composables/useReservations'

definePageMeta({
  middleware: 'auth'
})

const { isAuthenticated, logout } = useAuth()
const { reservations, updateReservationStatus, deleteReservation } = useReservations()
const { babyServices, kidsServices, momServices, addService, updateService, deleteService, resetToDefault } = useServices()
const { formatRupiah, showToast } = useCart()

const activeTab = ref<'overview' | 'reservations' | 'services'>('overview')
const reservationFilter = ref<string>('Semua')

// Service Modal Form State
const isServiceModalOpen = ref(false)
const editingServiceId = ref<string | null>(null)
const serviceForm = reactive({
  category: 'baby' as 'baby' | 'kids' | 'mom',
  name: '',
  subtitle: '',
  price: 100000,
  isNew: false
})

const openAddServiceModal = (category: 'baby' | 'kids' | 'mom' = 'baby') => {
  editingServiceId.value = null
  serviceForm.category = category
  serviceForm.name = ''
  serviceForm.subtitle = ''
  serviceForm.price = 100000
  serviceForm.isNew = true
  isServiceModalOpen.value = true
}

const openEditServiceModal = (item: ServiceItem) => {
  editingServiceId.value = item.id
  serviceForm.category = item.category
  serviceForm.name = item.name
  serviceForm.subtitle = item.subtitle || ''
  serviceForm.price = item.price
  serviceForm.isNew = item.isNew || false
  isServiceModalOpen.value = true
}

const handleSaveService = () => {
  if (!serviceForm.name.trim()) return
  if (editingServiceId.value) {
    updateService(editingServiceId.value, {
      category: serviceForm.category,
      name: serviceForm.name,
      subtitle: serviceForm.subtitle,
      price: Number(serviceForm.price),
      isNew: serviceForm.isNew
    })
    showToast(`Layanan "${serviceForm.name}" berhasil diperbarui!`)
  } else {
    addService(serviceForm.category, {
      name: serviceForm.name,
      subtitle: serviceForm.subtitle,
      price: Number(serviceForm.price),
      isNew: serviceForm.isNew
    })
    showToast(`Layanan baru "${serviceForm.name}" berhasil ditambahkan!`)
  }
  isServiceModalOpen.value = false
}

const handleDeleteService = (item: ServiceItem) => {
  if (confirm(`Apakah Anda yakin ingin menghapus layanan "${item.name}"?`)) {
    deleteService(item.id)
    showToast(`Layanan "${item.name}" berhasil dihapus.`)
  }
}

const handleResetServices = () => {
  if (confirm('Apakah Anda yakin ingin mengembalikan semua layanan ke data bawaan awal?')) {
    resetToDefault()
    showToast('Katalog layanan berhasil dikembalikan ke data awal.')
  }
}

const pendingCount = computed(() => reservations.value.filter(r => r.status === 'Pending').length)
const confirmedCount = computed(() => reservations.value.filter(r => r.status === 'Confirmed').length)

const totalRevenue = computed(() => reservations.value.reduce((sum, r) => sum + r.totalPrice, 0))

const filteredReservations = computed(() => {
  if (reservationFilter.value === 'Semua') {
    return reservations.value
  }
  return reservations.value.filter(r => r.status === reservationFilter.value)
})

const getWhatsAppClientLink = (res: ReservationRecord) => {
  let msg = `Halo ${res.clientName},\n\nTerima kasih telah melakukan reservasi di Putri Mom & Baby Spa!\n\n`
  msg += `*Detail Reservasi (${res.id}):*\n`
  msg += `📅 Jadwal: ${res.datetime}\n`
  msg += `👶 Bayi/Klien: ${res.babyInfo}\n\n`
  msg += `*Layanan:*\n`
  res.items.forEach((it, idx) => {
    msg += `${idx + 1}. ${it.name} (x${it.qty}) - ${formatRupiah(it.price * it.qty)}\n`
  })
  msg += `\n*Total Tagihan:* ${formatRupiah(res.totalPrice)}\n`
  msg += `*Status:* ${res.status}\n\n`
  msg += `Jika ada pertanyaan atau perubahan jadwal, silakan hubungi kami. Terima kasih!`

  return `https://wa.me/?text=${encodeURIComponent(msg)}`
}

useSeoMeta({
  title: 'Dashboard Owner & Bidan | Putri Mom & Baby Spa',
  description: 'Kelola layanan dan jadwal reservasi Putri Mom & Baby Spa'
})
</script>

