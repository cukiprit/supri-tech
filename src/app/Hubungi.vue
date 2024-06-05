<script>
</script>

<template>
  <div class="" id="hubungi">
    <div class="min-h-screen mt-14 p-7 lg:p-20" style="background: url(/public/Hexagon.svg);">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div data-aos="zoom-out" data-aos-duration="1400" class="text-white flex flex-col justify-between py-8 lg:p-10">
          <div class="">
            <h1 class="text-3xl lg:text-5xl font-bold mb-4">Mari Terhubung Dengan Kami!</h1>
            <p class="lg:text-lg mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus inventore
              deleniti
              earum
              aspernatur quibusdam accusantium. </p>
            <ul class="mt-8">
              <li class="flex items-center my-1">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/150/ffffff/instagram-new--v1.png"
                  alt="instagram-new--v1" />
                <p class="text-lg ms-3 pb-1">supri.tech</p>
              </li>
              <li class="flex items-center my-1">
                <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/120/ffffff/telegram-app.png"
                  alt="telegram-app" />
                <p class="text-lg ms-3 pb-1">Supritech</p>
              </li>
              <li class="flex items-center my-1">
                <img width="25" height="25" src="https://img.icons8.com/windows/96/ffffff/email.png" alt="email" />
                <p class="text-lg ms-3 pb-1">supri.tech@gmail.com</p>
              </li>
            </ul>
          </div>
          <div class="flex items-center">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/90/ffffff/map-pin.png" alt="map-pin" />
            <p class="text-lg ms-3 pb-1 w-fit">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
          </div>
        </div>


        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="300" data-aos-duration="1400"
          data-aos-delay="700" class="bg-white rounded-lg p-9 shadow-lg">
          <h1 class="text-2xl font-bold mb-1">Mari Terhubung </h1>
          <p class="lg:text-lg mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
          <form class="w-full mx-auto">
            <div class="grid lg:grid-cols-2 gap-3">
              <div class="mb-5">
                <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                  Lengkap</label>
                <input type="text" id="nama"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Nama lengkap anda" required />
              </div>
              <div class="mb-5">
                <label for="aplikasi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                  Aplikasi Website</label>
                <input type="text" id="aplikasi"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Nama aplikasi anda" required />
              </div>
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Email aktif anda" required />
            </div>
            <div class="mb-5">
              <label for="deskripsi"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
              <textarea id="deskripsi" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tulis deskripsi permintaan anda ...."></textarea>
            </div>
            <button type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan
              Permintaan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>