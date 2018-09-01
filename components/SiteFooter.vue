<template>
  
  <footer id="site-footer" role="contentInfo" class="site-footer">
    <div class="grid-row">
      <p><span>&copy; 2018</span> NuxtJS Starter Template</p>
    </div>
  </footer>

</template>

<script>

export default {
  name: 'site-footer',
  props: {}
};
</script>

<style lang="scss">

.site-footer {
  padding: 3em 0;
  text-align: center;

  background: darken($white, 4%);
  border-top: 1px solid darken($white, 12%)
}
</style>