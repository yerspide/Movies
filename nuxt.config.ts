import { DEFAULT_TITLE } from './app/constants/app'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import { MAX_LG, MAX_MD, MAX_SM, MAX_XL } from './app/constants/screens'

export default defineNuxtConfig({
  app: {
    rootId: 'movies-app',
    head: {
      title: DEFAULT_TITLE,
      htmlAttrs: { lang: 'ru' },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, interactive-widget=resizes-content'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icons/logo.png'
        }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIds: false
                }
              }
            }
          ]
        }
      })
    ]
  },
  image: {
    inject: true,
    presets: {
      q80: {
        modifiers: {
          quality: 80,
          format: 'webp'
        }
      }
    },
    screens: {
      sm: MAX_SM + 1,
      md: MAX_MD + 1,
      lg: MAX_LG + 1,
      xl: MAX_XL + 1
    }
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256
    },
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons'
      }
    ]
  },
  css: ['~/assets/css/core.css'],
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/icon/module', '@nuxt/image', '@vueuse/nuxt/module'],
  devtools: { enabled: true }
})
