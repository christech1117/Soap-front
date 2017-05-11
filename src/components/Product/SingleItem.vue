<template lang="pug">
  .singleItem_container
    .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')")
    .container
      .row
        h1 測試購物車頁面
        .col-sm-12(v-for="pro in list")
          p {{pro}}
      button.btn(@click="get_product") 顯示購物車
</template>

<script>
export default {
  data () {
    return {
      list: this.get_product()
    }
  },
  methods: {
    get_product () {
      var getData = localStorage.getItem('productData')
      var toarray = JSON.parse(getData)
      return toarray
    }
  }
}
</script>

<style scoped lang="sass">
.form-input
  width: 50px

</style>
