<template>
  
  <div class="carousel-flkty--outer">
    <div class="carousel-flkty">
      <div v-for="slide in slides" class="carousel-flkty--slide">
        <figure>
          <img data-flkty-lazyload="" alt="">
        </figure>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name 'flickity-carousel',

  props: {
    slides: {
      type: Array,
      default: () => [1,2,3]
    }
  },

  computed: {},

  methods: {

  },

  mounted() {
    const $carousel = $(this.$el).find('.carousel-flkty');
    const flkty = $carousel.flickity({
      cellSelector: '.carousel-flkty--slide',
      wrapAround: true,
      lazyLoad: 1
    }).data('flickity');
  }
};
</script>