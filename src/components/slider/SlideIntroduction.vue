<script setup lang="ts">
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="embla__slide flex flex-col items-center justify-center space-y-10 bg-white p-4 text-center dark:bg-zinc-950 dark:text-white"
  >
    <div class="flex flex-col items-center gap-4">
      <h1 class="max-w-screen-xl text-5xl font-extrabold lg:text-7xl">
        {{ title }}
      </h1>
      <hr class="h-px w-full border-0 bg-gray-300" />
    </div>
    <p class="text-gray-500">{{ description }}</p>
  </div>
</template>
