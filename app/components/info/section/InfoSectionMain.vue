<template>
  <div
    class="
      tc-main-info relative min-h-[70vh] bg-center max-xl:bg-left max-md:min-h-auto
      max-md:bg-left
    "
  >
    <div class="relative z-2 container py-60 max-lg:pt-40 max-md:py-28 max-sm:py-20">
      <div class="flex flex-col gap-8 max-md:gap-4 max-w-150 max-md:max-w-90 max-sm:max-w-none max-sm:text-center">
        <h1
          v-animate="{ delay: 300, animationName: 'fade-in-left' }"
          class="text-4xl font-bold max-md:text-2xl"
        >
          Погрузитесь во&nbsp;вселенную<br />
          бесконечного контента
        </h1>
        <div class="flex flex-col gap-4">
          <p
            v-animate="{ delay: 600, animationName: 'fade-in-left' }"
            class="text-xl pr-20 max-md:text-base max-md:pr-0"
          >
            Описание фильмов, рейтинг, интересные факты и&nbsp;многое другое ждут Вас!
          </p>

          <SharedButton
            v-animate="{ delay: 900, animationName: 'fade-in-left' }"
            theme="red"
            class="px-4 py-3 rounded-md w-fit max-md:px-3 max-md:py-2 max-md:text-sm max-sm:w-full"
          >
            Попробовать
          </SharedButton>
        </div>
      </div>
    </div>

    <div class="bg-black/40 absolute inset-0 max" />
  </div>
</template>

<style lang="postcss" scoped>
.tc-main-info {
  background-image: url(/images/main-background.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>