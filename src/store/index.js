import Vue from "vue";
import Vuex from "vuex";
import products from "@/data/products";

Vue.use(Vuex);

let cart = window.localStorage.getItem('cartProducts');

export default new Vuex.Store({
  state: {
    // cartProducts: [
    //   {
    //     productId: 1,
    //     amount: 1,
    //   }
    // ],
    cartProducts: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    addProductToCart(state, {productId, amount}) {
      const item = state.cartProducts.find(item => item.productId === productId);
      if (item) {
        item.amount += amount;
      } else {
        state.cartProducts.push({
          productId,
          amount,
        });
      };
      this.commit('saveCart');
    },
    updateCartProductAmount(state, {productId, amount}) {
      const item = state.cartProducts.find(item => item.productId === productId);
      if (item) {
        item.amount = amount;
      };
      this.commit('saveCart');
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter(item => item.productId !== productId);
      this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    }
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map(item => {
        return {
          ...item,
          product: products.find(p => p.id === item.productId),
        }
      })
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
    cartTotalCount(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => item.amount + acc, 0);
    },
  },
});