<script setup lang="ts">
const props = defineProps<{
  type?: 'success' | 'info' | 'warning' | 'error'
  icon?: string
}>()

const getIcon = (type: string) => {
  switch (type) {
    case 'success':
      return 'check_circle'
    case 'info':
      return 'info'
    case 'warning':
      return 'warning'
    case 'error':
      return 'error'
  }
  return 'info'
}

const iconName = computed(() => {
  return props.icon ?? getIcon(props.type!)
})
</script>
<template>
  <ui-item class="alert" :class="type">
    <template #leading>
      <ui-icon :name="iconName" v-if="!!type" />
    </template>
    <slot />
  </ui-item>
</template>
<style lang="postcss">
.ui.alert {
  @apply rounded-md px-4 py-2 my-2;
  @apply flex items-center gap-2;
  @apply text-sm font-semibold;
  @apply border border-opacity-50;
  @apply transition-colors duration-200;
  @apply backdrop-blur-sm;

  .__content {
    @apply min-h-[24px];
  }

  &.success {
    @apply bg-success/50 border-success text-success-text;
  }

  &.info {
    @apply bg-info/50 border-info text-info-text;
  }

  &.warning {
    @apply bg-warning/50 border-warning text-warning-text;
  }

  &.error {
    @apply bg-error/50 border-error text-error-text;
  }
}
</style>