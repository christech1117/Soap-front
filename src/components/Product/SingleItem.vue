<template lang="pug">
  .singleItem_container
    .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')")
    .container
        h1 測試購物車頁面
        p {{list}}
        button.btn(@click="get_product") 顯示購物車
</template>

<script>
export default {
  props: ['storage_data'],
  data () {
    return {
      list: this.get_product()
    }
  },
  methods: {
    get_product () {
      var getData = localStorage.getItem('productData')
      return getData
    }
  }
}
</script>

<style scoped lang="sass">
.form-input
  width: 50px

</style>
