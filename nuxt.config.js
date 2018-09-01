module.exports = {
  //page head
  head: {
    titleTemplate: '%s // Nuxt.js Starter Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js starter template' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Nunito+Sans:200,200i,400,400i,700,800'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//cdn.polyfill.io/v2/polyfill.min.js' },
      { src: '//cdn.jsdelivr.net/combine/npm/flickity@2.0.10/dist/flickity.pkgd.min.js,npm/animejs@2.2.0,npm/jquery@2.2.4' }
    ]
  },
  
  //built-in loading indicator
  loading: false,

  //router config
  router: {
    middleware: 'pages'
  },

  // nuxt extensions
  modules: [
    //allows loading global scss vars across components 
    ['nuxt-sass-resources-loader', '@/assets/scss/settings.scss']
  ],
  
  //build step additions
  build: {
    extend(config, context) {
      // if (context.isDev && context.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   });
      // }
    }
  }
};
