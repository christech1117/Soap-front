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
          <a class="navbar-brand" href="http://localhost:8080/">Brand</a>
        </div>


        <!--巡覽列-->
        <div class="collapse navbar-collapse" id="top-navbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://localhost:8080/news">最新消息</a></li>
            <li><a href="http://localhost:8080/productMenu/List">商品介紹</a></li>
            <li><a href="http://localhost:8080/about">關於我們</a></li>
            <li><a href="http://localhost:8080/contact">聯絡我們</a></li>
            <li><a href="http://localhost:8080/login">會員登入</a></li>
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
