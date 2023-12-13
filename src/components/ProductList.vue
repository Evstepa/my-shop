<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="product in products" :key="product.id">
      <ProductItem 
        :product="product" 
        :color-id.sync="colorId" 
        @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)" 
      />      
    </li>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

  export default {
    data() {
      return {
        colorId: 0,
      } 
    },
    props: {
      products: {
        type: Array,
        default: null,
      }
    },
    components: { ProductItem },
}
</script>