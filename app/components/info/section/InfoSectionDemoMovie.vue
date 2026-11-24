<script setup lang="ts">
import { DEMO_MOVIE_INFO } from '~/constants/demo-movie'
import { useMounted, useScreenBreakpoints } from '#imports'
import { getFirstLetterUppercase } from '~/utils/text'
import { getDurationTextFromNumber, getDurationDatetimeISO } from '~/utils/time'

const isMounted = useMounted()
const { isSm, isMd } = useScreenBreakpoints()

const canApplyAnimation = computed(() => isMounted.value && !(isSm.value || isMd.value))

const poster = DEMO_MOVIE_INFO.posterInfo
const backgroundMedia = DEMO_MOVIE_INFO.backgroundInfo

const countriesLength = DEMO_MOVIE_INFO.countries.length
const actorsLength = DEMO_MOVIE_INFO.actors.list.length

const genreFormatted = getFirstLetterUppercase(DEMO_MOVIE_INFO.genre.join(', '))

const durationFormatted = getDurationTextFromNumber(DEMO_MOVIE_INFO.duration)
const durationDateTimeISO = getDurationDatetimeISO(DEMO_MOVIE_INFO.duration)
</script>

<template>
  <div class="container">
    <div
      v-animate
      class="
        relative overflow-hidden flex flex-col bg-linear-to-b from-gray-900 to-gray-800 rounded-3xl p-10
        max-sm:p-3
      "
    >
      <div class="z-2 flex flex-col gap-20 max-lg:gap-10">
        <div class="flex flex-col gap-40 max-lg:gap-20 max-md:gap-10">
          <h2
            v-animate="{ delay: 900 }"
            class="text-4xl font-semibold text-center max-lg:text-3xl max-md:text-xl max-sm:text-base"
          >
            Познакомьтесь ближе с фильмами
          </h2>

          <div
            v-animate="{ delay: 900, animationName: 'fade-in-down' }"
            class="flex flex-col relative mx-auto max-md:gap-10"
          >
            <NuxtImg
              :src="poster.src"
              :width="poster.width"
              :height="poster.height"
              sizes="600px"
              class="
                rounded-2xl shadow-2xl shadow-cyan-300/20 delay-75 duration-1000 w-150
                max-xl:w-120
              "
              :alt="`Обложка фильма '${DEMO_MOVIE_INFO.name}'`"
            />

            <div class="flex flex-col gap-2">
              <InfoDemoDetailCard
                class="absolute -left-30 top-0 max-w-50 max-lg:-left-10 max-md:static max-md:max-w-full"
                :class="{ swimming: canApplyAnimation }"
                container-class="rotate-5 max-md:rotate-0"
              >
                <p class="flex items-center flex-wrap gap-2">
                  <span class="relative">
                    <time class="pr-3">
                      {{ DEMO_MOVIE_INFO.year }}
                    </time>

                    <span class="absolute right-0 top-1/2 -translate-y-1/2 block size-1 bg-gray-600" />
                  </span>

                  <span v-for="(country, idx) in DEMO_MOVIE_INFO.countries" :key="idx">
                    {{ country }}

                    <template v-if="countriesLength > 1 && idx !== countriesLength - 1">
                      ,
                    </template>
                  </span>
                </p>
              </InfoDemoDetailCard>

              <InfoDemoDetailCard
                class="absolute -left-60 top-1/3 max-w-80 max-lg:-left-25 max-md:static max-md:max-w-full"
                container-class="-rotate-2 max-md:rotate-0"
                :class="{ swimming: canApplyAnimation }"
                style="--swim-duration:2500ms"
              >
                <p class="flex flex-col gap-0.5">
                  <span class="text-gray-400 text-xs">
                    Жанр
                  </span>

                  {{ genreFormatted }}
                </p>
              </InfoDemoDetailCard>

              <InfoDemoDetailCard
                class="
                  absolute -left-80 top-3/4 max-w-90 max-xl:-left-60 max-lg:-left-15 max-lg:top-4/6
                  max-md:static max-md:max-w-full
                "
                container-class="-rotate-4 max-md:rotate-0"
                :class="{ swimming: canApplyAnimation }"
                style="--swim-duration:3000ms"
              >
                <p class="flex flex-col gap-0.5">
                  <span class="text-xs text-gray-400">
                    Актеры:
                  </span>
                  <span>
                    <span v-for="(actor, idx) in DEMO_MOVIE_INFO.actors.list" :key="actor.id">
                      {{ actor.name }}<template v-if="actorsLength > 1 && idx !== actorsLength - 1">, </template>
                    </span>

                    <span v-if="!DEMO_MOVIE_INFO.actors.isAll" class="text-sm">
                      и другие.
                    </span>
                  </span>
                </p>
              </InfoDemoDetailCard>

              <InfoDemoDetailCard
                class="absolute -right-20 top-2 max-w-90 max-md:static max-md:max-w-full"
                container-class="rotate-4 max-md:rotate-0"
                :class="{ swimming: canApplyAnimation }"
                style="--swim-duration:1600ms"
              >
                <p class="text-sm">
                  Продолжительность:
                  <time :datetime="durationDateTimeISO">
                    {{ durationFormatted }}
                  </time>
                </p>
              </InfoDemoDetailCard>

              <InfoDemoDetailCard
                class="absolute -right-20 top-1/3 max-w-90 max-md:static"
                container-class="rotate-7 max-md:rotate-0"
                :class="{ swimming: canApplyAnimation }"
                style="--swim-duration:2100ms"
              >
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-1">
                    <Icon name="custom:star" class="text-yellow-300" />
                    <span class="text-gray-300 text-sm">
                      Рейтинг
                    </span>
                  </div>

                  <div class="flex items-center flex-wrap gap-2">
                    <p
                      v-for="rating in DEMO_MOVIE_INFO.rating"
                      :key="rating.sourceName"
                      class="rounded-full px-2 py-0.5 text-sm"
                      :class="rating.colorClass"
                    >
                      {{ rating.sourceShortName || rating.sourceName }} {{  rating.value }}
                    </p>
                  </div>
                </div>
              </InfoDemoDetailCard>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-5 max-sm:gap-3">
          <h3
            v-animate="{ delay: 900, animationName: 'fade-in-down' }"
            class="text-3xl font-bold max-lg:text-2xl max-sm:text-xl"
          >
            {{ DEMO_MOVIE_INFO.name }}
          </h3>

          <p
            v-animate="{ delay: 1200, animationName: 'fade-in-down' }"
            class="max-w-200 text-center max-lg:text-sm max-sm:text-xs"
          >
            {{ DEMO_MOVIE_INFO.description }}
          </p>
        </div>
      </div>

      <NuxtImg
        v-if="backgroundMedia"
        v-animate="{ delay: 1000 }"
        :src="backgroundMedia.src"
        :width="backgroundMedia.width"
        :height="backgroundMedia.height"
        sizes="1220px"
        class="absolute bottom-0 left-0 w-full h-full object-cover blur-xl"
        :alt="`Задний фон фильма '${DEMO_MOVIE_INFO.name}'`"
      />
    </div>
  </div>
</template>