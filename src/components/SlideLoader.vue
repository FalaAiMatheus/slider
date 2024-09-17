<template>
  <div>
    <component :is="slideComponent" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const slideComponent = ref(null);

    onMounted(async () => {
      const slug = route.params.slug;
      try {
        slideComponent.value = (await import(`../slides/${slug}.vue`)).default;
      } catch (error) {
        alert(`Slide com slug ${slug} não encontrado`);
        router.push("/");
      }
    });

    return { slideComponent };
  },
};
</script>
