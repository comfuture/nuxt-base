<template>
  <ui-scaffold locale="ko">
    <template #drawer>
      <menu class="global-menu">
        <ui-item to="/">Home</ui-item>
        <ui-item to="/component/alert">Alert</ui-item>
        <ui-item to="/component/button">Button</ui-item>
        <ui-item to="/component/drawer">Drawer</ui-item>
        <ui-item to="/component/modal">Modal</ui-item>
        <ui-item to="/component/popover">Popover</ui-item>
        <ui-item to="/component/toast">Toast</ui-item>
      </menu>
    </template>
    <nuxt-page />
  </ui-scaffold>
</template>
<style lang="postcss">
.global-menu {
  @apply flex flex-col;
  @apply bg-gray-500 text-white;

  &>.ui.item {
    @apply px-4 py-2;

    &.router-link-active {
      @apply bg-gray-600;
    }
  }
}
</style>