<template lang="pug">
  .room_container
    .cover(:style="bg_css")
      h3 {{room_data.name}}
    .info
      h5 {{room_data.eng}}
      h5 {{hotel_discount}}*{{room_data.discount}}={{final_discount_show}}折
      h4 TWD
        s {{room_data.price}}
        span.final_price {{final_price}}
</template>

<script>
export default {
  props: ['room_data', 'hotel_discount'],
  computed: {
    final_discount () {
      return this.room_data.discount * this.hotel_discount
    },
    final_price () {
      return parseInt(this.final_discount * this.room_data.price)
    },
    final_discount_show () {
      return parseInt(this.final_discount * 100)
    },
    bg_css () {
      return {
        'background-image': "url('" + this.room_data.cover + "')"
      }
    }
  }
}
</script>
<style scoped lang="sass">
.room_container
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3)
  .cover
    height: 150px
    background-color: #eee
    position: relative
    background-size: cover
    background-position: center center
    h3 
      position: absolute
      bottom: 10px
      font-size: 20px
      padding: 5px 15px
      background-color: #fff
  .info
    padding: 12px
    h5
      font-size: 12px
    .final_price
      float: right
      color: #DB4343
      &:before
        content: "$"
</style>
