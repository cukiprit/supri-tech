<script setup>
import CardProjectExamples from '@/components/CardProjectExamples.vue';
import CardReviewClient from '@/components/CardReviewClient.vue';
import { ref, onMounted, onUpdated, watch, createApp } from 'vue';
</script>

<template>
  <div class="" id="beranda">
    <div class="relative p-20 bg-orange-700 overflow-hidden">
      <div class="text-center text-white">
        <h1 class="text-6xl font-medium mb-8">Kreatifitaskan Websitemu</h1>
        <p class="text-lg w-2/3 mx-auto text-gray-200">Kami memberikan layanan pembuatan website, perancangan desain
          antarmuka
          aplikasi
          anda,
          dan
          konsultasi
          digitalisasi konten bersama <i>IT Consultant</i> kami</p>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-fit h-fit flex rounded-full px-12 py-2 me-5 bg-orange-100">
          <p class="me-3">supri.tech@gmail.com</p>
          <img width="25" height="25" src="https://img.icons8.com/color/144/gmail-new.png" alt="gmail-new" />
        </div>
        <div class="mb-20 mt-8">
          <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/90/ffedd5/quote.png" alt="quote" />
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="w-1/5 mx-4 z-10">
          <img class="rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
        <div class="w-1/4 mx-4 z-10">
          <img class="rounded shadow-lg" src="/public/CraftworkCard1.png" alt="">
        </div>
        <div class="w-1/5 mx-4 z-10">
          <img class="rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
        <div class="w-1/6 mx-4 z-10">
          <img class="rounded shadow-lg" src="/public/CraftworkCard1.png" alt="">
        </div>
      </div>
      <img class="absolute start-0 end-0 -bottom-12 opacity-25" src="/public/WaveLine.png" alt="">
    </div>

    <div class="relative min-h-screen overflow-hidden flex p-20">
      <div class="w-1/2">
        <div class="">
          <h1 class="text-5xl font-bold">Fokus Kualitas Website</h1>
          <p class="my-5 text-lg text-gray-500">Konsulasi dengan <i>IT Consultant</i> kami untuk mengetahui website yang
            anda
            inginkan
            dengan
            berbagai fitur
          </p>
        </div>
        <div class="grid grid-cols-2 gap-12">
          <div class="">
            <img width="30" height="30" src="https://img.icons8.com/ios/100/idea--v1.png" alt="idea--v1" />
            <h5 class="font-bold text-lg my-2">Responsibilitas</h5>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
          </div>
          <div class="">
            <img width="30" height="30" src="https://img.icons8.com/ios/100/idea--v1.png" alt="idea--v1" />
            <h5 class="font-bold text-lg my-2">Kreatifitas</h5>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
          </div>
          <div class="">
            <img width="30" height="30" src="https://img.icons8.com/ios/100/laptop-coding.png" alt="laptop-coding" />
            <h5 class="font-bold text-lg my-2">Fungsionalitas</h5>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
          </div>
        </div>
      </div>
      <img class="absolute w-1/2 h-fit rounded-2xl -right-24 -bottom-12" style="box-shadow: -3px -3px 10px #e2e8f0"
        src="/public/CraftworkCard1.png" alt="">
    </div>


    <div class="min-h-screen p-20 flex items-center" style="background-image: url(/public/ShinyOverlay.svg);">
      <div class="grid grid-cols-3">
        <div class="relative col-span-2 max-h-[35em]">
          <img
            class="h-full w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description">
          <div class="absolute bottom-0 p-10 text-white">
            <p class="italic font-semibold text-2xl">IT Consultant</p>
            <p class="text-xl font-light">SupriTech Company</p>
          </div>
        </div>
        <div class="flex flex-col justify-center bg-white p-8 rounded-r-lg">
          <div class="mb-5">
            <img width="45" height="45" src="https://img.icons8.com/sf-regular-filled/96/EE5432/quote-left.png"
              alt="quote-left" />
            <h1 class="text-4xl font-medium">Konsultan Website Terpercaya</h1>
          </div>
          <p class="text-lg text-gray-500">Konsultasi dengan <i>IT Consultant</i> kami untuk mengetahui website yang
            anda
            inginkan dengan berbagai
            fitur</p>
        </div>
      </div>
    </div>


    <div class="min-h-screen p-20">
      <div class="w-2/3">
        <h1 class="text-4xl font-bold">Beberapa Program Unggulan</h1>
        <p class="my-5 text-lg text-gray-500">Konsulasi dengan <i>IT Consultant</i> kami untuk mengetahui website yang
          anda inginkan
          dengan
          berbagai fitur
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <card-project-examples imageProject="CraftworkCard1.png" label="UI Design" nameProject="Design UI Mari Membaca"
          labelIcon="laptop-coding" />
        <card-project-examples imageProject="CraftworkCard2.png" label="UI Design" nameProject="Design UI Mari Membaca"
          labelIcon="laptop-coding" />
        <card-project-examples imageProject="CraftworkCard1.png" label="UI Design" nameProject="Design UI Mari Membaca"
          labelIcon="laptop-coding" />
        <card-project-examples imageProject="CraftworkCard2.png" label="UI Design" nameProject="Design UI Mari Membaca"
          labelIcon="laptop-coding" />
      </div>
    </div>

    <div class="min-h-screen p-20 flex flex-col items-center justify-center"
      style="background: #ffffff url(/public/RectLight.svg) center center/cover no-repeat;">
      <div class="w-2/3 text-center text-white">
        <div class="flex items-center justify-center mb-5">
          <h1 class="text-5xl font-bold mt-10 me-4">Testimoni Layanan</h1>
          <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/90/ffffff/thumbs-up-down.png"
            alt="thumbs-up-down" />
        </div>
        <p class="text-lg text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
      </div>

      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out flex justify-between items-center" data-carousel-item>
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Naufal Zaul Karim"
              project="Design UI Mari Membaca" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Andhika Dwiky Pratama"
              project="Website Tukar Uang" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Hendriansyah Nur Assabil"
              project="Consultant UMKM Bersama" />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out flex justify-between items-center" data-carousel-item>
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Naufal Zaul Karim"
              project="Design UI Mari Membaca" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Andhika Dwiky Pratama"
              project="Website Tukar Uang" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Hendriansyah Nur Assabil"
              project="Consultant UMKM Bersama" />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out flex justify-between items-center" data-carousel-item>
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Naufal Zaul Karim"
              project="Design UI Mari Membaca" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Andhika Dwiky Pratama"
              project="Website Tukar Uang" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Hendriansyah Nur Assabil"
              project="Consultant UMKM Bersama" />
          </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
            data-carousel-slide-to="2"></button>
        </div>
      </div>
    </div>
  </div>
</template>
