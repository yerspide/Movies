<script setup lang="ts">
import { MOVIES_SOURCES } from '~/constants/app'

const sourceNamesList = Object.values(MOVIES_SOURCES).map(({ id, name }) => ({ id, name }))
</script>

<template>
  <div class="flex flex-col pb-20 pt-10 gap-25">
    <p
      v-animate="{ duration: 500, delay: 600, animationName: 'fade-in-up', repeatOnScroll: true }"
      class="flex gap-4 border border-gray-700 px-4 py-3 rounded-full self-center"
    >
      <span>
        Источники:
      </span>

      <span class="block bg-gray-700 w-px shrink-0" />

      <span
        v-for="(source, idx) in sourceNamesList"
        :key="source.id"
        class="relative pr-5"
      >
        {{ source.name }}

        <span
          v-if="idx !== sourceNamesList.length - 1"
          class="size-1 bg-gray-700 block absolute right-0 top-1/2 -translate-y-1/2"
        />
      </span>
    </p>

    <div class="flex flex-col gap-10 container">
      <h2
        class="text-4xl font-bold text-center"
      >
        Источники данных
      </h2>

      <div class="grid grid-cols-3 gap-10">
        <article
          v-for="(source, _, idx) in MOVIES_SOURCES"
          :key="source.id"
          v-animate="{ delay: 400 * (idx + 1), animationName: 'fade-in-up' }"
          class="relative flex flex-col gap-6 border p-5 rounded-xl border-gray-700 overflow-hidden"
        >
          <p
            class="
              flex items-center justify-center bg-gray-600 max-w-full rounded-xl h-10 min-w-10 px-0.5
              w-fit text-sm align-middle text-center text-gray-100
            "
          >
            <span class="truncate">
              {{ source.shortName || source.name }}
            </span>
          </p>

          <p class="text-3xl font-medium text-gray-100">
            {{ source.name }}
          </p>
          <p class="text-gray-200">
            {{ source.description }}
          </p>


           <SharedVisualSpot
              v-if="source.spotClass"
              v-animate="{ delay: 900 * (idx + 1), animationName: 'fade-in-right' }"
              :bg-class="source.spotClass"
              size-class="size-30"
              blur-class="blur-[120px]"
              class="absolute -top-1/2 right-0"
            />
        </article>
      </div>
    </div>
  </div>
</template>