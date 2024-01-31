<template>
  <ui-item>
    <slot />
  </ui-item>
  <menu class="indent">
    <slot name="children" />
  </menu>
</template>
<style scoped lang="postcss">
.indent {
  @apply ps-2;
}
</style>
