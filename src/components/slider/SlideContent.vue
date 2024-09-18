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
    class="embla__slide bg-slate-100 flex items-center flex-col justify-start space-y-10 text-center p-4"
  >
    <div
      class="flex flex-col items-start text-start justify-center max-w-screen-2xl w-full space-y-3 mt-32 p-4"
    >
      <h2 class="text-2xl lg:text-6xl font-bold max-w-screen-xl">
        {{ contentTitle }}
      </h2>
      <p class="mb-3 text-4xl tracking-wide">
        {{ contentDescription }}
      </p>
      <ul v-if="list" class="flex flex-col space-y-4 text-gray-950">
        <li v-for="list in list" class="flex items-start gap-2 it">
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
