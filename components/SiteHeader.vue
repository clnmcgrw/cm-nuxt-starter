<template>
  
  <header id="site-header" class="site-header" role="banner">
    <div class="grid-row">
      
      <div class="site-header--brand">
        <h1><nuxt-link to="/">NuxtJS Starter Template</nuxt-link></h1>
      </div>

      <nav class="site-header--nav">
        <ul>
          <li v-for="link in nav">
            <nuxt-link :to="link.to">
              <span>{{link.text}}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
  
    </div>
  </header>

</template>


<script>

export default {
  name: 'site-header',

  props: {},
  
  data() {
    return {
      nav: [
        {to:'/about', text:'About'},
        {to:'/components', text:'Components'}, 
        {to:'/blog', text:'Blog'}
      ]
    };
  },

  methods: {}
};
</script>



<style lang="scss">

.site-header {
  position: fixed;
  z-index: 4001;
  top:0; left:0; 
  width:100%;
  padding: 2em 0;
}

.site-header--brand {
  h1 {
    font-size: 1em;
  }
  a {
    display: inline-block;
    padding: 0.5em;
    background-color: $white;
    border: 2px solid darken($white, 8%);
  }
}

.site-header--nav {
  padding-top: 0.5em;
  ul {
    list-style: none;
    padding: 0;
  }
  > ul > li {
    display: inline-block;
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
  li a {
    display: block;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.85em;
    color: $gray;
    transition: color .5s ease;

    &:hover {
      color: $dark;
    }
  }
}


@media (min-width: $bp-md) {
  
  .site-header--brand {
    float: left; 
    width: 35%;
  }


  .site-header--nav {
    float: right;
    text-align: right;
    width: 65%;
    
    > ul > li {
      margin-right: 2em;

      &:last-child {
        margin-right: 0;
      }
    }
  }

}

</style>