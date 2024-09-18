<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, onUnmounted } from "vue";
import SlideContent from "../components/slider/SlideContent.vue";
import SliderIntroduction from "../components/slider/SlideIntroduction.vue";
import SlideWhoAreYou from "../components/slider/SlideWhoAreYou.vue";
import SlideSocialMedias from "../components/slider/SlideSocialMedias.vue";

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
      <SliderIntroduction title="Desenrolando Supabase" />
      <SlideWhoAreYou />
      <SlideContent
        content-title="Introdução"
        content-description="Supabase é uma plataforma de backend que oferece uma alternativa open-source ao Firebase. Ele é construído sobre PostgreSQL e fornece autenticação, armazenamento, e funções de banco de dados em tempo real."
      />
      <SlideContent content-title="O que é o Supabase?" :list="list" />
      <SlideContent
        content-title="Supabase x Firebase"
        content-description="Firebase e Supabase diferem em várias maneiras. A principal é que o Firebase é um repositório de documentos, enquanto o Supabase é baseado no PostgreSQL - um sistema de gerenciamento de banco de dados relacional baseado em SQL.
Há algumas outras diferenças importantes."
      />
      <SlideContent
        content-title="Supabase x Firebase"
        content-description="O Supabase é de código aberto. Junto com a plataforma de nuvem hospedada, você também pode pegar a pilha do Supabase e hospedá-la dentro da sua própria nuvem ou executá-la localmente na sua máquina. Não há bloqueio de fornecedor."
      />
      <SlideContent
        content-title="Supabase x Firebase"
        content-description="O Firebase cobra por leituras, gravações e exclusões , o que pode levar a alguma imprevisibilidade, especialmente nos estágios iniciais de um projeto, quando seu aplicativo está em desenvolvimento pesado. O Supabase cobra com base na quantidade de dados armazenados , com margem de manobra para solicitações de API ilimitadas e um número ilimitado de usuários Auth."
      />
      <SlideContent
        content-title="Supabase x Firebase"
        content-description="Criaram um repositório de benchmarking onde é possível comparar o desempenho de ambos os serviços em diferentes cenários. Os resultados mais recentes mostram que o Supabase supera o Firebase em até 4 vezes no número de leituras por segundo e 3,1 vezes em gravações por segundo."
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
