<template>
  <div class='container'>
    <div class="banner-img" style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')"></div>
      <div class="row">
        <div class="col-sm-3">
          <h3>產品展示</h3>
        </div>
        <div class="col-sm-9">
          <div class="col-sm-4" v-for="room in rooms">
            <room :room_data="room"></room>
          </div>
        </div>
      </div>
    
    <!--<div class='col-sm-3' v-for='product in products'>
      <room v-bind:product_data='product'></room>
    </div>-->
  </div>
</template>

<script>
import room from './room'

export default {
  components: { room },
  data () {
    return {
      rooms: [
        {
          'name': '經濟雙人房',
          'eng': 'Economy Double Room',
          'price': 7000,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg',
          'discount': 0.9,
          'equipment': {
            'wifi': false,
            'bathtub': true,
            'breakfast': true
          }
        },
        {
          'name': '海景三人房',
          'eng': 'Sea view triple Room',
          'price': 7800,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room%20(2).jpg',
          'discount': 0.8,
          'equipment': {
            'wifi': true,
            'bathtub': true,
            'breakfast': false
          }
        },
        {
          'name': '典雅景觀房',
          'eng': 'Elegant landscape Room',
          'price': 5400,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room%20(3).jpg',
          'discount': 0.85,
          'equipment': {
            'wifi': false,
            'bathtub': true,
            'breakfast': true
          }
        },
        {
          'name': '尊享豪華房',
          'eng': 'Exclusive Deluxe Room',
          'price': 9800,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room%20(4).jpg',
          'discount': 0.8,
          'equipment': {
            'wifi': true,
            'bathtub': false,
            'breakfast': true
          }
        },
        {
          'name': '商務雙人房',
          'eng': 'Business Double Room',
          'price': 5600,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room (5).jpg',
          'discount': 0.9,
          'equipment': {
            'wifi': true,
            'bathtub': false,
            'breakfast': false
          }
        },
        {
          'name': '溫泉雙人房',
          'eng': 'Hot spring double Room',
          'price': 8400,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg',
          'discount': 0.6,
          'equipment': {
            'wifi': true,
            'bathtub': true,
            'breakfast': true
          }
        },
        {
          'name': '總統套房',
          'eng': 'Presidential Suite',
          'price': 23000,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg',
          'discount': 0.75,
          'equipment': {
            'wifi': true,
            'bathtub': true,
            'breakfast': true
          }
        },
        {
          'name': '奢華四人房',
          'eng': 'Luxury four Room',
          'price': 8500,
          'amount': 0,
          'cover': 'http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg',
          'discount': 0.7,
          'equipment': {
            'wifi': true,
            'bathtub': true,
            'breakfast': false
          }
        }
      ],
      discount: 0.9
    }
  },
  computed: {
    final_price () {
      return this.room_data.price * this.room_data.discount
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 70px
}
</style>
