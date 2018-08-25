<template>
  
  <div class="headline-lg">
    <h5 class="headline-lg--el">
      <span class="headline-lg--text">
        <slot>Small Headline Text Here</slot>
        <span class="headline-lg--line"></span>
      </span>
    </h5>
  </div>

</template>


<script>

export default {
  name: 'headline-large',
  props: {}
}
</script>


<style lang="scss">

.headline-lg--el {
  font-size: 3em;
}

.headline-lg--text {
  display: inline-block;
}
</style>