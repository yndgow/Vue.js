// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/user/Login.vue"),
  },
  {
    path: "/user/login",
    component: () => import("@/components/user/Login.vue"),
  },
  {
    path: "/user/terms",
    component: () => import("@/components/user/Terms.vue"),
  },
  {
    path: "/user/register",
    component: () => import("@/components/user/Register.vue"),
  },
  {
    path: "/list",
    component: () => import("@/components/List.vue"),
  },
  {
    path: "/view",
    component: () => import("@/components/View.vue"),
  },
  {
    path: "/write",
    component: () => import("@/components/Write.vue"),
  },
  {
    path: "/modify",
    component: () => import("@/components/Modify.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
