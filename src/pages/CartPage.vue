<template>
    <main class="content container" v-if="$store.state.cartLoading">
    <div style="text-align: center;">
      <p>Загрузка корзины...</p>
    </div>   
  </main>
  <main class="content container" v-else-if="!products">
    <div style="text-align: center;">
      <p>Не удалось загрузить данные корзины.</p>
    </div>
  </main>
  <main class="content container" v-else>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'cart'}">
            Корзина 
          </router-link>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        Количество наименований товаров: {{ products.length }}
      </span>
      <span class="content__info">
        <br>Всего товаров: {{ totalCount }}
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem v-for="item in products" :key="item.productId" :item="item"/>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ totalPrice | numberFormat }} ₽</span>
          </p>

          <router-link 
            tag="button" :to="{name: 'order'}" 
            class="cart__button button button--primery" type="submit"
            v-show="totalCount !== 0">
              Оформить заказ
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
  import numberFormat from '@/helpers/numberFormat';
  import { mapGetters } from 'vuex';
  import CartItem from '@/components/CartItem.vue';

  export default {
    components: { CartItem },
    filters: {
      numberFormat,
    },
    computed: {
      ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalCount: 'cartTotalCount',}),
    },
  }
</script>