<template>
  
  <section class="section-fullscreen" :style='{"min-height":minHeight+"px"}'>
    <div class="section-centered">
      <div class="grid-row">
        <slot></slot>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'fullscreen-section',

  props: {
    minHeight: {
      type: Number,
      default: 700
    }
  },

  methods: {}
}
</script>


<style lang="scss">

.section-fullscreen {
  height: 100vh;
  display: flex;
  align-items: center;
}

.section-centered {
  width: 100%;
}

</style>