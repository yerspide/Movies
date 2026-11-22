<script setup lang="ts">
import type { VueClassType } from '~/types';

interface Props {
  containerClass?: VueClassType
  contentClass?: VueClassType
}

defineProps<Props>()
</script>

<template>
  <div>
    <div :class="containerClass">
      <div class="p-3 bg-gray-700 rounded-xl shadow-xl" :class="contentClass">
        <slot />
      </div>
    </div>
  </div>
</template>