<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, onUnmounted } from "vue";
import SlideIntroduction from "./slider/SlideIntroduction.vue";

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
      <SlideIntroduction />
      <div
        class="embla__slide bg-slate-100 flex items-center flex-col justify-start space-y-10 text-center p-4"
      >
        <div
          class="flex flex-col items-start justify-center max-w-screen-2xl w-full space-y-3 mt-32 p-4"
        >
          <h2 class="text-3xl lg:text-2xl font-medium max-w-screen-xl">
            Quem é tu?
          </h2>
          <div class="flex flex-col space-y-10">
            <h3 class="text-6xl font-bold">Matheus França</h3>
            <ul class="flex flex-col gap-4 items-start font-medium text-2xl">
              <li>Desenvolvedor Front End</li>
              <li>Made in Itaitinga</li>
            </ul>
          </div>
        </div>
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
