<template>
  <div class="container">
    <div class="col-sm-3" v-for="product in products">
      <ProductList v-bind:product_data="product"></ProductList>
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList'

export default {
  components: { ProductList },
  data () {
    return {
      products: [
        {
          name: '生活調理乳',
          price: 950,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg'
        },
        {
          name: '生活保濕乳',
          price: 900,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/138/20161115173455546_bp.jpg'
        },
        {
          name: '潔',
          price: 140,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/182/20170309113517722_bp.jpg'
        },
        {
          name: '源',
          price: 140,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/184/20170309114104730_bp.jpg'
        },
        {
          name: '綠茶皂',
          price: 180,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/187/20170309132421742_bp.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 70px
}
</style>
