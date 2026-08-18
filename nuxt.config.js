import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LUMÉA | Vietnamese House of Scent & Ritual',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'LUMÉA - Căn Nguyên. Vietnamese House of Scent & Ritual. Hành trình tìm về cội nguồn qua hương của cây cỏ, nếp nhà và ký ức Việt.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'LUMÉA | Vietnamese House of Scent & Ritual',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://lumea.vn/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'LUMÉA | Vietnamese House of Scent & Ritual',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'LUMÉA - Căn Nguyên. Vietnamese House of Scent & Ritual. Hành trình tìm về cội nguồn qua hương của cây cỏ, nếp nhà và ký ức Việt.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/images/ogp.webp',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
      }
    ],
    bodyAttrs: {
      oncontextmenu: 'return false'
    },
    script: [
      {
        hid: 'GAsrc',
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GAID}`
      },
      {
        hid: 'GAcode',
        innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.GAID}');`
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'GAsrc': ['innerHTML'],
      'GAcode': ['innerHTML']
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/asset.js',
    '~/plugins/viewport.client.js',
    '~/plugins/backface-fixed.client.js',
    '~/plugins/config.client.js',
    '~/plugins/asscroll-and-gsap.client.js',
    '~/plugins/constants.js',
    '~/plugins/check-device.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  loading: false,

  router: {
    base: process.env.ROUTER_BASE || '/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/single.scss'
    ]
  },

  webfontloader: {
    google: {
      families: ['Barlow+Condensed:600,700,800,900:latin,vietnamese', 'Plus+Jakarta+Sans:400,500,600,700:latin,vietnamese']
    }
  },

  env: {
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'three'
    ],
    extend(config) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader']
      })
    },
  },

  generate: {
    fallback: '404.html',
    async routes() {
      const generates = []

      if (process.env.SERVICE_DOMAIN && process.env.API_KEY) {
        try {
          const res = await axios.get(`https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/works?limit=200`, {
            headers: {
              'X-MICROCMS-API-KEY': process.env.API_KEY
            }
          })
          res.data.contents.forEach((content) => {
            generates.push({
              route: 'works/' + content.id,
            })
          })
        } catch (e) {
          const fallbackIds = ['can-nguyen', 'sen-minh', 'thuan-nhien']
          fallbackIds.forEach((id) => generates.push({ route: 'works/' + id }))
        }
      } else {
        const fallbackIds = ['can-nguyen', 'sen-minh', 'thuan-nhien']
        fallbackIds.forEach((id) => generates.push({ route: 'works/' + id }))
      }
      return generates
    }
  }
}
