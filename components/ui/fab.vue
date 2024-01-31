<template>
  <ui-button class="fab">
    <slot />
  </ui-button>
</template>
<style lang="postcss">
.ui.fab {
  @apply fixed bottom-4 right-4 aspect-square p-8 rounded-full;
}
</style>