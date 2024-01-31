<template>
  <span class="ui badge bg-gray-200">
    <slot />
  </span>
</template>
<style lang="postcss">
.ui.badge {
  @apply text-gray-800 px-2 py-1 rounded-sm text-xs;
  vertical-align: middle;
  word-break: keep-all;

  &.info {
    @apply bg-[color:info]/80 border border-[color:info];
  }

  &.success {
    @apply bg-[color:success]/50 border border-[color:success];
  }

  &.warning {
    @apply bg-yellow-200/50 border border-yellow-300/50;
  }

  &.danger {
    @apply bg-red-200/50 border border-red-300/50;
  }
}
</style>