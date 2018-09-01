<template>
  <div :class='{"site-container":true, "site-loaded":siteLoaded}'>
    <site-header/>
    <main id="site-main" :class='["site-main", "site-main--"+currentPage]' role="main">
      <nuxt/>
    </main>
    <site-footer/>
  </div>
</template>


<script>
import SiteHeader from '~/components/SiteHeader';
import SiteFooter from '~/components/SiteFooter';

import { mapGetters } from 'vuex';

export default {
  components: { SiteHeader, SiteFooter },
  computed: {
    ...mapGetters(['siteLoaded', 'currentPage', 'didScroll', 'thisScroll', 'lastScroll', 'didResize'])
  },

  methods: {

    setDidScroll() {
      this.$store.commit('setDidScroll', true);
    },
  
    rafDefaultHandlers() {

    },
    rafTickerScrollHandlers() {
      //console.log('thisScroll', this.thisScroll);
      //console.log('lastScroll', this.lastScroll);
    },

    rafTickerStart() {
      const ticker = () => {
        if (this.didScroll) {
          const scrollTop = window.pageYOffset;
          this.$store.commit('setThisScroll', scrollTop);

          this.rafTickerScrollHandlers();
          
          this.$store.commit('setDidScroll', false);
          this.$store.commit('setLastScroll', scrollTop);
        }
        this.rafDefaultHandlers();
        window.requestAnimationFrame(ticker);
      };
      ticker();
    },

    docMousemoveHandler(event) {
      this.$store.commit('setMousePos', {
        x: event.clientX, 
        y: event.clientY - this.thisScroll
      });
    },

    doDomReady() {

    },

    doPageLoaded() {
      this.$store.commit('setSiteLoaded', true);
      this.rafTickerStart();
      this.$emit('siteloaded');
    }
  },

  mounted() {
    window.onload = () => this.doPageLoaded();
    window.onscroll = () => this.setDidScroll();

    document.addEventListener('DOMContentLoaded', () => this.doDomReady());
    document.addEventListener('mousemouve', e => this.docMousemoveHandler(e));
  }
};
</script>



<style lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
};

html {
  font-size: $base-font-size-xs;
  line-height: $body-line-height;
}
body {
  font-family: $body-font-family;
  color: $body-font-color;
  font-weight:300;
}


#{headings()} {
  line-height: $heading-line-height;
  font-weight: $heading-font-weight;
  color: $heading-font-color;
}

a {
  text-decoration: none;
  color: $primary;
}


// global layout -----
.grid-row {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  @include clearfix();
}

@media (min-width:$bp-xs) {
  html {
    font-size: $base-font-size-sm;
  }
}


@media (min-width:$bp-md) {
  
  html {
    font-size: $base-font-size;
  }

}

</style>