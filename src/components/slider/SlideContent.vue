<script setup lang="ts">
type ImageProps = {
  class?: string;
  srcImage?: string;
  alt?: string;
};

interface SlideContentProps {
  contentTitle: string;
  contentDescription?: string;
  list?: Array<{ topic: string; description?: string }>;
  image?: ImageProps;
}

defineProps<SlideContentProps>();
</script>

<template>
  <div
    class="embla__slide flex flex-col items-center justify-start space-y-10 bg-white p-4 text-center dark:bg-zinc-950 dark:text-white"
  >
    <div
      class="mt-32 flex w-full max-w-screen-2xl flex-col items-start justify-center space-y-3 p-4 text-start"
    >
      <h2 class="max-w-screen-xl text-2xl font-bold lg:text-6xl">
        {{ contentTitle }}
      </h2>
      <p class="mb-3 text-4xl tracking-wide">
        {{ contentDescription }}
      </p>
      <ul
        v-if="list"
        class="flex flex-col space-y-4 text-gray-950 dark:text-white"
      >
        <li v-for="list in list" class="it flex items-start gap-2">
          <span class="text-3xl font-bold">{{ list.topic }}</span>
          <p class="text-3xl">{{ list.description }}</p>
        </li>
      </ul>
      <img
        :class="image.class"
        v-if="image"
        :src="image.srcImage"
        :alt="image.alt"
      />
    </div>
  </div>
</template>
