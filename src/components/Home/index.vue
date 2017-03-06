<template>
  <div class="Home">
    <Slider></Slider>
    <Hot-product></Hot-product>
    <br>
    <News></News>
  </div>
</template>

<script>
import Slider from './Slider'
import HotProduct from './HotProduct'
import News from './News'

export default {
  components: { Slider, HotProduct, News }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
