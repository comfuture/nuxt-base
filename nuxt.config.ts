import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  plugins: [
    '../plugins/toast.client',
  ],
  css: [
    join(currentDir, './assets/base.postcss')
  ],
  devtools: { enabled: true },
})
