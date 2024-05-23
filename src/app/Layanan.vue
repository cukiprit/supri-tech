<script setup>
import CardPricePelayanan from '@/components/CardPricePelayanan.vue';
</script>

<template>
  <div class="" id="layanan">
    <!-- strat Layanan Unggulan -->
    <div class="relative p-20 overflow-hidden">
      <div class="text-center text-black mb-10">
        <h1 class="text-6xl font-medium mb-7">Layanan Unggulan</h1>
        <p class="text-lg w-2/3 mx-auto text-gray-500">Kami menawarkan beberapa fitur luar biasa yang akan membantu Anda</p>
      </div>
      <div class="container flex justify-center items-start mx-5 py-5">
        <div class="w-1/5 mx-4">
          <div class="flex space-x-4">
            <div class="rounded-full">
              <svg class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-black">Multi User</h4>
          </div>
          <p class="p-1 text-gray-500">Program yang kami kembangkan bersifat multi user, artinya tiap user pengguna program dapat di sesuiakan menu aksesnya oleh administrator.</p>
        </div>
        <div class="w-1/4 mx-4">
          <div class="flex space-x-4">
            <div class="rounded-full">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1" />
            </div>
            <h4 class="text-xl font-bold text-black">Akses System</h4>
          </div>
          <p class="p-1 text-gray-500">
            Program yang kami kembangkan dapat di akses dimana saja dan kapan saja. Tanpa adanya batasan ruang dan waktu dikarenakan system kami kembangkan dengan teknologi client server.
          </p>
        </div>
        <div class="w-1/4 mx-4">
          <div class="flex space-x-4">
            <div class="rounded-full z-10">
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/bursts.png" alt="bursts" />
            </div>
            <h4 class="text-xl font-bold text-black">Multi Platfrom</h4>
          </div>
          <p class="p-1 text-gray-500">Program yang kami kembangkan dapat berjalan disemua system operasi, baik windows, macOS, android, Linux.</p>
        </div>
      </div>
    </div>
    <!-- end Layanan Unggulan -->

    <!--Strat Nilai yang selalu aktif  -->
    <div class="relative p-24 bg-orange-700" style="background: #ffffff url(/public/Group.png) center center/cover no-repeat">
      <div class="flex items-center justify-center">
        <div class="w-1/2 text-start text-white py-12">
          <h3 class="text-5xl font-semibold px-5">
            Nilai kami Kami selalu
            <p class="text-6xl font-bold mt-3" style="color: yellow">Aktif</p>
          </h3>
        </div>

        <div class="w-2/5 mr-24">
          <img class="absolute -bottom-12" width="25%" src="/public/People.png" alt="Pople" />
        </div>

        <div class="pl-10 w-2/3">
          <div class="">
            <div class="flex space-x-4">
              <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/ffffff/literature--v1.png" alt="literature--v1" />
              <h4 class="text-xl font-bold text-white">TENTANG SPESIFIKASI</h4>
            </div>
            <p class="px-12 text-white mb-8">Kami bekerja melalui Proses Kreatif untuk menemukan desain impian yang sesuai dengan kebutuhan klien.</p>
          </div>
          <div class="">
            <div class="flex space-x-4">
              <img width="30" height="30" src="https://img.icons8.com/material-rounded/24/ffffff/commercial-development-management.png" alt="commercial-development-management" />
              <h4 class="text-xl font-bold text-white">TEAM KAMI</h4>
            </div>
            <p class="px-12 text-white mb-8">Kami bekerja sebagai kelompok dengan beragam wawasan dan keahlian untuk memberikan Satu solusi Desain berdasarkan ide-ide cemerlang.</p>
          </div>
          <div class="">
            <div class="flex space-x-4">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/hourglass--v1.png" alt="hourglass--v1" />
              <h4 class="text-xl font-bold text-white">TEPAT WAKTU</h4>
            </div>
            <p class="px-12 text-white mb-8">Kami bekerja secara profesional dalam manajeman proyek untuk menghormati Waktu klien dan menjaga Tanggung Jawab dan komunikasi yang Baik.</p>
          </div>
        </div>
      </div>
    </div>
    <!--End Nilai yang selalu aktif  -->

    <!-- Start PriceList  -->
    <div class="relative p-20 min-h-screen overflow-hidden">
      <div class="text-center text-black mt-10">
        <h1 class="text-6xl font-medium mb-7">Harga Minimum Layanan</h1>
        <p class="text-lg w-2/3 mx-auto text-gray-500">Menampilkan anggota utama dari SupriTech dan Merupakan anggota saat ini</p>
      </div>

      <div class="flex justify-center items-center gap-4 py-16">
        <CardPricePelayanan class="mt-20 text-gray-900 rounded-lg" name="UI Desaign" price="1.000.000" label="UI Desaign"></CardPricePelayanan>
        <CardPricePelayanan class="mb-10 bg-orange-700 text-white rounded-lg" name="Website" price="3.000.000" label="Website"></CardPricePelayanan>
        <CardPricePelayanan class="mt-20 text-gray-900 rounded-lg" name="Konsultasi" price="Gratis" label="Konsultasi"></CardPricePelayanan>
      </div>
    </div>
    <!-- end PriceList  -->
  </div>
</template>
