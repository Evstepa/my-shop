import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage, 
    name: 'main', 
    props: true,
  },
  {
    path: '/product/:id',
    component: ProductPage, 
    name: 'product', 
    props: true,
  },
  {
    path: '/cart',
    component: CartPage, 
    name: 'cart', 
    props: true,
  },
  {
    path: '*',
    component: NotFoundPage, 
    name: 'notFound', 
    props: true,
  },

];

const router = new VueRouter({
  routes,
});

export default router; 