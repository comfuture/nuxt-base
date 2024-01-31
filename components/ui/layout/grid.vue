<script setup lang="ts">
// const props = defineProps<{
//   cols?: number,
//   rows?: number,
//   gap?: number,
// }>()
</script>
<template>
  <section class="ui layout grid">
    <slot />
  </section>
</template>
<style lang="postcss">
.layout.grid {
  /* @apply grid-cols-12 gap-4; */
}
</style>