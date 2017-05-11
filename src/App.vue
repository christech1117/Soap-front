<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
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
import navHeader from './components/navHeader.vue'
import navFooter from './components/navFooter.vue'

export default {
  name: 'app',
  components: {
    navHeader,
    navFooter
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
