<template>
  <main>
    <article class="prose container">
      <h1>
        Core concept
      </h1>
      Vue Simple UI is designed to try to comply with the standard. It uses html5 native tags whenever possible. Minimize
      nested wrapper or helper elements and use minimal expressive css. It may not work correctly in older browsers.
      However, we cannot afford to waste any more opportunities to maintain the old technology. Let's move forward.

      <h2>
        Themeing
      </h2>
      Most of the components in Vue Simple UI do not provide attributes for color or text styling, such as `color` or
      `size`.
      This is to avoid being tied to limited colors or standardized text styles. To customize the provided default styles,
      you can leverage CSS, which we are already familiar with.

      <ui-layout-grid class="grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ui-item class="border border-gray-400 shadow" v-for="i in 30">
          Item - {{ i }}
        </ui-item>
      </ui-layout-grid>
      <ui-fab class="bg-primary w-12" icon="add" />

      <ui-item-tree>
        hello
        <template #children>
          <ui-item-tree>
            world
          </ui-item-tree>
        </template>
      </ui-item-tree>
    </article>
  </main>
</template>