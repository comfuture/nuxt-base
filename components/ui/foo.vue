<script setup lang="ts">
import type { UIConfig } from '../../types';

const config = inject<UIConfig>('uiConfig')!;
</script>
<template>
  <ui-linkable>
    {{ config }}
  </ui-linkable>
</template>