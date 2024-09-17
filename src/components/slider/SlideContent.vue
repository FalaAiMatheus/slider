<script setup lang="ts">
defineProps({
  contentTitle: String,
  contentDescription: String,
});
</script>

<template>
  <div
    class="embla__slide bg-slate-100 flex items-center flex-col justify-start space-y-10 text-center p-4"
  >
    <div
      class="flex flex-col items-start justify-center max-w-screen-2xl w-full space-y-3 mt-32 p-4"
    >
      <h2 class="text-4xl lg:text-2xl font-medium max-w-screen-xl">
        Quem é tu?
      </h2>
      <div class="flex flex-col space-y-10">
        <h3 class="text-3xl font-bold">Matheus França</h3>
        <ul class="flex flex-col gap-4 items-start font-medium text-2xl">
          <li>Desenvolvedor Front End</li>
          <li>Made in Itaitinga</li>
        </ul>
      </div>
    </div>
  </div>
</template>
