<script setup lang="ts">
const modalOpen = ref(false);
</script>
<template>
  <div>
    <ui-steps>
      <a href="#">Step 1</a>
      <a href="#">Step 2</a>
      <div>Step 3</div>
    </ui-steps>
    <ui-button @click="modalOpen = true">Open Modal</ui-button>
    <ui-modal title="Modal Test" v-model="modalOpen">
      Modal Content alskdjf alksjdf laksjd flkasj flka jsdlkf
    </ui-modal>

    <ui-modal title="with trigger">
      <template #trigger="{ open }">
        <ui-button @click="open">Open Modal</ui-button>
      </template>
      Modal Content alskdjf alksjdf laksjd flkasj flka jsdlkf
    </ui-modal>
    <!-- <ui-toast /> -->
  </div>
</template>