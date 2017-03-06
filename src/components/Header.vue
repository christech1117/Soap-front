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
          <router-link class="navbar-brand" :to="{ name: 'Home' }">Andia - a super cool design agency...</router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="top-navbar-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown active">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000">
                <i class="fa fa-home"></i><br>Home <span class="caret"></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-left" role="menu">
                <li class="active"><a href="index.html">Home</a></li>
                <li><a href="index-2.html">Home 2</a></li>
              </ul>
            </li>
            <li>
              <a href="portfolio.html"><i class="fa fa-camera"></i><br>會員登入</a>
            </li>
            <li>
              <a href="services.html"><i class="fa fa-tasks"></i><br>最新消息</a>
            </li>
            <li>
              <a href="about.html"><i class="fa fa-user"></i><br>關於我們</a>
            </li>
            <li>
              <router-link :to="{ name: 'Contact' }"><i class="fa fa-envelope"></i><br>聯絡我們</router-link>
              <!-- <a href="contact.html"><i class="fa fa-envelope"></i><br>聯絡我們</a> -->
            </li>
            <li>
              <a href="Product"><i class="fa fa-envelope"></i><br>商品介紹</a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000">
                <i class="fa fa-paperclip"></i><br>購物須知 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="pricing-tables.html">如何購買</a></li>
              </ul>
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

<style lang="css">

</style>
