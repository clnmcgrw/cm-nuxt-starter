<template>
  
  <header class="site-header" role="banner">
    <div class="grid-row">
      
      <div class="site-header--brand">
        <h1><nuxt-link to="/">NuxtJS Starter Template</nuxt-link></h1>
      </div>
  
    </div>
  </header>

</template>


<script>

export default {
  name: 'site-header',
  props: {}
};
</script>

<style lang="scss">

.site-header {
  padding: 2em 0;
}
.site-header--brand {
  h1 {
    font-size: 1em;
  }
  a {
    display: inline-block;
    padding: 0.5em;
    border: 2px solid darken($white, 8%);
  }
}
</style>