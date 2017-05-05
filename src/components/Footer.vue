<template>
  <div class="footer">
    <div class="top-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-sm-offset-1">
            <h3>關於我們</h3>
            <p>     提供一個平台，將小農的農業經營與消費者的生活做結合。小農在平台上提供特色、安全的農產品，將經營農業活動的甘苦點滴分享給消費者。</p>
          </div>
          <div class="col-sm-3 col-sm-offset-2">
            <h3>其他說明</h3>
            <p><router-link :to="{ path: 'OtherRule' }">隱私權政策</router-link></p>
            <p><router-link :to="{ path: 'OtherRule' }">免責聲明</router-link></p>
            <p><router-link :to="{ path: 'OtherRule' }">使用條款</router-link></p>
            <p><router-link :to="{ path: 'Rule' }">購物須知</router-link></p>
            </ul>
          </div>
          <div class="col-sm-3">
            <h3>聯絡我們</h3>
            <p><a href="https://www.google.com.tw/maps/place/221%E6%96%B0%E5%8C%97%E5%B8%82%E6%B1%90%E6%AD%A2%E5%8D%80%E4%BF%9D%E4%B8%80%E8%A1%97/@25.0810065,121.6718441,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5L-d5LiA6KGX!2m2!1d121.6740381!2d25.0810065!3m4!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!8m2!3d25.0810065!4d121.6740381"><i class="fa fa-map-marker" aria-hidden="true"></i>地址：汐止區保一街</a></p>
            <p><a href="tel:0920-033849"><i class="fa fa-phone" aria-hidden="true"></i>電話：0920 - 033 - 849</a></p>
            <p><a href="mailto:christech1117@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i>E-mail：christech1117@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 footer-copyright">
            <p>Copyright © 2017 <em>Chris - All Rights Reserved.</em></p>
          </div>
          <div class="col-sm-6">
            <ul>
              <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
                
              </li>
            </ul>
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


</style>
