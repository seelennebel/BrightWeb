import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductsView from "@/views/ProductsView.vue"
import AdminView from '@/views/AdminView.vue';
import ProductInfoView from '@/views/ProductInfoView.vue';
import SignupView from '@/views/SignupView.vue';
import LoginView from '@/views/LoginView.vue';
import CartView from '@/views/CartView.vue';

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
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView
    },
    {
      path: "/product/:productID",
      name: "product",
      component: ProductInfoView
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView
    }
  ]
});

export default router;
