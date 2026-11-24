<script setup lang="ts">
interface Props {
  size: number
}

defineProps<Props>()

const active = defineModel<boolean>('active', {
  required: true
})
</script>

<template>
  <button
    class="menu cursor-pointer"
    :class="{ active }"
    :style="{ '--size': size + 'px' }"
    type="button"
    :aria-expanded="active"
    aria-label="Меню"
    @click="active = !active"
  >
    <span
      v-for="element in 3" :key="element"
      class="tc-line transition-[transform,opacity] duration-300"
    />
  </button>
</template>

<style scoped>
.menu {
  --height: calc(var(--size) / 20);
  --gap: calc((var(--size) - 3 * var(--height)) / 3);
  --move: calc((var(--size) - var(--height)) / 2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--size);
  height: var(--size);
  padding: 0;
}

.tc-line {
  width: 100%;
  height: var(--height);
  border-radius: calc(var(--height) / 2);
  background-color: currentColor;
}

.active .tc-line:nth-child(1) {
  transform: translateY(var(--move)) rotate(45deg);
}

.active .tc-line:nth-child(2) {
  opacity: 0;
}

.active .tc-line:nth-child(3) {
  transform: translateY(calc(var(--move) * -1)) rotate(-45deg);
}
</style>
