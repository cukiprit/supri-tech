<script setup>
import CardPricePelayanan from '@/components/CardPricePelayanan.vue';
import price_list from '@/data/price_list';
</script>

<template>
  <div class="" id="layanan">
    <div class="mt-14 p-7 py-14 lg:p-20 overflow-hidden">
      <div data-aos="fade-down" data-aos-duration="1400" class="text-center text-black mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold mb-5">Layanan Unggulan</h1>
        <p class="lg:text-xl lg:w-2/3 mx-auto text-gray-500">Kami menawarkan beberapa fitur luar biasa yang akan
          membantu Anda
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1400"
        class="grid gap-8 lg:grid-cols-3 lg:gap-x-8 justify-center items-start py-5">
        <div class="col">
          <div class="flex items-center space-x-4">
            <div class="bg-slate-100 p-2 rounded-full">
              <svg class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                  d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-black">Multi User</h4>
          </div>
          <p class="p-1 text-gray-500 mt-2 leading-relaxed">Program yang kami kembangkan bersifat multi user, artinya
            tiap user pengguna
            program dapat di sesuiakan menu aksesnya oleh administrator.</p>
        </div>
        <div class="col">
          <div class="flex items-center space-x-4">
            <div class="bg-slate-100 p-2 rounded-full">
              <img width="22" height="22" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1" />
            </div>
            <h4 class="text-xl font-bold text-black">Akses System</h4>
          </div>
          <p class="p-1 text-gray-500 mt-2 leading-relaxed">
            Program yang kami kembangkan dapat di akses dimana saja dan kapan saja. Tanpa adanya batasan ruang dan waktu
            dikarenakan system kami kembangkan dengan teknologi client server.
          </p>
        </div>
        <div class="col">
          <div class="flex items-center space-x-4">
            <div class="bg-slate-100 p-2 rounded-full z-10">
              <img width="22" height="22" src="https://img.icons8.com/ios-glyphs/30/bursts.png" alt="bursts" />
            </div>
            <h4 class="text-xl font-bold text-black">Multi Platfrom</h4>
          </div>
          <p class="p-1 text-gray-500 mt-2 leading-relaxed">Program yang kami kembangkan dapat berjalan disemua system
            operasi, baik
            windows,
            macOS, android, Linux.</p>
        </div>
      </div>
    </div>

    <div class="relative p-7 lg:px-20 bg-orange-700"
      style="background: #ffffff url(/public/Group.png) center center/cover no-repeat">
      <div class="grid lg:grid-cols-3  items-center justify-center">
        <div data-aos="fade-right" data-aos-duration="1300"
          class="hidden lg:block text-start text-4xl text-white px-4 py-12">
          <h3 class="font-semibold">Nilai kami</h3>
          <h3 class="font-semibold">Kami selalu</h3>
          <h3 class="font-semibold text-yellow-300">Aktif</h3>
        </div>

        <div class="relative hidden lg:block ">
          <img data-aos="zoom-in" data-aos-duration="1200" class="absolute bottom-12 left-0" width="80" height="80"
            src="https://img.icons8.com/offices/80/light-on.png" alt="light-on" style="rotate: -20deg;" />

          <img data-aos="zoom-in" data-aos-duration="1200" class="absolute -top-24 w-2/3" src="/public/People.png"
            alt="Pople" />
        </div>

        <div class="py-5 lg:py-10">
          <div data-aos="fade-down" data-aos-duration="1200" class="mb-10 lg:mb-5">
            <div class="flex space-x-3 mb-2">
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ffffff/literature--v1.png"
                alt="literature--v1" />
              <h4 class="font-bold text-white">TENTANG SPESIFIKASI</h4>
            </div>
            <p class="ps-10 text-white">Kami bekerja melalui Proses Kreatif untuk menemukan desain impian yang
              sesuai dengan kebutuhan klien.</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1200" class="mb-10 lg:mb-5">
            <div class="flex space-x-3 mb-2">
              <img width="26" height="26"
                src="https://img.icons8.com/material-rounded/50/ffffff/commercial-development-management.png"
                alt="commercial-development-management" />
              <h4 class="font-bold text-white">TEAM KAMI</h4>
            </div>
            <p class="ps-10 text-white">Kami bekerja sebagai kelompok dengan beragam wawasan dan keahlian untuk
              memberikan Satu solusi Desain berdasarkan ide-ide cemerlang.</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1200" class="">
            <div class="flex space-x-3 mb-2">
              <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ffffff/hourglass--v1.png"
                alt="hourglass--v1" />
              <h4 class="font-bold text-white">TEPAT WAKTU</h4>
            </div>
            <p class="ps-10 text-white">Kami bekerja secara profesional dalam manajeman proyek untuk menghormati
              Waktu klien dan menjaga Tanggung Jawab dan komunikasi yang Baik.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative p-7 lg:p-20 min-h-screen overflow-hidden">
      <div data-aos="fade-up" data-aos-duration="1600" class="text-center text-black mt-7 lg:mt-10">
        <h1 class="text-3xl lg:text-4xl font-bold mb-7">Harga Minimum Layanan</h1>
        <p class="lg:text-lg lg:w-2/3 mx-auto text-gray-500">Menampilkan anggota utama dari SupriTech dan Merupakan
          anggota
          saat ini</p>
      </div>

      <div class="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 py-16">
        <CardPricePelayanan data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600"
          class="lg:mt-20 text-gray-900" name="UI Design" price="1.000.000" label="UI Design"
          :fitur="price_list.design">
        </CardPricePelayanan>
        <CardPricePelayanan data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500"
          class="lg:mb-10 bg-orange-600 text-white" name="Website" price="3.000.000" label="Website"
          :fitur="price_list.website">
        </CardPricePelayanan>
        <CardPricePelayanan data-aos="fade-up" data-aos-duration="1200" data-aos-delay="900"
          class="lg:mt-20 text-gray-900" name="Konsultasi" price="Gratis" label="Konsultasi"
          :fitur="price_list.consultant">
        </CardPricePelayanan>
      </div>
    </div>
    <!-- end PriceList  -->
  </div>
</template>
