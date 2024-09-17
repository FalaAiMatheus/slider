<script setup lang="ts">
import { InstagramIcon } from "lucide-vue-next";
import NodeLogo from "../../assets/NodeLogo.vue";

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
      <NodeLogo />
      <hr class="h-px border-0 bg-slate-300 w-full" />
      <h1 class="text-5xl lg:text-7xl font-bold max-w-screen-xl">
        Desenrolando Frameworks Node: Qual escolher?
      </h1>
    </div>
    <a
      class="flex items-center gap-1 text-lg"
      href="https://www.instagram.com/javascriptceara/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon class="stroke-[#16a34a]" />
      <span class="underline font-medium hover:text-blue-600 transition-colors">javascriptceara</span>
    </a>
  </div>
</template>
