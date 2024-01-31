<template>
  <div class="ui steps">
    <slot></slot>
  </div>
</template>
<style lang="postcss">
.ui.steps {
  @apply flex gap-1;

  >* {
    @apply flex gap-1;
  }

  > :not(:last-child)::after {
    vertical-align: middle;
    /* color: canvastext; */
    content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>');

    >path {
      fill: white;
    }
  }
}
</style>