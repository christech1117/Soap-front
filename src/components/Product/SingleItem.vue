<template>
  <div class="singleItem">
    <div class="banner-img" style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')"></div>
    <div class="container">
      <div class="section-header">
        <h1><i class="fa fa-th-list" aria-hidden="true"></i>商品列表</h1>
      </div>
      <ol class="breadcrumb">
        <li><router-link :to="{ path: '/' }"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
        <li><router-link :to="{ path: '/productList' }">商品列表</router-link></li>
        <li class="active">詳細資訊</li>
      </ol>
      <div class="row">
        <div class="col-md-3">
          <ul class="">
            <li><h3>產品展示</h3></li>
            <li><router-link :to="{ path: '/productList' }">特價商品</router-link></li>
            <li><router-link :to="{ path: '/productList' }">熱銷商品</router-link></li>
            <li><router-link :to="{ path: '/productList' }">各種膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">中油性膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">混合性膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">乾性膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">嬰兒膚質</router-link></li>
            <li><router-link :to="{ path: '/productList' }">敏感性膚質</router-link></li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-6">
              <img src="https://www.teasoap.com.tw/downloads/product/10000/1000/189/20170309134150750_sp.jpg" alt="">
            </div>
            <div class="col-md-6">
              <h2>身活保濕乳</h2>
              <p>身活所需是保濕，豐潤柔滑的質地，搭配多種天然萃取的保濕因子，藉由水份的滋潤與油分的薄膜，可降低微小紋路生成，使肌膚柔嫩細緻，添加蘭花萃取能協助肌膚代謝作用，讓肌膚保持彈性，搭配天然有機阿甘果油，可深層滋養乾燥的肌膚，水解小麥蛋白能保護肌膚，提升對外在環境的防護力，而獨特雪滴花萃取，具有延緩老化效果，使肌膚更加活力明亮，適合乾性膚質及一般膚質舒緩保濕使用。</p>
              <p>
                數量
                <select class="form">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                售價 NT.<span>190</span></p>
              </p>
              <router-link :to="{ path: '/productList' }"><button type="button" class="btn">加入購物車</button></router-link>
              <router-link :to="{ path: '/productList' }"><button type="button" class="btn"><i class="fa fa-heart" aria-hidden="true"></i>加入願望清單</button></router-link>
            </div>
            <div class="col-md-12 line"></div>
            <div class="col-md-12">
              <p>重現「活力」身活！<br>
                  感覺需要「保養」嗎？<br>
                  保養是一種持續，掛心要身活，<br>
                  加乘就是力量。<br>
                  青春不用回望 有保養 有擦</p>
              <img src="https://www.teasoap.com.tw/downloads/image/pdb/SHENHUO_003_1.png" alt="">
              <p>身活所需是保濕，豐潤柔滑的質地，搭配多種天然萃取的保濕因子，藉由水份的滋潤與油分的薄膜，可降低微小紋路生成，使肌膚柔嫩細緻，添加蘭花萃取能協助肌膚代謝作用，讓肌膚保持彈性，搭配天然有機阿甘果油，可深層滋養乾燥的肌膚，水解小麥蛋白能保護肌膚，提升對外在環境的防護力，而獨特雪滴花萃取，具有延緩老化效果，使肌膚更加活力明亮，適合乾性膚質及一般膚質舒緩保濕使用。</p>
              <img src="https://www.teasoap.com.tw/downloads/image/pdb/SHENHUO_004_1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
