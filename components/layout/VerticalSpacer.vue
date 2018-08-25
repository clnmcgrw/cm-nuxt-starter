<template>
  <div :class='getElementClassnames()' :style='{"height": size}'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vertical-spacer',
  props: {
    size: {
      type: String,
      default: '2em'
    },
    hideAt: {
      type: String,
      default: 'lg'
    }
  },
  methods: {
    getElementClassnames() {
      const cssClasses = {'v--spacer':true};
      cssClasses[`hidden--${this.hideAt}`] = true;
      return cssClasses;
    }
  }
};
</script>

<style lang="scss">
// inline styles control height of spacers 


</style>