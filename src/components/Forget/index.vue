<template lang="html">
  <div class="ForgetPass">
    <!-- Page Title -->
    <div class="page-title-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 wow fadeIn">
                    <i class="fa fa-user"></i>
                    <h1>Home / Forget</h1>
                    <!-- <p>Here is how you can contact us</p> -->
                </div>
            </div>
        </div>
    </div>
    <Forget-pass></Forget-pass>
  </div>
</template>

<script>
import ForgetPass from './ForgetPass'

export default {
  components: { ForgetPass }
}
</script>

<style scoped>
</style>
