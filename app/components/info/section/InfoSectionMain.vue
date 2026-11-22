<template>
  <div class="tc-main-info">
    <div class="container py-60">
      <div class="flex flex-col gap-8">
        <h1
          v-animate="{ delay: 300, animationName: 'fade-in-left' }"
          class="text-4xl max-w-150 font-bold"
        >
          Погрузитесь во&nbsp;вселенную<br />
          бесконечного контента
        </h1>
        <div class="flex flex-col gap-4">
          <p
            v-animate="{ delay: 600, animationName: 'fade-in-left' }"
            class="text-xl max-w-100"
          >
            Описание фильмов, рейтинг, интересные факты и многое другое ждут Вас!
          </p>

          <SharedButton
            v-animate="{ delay: 900, animationName: 'fade-in-left' }"
            theme="red"
            class="px-4 py-3 rounded-md w-fit"
          >
            Попробовать
          </SharedButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.tc-main-info {
  background: url(/images/main-background.png) center no-repeat;
  background-size: cover;
}
</style>