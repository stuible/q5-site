const description =
  'Q5 is a Vancouver-based, Canadian web development consultancy that creates digital solutions for growing businesses.'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-29',

  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-svgo',
    'nuxt-gtag',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en-CA' },
      meta: [
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'black' },
      ],
    },
  },

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['normalize.css/normalize.css', '~/assets/scss/_base.scss'],

  // Shared by sitemap, robots, canonical URLs, og:url and schema.org
  site: {
    url: 'https://q-5.ca',
    name: 'Q5',
    description,
    defaultLocale: 'en-CA',
    // Matches the URLs Google already has indexed (e.g. /work/saggi/)
    trailingSlash: true,
    // Beta deploys set NO_ROBOTS to keep themselves out of search results
    indexable: !process.env.NO_ROBOTS,
  },

  seo: {
    meta: {
      twitterCard: 'summary_large_image',
    },
  },

  ogImage: { enabled: false },

  schemaOrg: {
    identity: {
      type: 'ProfessionalService',
      name: 'Q5',
      url: 'https://q-5.ca',
      logo: '/apple-touch-icon.png',
      image: '/opengraph-card.png',
      address: {
        addressLocality: 'Vancouver',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
      areaServed: 'CA',
      sameAs: [
        'https://www.instagram.com/Q5canada/',
        'https://www.facebook.com/Q5canada/',
      ],
    },
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    renderer: { anchorLinks: false },
  },

  image: {
    // Pre-renders optimised copies of images during `nuxt generate`. Pinned so
    // Netlify builds don't auto-switch to the Netlify Image CDN.
    provider: 'ipx',
    quality: 80,
    format: ['avif', 'webp'],
  },

  svgo: {
    autoImportPath: false,
    defaultImport: 'component',
    // nuxt-svgo's defaults strip width/height, which the icons rely on
    svgoConfig: { plugins: ['preset-default'] },
  },

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/globals" as *;\n',
        },
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },

  eslint: {
    config: { stylistic: false },
  },
})
