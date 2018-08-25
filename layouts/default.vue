<template>
  <div class="site-container">
    <site-header/>
    <main class="site-main" role="main">
      <nuxt/>
    </main>
    <site-footer/>
  </div>
</template>



<script>
import SiteHeader from '~/components/SiteHeader';
import SiteFooter from '~/components/SiteFooter';

export default {
  components: {
    SiteHeader,
    SiteFooter
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
}
body {
  font-family: $body-font-family;
  font-weight:300;
}


#{headings()} {
  line-height: 1;
  font-weight:700;
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