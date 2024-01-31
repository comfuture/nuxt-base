<script setup lang="ts">
import type { RouteLocation, RouteLocationRaw } from 'vue-router';

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  to?: string | RouteLocation | RouteLocationRaw
  href?: string
  icon?: string
  loading?: boolean
}>(), {
  type: 'button',
  disabled: false,
})

const Tag = props.to || props.href ? resolveComponent('NuxtLink') : 'button';

const icon = computed(() => {
  if (props.loading) return 'progress_activity'
  return props.icon
})
</script>
<template>
  <ui-linkable default-tag="button" class="ui button" :class="{ 'has-icon': !!icon }">
    <ui-icon v-if="icon" :class="{ loading }" :name="icon" />
    <slot />
  </ui-linkable>
</template>
<style lang="postcss">
button.ui,
a.ui.button {
  @apply px-4 py-2 rounded text-sm align-middle text-center;
  @apply bg-[color:buttonface] text-[color:buttontext];

  &:focus {
    @apply outline-none;
  }

  &.has-icon {
    @apply px-2 py-1.5;
  }

  &.sm {
    @apply px-2 py-1.5 text-xs rounded-sm;
  }

  i.material-symbols-outlined {
    @apply text-lg leading-3;

    &.loading {
      @apply animate-spin;
    }
  }

  &.primary {
    @apply bg-blue-500;
    @apply bg-primary border-primary text-white;
  }

  &.secondary {
    @apply bg-gray-500;
    @apply bg-secondary text-white;
  }

  &.warning {
    @apply bg-yellow-500 text-white;
  }

  &.success {
    @apply bg-green-500 text-white;
  }

  &.danger {
    @apply bg-red-500 text-white;
  }

  &.link {
    @apply inline-flex bg-transparent px-0 py-0 mx-0 hover:underline;
  }

  &.outline {
    @apply border bg-transparent !important;
    color: inherit !important;
    outline-style: none;
    /* ignore tailwind inherits */
  }

  &.circular {
    @apply rounded-full;
  }

  &:disabled,
  &.disabled {
    @apply bg-gray-300 text-gray-400/[0.2] cursor-not-allowed;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2);
  }

}

.__actions {

  button.ui,
  a.ui.button {
    @apply text-sm px-2 py-1 rounded;
  }
}
</style>