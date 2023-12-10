<template>
  <div>
    <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">
      <img :src="product.image" :srcset="product.imageSmall" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#" @click.prevent="gotoPage('product', {id: product.id})">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price | numberFormat }} ₽
    </span>

    <ul class="colors">
      <li class="colors__item" v-for="color in colors" :key="color.id" @click="colorClick(color.id)">
        <label class="colors__label" :title="color.name">
          <input class="colors__radio sr-only" type="radio" name="color" :value="color.id" v-model="currentColorId">
          <span class="colors__value" :style="{ background: color.color }">
          </span>
        </label>
      </li>
    </ul>
    
  </div>
</template>

<script>
  import colors from "@/data/colors";
  import gotoPage from "@/helpers/gotoPage";
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
        return colors.filter(el => this.product.colorsId.includes(el.id));
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
      gotoPage,
    },
  }
</script>
