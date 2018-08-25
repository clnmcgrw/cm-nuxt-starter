<template>
  
  <header class="site-header" role="banner">
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
        {to:'/', text:'Home'}, 
        {to:'/blog', text:'Blog'}, 
        {to:'/about', text:'About'}
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
    border: 2px solid darken($white, 8%);
  }
}

.site-header--nav {
  ul {
    list-style: none;
    padding: 0;
  }
  > ul > li {
    display: inline-block;
  }
  li a {
    display: block;
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