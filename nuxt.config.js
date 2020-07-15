
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Q5',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Q5 develops digital solutions for growing businesses.' },
      { name: 'msapplication-TileColor', content: '#00aba9'},
      { name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: "32x32" },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: "16x16" },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: "16x16" },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '~/assets/scss/_base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '~/plugins/v-fade-out.js',}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  styleResources: {
    scss: [
      './assets/scss/variables.scss',
      './assets/scss/breakpoints.scss'
    ],
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
