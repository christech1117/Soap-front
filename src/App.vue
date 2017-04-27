<template>
  <div id="app">

    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
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
.fab-container {
  margin: 1em;
  position: fixed;
  bottom: -72px;
  right: 0;
}

.fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);
  position: relative;
  cursor: pointer;
  transition: .3s;
}
.fab:before {
  content: attr(tooltip);
  background: #595959;
  padding: 4px 8px;
  border-radius: 2px;
  position: absolute;
  top: 16px;
  right: 100%;
  color: white;
  font: 400 15px Roboto;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  transition: .3s;
}
.fab:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.12);
}
.fab:hover:before {
  right: 110%;
  opacity: 1;
  visibility: visible;
}

.top .profile {
  margin-bottom: 1em;
}
.profile:after {
  background: #9d426b url("/static/images/cart.svg") center no-repeat;
  position: absolute;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: .3s;
}
.profile:hover:after {
  background-image: url("/static/images/cd-top-arrow.svg");
  transform: rotate(90deg);
}

.top:after {
  background: #9d426b url("/static/images/rocket.svg") center no-repeat;
  position: absolute;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: .3s;
  /*background: #9d426b url("http://goo.gl/BDOwrt") center no-repeat;*/
}
.top:hover:after {
  background-image: url("/static/images/startup.svg");
  transform: rotate(360deg);
}

.page-title-container {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
