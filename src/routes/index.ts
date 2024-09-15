import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/home.vue";
import Slides from "../pages/slides/slides.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/slides", component: Slides },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
