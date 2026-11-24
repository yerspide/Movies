<script setup lang="ts">
import { LOGO_TITLE } from '~/constants/app'
</script>

<template>
  <div class="flex items-center gap-3">
    <NuxtImg
      src="/icons/logo.svg"
      width="60"
      height="60"
      class="max-xl:size-10 max-sm:size-7"
      alt="Изображение логотипа"
    />

    <p class="text-2xl font-semibold max-xl:text-xl max-md:text-base max-sm:text-sm">
      {{ LOGO_TITLE }}
    </p>
  </div>
</template>