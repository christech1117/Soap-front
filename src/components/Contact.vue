<template>
  <div class="contact">
    <div class="banner-img" style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/c854332138261a24a47fb3342d600a9b.jpg')"></div>
    <div class="section-header">
      <h1><i class="fa fa-lock" aria-hidden="true"></i>聯絡我們</h1>
    </div>
    <div class="container">
    <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.990386083413!2d121.6595453154942!3d25.068314983956313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d5312bd5fc723%3A0x265d7d910255e527!2z5rGQ5q2i54Gr6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1494119466624" frameborder="0" style="border:0" allowfullscreen></iframe>
    -->
      <div class="row info">
        <div class="col-md-4">
          <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
          <p><a href="tel:0920-033849">0920 - 033 - 849</a></p>
        </div>
        <div class="col-md-4">
          <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
          <p><a href="https://www.google.com.tw/maps/place/221%E6%96%B0%E5%8C%97%E5%B8%82%E6%B1%90%E6%AD%A2%E5%8D%80%E4%BF%9D%E4%B8%80%E8%A1%97/@25.0810065,121.6718441,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5L-d5LiA6KGX!2m2!1d121.6740381!2d25.0810065!3m4!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!8m2!3d25.0810065!4d121.6740381">新北市汐止區汐止火車站</a></p>
        </div>
        <div class="col-md-4">
          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <p><a href="mailto:christech1117@gmail.com">christech1117@gmail.com</a></p>
        </div>
      </div>
      <form action="">
        <div class="row">
          <div class="col-xs-12 col-md-12 form-group">
            <label class="sr-only" for="name">姓名</label>
            <input type="text" class="form-control" placeholder="您的姓名" >
          </div>
          <div class="col-xs-12 col-md-6 form-group">
            <label class="sr-only" for="email">電子郵件</label>
            <input type="email" class="form-control" placeholder="電子郵件">
          </div>
          <div class="col-xs-12 col-md-6 form-group">
            <label class="sr-only" for="phone">行動電話</label>
            <input type="number" class="form-control" placeholder="行動電話">
          </div>
          <div class="col-xs-12 col-md-12 form-group">
            <label class="sr-only" for="email">內容</label>
            <textarea class="form-control" rows="5" placeholder="我想說的是..."></textarea>
          </div>
        </div>
        <router-link :to="{ path: '/contact' }"><button type="submit" class="btn">登入</button></router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
