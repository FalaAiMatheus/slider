<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, onUnmounted } from "vue";
import NodeLogo from "../assets/NodeLogo.vue";

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  align: "center",
  direction: "ltr",
});

const handleKeyUp = (e) => {
  if (e.key === "ArrowRight") {
    emblaApi.value?.scrollNext();
  }
  if (e.key === "ArrowLeft") {
    emblaApi.value?.scrollPrev();
  }
};

onMounted(() => {
  window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyUp);
});
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div
        class="embla__slide bg-slate-100 flex items-center flex-col justify-center space-y-10 text-center p-4"
      >
        <h1 class="text-5xl lg:text-7xl font-bold max-w-screen-xl">
          Desenrolando Frameworks Node: Qual escolher?
        </h1>
        <p class="text-2xl lg:text-3xl font-medium">
          Express, Fastify, Nest e Adonis. Afinal, qual framework escolher para
          sua aplicação Node ?
        </p>
        <NodeLogo />
      </div>
      <div
        class="embla__slide bg-slate-100 flex items-center flex-col justify-center space-y-10 text-center p-4"
      >
        <h1 class="text-5xl lg:text-7xl font-bold max-w-screen-xl">
          Desenrolando Frameworks Node: Qual escolher?
        </h1>
        <p class="text-2xl lg:text-3xl font-medium">
          Express, Fastify, Nest e Adonis. Afinal, qual framework escolher para
          sua aplicação Node ?
        </p>
      </div>
      <div
        class="embla__slide bg-slate-100 flex items-center flex-col justify-center space-y-10 text-center p-4"
      >
        Slide 3
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
  max-width: 100%;
}
.embla__container {
  display: flex;
  width: 100%;
}
.embla__slide {
  transform: translate3d(0, 0, 0);
  flex: 0 0 100%;
  width: 100%;
  height: 100vh;
}
</style>
