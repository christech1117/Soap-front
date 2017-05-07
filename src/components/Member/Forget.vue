<template>
  <div class="forget">
    <div class="container">
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
                <label class="sr-only" for="email">電子郵件</label>
                <input type="email" class="form-control" id="email" placeholder="電子郵件">
              </div>
              <router-link :to="{ path: '/login' }"><button type="submit" class="btn">送出</button></router-link>
              <router-link :to="{ path: '/login' }"><button type="button" class="btn">加入會員</button></router-link>
              <router-link :to="{ path: '/register' }"><button type="button" class="btn">註冊會員</button></router-link>
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
img {
  margin-top: 100px;
  width: 150px;
  height: 150px;
}
</style>
