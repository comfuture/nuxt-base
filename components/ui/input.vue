<script setup lang="ts">
defineOptions({
  name: 'ui-input',
  inheritAttrs: false
})
const props = withDefaults(defineProps<{
  type: string
}>(), {
  'type': 'text'
})
const attrs = useAttrs()
const model = defineModel()
</script>
<template>
  <div class="ui input">
    <slot name="prepend" />
    <slot>
      <input :type="type" v-bind="$attrs" v-model="model">
    </slot>
    <slot name="append" />
  </div>
</template>
<style lang="postcss">
.ui.input {
  @apply flex flex-row items-stretch;

  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="number"],
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"],
  input[type="week"],
  input[type="tel"],
  input[type="url"],
  select,
  textarea {
    @apply block w-full rounded border border-gray-300 px-2 py-1;

    &:not(:first-child) {
      @apply rounded-l-none !important;
    }

    &:not(:last-child) {
      @apply rounded-r-none !important;
    }
  }

  >.ui.badge,
  >button {
    @apply flex flex-row items-center justify-center border border-gray-300 px-2 py-1 rounded-none;
    word-break: keep-all;
    white-space: nowrap;

    &:first-child {
      @apply border border-r-0 rounded-l;
    }

    &:last-child {
      @apply border border-l-0 rounded-r;
    }
  }
}
</style>