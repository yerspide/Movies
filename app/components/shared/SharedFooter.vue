<script setup lang="ts">
import { DEVELOPMENT_START_FROM_YEAR, LOGO_TITLE } from '~/constants/app'
import { getYearsRangeTextWithCurrent } from '~/utils/time'

const curentYear = (new Date).getFullYear()

const yearRange = getYearsRangeTextWithCurrent(DEVELOPMENT_START_FROM_YEAR, curentYear)
</script>

<template>
  <footer class="container">
    <div class="flex flex-col gap-4 border-t border-gray-600 py-4">
      <SharedLogo class="self-end" />

      <p class="font-medium max-w-1/2 max-xl:max-w-full max-md:text-xs">
        {{ LOGO_TITLE }} © {{ yearRange }} — сервис, предоставляющий структурированные данные о&nbsp;кино. Агрегация
        из&nbsp;открытых источников (Кинопоиск, TMDb, IMDb). Все права на&nbsp;оригинальные материалы принадлежат
        их&nbsp;правообладателям.
      </p>
    </div>
  </footer>
</template>