<script setup lang="ts">
const toast = useToast()
const addToast = () => {
  toast.info('info message', 'info', 3000)
}
</script>
<template>
  <div>
    <ui-button @click="addToast">Add Toast</ui-button>
  </div>
</template>