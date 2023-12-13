<template>
  <div>
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" :srcset="product.imageSmall" :alt="product.title">
    </router-link>

    <h3 class="catalog__title">
      <router-link :to="{name: 'product', params: {id: product.id}}">
        {{ product.title }}
      </router-link>
    </h3>

    <span class="catalog__price">
      {{ product.price | numberFormat }} ₽
    </span>

    <ul class="colors">
      <li class="colors__item" v-for="color in product.colors" :key="color.id" @click="colorClick(color.id)">
        <label class="colors__label" :title="color.title">
          <input class="colors__radio sr-only" type="radio" name="color" :value="color.id" v-model="currentColorId">
          <span class="colors__value" :style="{ background: color.code }">
          </span>
        </label>
      </li>
    </ul>
    
  </div>
</template>

<script>
  import numberFormat from "@/helpers/numberFormat";

  export default {
    name: 'ProductItem',
    data() {
      return {
        currentColorId: 0,
      };
    },
    props: {
      product: {
        type: Object,
        default: null,
      },
      colorId: {
        type: Number,
        default: 0,
      },
    },
    filters: {
      numberFormat,
    },
    computed: {
      colors() {
        return this.product.colors;
      },
    },
    watch: {
      colorId(value) {
        this.currentColorId = value;
      },
    },
    methods: {
      colorClick(value) {
        return this.colors.find(el => el.id === value);
      },
    },
  }
</script>
