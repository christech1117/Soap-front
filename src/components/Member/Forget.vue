<template>
  <div class="forget">
    <div class="container">
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">2013</a></li>
        <li class="active">十一月</li>
      </ol>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
          <div class="panel">
            <img src="/static/images/forget.svg" alt="">
            <div class="section-header">
              <h1><i class="fa fa-lock" aria-hidden="true"></i>忘記密碼</h1>
            </div>
            <form action="">
              <div class="form-group">
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                <input type="email" class="input-form" id="email" placeholder="Email">
              </div>
              <router-link :to="{ path: 'login' }"><button type="submit" class="btn">送出</button></router-link>
              <router-link :to="{ path: 'login' }"><button type="button" class="btn">加入會員</button></router-link>
              <router-link :to="{ path: 'register' }"><button type="button" class="btn">註冊會員</button></router-link>
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
.container {
  margin-top: 70px;
  margin-bottom: 20px;
}
img {
  margin-top: 100px;
  width: 150px;
  height: 150px;
}
</style>
