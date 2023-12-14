import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import ProductPage from "@/pages/ProductPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CartPage from "@/pages/CartPage";
import OrderPage from "@/pages/OrderPage";
import OrderInfoPage from "@/pages/OrderInfoPage";

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
    path: '/order',
    component: OrderPage, 
    name: 'order', 
    props: true,
  },
  {
    path: '/order/:id',
    component: OrderInfoPage, 
    name: 'orderInfo', 
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