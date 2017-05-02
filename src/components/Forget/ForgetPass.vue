<template>
  <div class="ForgetPass">
    <div class="contact-us-container">
      <div class="container" style="text-align:center">
        <div class="section-header wow fadeIn">
          <h3>忘記密碼</h3>
        </div>
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
