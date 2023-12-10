<template>
    <div class="content__catalog">
      <ProductFilter 
        :price-from.sync="filterPriceFrom" 
        :price-to.sync="filterPriceTo" 
        :category-id.sync="filterCategoryId" 
        :color-id.sync="filterColorId"
        :colors-list="colorsList">
      </ProductFilter>

      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>

    </div>
</template>

<script>
import products from '@/data/products';
import ProductList from '@/components/ProductList';
import BasePagination from '@/components/BasePagination';
import ProductFilter from "@/components/ProductFilter";

export default {
  name: 'MainPage',
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,
      page: 1,
      productsPerPage: 6,
    }
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;
      if(this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom);
      };
      if(this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < this.filterPriceTo);
      };
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === this.filterCategoryId);
      };
      if (this.filterColorId) {
        filteredProducts = filteredProducts.filter(product => product.colorsId.includes(this.filterColorId));
      };

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
    colorsList() {
      let list = [];
      products.forEach(product => {
        list = list.concat(product.colorsId);
      });
      return list.filter((item, key) => key === list.indexOf(item));
    },
  },

}
</script>