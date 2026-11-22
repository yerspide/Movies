<script lang="ts" setup>
import { useWindowScroll } from '#imports'
import { MOVIES_PATH, SERIALS_PATH, SIGN_IN_PATH } from '~/constants/routes'

interface Props {
  canHide?: boolean
}

const props = defineProps<Props>()

const PAGES_LIST = [
  {
    id: 0,
    name: 'Фильмы',
    path: MOVIES_PATH
  },
  {
    id: 1,
    name: 'Сериалы',
    path: SERIALS_PATH
  }
]

const searchStr = ref('')

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
</script>

<template>
  <header
    class="bg-black py-4 overflow-hidden transition-transform duration-600"
    :class="{ '-translate-y-100': canHideByScroll }"
  >
    <div class="relative">
      <div class="container flex items-center justify-between">
        <div class="flex items-center gap-10">
          <NuxtLink
            v-animate="{ delay: 300, animationName: 'fade-in-left' }"
            class="inline-flex items-center gap-3"
            to="/"
            aria-label="Перейти на главную страницу"
          >
            <NuxtImg
              src="/icons/logo.svg"
              width="60"
              height="60"
              alt="Изображение логотипа"
            />

            <p class="text-2xl font-semibold">
              Все о фильмах
            </p>
          </NuxtLink>

          <nav>
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

        <div class="flex items-center gap-3">
          <SharedInput
            v-model="searchStr"
            v-animate="{ delay: 600, animationName: 'fade-in-right' }"
            label="Поиск"
            class="w-100"
          />

          <NuxtLink
            v-animate="{ delay: 800, animationName: 'fade-in-right' }"
            :to="SIGN_IN_PATH"
            class="group flex items-center gap-1 hover:bg-gray-700 transition-colors px-3 py-2 rounded-sm"
          >
            <span>
              Войти
            </span>
            <Icon name="custom:sign-in" class="group-hover:translate-x-1 group-hover:scale-120 transition-transform" />
          </NuxtLink>
        </div>
      </div>

      <SharedVisualSpot
        v-animate="{ delay: 1300, animationName: 'fade-in-up' }"
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