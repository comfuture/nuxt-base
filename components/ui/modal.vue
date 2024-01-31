<script setup lang="ts">
// TODO: implement keep-alive
const props = withDefaults(defineProps<{
  title?: string
  keepAlive?: boolean
  modeless?: boolean
}>(), {
  keepAlive: false,
  modeless: false
})

const open = defineModel<boolean>({
  required: false,
  default: false,
})

const emit = defineEmits({
  open: () => true,
  close: () => true,
})

const dialog = ref<HTMLDialogElement>()

watchEffect(() => {
  if (open.value) {
    nextTick(() => {
      props.modeless
        ? dialog.value?.show()
        : dialog.value?.showModal()
    })
  } else {
    dialog.value?.close()
  }
})
onMounted(() => {
  /** sync modal visibility with open prop when user close the modal */
  const handleCloseManually = () => {
    open.value = false;
  }
  dialog.value?.addEventListener('animationend', () => {
    open.value ? emit('open') : emit('close');
  })
  dialog.value?.addEventListener('close', handleCloseManually)
})
const openFunc = () => open.value = true
</script>
<template>
  <slot name="trigger" :open="openFunc" />
  <dialog class="ui modal" ref="dialog">
    <header class="__header">
      <h3>
        <slot name="header">{{ title }}</slot>
      </h3>
      <ui-icon name="close" class="cursor-pointer" @click="open = false" />
    </header>
    <section class="__content">
      <slot></slot>
    </section>
    <section class="__actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </section>
  </dialog>
</template>
<style lang="postcss">
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(.75);
  }

  95% {
    transform: scale(1.02);
  }

  100% {
    opacity: 1;
    transform: scale(1.0);
  }
}

@keyframe slide-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.ui.modal {
  @apply bg-white rounded shadow-lg border border-gray-300 overflow-y-auto p-0;
  @apply w-full max-w-[calc(100vw-2rem)];

  &:focus {
    @apply outline-none;
  }

  &:not(.confirm) {
    @apply mt-8 md:mt-auto;
  }

  @screen md {
    @apply min-w-[200px] w-[fit-content];
  }

  @screen lg {
    @apply min-w-[300px] w-[fit-content];
  }

  &[open] {
    animation: slide-in 1.125s ease-in-out normal;

    @screen md {
      animation: appear 0.125s ease-out normal;
    }
  }

  &:focus {
    @apply ring-0;
  }

  header.__header {
    @apply p-2 border-b border-gray-200 sticky top-0 font-bold;
    @apply flex justify-between items-center;

    h3 {
      @apply flex gap-2;
    }
  }

  .__content {
    @apply p-2 min-h-16;
  }

  .__actions {
    @apply py-1 px-2 border-t border-gray-200 flex justify-end gap-2 sticky bottom-0 bg-white;
  }

  &::backdrop {
    @apply bg-black/30 dark:bg-white/20;
    backdrop-filter: blur(1px);
  }
}
</style>
