<template>
  <div class="header">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">

        <!--漢堡-->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--品牌logo-->
          <router-link class="navbar-brand" :to="{ path: '/' }">Brand</router-link>

        </div>


        <!--巡覽列-->
        <div class="collapse navbar-collapse" id="top-navbar">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link :to="{ path: 'News' }">最新消息</router-link></li>
            <li><router-link :to="{ path: 'ProductList' }">商品介紹</router-link></li>
            <li><router-link :to="{ path: 'About' }">關於我們</router-link></li>
            <li><router-link :to="{ path: 'Contact' }">聯絡我們</router-link></li>
            <li><router-link :to="{ path: 'Login' }">會員登入</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
