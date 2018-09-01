<template>
  <div class="headline-md">
    <h3 class="headline-md--el">
      <span class="headline-md--text">
        <slot>Headline Text Here</slot>
        <span class="headline-md--line"></span>
      </span>
    </h3>
  </div>
</template>


<script>
export default {
  name: 'headline-medium'
};
</script>


<style lang="scss">

.headline-md--el {
  font-size: 2.2em;
  margin-bottom: 0.5em;
}

.headline-md--text {
  display: inline-block;
}
  
</style>