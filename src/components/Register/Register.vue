<template lang="html">
  <div class="container">
    <div class="row">
      <div class="panel animated zoomIn">
        <img src="/static/images/user.svg" alt="user-image">
        <div class="section-header wow fadeIn">
          <h3>會員註冊</h3>
        </div>
        <form action="">
          <div class="form-group">
            <i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i>
            <input type="text" class="input-form" id="name" placeholder="Name" >
          </div>
          <div class="form-group">
            <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
            <input type="phone" class="input-form" id="phone" placeholder="Phone">
          </div>
          <div class="form-group">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <input type="email" class="input-form" id="email" placeholder="Email">
          </div>
          <div class="form-group">
            <i class="fa fa-key fa-2x" aria-hidden="true"></i>
            <input type="password" class="input-form" id="password" placeholder="Password">
          </div>
          <div class="form-group">
            <i class="fa fa-key fa-2x" aria-hidden="true"></i>
            <input type="password" class="input-form" id="confirm" placeholder="Confirm password">
          </div>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/login'">註冊</button>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/login'">已經是會員</button>
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
.container {
  margin-top: 65px;
  margin-bottom: 20px;
}
img {
  width: 100px;
  height: 100px;
}
.panel {
  height: 700px
}
</style>
