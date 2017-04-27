<template>
<div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th nowrap>功能</th>
        <th nowrap>#</th>
        <th nowrap>商品名稱</th>
        <th nowrap>商品價格</th>
        <th nowrap>購買數量</th>
        <th nowrap>小計</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cartList">
        <td>
          <button class="btn btn-danger" @click.prevent="del(cart)">刪除</button>
          <button class="btn btn-success" @click.prevent="edit(cart)" v-show="!cart.editAble">編輯</button>
          <button class="btn btn-success" @click.prevent="save(cart)" v-show="cart.editAble">儲存</button>
        </td>
        <td>{{ index + 1 }}</td>
        <td>
          <span v-show="!cart.editAble">{{ cart.product }}</span>
          <input type="text" v-model="cart.product" v-show="cart.editAble" />
        </td>
        <td>
          <span v-show="!cart.editAble">{{ cart.price }}</span>
          <input type="number" v-model="cart.price" v-show="cart.editAble" style="width: 100px" />
        </td>
        <td>
          <span v-show="!cart.editAble">{{ cart.qty }}</span>
          <input type="number" v-model="cart.qty" v-show="cart.editAble" style="width: 50px" />
        </td>
        <td>{{ cart.price * cart.qty }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" style="text-align: right">合計：</td>
        <td>${{sum}}</td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<script>
export default {
  props: ['cartList', 'sum'],
  methods: {
    del: function (cart) {
      console.log(cart)
      var index = this.cartList.indexOf(cart)
      this.cartList.splice(index, 1)
    },
    edit: function (cart) {
      this.$set(cart, 'editAble', true)
    },
    save: function (cart) {
      this.$set(cart, 'editAble', false)
    }
  }
}
</script>
