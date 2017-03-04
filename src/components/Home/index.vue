<template>
  <div class="Home">
    <Slider></Slider>
    <Hot-product></Hot-product>
  </div>
</template>

<script>
import Slider from './Slider'
import HotProduct from './HotProduct'

export default {
  components: { Slider, HotProduct }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
