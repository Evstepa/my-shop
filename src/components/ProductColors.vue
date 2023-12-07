<template>
      <!-- <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="startColor.color" v-model="startColor.color">
          <span class="colors__value" :style="{ background: startColor.color }">
          </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#8BE000" v-model="color">
          <span class="colors__value" style="background-color: #8BE000;">
          </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#222" v-model="color">
          <span class="colors__value" style="background-color: #222;">
          </span>
        </label>
      </li>
    </ul> -->

    <ul class="colors" :class="{'colors--black': !this.$attrs.title}">
      <li class="colors__item" v-for="color in colors" :key="color.id">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color" :value="color.color" v-model="startColor.color">
          <span class="colors__value" :style="{ background: color.color }">
          </span>
        </label>
      </li>
    </ul>
</template>

<script>
  import colors from "../data/colors";

  export default {
    name: 'ProductColors',
    computed: {
      colors() {
        return colors.filter(el => this.$attrs.colorsId.includes(el.id));
      },
      startColor() {
        return this.colors[0];
      },

    },
  }
</script>