<template>
  <div class="register">
    <div class="container">
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">2013</a></li>
        <li class="active">十一月</li>
      </ol>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
          <div class="panel">
            <img src="/static/images/user.svg" alt="user-image">
            <div class="section-header">
              <h1>會員註冊</h1>
            </div>
            <form action="">
              <div class="form-group">
                <i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="name">姓名</label>
                <input type="text" class="form-control" placeholder="您的姓名">
              </div>
              <div class="form-group">
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="phone">行動電話</label>
                <input type="number" class="form-control" id="phone" placeholder="行動電話">
              </div>
              <div class="form-group">
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="email">電子郵件</label>
                <input type="email" class="form-control" placeholder="電子郵件">
              </div>
              <div class="form-group">
                <i class="fa fa-key fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="password">您的密碼</label>
                <input type="password" class="form-control" placeholder="您的密碼">
              </div>
              <div class="form-group">
                <i class="fa fa-key fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="Confirm password">密碼確認</label>
                <input type="password" class="form-control" placeholder="密碼確認">
              </div>
              <router-link :to="{ path: 'login' }"><button type="submit" class="btn">註冊</button></router-link>
              <router-link :to="{ path: 'login' }"> <button type="button" class="btn">已經是會員</button></router-link>
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
  width: 100px;
  height: 100px;
}
.panel {
  height: 700px
}
</style>
