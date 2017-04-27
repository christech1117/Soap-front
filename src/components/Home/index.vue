<template>
  <div class="Home">
    <Slider></Slider>
    <br>
    <div class="section-header wow fadeIn">
        <h3>熱門活動</h3>
    </div>
    <News></News>
    <br>
    <div class="section-header wow fadeIn">
        <h3>最新消息</h3>
    </div>
    <News></News>
    <Hot-product></Hot-product>
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
