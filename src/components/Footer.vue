<script setup lang="ts">
import { GithubIcon, Linkedin } from "lucide-vue-next";
</script>

<template>
  <footer class="w-full border-t border-b-slate-800/5 bg-gray-50 p-4">
    <section class="flex flex-wrap items-center justify-between gap-4">
      <span class="font-light text-gray-400">Developed by FalaAiMatheus</span>
      <div class="flex flex-wrap items-center justify-start gap-2">
        <a
          class="flex w-40 items-center gap-2 rounded-md border border-gray-300 p-2 text-sm font-medium text-gray-950 transition-colors hover:border-blue-600"
          href="https://github.com/FalaAiMatheus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          <span>@FalaAiMatheus</span>
        </a>
        <a
          class="flex w-40 items-center gap-2 rounded-md border border-gray-300 p-2 text-sm font-medium text-gray-950 transition-colors hover:border-blue-600"
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
