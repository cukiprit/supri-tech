<script setup>
import CardMissionCompany from '@/components/CardMissionCompany.vue';
</script>

<template>
  <div id="tentang">
    <div data-aos="fade-down" data-aos-duration="1600"
      class="bg-white flex flex-col justify-center items-center mx-auto mt-14 px-7 py-14 min-h-[500px] md:w-10/12 md:p-10 lg:w-2/3 lg:p-20">
      <div class="flex items-center space-x-3 rtl:space-x-reverse mb-8">
        <img src="/public/SupriTech.png" class="h-14 rounded-full" alt="Flowbite Logo" />
        <span class="self-center text-3xl font-bold whitespace-nowrap dark:text-white sm:text-4xl">SUPRITECH</span>
      </div>
      <p class="sm:text-2xl text-center text-gray-500 leading-relaxed">" Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Beatae
        harum aliquam,
        corrupti
        eveniet
        cupiditate sit reprehenderit itaque tempora nulla soluta officia temporibus fugit, aspernatur repudiandae
        voluptatum commodi dicta, deleniti labore?</p>
    </div>

    <div class="p-7 md:p-10 lg:p-20 lg:min-h-screen" style="background-image: url('/public/Sprinkle.svg');">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div data-aos="fade-right" data-aos-duration="1500" data-aos-offset="200" data-aos-easing="ease-in-sine"
          class="text-white text-center justify-center sm:flex sm:flex-col sm:p-10 lg:text-left ">
          <h1 class="text-3xl font-bold mb-4 sm:text-4xl">Visi Perusahaan</h1>
          <p class="sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe officia
            perferendis
            quod vel aliquam fugit quisquam ullam quos labore!</p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1400" class="hidden max-h-fit lg:block">
          <img class="w-full h-96 rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in"
        class="mt-14 md:my-14 lg:mb-0">
        <h1 class="text-3xl font-bold mb-4 text-center text-white sm:text-4xl ">Misi Perusahaan</h1>
        <div class="grid gap-3 mt-8 md:grid-cols-2 lg:flex lg:mt-12">
          <card-mission-company label="Pengembangan SDM" />
          <card-mission-company label="Pengembangan SDM" />
          <card-mission-company label="Pengembangan SDM" />
          <card-mission-company label="Pengembangan SDM" />
        </div>
      </div>
    </div>

    <div class="p-7 text-center md:p-10 lg:min-h-screen lg:p-20">
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200" data-aos-easing="ease-in"
        class="mx-auto md:w-11/12 lg:w-2/3">
        <h1 class="text-3xl font-bold mb-5 sm:text-4xl ">Struktur Perusahaan</h1>
        <p class="sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem error similique libero,
          optio pariatur
          repellat necessitatibus ducimus consequuntur explicabo adipisci!</p>
      </div>
      <div class="grid mt-10 md:grid-cols-3 md:gap-2">
        <div data-aos="zoom-in" data-aos-duration="1600">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EE5432"
              d="M42.9,-44.5C55.5,-30.3,65.5,-15.1,69.4,3.9C73.3,22.9,71,45.8,58.4,57.8C45.8,69.9,22.9,71,-0.2,71.2C-23.3,71.5,-46.7,70.7,-59.3,58.7C-71.9,46.7,-73.8,23.3,-71.2,2.6C-68.6,-18,-61.3,-36.1,-48.7,-50.3C-36.1,-64.6,-18,-75,-1.5,-73.6C15.1,-72.1,30.3,-58.8,42.9,-44.5Z"
              transform="translate(100 100)" />
            <image href="/public/IMG_20210615_175646_369.png" x="40" y="30" class="w-28" clip-path="url()" alt="" />
            <defs>
              <clipPath id="myPath">
                <path
                  d="M42.9,-44.5C55.5,-30.3,65.5,-15.1,69.4,3.9C73.3,22.9,71,45.8,58.4,57.8C45.8,69.9,22.9,71,-0.2,71.2C-23.3,71.5,-46.7,70.7,-59.3,58.7C-71.9,46.7,-73.8,23.3,-71.2,2.6C-68.6,-18,-61.3,-36.1,-48.7,-50.3C-36.1,-64.6,-18,-75,-1.5,-73.6C15.1,-72.1,30.3,-58.8,42.9,-44.5Z"
                  transform="translate(100 100)" />
              </clipPath>
            </defs>
          </svg>
          <!-- <img class="w-64 mx-auto" src="/public/blob.png" alt=""> -->
          <!-- <img class="absolute w-56 -top-10 start-20" src="/public/IMG_20210615_175646_369.png" alt=""> -->
          <div class="text-center">
            <h3 class="font-semibold text-xl">Naufal Zaul Karim</h3>
            <p class="text-gray-500">Front-end Developer</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1600" class="">

          <!-- <div class="relative">
            <img class="w-64 mx-auto" src="/public/blob.png" alt="">
            <img class="absolute w-60 -top-8 start-16" src="/public/WhatsApp Image 2024-05-02 at 00.43.20_adaa070d.png"
              alt="">
          </div> -->
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EE5432"
              d="M42.9,-44.5C55.5,-30.3,65.5,-15.1,69.4,3.9C73.3,22.9,71,45.8,58.4,57.8C45.8,69.9,22.9,71,-0.2,71.2C-23.3,71.5,-46.7,70.7,-59.3,58.7C-71.9,46.7,-73.8,23.3,-71.2,2.6C-68.6,-18,-61.3,-36.1,-48.7,-50.3C-36.1,-64.6,-18,-75,-1.5,-73.6C15.1,-72.1,30.3,-58.8,42.9,-44.5Z"
              transform="translate(100 100)" />
            <image href="/public/WhatsApp Image 2024-05-02 at 00.43.20_adaa070d.png" x="33" y="30" class="w-32"
              clip-path="url()" alt="" />
            <defs>
              <clipPath id="myPath">
                <path
                  d="M42.9,-44.5C55.5,-30.3,65.5,-15.1,69.4,3.9C73.3,22.9,71,45.8,58.4,57.8C45.8,69.9,22.9,71,-0.2,71.2C-23.3,71.5,-46.7,70.7,-59.3,58.7C-71.9,46.7,-73.8,23.3,-71.2,2.6C-68.6,-18,-61.3,-36.1,-48.7,-50.3C-36.1,-64.6,-18,-75,-1.5,-73.6C15.1,-72.1,30.3,-58.8,42.9,-44.5Z"
                  transform="translate(100 100)" />
              </clipPath>
            </defs>
          </svg>
          <div class="text-center">
            <h3 class="font-semibold text-xl">Andhika Dwiky Pratama</h3>
            <p class="text-gray-500">Backend Developer</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1600" class="">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EE5432"
              d="M42.9,-44.5C55.5,-30.3,65.5,-15.1,69.4,3.9C73.3,22.9,71,45.8,58.4,57.8C45.8,69.9,22.9,71,-0.2,71.2C-23.3,71.5,-46.7,70.7,-59.3,58.7C-71.9,46.7,-73.8,23.3,-71.2,2.6C-68.6,-18,-61.3,-36.1,-48.7,-50.3C-36.1,-64.6,-18,-75,-1.5,-73.6C15.1,-72.1,30.3,-58.8,42.9,-44.5Z"
              transform="translate(100 100)" />
            <image href="/public/WhatsApp Image 2024-06-05 at 15.52.14_c2ee2f7b.png" x="8" y="28" class="w-44"
              clip-path="url()" alt="" />
            <defs>
              <clipPath id="myPath">
                <path
                  d="M42.9,-44.5C55.5,-30.3,65.5,-15.1,69.4,3.9C73.3,22.9,71,45.8,58.4,57.8C45.8,69.9,22.9,71,-0.2,71.2C-23.3,71.5,-46.7,70.7,-59.3,58.7C-71.9,46.7,-73.8,23.3,-71.2,2.6C-68.6,-18,-61.3,-36.1,-48.7,-50.3C-36.1,-64.6,-18,-75,-1.5,-73.6C15.1,-72.1,30.3,-58.8,42.9,-44.5Z"
                  transform="translate(100 100)" />
              </clipPath>
            </defs>
          </svg>

          <!-- <div class="relative">
            <img class="w-64 mx-auto" src="/public/blob.png" alt="">
            <img class="absolute w-52 -top-10 end-20" src="/public/WhatsApp Image 2024-05-02 at 00.42.19_de29f01e.png"
              alt="">
          </div> -->
          <div class="text-center">
            <h3 class="font-semibold text-xl">Hendriansyah Nur Assabil</h3>
            <p class="text-gray-500">Content Management</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>