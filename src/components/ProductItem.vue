<template>
  <div>
    <a class="catalog__pic" href="#">
      <img :src="product.image" :srcset="product.imageSmall" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price }} ₽
    </span>

    <ProductColors :colorsId="product.colorsId" />
    
  </div>
</template>

<script>
  import ProductColors from './ProductColors';

  export default {
    components: { ProductColors },
    name: 'ProductItem',
    props: {
      product: {
        type: Object,
        default: null,
      }
    },
  }
</script>
