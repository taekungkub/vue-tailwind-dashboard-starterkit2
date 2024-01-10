import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "./Views/Dashboard.vue";
import Cards from "./Views/Cards.vue";
import Login from "./Views/Login.vue";
import Charts from "./Views/Charts/index.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
