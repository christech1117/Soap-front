<template lang="html">
  <div class="Contact">
    <!-- Page Title -->
    <div class="page-title-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 wow fadeIn">
                    <i class="fa fa-envelope"></i>
                    <h1>Contact Us /</h1>
                    <p>Here is how you can contact us</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Us -->
    <div class="contact-us-container">
      <div class="container">
          <div class="row">
              <div class="col-sm-6 contact-form wow fadeInLeft">
                  <form role="form" action="assets/sendmail.php" method="post">
                    <div class="form-group">
                      <label for="contact-name">姓名</label>
                        <input type="text" name="name" placeholder="Enter your name..." class="contact-name" id="contact-name">
                      </div>
                    <div class="form-group">
                      <label for="contact-email">信箱</label>
                        <input type="text" name="email" placeholder="Enter your email..." class="contact-email" id="contact-email">
                      </div>
                      <div class="form-group">
                        <label for="contact-subject">主旨</label>
                        <input type="text" name="subject" placeholder="Your subject..." class="contact-subject" id="contact-subject">
                      </div>
                      <div class="form-group">
                        <label for="contact-message">內容</label>
                        <textarea name="message" placeholder="Your message..." class="contact-message" id="contact-message"></textarea>
                      </div>
                      <button type="submit" class="btn">Send</button>
                  </form>
              </div>
              <div class="col-sm-5 contact-address wow fadeInUp">
                  <h3>We Are Here</h3>
                  <div class="">
                    <iframe src="https://goo.gl/hnPJOS" width="447.5" height="290" frameborder="0" style="border:0" allowfullscreen>

                    </iframe>
                  </div>

                  <h3>地址</h3>
                  <p>221新北市汐止區保一街22巷6號旁</p>
                  <h3>電話</h3>
                  <p>0920-033-849</p>
                  <h3>信箱</h3>
                  <p>christech1117@gmail.com</p>
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
