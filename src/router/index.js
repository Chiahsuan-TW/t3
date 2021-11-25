import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: About,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    redirect: "/about/address",
    children: [
      {
        path: "address",
        name: "Address",
        component: () => import('./../views/Address'),
      },
      {
        path: "shipping",
        name: "Shipping",
        component: () => import('./../views/Shipping'),
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () => import('./../views/Checkout'),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
