<script setup>
import Card from "../../components/Card/card.vue";
import Header from "../../components/header.vue";
</script>

<template>
  <Header />
  <section class="flex justify-center flex-wrap max-w-screen-xl gap-6 p-4">
    <Card
      slideTitle="Desenrolando Frameworks Node: Qual escolher?"
      :date="actualDate"
      locale="Digital College Aldeota"
      description="Express, Fastify, Nest e Adonis. Afinal, qual framework escolher para sua aplicação Node ?"
      v-for="(_, index) in card"
      :key="index"
    />
  </section>
</template>

<script>
import { ref } from "vue";
const card = ref(Array.from({ length: 45 }));
const actualDate = ref(
  new Date().toLocaleDateString("pt-BR", { timeZone: "UTC" })
);
</script>
