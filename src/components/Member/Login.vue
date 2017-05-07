<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
          <div class="panel">
            <img src="https://christech1117.github.io/uploads/avatar.png" alt="">
            <div class="section-header">
              <h1><i class="fa fa-unlock-alt" aria-hidden="true"></i>會員登入</h1>
            </div>
            <form class="" action="" method="">
              <div class="form-group">
                <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="email">電子郵件</label>
                <input class="form-control" type="email" placeholder="電子郵件">
              </div>
              <div class="form-group">
                <i class="fa fa-key fa-2x" aria-hidden="true"></i>
                <label class="sr-only" for="password">密碼</label>
                <input class="form-control" type="password" placeholder="您的密碼">
              </div>
                <router-link :to="{ path: '/' }"><button type="submit" class="btn">登入</button></router-link>
                <router-link :to="{ path: 'forget' }"><button type="button" class="btn">忘記密碼</button></router-link>
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

</style>
