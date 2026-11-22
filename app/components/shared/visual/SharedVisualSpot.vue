<script setup lang="ts">
import type { VueClassType } from '~/types';

interface Props {
  bgClass: VueClassType
  sizeClass: VueClassType
  blurClass: VueClassType
}

defineProps<Props>()
</script>

<template>
  <div :class="[bgClass, sizeClass, blurClass]" />
</template>