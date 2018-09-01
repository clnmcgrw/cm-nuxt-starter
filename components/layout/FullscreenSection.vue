<template>
  
  <section class="section-fullscreen" :style='{"min-height":contentHeight+"px"}'>
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

  data() {
    return {
      contentHeight: this.minHeight
    };
  },

  methods: {

  },

  mounted() {
    this.contentHeight = $(this.$el).find('.section-centered').height();
  }
};
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