<script>
export default {
  props: [
    'imageProject',
    'label',
    'nameProject',
    'labelIcon'
  ]
};

</script>
<template>
  <div id="card-project-examples">
    <div class="rounded-lg p-3 bg-orange-200">
      <div>
        <img class="h-auto max-w-full rounded-lg" :src="`../../public/${imageProject}`" alt="">
      </div>
      <div class="flex justify-between px-2 py-4">
        <div class="">
          <p>{{ label }}</p>
          <p class="font-semibold">{{ nameProject }}</p>
        </div>
        <div class="w-fit h-fit border border-black rounded-full p-2">
          <img width="25" height="25" :src="`https://img.icons8.com/ios/100/${labelIcon}.png`" alt="laptop-coding" />
        </div>
      </div>
    </div>
  </div>
</template>