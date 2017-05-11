<template lang="pug">
  .singleItem_container
    h3 {{ product_data.name }}
</template>

<script>
export default {
  props: ['product_data'],
  data () {
    return {
      message: '100'
    }
  }
}
</script>

<style scoped lang="sass">
.form-input
  width: 50px

</style>
