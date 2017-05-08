<template>
  <div class="singleNew">
    <div class="banner-img" style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/be27663b9469cd4b6f7a0110907aa275.jpg')"></div>
    <div class="container">
      <div class="section-header">
        <h1><i class="fa fa-newspaper-o" aria-hidden="true"></i>詳細資訊</h1>
      </div>
      <ol class="breadcrumb">
        <li><router-link :to="{ path: '/' }"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
        <li><router-link :to="{ path: '/' }">最新消息</router-link></li>
        <li class="active">詳細資訊</li>
      </ol>
      <h2>【最新消息】106年網購春節送貨時間調整 / 門市春節營業時間公告</h2>
      <div class="line"></div>
      <img src="https://www.teasoap.com.tw/downloads/image/news/event/780x1170.jpg" alt="">
      <p class="text-left">雲林縣農漁牧休閒觀光產業協會成立目的與宗旨,是希望能替這片土地與社會盡一份力量,推廣食品安全以及友善環境的理念,成立之初多有不足還希望各界多給予指教與批評,我們才能做得更好~如有合作提案或是希望加入協會的各界先進,請不吝與協會聯絡,謝謝!</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
