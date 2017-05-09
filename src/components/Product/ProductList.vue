<template>
  <div class="productList">
    <div class="banner-img" style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')"></div>
    <div class="container">
      <div class="section-header">
        <h1><i class="fa fa-th-list" aria-hidden="true"></i>商品列表</h1>
      </div>
      <ol class="breadcrumb">
        <li><router-link :to="{ path: '/' }"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
        <li class="active">商品列表</li>
      </ol>
      <div class="row">
        <div class="col-md-3">
          <ul class="">
            <li><h3>產品展示</h3></li>
            <li><router-link :to="{ path: '/productList' }">特價商品</router-link></li>
            <li><router-link :to="{ path: '/productList' }">熱銷商品</router-link></li>
            <li><router-link :to="{ path: '/productList' }">各種膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">中油性膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">混合性膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">乾性膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">嬰兒膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">敏感性膚質</router-link></li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/138/20161115173455546_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/139/20161115173412550_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/97/20151005105111382_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/98/20151005105302386_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/173/20170309103428686_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/175/20170309110151694_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/176/20170309110826698_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/177/20170309111803702_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/178/20170309112127706_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/179/20170309112712710_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/180/20170309112909714_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/182/20170309113517722_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/188/20170309133850746_bp.jpg" alt="">
              </router-link>
            </div>
            <div class="col-xs-4 col-sm-3 col-md-3">
              <router-link class="thumbnail" :to="{ path: '/productList/singleItem' }">
                <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/185/20170309114851734_bp.jpg" alt="">
              </router-link>
            </div>
          </div>
          
         

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
