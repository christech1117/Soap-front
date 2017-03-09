<template lang="html">
  <div class="ForgetPass">
    <div class="contact-us-container">
      <div class="container" style="text-align:center">
          <h1 class="wow fadeInDown">【忘記密碼】</h1>
          <div class="row">
              <div class=" contact-form wow fadeInLeft">
                  <form role="form" action="" method="">
                    <div class="form-group">
                      <label for="contact-email">信箱：</label>
                        <input type="text" name="email" placeholder="Enter your email..." class="contact-email" id="contact-email">
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
