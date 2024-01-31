<script setup lang="ts">
const open = defineModel<boolean>()
const popover = ref<HTMLElement>()
watch(open, () => {
  if (open.value) {
    popover.value?.showPopover()
  } else {
    popover.value?.hidePopover()
  }
}, { immediate: true })
</script>
<template>
  <aside popover="manual" ref="popover" class="ui drawer">
    <slot />
  </aside>
</template>
<style lang="postcss">
.ui.drawer {
  margin: unset;
  inset-inline-start: unset;
  inset-inline-end: unset;
  @apply fixed top-0 bottom-0 right-0 w-64 h-screen;
  @apply transition-all duration-300 ease-in-out;
}
</style>
