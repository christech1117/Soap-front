<template>
<div>
  <!-- Page Title -->
  <div class="page-title-container">
      <div class="container">
          <div class="row">
              <div class="col-sm-12 wow fadeIn">
                  <i class="fa fa-shopping-cart"></i>
                  <h1>Home / Shopping</h1>
                  <!-- <p>Here is how you can contact us</p> -->
              </div>
          </div>
      </div>
  </div>
  <div class="container">
    <Add-form @add="add"></Add-form>
    <Cart :cart-list="cartList" :sum="sum"></Cart>
</div>
</div>
</template>

<script>
import AddForm from './AddForm'
import Cart from './Cart'
export default {
  components: { AddForm, Cart },
  data () {
    return {
      debug: true,
      message: 'Hello Vue!',
      cartList: [
        { product: '紅米', price: 1000, qty: 1 },
        { product: '小米手機', price: 1000, qty: 1 }
      ]
    }
  },
  computed: {
    sum: function () {
      var s = 0
      for (var i = 0; i < this.cartList.length; i++) {
        s += parseInt(this.cartList[i].price)
      }
      return s
    }
  },
  methods: {
    add: function (addForm) {
      this.cartList.push(Object.assign({}, addForm))
    }
  },
  beforeCreate: function () {
  },
  created: function () {
  }
}
</script>
<style scoped>

</style>
