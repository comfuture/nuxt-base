<script setup lang="ts">
import { messages } from '../../composables/use-toast'

const container = ref<HTMLElement>()
const iconName = (type: string) => {
  if (type === 'success') return 'check_circle';
  return type;
}
watchEffect(() => {
  // to bring the toast container to front when messages changed
  if (messages.value.length > 0) {
    console.log('messages changed')
    container.value?.hidePopover()
    container.value?.showPopover()
  }
})

onMounted(() => {
  container.value?.showPopover()
})
</script>
<template>
  <div popover="manual" ref="container" class="ui toast">
    <transition-group name="toast">
      <ui-item v-for="message in messages" :key="message.id">
        <template #leading>
          <ui-icon :name="iconName(message.type)" />
        </template>
        <h2 v-if="message.title">{{ message.title }}</h2>
        <p>{{ message.message }}</p>
      </ui-item>
    </transition-group>
  </div>
</template>
<style lang="postcss">
.toast-enter-from {
  transform: translateX(30px);
}

.toast-leave-to {
  opacity: 0.7;
  transform: scale(0.5);
}

.toast-leave-active {
  position: absolute;
}

.ui.toast {
  @apply mr-0 mt-0 p-4 bg-transparent;

  &:popover-open {
    @apply flex flex-col gap-3 top-0 bottom-0 right-0;
  }

  >.ui.item {
    transition: all 0.125s ease-out;
    @apply canvas;
    @apply backdrop-blur rounded shadow-lg p-2 min-w-64 select-none;
    /* @apply dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100; */
  }
}
</style>