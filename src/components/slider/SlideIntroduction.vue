<script setup lang="ts">
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="embla__slide bg-slate-100 flex items-center flex-col justify-center space-y-10 text-center p-4"
  >
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-5xl lg:text-7xl font-bold max-w-screen-xl">
        {{ title }}
      </h1>
      <hr class="h-px border-0 bg-slate-300 w-full" />
    </div>
    <p class="text-gray-500 dark:text-gray-400">{{ description }}</p>
  </div>
</template>
