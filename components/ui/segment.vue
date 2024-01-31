<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  title?: string,
  subtitle?: string,
  noMargin?: boolean,
  loading?: boolean
}>();

const attrs = useAttrs();
</script>
<template>
  <div class="ui segment">
    <header class="__header" v-if="props.title || $slots.title || $slots.actions">
      <div class="flex gap-2 items-center">
        <slot name="title">
          <h3 class="title">{{ props.title }}</h3>
          <div class="subtitle">{{ props.subtitle }}</div>
        </slot>
      </div>
      <div class="__actions" v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </header>
    <section class="__content" v-bind="attrs" :class="{ 'no-margin': noMargin }">
      <slot />
      <div class="loading" v-if="props.loading">
        <ui-icon name="progress_activity" class="animate-spin" />
      </div>
    </section>
    <section class="__footer" v-if="$slots.footer">
      <slot name="footer" />
    </section>
  </div>
</template>
<style lang="postcss">
.ui.segment {
  @apply rounded flex flex-col;
  @apply canvas;

  header.__header {
    @apply p-2 border-b border-gray-200 rounded-t flex justify-between items-center;
    @apply min-h-[24px] overflow-x-hidden;

    .title {
      @apply font-semibold;
    }

    .subtitle {
      @apply text-sm text-gray-500 overflow-x-hidden truncate text-nowrap;
    }
  }

  section.__content {
    @apply p-2 relative overflow-x-auto;

    &.no-margin {
      @apply p-0;
    }

    >.loading {
      @apply backdrop-blur absolute left-0 top-0 w-full h-full inset-0 flex justify-center items-center;
    }
  }

  .__actions {
    @apply flex gap-2;
  }

  .__footer {
    @apply p-2 border-t border-gray-200 rounded-b;
  }
}
</style>
