<template>
<div class="cart">
  
  <div class="banner-img" style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/c854332138261a24a47fb3342d600a9b.jpg')"></div>
   
  <addForm></addForm>
  <Cart></cart>
    <div class="section-header">
      <h1><i class="fa fa-shopping-cart" aria-hidden="true"></i>購物車</h1>
    </div>
    <ol class="breadcrumb">
      <li><router-link :to="{ path: '/' }"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
      <li class="active">購物車</li>
    </ol>
  <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-10 col-md-offset-1">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>數量</th>
                <th class="text-center">單價</th>
                <th class="text-center">小計</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-sm-8 col-md-6">
                  <div class="media">
                    <a class="thumbnail pull-left" href="#">
                      <img class="media-object" src="https://www.teasoap.com.tw/downloads/product/10000/1000/138/20161115173455546_bp.jpg" style="width: 72px; height: 72px;">
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">御用皂</a></h4>
                      <h5 class="media-heading"> by <a href="#">Chris</a></h5>
                      <span>狀態: </span><span class="text-success"><strong>有貨</strong></span>
                    </div>
                  </div>
                </td>
                <td class="col-sm-1 col-md-1" style="text-align: center">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="3">
                  </td>
                  <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                  <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                  <td class="col-sm-1 col-md-1">
                  <button type="button" class="btn btn-danger">
                      <span class="glyphicon glyphicon-remove"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="col-md-6">
                  <div class="media">
                    <a class="thumbnail pull-left" href="#"> <img class="media-object" src="https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg" style="width: 72px; height: 72px;"> </a>
                      <div class="media-body">
                        <h4 class="media-heading"><a href="#">香草皂</a></h4>
                        <h5 class="media-heading"> by <a href="#">Chris</a></h5>
                        <span>狀態: </span><span class="text-warning"><strong>預計2-3週到貨</strong></span>
                      </div>
                  </div>
                </td>
                <td class="col-md-1" style="text-align: center">
                <input type="email" class="form-control" id="exampleInputEmail1" value="2">
                </td>
                <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                <td class="col-md-1">
                  <button type="button" class="btn btn-danger">
                  <span class="glyphicon glyphicon-remove"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="col-sm-8 col-md-6">
                  <div class="media">
                    <a class="thumbnail pull-left" href="#">
                      <img class="media-object" src="https://www.teasoap.com.tw/downloads/product/10000/1000/181/20170309113233718_bp.jpg" style="width: 72px; height: 72px;">
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">高山皂</a></h4>
                      <h5 class="media-heading"> by <a href="#">Chris</a></h5>
                      <span>狀態: </span><span class="text-success"><strong>有貨</strong></span>
                    </div>
                  </div>
                </td>
                <td class="col-sm-1 col-md-1" style="text-align: center">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="3">
                  </td>
                  <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                  <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                  <td class="col-sm-1 col-md-1">
                  <button type="button" class="btn btn-danger">
                      <span class="glyphicon glyphicon-remove"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="col-sm-8 col-md-6">
                  <div class="media">
                    <a class="thumbnail pull-left" href="#">
                      <img class="media-object" src="https://www.teasoap.com.tw/downloads/product/10000/1000/179/20170309112712710_bp.jpg" style="width: 72px; height: 72px;">
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">五葉松皂</a></h4>
                      <h5 class="media-heading"> by <a href="#">Chris</a></h5>
                      <span>狀態: </span><span class="text-success"><strong>有貨</strong></span>
                    </div>
                  </div>
                </td>
                <td class="col-sm-1 col-md-1" style="text-align: center">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="3">
                  </td>
                  <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                  <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                  <td class="col-sm-1 col-md-1">
                  <button type="button" class="btn btn-danger">
                      <span class="glyphicon glyphicon-remove"></span>
                  </button>
                </td>
              </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h5>商品金額</h5></td>
                    <td class="text-right"><h5><strong>$24.59</strong></h5></td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h5>手續費</h5></td>
                    <td class="text-right"><h5><strong>$6.94</strong></h5></td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h3>總價</h3></td>
                    <td class="text-right"><h3><strong>$31.53</strong></h3></td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <router-link :to="{ path: '/productList' }"><button type="submit" class="btn"><span class="glyphicon glyphicon-shopping-cart"></span> 結帳</button></router-link>
                    </td>
                    <td>
                      <router-link :to="{ path: '/productList' }"><button type="submit" class="btn">繼續購物<span class="glyphicon glyphicon-play"></span></button></router-link>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    <!-- <Add-form @add="add"></Add-form>
    <Cart :cart-list="cartList" :sum="sum"></Cart> -->
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
