<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!--<Footer></Footer>-->
    <div class="fab-container">
      <a href="http://localhost:8080/cart"> <!--target="_blank"-->
        <div class="profile fab" tooltip="View My Cart"></div>
      </a>
      <br>
      <div class="top fab" tooltip="Back To Top"></div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
