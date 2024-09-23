<script setup lang="ts">
import { GithubIcon, Linkedin } from "lucide-vue-next";
</script>

<template>
  <footer class="w-full border-t border-b-slate-800/5 p-4 bg-gray-50">
    <section class="flex justify-between flex-wrap items-center gap-4">
      <span class="font-light text-gray-400">Developed by FalaAiMatheus</span>
      <div class="flex items-center gap-2 flex-wrap justify-start">
        <a
          class="text-sm font-medium flex items-center gap-2 p-2 text-gray-950 rounded-md border border-gray-300 hover:border-blue-600 transition-colors w-40"
          href="https://github.com/FalaAiMatheus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          <span>@FalaAiMatheus</span>
        </a>
        <a
          class="text-sm font-medium flex items-center gap-2 p-2 text-gray-950 rounded-md border border-gray-300 hover:border-blue-600 transition-colors w-40"
          href="https://www.linkedin.com/in/matheus-fran%C3%A7a13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          <span>Matheus França</span>
        </a>
      </div>
    </section>
  </footer>
</template>
