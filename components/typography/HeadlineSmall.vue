<template>
  
  <div class="headline-sm">
    <h5 class="headline-sm--el">
      <span class="headline-sm--text">
        <slot>Small Headline Text Here</slot>
        <span class="headline-sm--line"></span>
      </span>
    </h5>
  </div>

</template>


<script>

export default {
  name: 'headline-small',
  props: {}
}
</script>


<style lang="scss">

.headline-sm--el {
  font-size: 0.9;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: $gray;
  margin-bottom: 1.5em;
}

.headline-sm--text {
  display: inline-block;
}
</style>