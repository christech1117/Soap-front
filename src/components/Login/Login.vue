<template>
  <div class="container">
    <div class="panel animated zoomIn">
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
          <button type="submit" class="btn">登入</button>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/forget'">忘記密碼</button>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/register'">註冊</button>
      </form>
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
</style>
