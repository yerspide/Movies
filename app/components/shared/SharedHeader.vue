<script lang="ts" setup>
import { useWindowScroll, useWindowSize, watchDebounced } from '#imports'
import { SIGN_IN_PATH } from '~/constants/routes'
import { PAGES_LIST } from '~/constants/pages'
import { WATCH_DEBOUNCE_CALLBACK_DEFAULT } from '~/constants/app'

interface Props {
  canHide?: boolean
}

const props = defineProps<Props>()

const menuActive = ref(false)
const searchStr = ref('')

const { width: windowWidth } = useWindowSize()

const { y: scrollY } = useWindowScroll(window)
const isDirectionDown = ref(false)

const canHideByScroll = computed(() => props.canHide && isDirectionDown.value)

const oldScrollPosition = ref(scrollY.value)
watch(scrollY, (newPosition, oldPosition) => {
  if (!props.canHide || oldPosition === 0) {
    return
  }
  isDirectionDown.value = newPosition > oldScrollPosition.value

  oldScrollPosition.value = newPosition
})

watchDebounced(windowWidth, () => {
  menuActive.value = false
}, { debounce: WATCH_DEBOUNCE_CALLBACK_DEFAULT })
</script>

<template>
  <header
    class="bg-black transition-transform duration-600 shadow-xl shadow-black/40"
    :class="{ '-translate-y-100': canHideByScroll }"
  >
    <div class="relative py-4 overflow-hidden">
      <div class="container flex items-center justify-between">
        <div class="flex items-center gap-10">
          <NuxtLink
            v-animate="{ delay: 300, animationName: 'fade-in-left' }"
            to="/"
            aria-label="Перейти на главную страницу"
          >
            <SharedLogo />
          </NuxtLink>

          <nav class="max-lg:hidden">
            <ul
              v-animate="{ delay: 600, animationName: 'fade-in-left' }"
              class="flex items-center gap-3"
            >
              <li v-for="link in PAGES_LIST" :key="link.id">
                <NuxtLink
                  :to="link.path"
                  class="px-3 py-2 rounded-sm hover:bg-gray-700 transition-colors"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-3 z-2">
          <SharedInput
            v-model="searchStr"
            v-animate="{ delay: 600, animationName: 'fade-in-right' }"
            label="Поиск"
            class="w-100 max-xl:w-80 max-md:w-40 max-sm:hidden"
          />

          <NuxtLink
            v-animate="{ delay: 800, animationName: 'fade-in-right' }"
            :to="SIGN_IN_PATH"
            class="group flex items-center gap-1 hover:bg-gray-700 transition-colors px-3 py-2 rounded-sm max-lg:hidden"
          >
            <span>
              Войти
            </span>
            <Icon name="custom:sign-in" class="group-hover:translate-x-1 group-hover:scale-120 transition-transform" />
          </NuxtLink>

          <div class="hidden max-lg:block">
            <SharedButtonMenu
              v-model:active="menuActive"
              v-animate="{ delay: 500, animationName: 'fade-in-left' }"
              :size="25"
              class="size-10 p-1"
            />
          </div>
        </div>
      </div>

      <SharedVisualSpot
        v-animate="{ delay: 1300 }"
        bg-class="bg-blue-300"
        size-class="size-30"
        blur-class="blur-[100px]"
        class="absolute top-10 -left-10"
      />
      <SharedVisualSpot
        v-animate="{ delay: 1300, animationName: 'fade-in-down' }"
        bg-class="bg-red-300"
        size-class="size-30"
        blur-class="blur-[120px]"
        class="absolute -top-1/2 left-1/2"
      />
    </div>
  </header>
</template>