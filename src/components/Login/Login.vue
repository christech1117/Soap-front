<template lang="html">
  <div class="Login">
    <div class="contact-us-container">
      <div class="container" style="text-align:center">
          <h1 class="wow fadeInDown">【會員登入】</h1>
          <div class="row">
              <div class=" contact-form wow fadeInLeft">
                  <form role="form" action="" method="">
                    <div class="form-group">
                      <label for="contact-name">帳號：</label>
                      <input type="text" name="name" placeholder="Enter your account..." class="contact-name" id="contact-name">
                    </div>
                    <div class="form-group">
                      <label for="contact-password">密碼：</label>
                      <input type="password" name="password" placeholder="Enter your password..." class="contact-password" id="contact-password">
                    </div>
                      <button type="submit" class="btn">登入</button>
                      <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/forget'">忘記密碼</button>
                      <button type="submit" class="btn">註冊</button>
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
