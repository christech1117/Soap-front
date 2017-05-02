<template lang="html">
  <div class="ForgetPass">
    <div class="contact-us-container">
      <div class="container" style="text-align:center">
        <div class="section-header wow fadeIn">
          <h3>會員註冊</h3>
        </div>
          <div class="row">
              <div class=" contact-form wow fadeInLeft">
                  <form role="form" action="" method="">
                    <div class="form-group">
                      <label for="contact-name">你的姓名：</label>
                      <input type="text" name="name" placeholder="Enter your name..." class="contact-name" id="contact-name">
                    </div>
                    <div class="form-group">
                    <div class="form-group">
                      <label for="contact-phone">你的手機：</label>
                      <input type="text" name="phone" placeholder="Enter your phone..." class="contact-phone" id="contact-phone">
                    </div>
                      <label for="contact-email">你的信箱：</label>
                      <input type="email" name="email" placeholder="Enter your email..." class="contact-email" id="contact-email">
                    </div>
                    <div class="form-group">
                      <label for="contact-password">輸入密碼：</label>
                      <input type="password" name="password" placeholder="Enter your password..." class="contact-password" id="contact-password">
                    </div>
                    <div class="form-group">
                      <label for="contact-password">密碼確認：</label>
                      <input type="password" name="password" placeholder="Confirm your password..." class="contact-password" id="contact-password">
                    </div>

                      <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/login'">送出</button>
                  </form>
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
.contact-form input { width: 30%; height: 34px;}
</style>
