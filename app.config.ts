export default defineAppConfig({
  myLayer: {
    name: 'Base Nuxt UI Layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
