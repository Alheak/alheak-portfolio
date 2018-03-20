const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#963' },

  /*
  ** Global CSS
  */
  css: [
    'assets/transitions.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: '/',
    babel: {
      presets: [
        'es2015',
        'stage-0'
      ]
    },
    extend(config, ctx) {

    }
  }
}
