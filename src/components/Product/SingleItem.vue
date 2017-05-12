<template lang="pug">
  .singleItem_container
    .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')")
    .container
      h1 測試購物車頁面
      table.table
        thead
          tr
            th #
            th 商品圖片
            th 商品名稱
            th 數量
            th 單價
            th 小計
          tr(v-for="(shopItem,index) in shopItems")
            td {{index + 1}}
            td {{shopItem.cover}}
            td {{shopItem.name}}
            td
              input.form-control(v-model="num")
            td {{shopItem.price}}
            
      button.btn(@click="get_product") 顯示購物車
</template>

<script>
export default {
  data () {
    return {
      shopItems: this.get_product(),
      num: '1'
    }
  },
  watch: {
    filter (num) {
      this.get_product()
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
