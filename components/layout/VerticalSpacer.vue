<template>
  <div :class='getElementClassnames()' :style='{"height": height}'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vertical-spacer',
  props: {
    height: {
      type: String,
      default: '2em'
    },
    hideAt: {
      type: String,
      default: 'none'
    }
  },
  methods: {
    getElementClassnames() {
      const cssClasses = {'v--spacer':true};
      if (this.hideAt !== 'none') {
        cssClasses[`hidden--${this.hideAt}`] = true;
      }
      return cssClasses;
    }
  }
};
</script>

<style lang="scss">
// inline styles control height of spacers 

.v--spacer {
  display: block;
  position: relative;
}

</style>