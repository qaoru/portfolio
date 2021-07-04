import tailwindTypography from '@tailwindcss/typography'

export default {
  server: {
    host: '0.0.0.0',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paul HENG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-url': {},
      },
    },
  },

  tailwindcss: {
    config: {
      darkMode: 'class',
      plugins: [tailwindTypography],
      theme: {
        container: {
          center: true,
        },
        extend: {
          typography: (theme) => ({
            light: {
              css: [
                {
                  color: theme('colors.gray.300'),
                  '[class~="lead"]': {
                    color: theme('colors.gray.200'),
                  },
                  a: {
                    color: theme('colors.white'),
                  },
                  strong: {
                    color: theme('colors.white'),
                  },
                  'ol > li::before': {
                    color: theme('colors.gray.300'),
                  },
                  'ul > li::before': {
                    backgroundColor: theme('colors.gray.500'),
                  },
                  hr: {
                    borderColor: theme('colors.gray.100'),
                  },
                  blockquote: {
                    color: theme('colors.gray.100'),
                    borderLeftColor: theme('colors.gray.500'),
                  },
                  h1: {
                    color: theme('colors.white'),
                  },
                  h2: {
                    color: theme('colors.white'),
                  },
                  h3: {
                    color: theme('colors.white'),
                  },
                  h4: {
                    color: theme('colors.white'),
                  },
                  'figure figcaption': {
                    color: theme('colors.gray.300'),
                  },
                  code: {
                    color: theme('colors.white'),
                  },
                  'a code': {
                    color: theme('colors.white'),
                  },
                  pre: {
                    color: theme('colors.gray.100'),
                    backgroundColor: theme('colors.gray.700'),
                  },
                  thead: {
                    color: theme('colors.white'),
                    borderBottomColor: theme('colors.gray.300'),
                  },
                  'tbody tr': {
                    borderBottomColor: theme('colors.gray.500'),
                  },
                },
              ],
            },
          }),
        },
      },
      variants: {
        extend: {
          typography: ['dark'],
        },
      },
    },
  },
  fontawesome: {
    icons: {
      solid: [
        'faCog',
        'faCodeBranch',
        'faCode',
        'faNetworkWired',
        'faCertificate',
        'faSquare',
        'faSchool',
        'faGraduationCap',
        'faServer',
        'faWifi',
        'faSun',
        'faMoon',
      ],
      regular: ['faCopyright'],
      brands: ['faDocker', 'faJenkins', 'faLinkedin', 'faGithub', 'faGitlab'],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  image: {
    provider: 'netlify',
  },
}
