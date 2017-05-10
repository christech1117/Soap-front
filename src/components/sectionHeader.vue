<template lang="pug">
  .container
    .section-header
      h1 {{title}}
    ol.breadcrumb
      li
        router-link(:to="{ path: '/' }")
          i.fa.fa-home(aria-hidden='true')
      li.active {{title}}
    hr  
      
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped lang="sass">

</style>
