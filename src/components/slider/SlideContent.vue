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
        {{ contentTitle }}
      </h2>
      <p class="mb-3 text-gray-500 dark:text-gray-400">
        {{ contentDescription }}
      </p>
    </div>
  </div>
</template>
