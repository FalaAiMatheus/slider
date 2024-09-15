import { createRouter, createWebHistory } from "vue-router";
import Home from "../app/home/Home.vue";
import Slides from "../app/slides/Slides.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/slides", component: Slides },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
