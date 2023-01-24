import { createRouter, createWebHistory } from "vue-router";
import CarlosView from "../views/CarlosView.vue";
import TheMain from "../components/TheMain.vue";

const routes = [
    { path: "/", component: TheMain},
    { path: "/carlos", component: CarlosView },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;