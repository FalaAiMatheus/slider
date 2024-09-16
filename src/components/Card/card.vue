<template>
  <div
    class="max-w-sm flex flex-col space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm"
  >
    <h5 class="text-2xl font-bold tracking-tight text-slate-900">
      {{ slideTitle }}
    </h5>
    <div class="flex gap-1 items-center text-slate-400 text-sm">
      <Calendar />
      <span>{{ date }}</span>
    </div>
    <div class="flex gap-1 items-center text-slate-400 text-sm">
      <MapPinned />
      <span>{{ locale }}</span>
    </div>
    <p class="text-slate-700">
      {{ description }}
    </p>
    <RouterLink
      to="/slides"
      class="px-3 py-2 text-sm font-medium self-start text-center text-slate-50 bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus: ring-offset-blue-600 transition-all"
    >
      Ver Slide
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { Calendar, MapPinned } from "lucide-vue-next";
defineProps({
  slideTitle: String,
  date: Date,
  locale: String,
  description: String,
});
</script>
