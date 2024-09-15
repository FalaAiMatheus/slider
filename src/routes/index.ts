import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Slides from "../pages/slides/Slides.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/slides", component: Slides },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
