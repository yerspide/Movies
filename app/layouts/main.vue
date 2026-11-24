<template>
  <div class="flex flex-col min-h-screen">
    <SharedHeader class="fixed z-10 top-0 w-full" can-hide />
    <main class="pb-10">
      <slot />
    </main>

    <SharedFooter class="mt-auto" />
  </div>
</template>