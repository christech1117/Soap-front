<template>
  <div class="Home">
    <Hot-product></Hot-product>
  </div>
</template>

<script>
import HotProduct from './HotProduct'

export default {
  components: { HotProduct }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  padding-top: 120px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
