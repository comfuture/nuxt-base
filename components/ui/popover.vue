<script setup lang="ts">
import { createPopper, type OptionsGeneric } from '@popperjs/core';
import type { OffsetModifier } from '@popperjs/core/lib/modifiers/offset';
defineOptions({
  inheritAttrs: false,
})

type PopoverTriggerMethod = 'click' | 'hover' | 'focus'
const props = withDefaults(defineProps<{
  trigger?: PopoverTriggerMethod
  placement?: OptionsGeneric<unknown>['placement']
  offset?: [number, number]
}>(), {
  trigger: 'click',
  placement: 'auto',
})

const trigger = ref<HTMLElement>()
const popover = ref<HTMLElement>()
let popper: ReturnType<typeof createPopper>
const targetIsVisible = useElementVisibility(popover)
const { width, height } = useWindowSize()
watch([targetIsVisible, width, height], () => {
  popper?.update()
})
onMounted(() => {
  const modifiers = []
  if (props.offset) {
    console.log('offset', props.offset)
    modifiers.push({
      name: 'offset',
      options: {
        offset: props.offset,
      },
    })
  }
  popper = createPopper(trigger.value!, popover.value!, {
    placement: props.placement, modifiers,
  });
  if (props.trigger === 'hover') {
    trigger.value?.addEventListener('mouseenter', () => {
      popover.value?.showPopover()
    })
    trigger.value?.addEventListener('mouseleave', () => {
      popover.value?.hidePopover()
    })
  } else {
    trigger.value?.addEventListener(props.trigger, () => {
      popover.value?.togglePopover()
    })
  }
})
onBeforeUnmount(() => {
  popper?.destroy()
})
</script>
<template>
  <span ref="trigger">
    <slot />
  </span>
  <div popover ref="popover" class="ui popover" v-bind="$attrs">
    <slot name="popover"></slot>
  </div>
</template>
<style lang="postcss">
.ui.popover {
  @apply p-2 bg-[color:transparent];
}
</style>