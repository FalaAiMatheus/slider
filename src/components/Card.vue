<template>
  <div
    :key="id"
    class="flex h-72 max-w-sm flex-col justify-between space-y-2 rounded-lg border bg-white p-4 dark:bg-zinc-950 dark:border-zinc-700"
  >
    <h5 class="text-2xl font-bold tracking-tight dark:text-white text-gray-950">
      {{ slideTitle }}
    </h5>
    <div class="flex items-center gap-1 text-sm text-gray-400">
      <Calendar />
      <span>{{ date }}</span>
    </div>
    <div class="flex items-center gap-1 text-sm text-gray-400">
      <MapPinned />
      <span>{{ locale }}</span>
    </div>
    <p class="text-gray-700 dark:text-gray-400">
      {{ description }}
    </p>
    <router-link
      :to="{ name: 'slides', params: { slug: slug } }"
      class="focus: self-start rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white ring-offset-blue-600 transition-all hover:bg-blue-800 focus:outline-none focus:ring-2"
    >
      Ver Slide
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Calendar, MapPinned } from "lucide-vue-next";
defineProps({
  id: Number,
  slideTitle: String,
  date: String,
  locale: String,
  description: String,
  slug: String,
});
</script>
