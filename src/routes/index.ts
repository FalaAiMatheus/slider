import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import SlideLoader from "../components/SlideLoader.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/slides/:slug", name: "slides", component: SlideLoader },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
