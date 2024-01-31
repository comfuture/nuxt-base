<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()
</script>
<template>
  <ui-linkable class="ui item">
    <slot name="leading">
      <ui-icon :name="props.icon" v-if="props.icon" />
    </slot>
    <div class="__content">
      <slot />
    </div>
    <slot name="trailing" />
  </ui-linkable>
</template>
<style lang="postcss">
.ui.item {
  @apply flex gap-2 w-full items-center;

  &>.__content {
    @apply flex-grow overflow-hidden;

    .title,
    h1,
    h2,
    h3 {
      @apply flex items-center gap-2 font-semibold truncate;
    }

    .subtitle {
      @apply text-sm text-gray-500 truncate;
    }
  }
}
</style>