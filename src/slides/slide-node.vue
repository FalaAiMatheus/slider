<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, onUnmounted } from "vue";
import SlideContent from "../components/slider/SlideContent.vue";
import SliderIntroduction from "../components/slider/SlideIntroduction.vue";
import SlideSocialMedias from "../components/slider/SlideSocialMedias.vue";
import SlideWhoAreYou from "../components/slider/SlideWhoAreYou.vue";

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

const list = [
  {
    topic: "Open-Source:",
    description:
      "Toda a plataforma é open-source, permitindo customização e transparência.",
  },
  {
    topic: "PostgreSQL:",
    description:
      "Supabase é baseado em PostgreSQL, o que significa que você pode usar todas as funcionalidades poderosas deste banco de dados relacional.",
  },
  {
    topic: "Autenticação:",
    description: "Gestão de usuários e autenticação de maneira fácil.",
  },
  {
    topic: "API em Tempo Real:",
    description: "As mudanças no banco de dados são refletidas em tempo real.",
  },
  {
    topic: "Armazenamento:",
    description: "Armazene arquivos com facilidade.",
  },
];
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <SliderIntroduction
        title="Desenrolando Frameworks Node: Qual escolher?"
      />
      <SlideWhoAreYou />
      <SlideContent
        content-title="Introdução"
        content-description="Sabemos que hoje o ecosistema Node vem aumentando cada vez mais, com isso surge novos frameworks para trabalharmos, atualmente os principais e os mais famosos do ecosistema são o: Express e o Nest. Cada um com sua particularidade, aqui irá mostrar não só eles, mas alguns outros."
      />
      <SlideContent
        content-title="Primeiramente"
        content-description="Como diria nosso caro amigo e companheiro, Mr Alessandro Feitoza do PHP com Rapadura: 'Não existe bala de prata', hoje tudo pode depender da demanda, temos alguns exemplos que podemos citar."
        :image="{
          class: 'w-[800px] h-[400px] rounded-md',
          srcImage: 'https://i.ytimg.com/vi/qx021xyG4uc/maxresdefault.jpg',
        }"
      />
      <SlideContent
        :image="{
          srcImage: 'https://cdn.intuji.com/2022/09/Nestjs_hero1.png',
        }"
      />
      <SlideSocialMedias />
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
