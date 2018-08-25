<template>
  
  <figure v-if="!isBg" :class='{"image--el":true, "is-loaded": loaded}' :style='getStyleObject()'>
    <img class="image--el-img" :src="src" @load='onImageElLoaded()'>
  </figure>

  <div v-else :class='{"image--bg":true, "is-loaded": loaded}' :style='getStyleObject()'>
    <div class="image--bg-div" :style='getBackgroundStyle()'></div>
  </div>

</template>


<script>
export default {

  name: 'lazy-image',

  props: {
    src: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    isBg: {
      type: Boolean,
      default: false
    },
    isFluid: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      loaded: false
    };
  },

  methods: {
    onImageElLoaded() {
      this.loaded = true;
    },
    onImageBgLoaded() {
      const img = new Image();
      img.onload = this.onImageElLoaded;
      img.src = this.src;
    },
    getStyleObject() {
      let styles = {};
      if (this.isFluid) {
        styles.paddingBottom = ((this.height / this.width) * 100) + '%';
      } else {
        styles.width = this.width + 'px';
        styles.height = this.height + 'px';
      }
      return styles;
    },
    getBackgroundStyle() {
      return {'background-image': `url(${this.src})`};
    }
  }
};
</script>


<style lang="scss">

.image--el, .image--bg {
  position: relative;
  
  &.is-loaded {
    > img, > div {
      opacity: 1;
    }
  }

  > img, > div {
    @include fill-parent();
    opacity: 0;
    transition: opacity 1s ease;
  }
}

</style>