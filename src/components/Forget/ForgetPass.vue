<template>
  <div class="container">
    <div class="row">
      <div class="panel animated zoomIn">
      <img src="/static/images/forget.svg" alt="">
        <div class="section-header">
          <h3><i class="fa fa-lock" aria-hidden="true"></i>忘記密碼</h3>
        </div>
        <form action=""></form>
          <div class="form-group">
            <label for="email">信箱：</label>
            <input type="text" class="input-form" id="email" placeholder="Email">
          </div>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/login'">送出</button>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/login'">加入會員</button>
          <button type="button" class="btn" onclick="self.location.href='http://localhost:8080/register'">註冊會員</button>
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
  margin-top: 100px;
  width: 150px;
  height: 150px;
}
</style>
