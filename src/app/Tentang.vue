<script>
import CardMissionCompany from '@/components/CardMissionCompany.vue';

</script>
<template>
  <div class="" id="tentang">
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


    <div class="min-h-screen p-20" style="background-image: url(/public/Sprinkle.svg);">
      <div class="grid grid-cols-2 gap-8">
        <div class="border text-white flex flex-col justify-center p-10">
          <h1 class="text-4xl font-bold mb-4">Visi Perusahaan</h1>
          <p class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe officia perferendis
            quod vel aliquam fugit quisquam ullam quos labore!</p>
        </div>
        <div class="border max-h-fit">
          <img class="w-full h-96 rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
      </div>
      <div class="">
        <h1 class="text-4xl font-bold mb-4 text-center">Misi Perusahaan</h1>
        <div class="flex">
          <card-mission-company name="Pengembangan SDM" />
          <card-mission-company name="Pengembangan SDM" />
          <card-mission-company name="Pengembangan SDM" />
          <card-mission-company name="Pengembangan SDM" />
        </div>
      </div>
    </div>
  </div>
</template>