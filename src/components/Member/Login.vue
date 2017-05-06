<template>
  <div class="login animated fadeIn">
    <div class="container">
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">2013</a></li>
      <li class="active">十一月</li>
    </ol>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
        <div class="panel">
          <img src="https://christech1117.github.io/uploads/avatar.png" alt="">
          <div class="section-header">
            <h3><i class="fa fa-unlock-alt" aria-hidden="true"></i>會員登入</h3>
          </div>
          <form class="" action="" method="">
            <div class="form-group">
              <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
              <input class="input-form" type="email" placeholder="Email">
            </div>
            <div class="form-group">
              <i class="fa fa-key fa-2x" aria-hidden="true"></i>
              <input class="input-form" type="password" placeholder="Password">
            </div>
              <router-link :to="{ path: '/' }"><button type="submit" class="btn">登入</button></router-link>
              <router-link :to="{ path: 'Forget' }"><button type="button" class="btn">忘記密碼</button></router-link>
              <router-link :to="{ path: 'Register' }"><button type="button" class="btn">註冊會員</button></router-link>
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
</style>
