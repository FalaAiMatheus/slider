<script setup lang="ts">
import Card from "../../components/Card.vue";
import Header from "../../components/Header.vue";
</script>

<template>
  <Header />
  <section
    class="flex justify-center flex-wrap max-w-screen-xl gap-6 p-4 h-screen"
  >
    <Card
      v-for="presentation in cards"
      :id="presentation.id"
      :slideTitle="presentation.name"
      :date="
        new Date(presentation.date).toLocaleDateString('pt-BR', {
          timeZone: 'UTC',
        })
      "
      :locale="presentation.locale"
      :description="presentation.description"
      :slug="presentation.slug ?? ''"
    />
    <Loader :loading="loading" />
  </section>
  <Footer />
</template>

<script lang="ts">
import { Ref, ref } from "vue";
import Footer from "../../components/Footer.vue";
import Loader from "../../components/Loader.vue";
import { CardProps } from "../../core/types";

const cards: Ref<CardProps[]> = ref([]);
const loading: Ref<boolean> = ref(false);

const fetchData = async () => {
  try {
    loading.value = true;
    const response = await fetch(
      "https://slider-back.onrender.com/presentations",
      {
        method: "GET",
      }
    );

    const data = await response.json();

    cards.value = data || [];
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>
