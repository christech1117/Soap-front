<template>
  <div class="productList" v-bind:style="bg_css">
    <div class="cover">
      <h3>{{ product_data.name }}</h3>
      <h3>{{ product_data.price }}</h3>
    </div>
    <div class="info">
      <p>{{ bg_css }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['product_data'],
  computed: {
    bg_css () {
      return {
        'background-image': "url('" + this.product_data.cover + "')"
      }
    }
  }
}
</script>

<style scoped>
.cover {
  height: 200px;
  background: no-repeat productList;
  background-image: cover;
}
</style>
