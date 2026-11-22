<script setup lang="ts">
type Theme = 'red'

interface Props {
  theme: Theme
}

defineProps<Props>()

const themeList = computed<Record<Theme, string>>(() => ({
  red: 'bg-red-600 text-white hover:bg-red-700',
}))
</script>

<template>
  <button class="cursor-pointer" :class="themeList[theme]">
    <slot/>
  </button>
</template>