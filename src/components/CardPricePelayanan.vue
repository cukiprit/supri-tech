<script>
export default {
  // props: ['name', 'price', 'label', 'fitur', 'data'],
  props: {
    name: String,
    price: String,
    label: String,
    fitur: Array,
  },
};
</script>


<template>
  <div id="card-price" class="lg:w-3/12 p-6 text-center rounded-lg shadow-lg border">
    <div class=" divide-y divide-gray-200 mb-3">
      <h5 class="text-2xl font-bold tracking-tight dark:text-white mb-1">{{ name }}</h5>
      <p class="font-normal pt-1">Mulai dari harga</p>
    </div>
    <div class="flex justify-center">
      <h4 class="text-4xl font-bold me-1">{{ price }}</h4>
      <p class="">/ {{ label }}</p>
    </div>
    <div class="text-left mx-4">
      <h4 class="my-3">Fitur yang kami tawarkan :</h4>
      <ul class="mapping_fitur">
        <li class="flex items-center" v-for="(feature, index) in fitur" :key="index">
          <div class="me-2 my-1">
            <img width="20" height="20" src="https://img.icons8.com/material/240/10D730/checked-2--v2.png"
              alt="checked-2--v2" />
          </div>
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>
