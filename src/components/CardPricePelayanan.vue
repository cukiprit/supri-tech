<script>
export default {
  props: ['name', 'price', 'label', 'fitur'],
};
</script>
<template>
  <div id="card-price" class="">
    <a href="#" class="block max-w-lg p-6 text-center shadow-2xl">
      <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">{{ name }}</h5>
      <p class="font-normal mb-2">Mulai dari Harga</p>
      <div class="absolute flex flex-row">
        <h4 class="text-2xl font-bold">
          {{ price }}
        </h4>
        <p class="text-sm font-semibold">\{{ label }}</p>
      </div>
      <h4 class="pt-10">Fitur yang kami tawarkan :</h4>
      <div class="flex justify-center items-center">
        <ul>
          <li>{{ fitur }}</li>
        </ul>
      </div>
    </a>
  </div>
</template>
