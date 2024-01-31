<script setup lang="ts">
import type { UIConfig } from '../../types';
const props = defineProps<{
  centered?: boolean
} | UIConfig>();

const { system: systemColorMode, store: storedColorMode } = useColorMode()
const colorMode = computed(() => storedColorMode.value === 'auto' ? systemColorMode.value : storedColorMode.value)
</script>
<template>
  <div class="ui scaffold">
    <ui-config-provider>
      <header v-if="$slots.header">
        <slot name="header" />
      </header>
      <aside class="drawer" v-if="$slots.drawer">
        <slot name="drawer" />
      </aside>
      <nuxt-error-boundary>
        <template #error="{ error = 'ERROR', clearError }">
          <div class="h-screen my-auto">
            <div>
              {{ error }}
              <button class="primary" @click="clearError">
                OK
              </button>
            </div>
          </div>
        </template>
        <section class="__content">
          <slot />
        </section>
      </nuxt-error-boundary>
      <div>
        <ui-button @click="storedColorMode = 'auto'">auto</ui-button>
        <ui-button @click="storedColorMode = 'dark'">dark</ui-button>
        <ui-button @click="storedColorMode = 'light'">light</ui-button>
      </div>
    </ui-config-provider>
  </div>
</template>
<style lang="postcss">
html.dark {
  color-scheme: light dark;
  background-image: linear-gradient(to bottom, #1e1e20 5%, #1e1f21 38%)
}

.ui.scaffold {
  @apply flex gap-2;

  >.drawer {
    @apply min-w-[200px];
  }

  >.__content {
    @apply container;
  }
}
</style>