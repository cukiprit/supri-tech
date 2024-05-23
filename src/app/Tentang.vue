<script setup>
import CardMissionCompany from '@/components/CardMissionCompany.vue';

</script>

<template>
  <div id="tentang">
    <div class="h-96 w-1/2 bg-white flex flex-col justify-center items-center mx-auto">
      <div class="flex items-center space-x-3 rtl:space-x-reverse mb-5">
        <img src="/public/SupriTech.png" class="h-16 rounded-full" alt="Flowbite Logo" />
        <span class="self-center text-4xl font-bold whitespace-nowrap dark:text-white">SUPRITECH</span>
      </div>
      <p class="text-2xl text-center text-gray-500">" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
        harum aliquam,
        corrupti
        eveniet
        cupiditate sit reprehenderit itaque tempora nulla soluta officia temporibus fugit, aspernatur repudiandae
        voluptatum commodi dicta, deleniti labore?</p>
    </div>

    <div class="min-h-screen p-20" style="background-image: url('/public/Sprinkle.svg');">
      <div class="grid grid-cols-2 gap-8">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
          class="text-white flex flex-col justify-center p-10">
          <h1 class="text-4xl font-bold mb-4">Visi Perusahaan</h1>
          <p class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe officia perferendis
            quod vel aliquam fugit quisquam ullam quos labore!</p>
        </div>
        <div data-aos="zoom-in" class="max-h-fit">
          <img class="w-full h-96 rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" class="mt-14">
        <h1 class="text-4xl font-bold mb-4 text-center text-white">Misi Perusahaan</h1>
        <div class="flex gap-3 mt-12">
          <card-mission-company label="Pengembangan SDM" />
          <card-mission-company label="Pengembangan SDM" />
          <card-mission-company label="Pengembangan SDM" />
          <card-mission-company label="Pengembangan SDM" />
        </div>
      </div>
    </div>

    <div class="min-h-screen p-20 text-center">
      <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" class="w-2/3 mx-auto">
        <h1 class="text-4xl font-bold mb-5">Struktur Perusahaan</h1>
        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem error similique libero,
          optio pariatur
          repellat necessitatibus ducimus consequuntur explicabo adipisci!</p>
      </div>
      <div class="grid grid-cols-3 mt-20">
        <div data-aos="zoom-in" data-aos-duration="1800" class="">
          <div class="relative">
            <img class="w-64 mx-auto" src="/public/blob.png" alt="">
            <img class="absolute w-56 -top-10 start-20" src="/public/IMG_20210615_175646_369.png" alt="">
          </div>
          <div class="text-center p-5">
            <h3 class="font-semibold text-xl">Naufal Zaul Karim</h3>
            <p class="text-gray-500">Front-end Developer</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1800" class="">
          <div class="relative">
            <img class="w-64 mx-auto" src="/public/blob.png" alt="">
            <img class="absolute w-60 -top-8 start-16" src="/public/WhatsApp Image 2024-05-02 at 00.43.20_adaa070d.png"
              alt="">
          </div>
          <div class="text-center p-5">
            <h3 class="font-semibold text-xl">Andhika Dwiky Pratama</h3>
            <p class="text-gray-500">Backend Developer</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1800" class="">
          <div class="relative">
            <img class="w-64 mx-auto" src="/public/blob.png" alt="">
            <img class="absolute w-52 -top-10 end-20" src="/public/WhatsApp Image 2024-05-02 at 00.42.19_de29f01e.png"
              alt="">
          </div>
          <div class="text-center p-5">
            <h3 class="font-semibold text-xl">Hendriansyah Nur Assabil</h3>
            <p class="text-gray-500">Content Management</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>