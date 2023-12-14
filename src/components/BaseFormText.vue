<template>
  <BaseFormField :title="title" :error="error"> 
    <input class="form__input" v-model="dataValue" :name="name" :type="type" :placeholder="placeholder">
  </BaseFormField>
</template>

<script>  
  import formFieldMixin from '@/mixins/formFieldMixin';

  export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },
      name: {
        type: String,
      }
    },
    mixins: [formFieldMixin],
  }
</script>