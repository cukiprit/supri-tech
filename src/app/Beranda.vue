<script setup>
import CardProjectExamples from '@/components/CardProjectExamples.vue';
import CardReviewClient from '@/components/CardReviewClient.vue';
</script>

<template>
  <div class="" id="beranda">
    <div class="relative mt-14 px-7 py-20 bg-orange-700 overflow-hidden md:min-h-screen md:px-10 lg:p-20">
      <div data-aos="fade-down" data-aos-duration="1400" class="text-center text-white">
        <h1 class="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl">Kreatifitaskan Websitemu</h1>
        <p class="mx-auto text-gray-100 md:text-lg md:w-10/12 lg:w-2/3 ">Kami memberikan layanan
          pembuatan website,
          perancangan desain
          antarmuka
          aplikasi
          anda,
          dan
          konsultasi
          digitalisasi konten bersama <i>IT Consultant</i> kami</p>
      </div>
      <div data-aos="fade-down" data-aos-duration="1400" class="flex items-center justify-center">
        <div class="w-fit h-fit flex rounded-full px-12 py-2 bg-orange-100 sm:me-5">
          <p class="sm:me-3">supri.tech@gmail.com</p>
          <img width="25" height="25" src="https://img.icons8.com/color/144/gmail-new.png" alt="gmail-new" />
        </div>
        <div class="mb-20 mt-8">
          <img class="hidden sm:block" width="40" height="40"
            src="https://img.icons8.com/ios-glyphs/90/ffedd5/quote.png" alt="quote" />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1400" class="hidden sm:flex sm:justify-center sm:items-center">
        <div class="hidden lg:block w-1/5 mx-4 z-10">
          <img class="rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
        <div class="mx-4 z-10 md:w-2/3 lg:w-1/4">
          <img class="rounded shadow-lg" src="/public/CraftworkCard1.png" alt="">
        </div>
        <div class="mx-4 z-10 md:w-2/5 lg:w-1/5">
          <img class="rounded shadow-lg" src="/public/CraftworkCard2.png" alt="">
        </div>
        <div class="hidden lg:block w-1/6 mx-4 z-10">
          <img class="rounded shadow-lg" src="/public/CraftworkCard1.png" alt="">
        </div>
      </div>
      <img class="hidden sm:block sm:absolute md:start-0 md:end-0 md:top-96 lg:top-52 lg:-bottom-12 opacity-25"
        src="/public/WaveLine.png" alt="">
    </div>

    <div class="relative overflow-hidden flex p-7 md:p-10 lg:min-h-screen lg:p-20">
      <div data-aos="fade-right" data-aos-duration="1400" class="text-center sm:text-left lg:w-1/2">
        <div class="mb-14 sm:mb-8">
          <h1 class="text-3xl sm:text-4xl font-bold">Fokus Kualitas Website</h1>
          <p class="my-5 sm:text-lg text-gray-500">Konsulasi dengan <i>IT Consultant</i> kami untuk mengetahui website
            yang
            anda
            inginkan
            dengan
            berbagai fitur
          </p>
        </div>
        <div class="grid gap-12 sm:grid-cols-2">
          <div class="">
            <div class="border w-fit p-2 rounded bg-slate-100 mx-auto sm:border-none sm:p-0 sm:bg-transparent sm:mx-0">
              <img width="30" height="30" src="https://img.icons8.com/ios/100/idea--v1.png" alt="idea--v1" />
            </div>
            <h5 class="font-bold text-lg my-2">Responsibilitas</h5>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
          </div>
          <div class="">
            <div class="border w-fit p-2 rounded bg-slate-100 mx-auto sm:border-none sm:p-0 sm:bg-transparent sm:mx-0">
              <img width="30" height="30" src="https://img.icons8.com/ios/100/idea--v1.png" alt="idea--v1" />
            </div>
            <h5 class="font-bold text-lg my-2">Kreatifitas</h5>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
          </div>
          <div class="">
            <div class="border w-fit p-2 rounded bg-slate-100 mx-auto sm:border-none sm:p-0 sm:bg-transparent sm:mx-0">
              <img width="30" height="30" src="https://img.icons8.com/ios/100/laptop-coding.png" alt="laptop-coding" />
            </div>
            <h5 class="font-bold text-lg my-2">Fungsionalitas</h5>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
          </div>
        </div>
      </div>
      <img class="hidden absolute w-1/2 h-fit rounded-2xl -right-24 -bottom-12 lg:block"
        style="box-shadow: -3px -3px 10px #e2e8f0" src="/public/CraftworkCard1.png" alt="">
    </div>


    <div class="flex p-7 sm:items-center md:p-10 lg:min-h-screen lg:p-20"
      style="background-image: url(/public/ShinyOverlay.svg);">
      <div data-aos="zoom-in" data-aos-duration="1400" class="grid sm:grid-cols-3 my-auto">
        <div class="relative col-span-2 max-h-[35em]">
          <img
            class="h-full w-full transition-all duration-300 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none cursor-pointer filter grayscale hover:grayscale-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description">
          <div class="absolute bottom-0 p-5 text-white sm:p-10">
            <p class="italic font-semibold text-2xl">IT Consultant</p>
            <p class="text-xl font-light">SupriTech Company</p>
          </div>
        </div>
        <div
          class="bg-white p-5 rounded-b-lg sm:flex sm:flex-col sm:justify-center sm:rounded-r-lg sm:rounded-bl-none md:p-6 lg:p-8">
          <div class="mb-5">
            <img width="45" height="45" src="https://img.icons8.com/sf-regular-filled/96/EE5432/quote-left.png"
              alt="quote-left" />
            <h1 class="text-3xl font-medium lg:text-4xl ">Konsultan Website Terpercaya</h1>
          </div>
          <p class="text-lg text-gray-500">Konsultasi dengan <i>IT Consultant</i> kami untuk mengetahui website yang
            anda
            inginkan dengan berbagai
            fitur</p>
        </div>
      </div>
    </div>


    <div class="min-h-screen p-7 md:p-10 lg:p-20">
      <div data-aos="fade-up" data-aos-duration="1400" class="text-center sm:text-left sm:w-2/3">
        <h1 class="text-3xl sm:text-4xl font-bold">Beberapa Program Unggulan</h1>
        <p class="my-5 text-lg text-gray-500">Konsulasi dengan <i>IT Consultant</i> kami untuk mengetahui website yang
          anda inginkan
          dengan
          berbagai fitur
        </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="1400" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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

    <div class="min-h-screen p-7 sm:p-20 flex flex-col items-center sm:justify-center"
      style="background: #ffffff url(/public/RectLight.svg) center center/cover no-repeat;">

      <div data-aos="fade-up" data-aos-duration="1400" class="sm:w-2/3 text-center text-white">
        <div class="flex items-center justify-center mb-5">
          <h1 class="text-3xl sm:text-4xl font-bold sm:mt-10 sm:me-4">Testimoni Layanan</h1>
          <img class="hidden sm:block" width="50" height="50"
            src="https://img.icons8.com/ios-glyphs/90/ffffff/thumbs-up-down.png" alt="thumbs-up-down" />
        </div>
        <p class="text-lg text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus fuga </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="1400" id="default-carousel" class="hidden relative w-full"
        data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="duration-700 ease-in-out flex justify-between items-center" data-carousel-item>
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Naufal Zaul Karim"
              project="Design UI Mari Membaca" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Andhika Dwiky Pratama"
              project="Website Tukar Uang" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Hendriansyah Nur Assabil"
              project="Consultant UMKM Bersama" />
          </div>
          <div class="duration-700 ease-in-out flex justify-between items-center" data-carousel-item>
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Naufal Zaul Karim"
              project="Design UI Mari Membaca" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Andhika Dwiky Pratama"
              project="Website Tukar Uang" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Hendriansyah Nur Assabil"
              project="Consultant UMKM Bersama" />
          </div>
          <div class="duration-700 ease-in-out flex justify-between items-center" data-carousel-item>
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Naufal Zaul Karim"
              project="Design UI Mari Membaca" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Andhika Dwiky Pratama"
              project="Website Tukar Uang" />
            <card-review-client photo="scott-gummerson-_5Q1-ae44aw-unsplash.jpg" name="Hendriansyah Nur Assabil"
              project="Consultant UMKM Bersama" />
          </div>
        </div>
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
