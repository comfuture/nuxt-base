<script setup lang="ts">
import type { UIConfig } from '../../types';
const props = withDefaults(defineProps<{
  locale?: string
}>(), {
  locale: 'en',
});
provide<UIConfig>('uiConfig', props);
</script>
<template>
  <slot />
</template>