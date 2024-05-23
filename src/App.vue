<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { RouterView } from 'vue-router';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div id="app" class="">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>