<template>
  <div class="contact-container">
  <div class="section-header">
        <h3><i class="fa fa-lock" aria-hidden="true"></i>聯絡我們</h3>
      </div>
    <div class="container animated zoomIn">
      
      <div class="row">
        <div class="col-sm-4 contact-adress">
          <h4>門市地址：</h4>
          <p>新北市三峽區民權街79號</p>
          <h4>門市電話：</h4>
          <p>0920 - 033 - 849</p>
          <h4>門市信箱</h4>
          <p>christech1117@gmail.com</p>
          <h4>服務時間：</h4>
          <p>週一至週五：09:30~18:30</p>
          <p>週六至週日：09:30~19:00</p>
        </div>
      </div>
      <div class="contact-form">
        <form action="">
          <div class="form-group">
            <i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i>
            <input type="text" class="input-form" placeholder="Name" >
          </div>
          <div class="form-group">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <input type="text" class="input-form" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="contact-subject">主旨</label>
            <input type="text" class="input-form" placeholder="Subject">
          </div>
          <div class="form-group">
            <label for="contact-message">內容</label>
            <textarea class="input-fom" placeholder="Message..."></textarea>
          </div>
          <button type="submit" class="btn">寄出</button>
        </form>
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
