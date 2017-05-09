<template>
  <div class="room_col">
    <h3> {{room_data.name}} </h3>
    <div class="info">
      <h5> {{room_data.eng}} </h5>
      <h5> {{room_data.price}}*{{room_data.discount}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['room_data', 'hotel_discount']
}
</script>
<style scoped>

</style>
