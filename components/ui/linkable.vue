<script setup lang="ts">
import type { RouteLocation, RouteLocationRaw } from 'vue-router';
import type { LinkableProps } from '../../types';

const props = withDefaults(defineProps<Partial<LinkableProps>>(), {
  defaultTag: 'div'
})

const linkable = computed(() => {
  return props.href || props.to
})
const Tag = props.href
  ? 'a'
  : props.to
    ? resolveComponent('NuxtLink')
    : props.defaultTag;
</script>
<template>
  <component :class="{ linkable }" :is="Tag" :href="href" :to="to" v-bind="$attrs">
    <slot />
  </component>
</template>
<style scoped lang="postcss">
.linkable {
  @apply inline-flex;
}
</style>