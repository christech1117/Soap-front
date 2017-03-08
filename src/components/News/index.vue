<template lang="html">
  <div class="News">
    <!-- Page Title -->
    <div class="page-title-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 wow fadeIn">
                    <i class="fa fa-newspaper-o"></i>
                    <h1>Home / News</h1>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <News></News>
    <News></News>
    <News></News>
    <News></News>
    <News></News>
  </div>
</template>

<script>
import News from '../Home/News'

export default {
  components: { News }
}
</script>

<style scoped>
</style>
