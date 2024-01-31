import type { ToastInterface } from '../composables/use-toast'

declare module '#app' {
  interface NuxtApp {
    $toast: ToastInterface
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: ToastInterface
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const toast = useToast()
  nuxtApp.provide('toast', toast)
})
