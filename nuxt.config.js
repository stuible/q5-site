
export default {
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
    title: 'Q5 - Web Solutions',
    htmlAttrs: {
      lang: 'en-ca'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Q5 is a Vancouver-based, Canadian web development consultancy that creates digital solutions for growing businesses.' },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: "32x32" },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: "16x16" },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'black' },
      { rel: "stylesheet", href: "https://use.typekit.net/mbs4zfv.css" }
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
    { src: '~/plugins/v-fade-out.js', },
    { src: '~/plugins/ga.client.js', mode: 'client' }
  ],
  env: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/image',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: 'https://q-5.ca' }],
  ],
  sitemap: {
    hostname: 'https://q-5.ca',
  },
  robots: [
    {
      UserAgent: '*',
      Disallow: () => process.env.NO_ROBOTS ? '/' : '',
      Sitemap: () => process.env.BASE_URL ? process.env.BASE_URL + '/sitemap.xml' : '/sitemap.xml'
    }
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
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  }
}
