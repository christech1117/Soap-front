<template lang="html">
  <div class="header">

    <!-- Top menu -->
    <nav class="navbar navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://localhost:8080/">Andia - a super cool design agency...</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="top-navbar-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="http://localhost:8080/"><i class="fa fa-home"></i><br>首頁</a>
            </li>
            <li>
              <a href="http://localhost:8080/news"><i class="fa fa-newspaper-o"></i><br>最新消息</a>
            </li>
            <li>
              <a href="http://localhost:8080/product"><i class="fa fa-tasks"></i><br>商品介紹</a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000">
                <i class="fa fa-paperclip"></i><br>購物須知 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="http://localhost:8080/">如何購買</a></li>
                <li><a href="http://localhost:8080/">付款方式</a></li>
                <li><a href="http://localhost:8080/">如何退貨</a></li>
              </ul>
            </li>
            <li>
              <a href="http://localhost:8080/about"><i class="fa fa-user"></i><br>關於我們</a>
            </li>
            <li>
              <a href="http://localhost:8080/contact"><i class="fa fa-envelope"></i><br>聯絡我們</a>
            </li>
            <li>
              <a href="http://localhost:8080/login"><i class="fa fa-sign-in"></i><br>會員登入</a>
            </li>
            <li>
              <a href="http://localhost:8080/cart"><i class="fa fa-shopping-cart"></i><br>購物車</a>
            </li>
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
