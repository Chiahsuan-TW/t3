import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/",
    name: "Home",
    // redirect: "/sign-in",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
