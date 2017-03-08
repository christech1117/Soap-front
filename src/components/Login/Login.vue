<template lang="html">
  <div class="Login">
    <div class="contact-us-container">
      <div class="container">
          <span><h1>會員登入</h1></span>
          <div class="row">
              <div class="col-sm-6 contact-form wow fadeInLeft">
                  <form role="form" action="" method="">
                    <div class="form-group">
                      <label for="contact-name">帳號</label>
                      <input type="text" name="name" placeholder="Enter your account..." class="contact-name" id="contact-name">
                    </div>
                    <div class="form-group">
                      <label for="contact-password">密碼</label>
                      <input type="password" name="password" placeholder="Enter your password..." class="contact-password" id="contact-password">
                    </div>
                      <button type="submit" class="btn">登入</button>
                      <button type="submit" class="btn">忘記密碼</button>
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

</style>
