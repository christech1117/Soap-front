<template>
  <div class="container">
    <ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">2013</a></li>
    <li class="active">十一月</li>
    </ol>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
        <div class="panel animated zoomIn">
          <img src="/static/images/user.svg" alt="user-image">
          <div class="section-header wow fadeIn">
            <h3>會員註冊</h3>
          </div>
          <form action="">
            <div class="form-group">
              <i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i>
              <input type="text" class="input-form" placeholder="Name" >
            </div>
            <div class="form-group">
              <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
              <input type="number" class="input-form" id="phone" placeholder="Phone">
            </div>
            <div class="form-group">
              <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <input type="email" class="input-form" placeholder="Email">
            </div>
            <div class="form-group">
              <i class="fa fa-key fa-2x" aria-hidden="true"></i>
              <input type="password" class="input-form" placeholder="Password">
            </div>
            <div class="form-group">
              <i class="fa fa-key fa-2x" aria-hidden="true"></i>
              <input type="password" class="input-form" placeholder="Confirm password">
            </div>
            <button type="submit" class="btn">註冊</button>
            <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/login'">已經是會員</button>
          </form>
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
