<template>
<div>
  <form>
    商品名稱：<input class="form-control" type="text" v-model="addForm.product" /><br />
    商品價格：<input class="form-control" type="number" v-model="addForm.price" /><br />
    購買數量：<input class="form-control" type="number" v-model="addForm.qty" /><br />

    <p>
      您購買了 {{ addForm.product }}，單價 ${{ addForm.price }} 元，共 {{ addForm.qty }} 件 小計 NTD ${{ addForm.price * addForm.qty }} 元
    </p>
    <button type="button" class="btn btn-default" @click.prevent="add">加入購物車</button><br /><br />
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      addForm: {
        product: '小米Note3',
        price: '5000',
        qty: 1
      }
    }
  },
  methods: {
    add () {
      this.$emit('add', this.addForm)
    }
  }
}
</script>
<style scoped>
  form {
    padding-top: 120px;
  }
</style>
