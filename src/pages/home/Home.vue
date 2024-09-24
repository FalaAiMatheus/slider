<script setup lang="ts">
import Card from "../../components/Card.vue";
import Header from "../../components/Header.vue";
</script>

<template>
  <Header />
  <section class="flex max-w-screen-xl flex-wrap justify-center gap-6 p-4">
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
</template>

<script lang="ts">
import { Ref, ref } from "vue";
import Loader from "../../components/Loader.vue";
import { CardProps } from "../../core/types";

const cards: Ref<CardProps[]> = ref([]);
const loading: Ref<boolean> = ref(false);

const fetchData = async () => {
  try {
    loading.value = true;
    const data = await fetch("https://slider-back.onrender.com/presentations", {
      method: "GET",
    }).then((data) => {
      return data.json();
    });

    cards.value = data || [];
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>
