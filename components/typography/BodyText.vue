<template>
  
  <div :class='{"bodytext-default": true, "on-dark": onDark}'>
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'body-text',

  props: {
    onDark: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style>
  
</style>