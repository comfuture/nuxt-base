<script setup lang="ts">
const props = withDefaults(defineProps<{
  currency?: string;
  precision?: number;
  percent?: boolean;
  value?: number | string;
  nullable?: boolean;
}>(), {
  nullable: false,
});

const content = computed(() => {
  const locale = inject('locale', 'ko-KR');

  if (props.nullable && !props.value) {
    return '-';
  }
  const numericValue = isNaN(+(props.value ?? 0)) ? 0 : +(props.value ?? 0)
  return Intl.NumberFormat(locale, {
    style: props.percent ? 'percent' : props.currency ? 'currency' : undefined,
    currency: props.currency,
    maximumFractionDigits: props.precision ?? (props.percent ? 2 : 0),
  }).format(numericValue);
});
</script>
<template>
  <data class="ui number" :value="value" :class="{ empty: content === '-' }">{{ content }}</data>
</template>
<style lang="postcss">
.ui.currency {
  @apply slashed-zero tabular-nums;

  &.empty {
    @apply text-gray-400;
  }
}
</style>