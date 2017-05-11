<template lang="pug">
  .productList
    .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')")
    .container
      .section-header
        h1
          i.fa.fa-th-list(aria-hidden='true')
          | 商品列表
      ol.breadcrumb
        li
          router-link(:to="{ path: '/' }")
            i.fa.fa-home(aria-hidden='true')
        li.active 商品列表
      .row
        .col-sm-3
          h3 產品展示
          ul
            li
              router-link(:to="{ path: '/productList' }") 特價商品
            li
              router-link(:to="{ path: '/productList' }") 熱銷商品
            li
              router-link(:to="{ path: '/productList' }") 各種膚質
            li
              router-link(:to="{ path: '/productList' }") 中油性膚質
            li
              router-link(:to="{ path: '/productList' }") 混合性膚質
            li
              router-link(:to="{ path: '/productList' }") 乾性膚質
            li
              router-link(:to="{ path: '/productList' }") 嬰兒膚質
            li
              router-link(:to="{ path: '/productList' }") 敏感性膚質
        .col-sm-9
          .col-sm-4.col_product(v-for="product in products")
            product-list(:product_data="product", :product_discount="discount")
</template>
<script>
import productList from './productList'
import singleItem from './singleItem'
// import sectionHeader from '../sectionHeader'

export default {
  components: { productList, singleItem },
  data () {
    return {
      products: [
        {
          id: 1,
          name: '生活調理乳',
          price: 950,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg',
          amount: 10
        },
        {
          id: 2,
          name: '生活保濕乳',
          price: 900,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/138/20161115173455546_bp.jpg',
          amount: 10
        },
        {
          id: 3,
          name: '潔',
          price: 140,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/182/20170309113517722_bp.jpg'
        },
        {
          id: 4,
          name: '源',
          price: 140,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/184/20170309114104730_bp.jpg'
        },
        {
          id: 5,
          name: '綠茶皂',
          price: 180,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/187/20170309132421742_bp.jpg'
        },
        {
          id: 6,
          name: '茶樹皂',
          price: 180,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_sp.jpg'
        },
        {
          id: 7,
          name: '艾草香茅皂',
          price: 180,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/175/20170309110151694_sp.jpg'
        },
        {
          id: 8,
          name: '清新柑橘皂',
          price: 180,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/176/20170309110826698_sp.jpg'
        },
        {
          id: 9,
          name: '葡萄酒粕皂',
          price: 200,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/177/20170309111803702_sp.jpg'
        },
        {
          id: 10,
          name: '煥采果醋皂',
          price: 220,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/178/20170309112127706_sp.jpg'
        },
        {
          id: 11,
          name: '五葉松皂',
          price: 220,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/179/20170309112712710_sp.jpg'
        },
        {
          id: 12,
          name: '茉草皂',
          price: 220,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/180/20170309112909714_sp.jpg'
        },
        {
          id: 13,
          name: '高山皂',
          price: 270,
          cover: 'https://www.teasoap.com.tw/downloads/product/10000/1000/181/20170309113233718_sp.jpg'
        }
      ],
      discount: 0.5
    }
  }
}
</script>
<style scoped lang="sass">
h1
  font-size: 30px
.col_product
  padding: 20px
</style>
