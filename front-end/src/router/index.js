import { createRouter, createWebHistory } from 'vue-router'
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from "../views/ProductsView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView
    }
  ]
});

export default router;
