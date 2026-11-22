<script lang="ts" setup generic="T extends string">
import type { VueClassType } from "~/types/index";

interface Props {
  placeholder?: string
  type?: string
  inputId?: string
  required?: boolean
  error?: boolean
  inputClass?: VueClassType
  errorText?: string
  maxLength?: number
  minLength?: number
  isSearch?: boolean
  name?: string
  label?: string
}

const props = defineProps<Props>();

const model = defineModel<T>("modelValue", {
  required: true,
});

const id = props.inputId || useId();
const isFocused = ref(false);
const hasValue = computed(() => model.value.length)
</script>

<template>
  <div class="flex flex-col gap-1">
    <div
      class="tc-input-container relative"
      :class="{ 'has-label': label, error }"
    >
      <input
        :id
        v-model="model"
        :placeholder="label && !isFocused ? '' : placeholder"
        :type
        :required
        :name
        :maxlength="maxLength"
        :minlength="minLength"
        :class="inputClass"
        :aria-invalid="error || undefined"
        class="tc-input grow"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />

      <label
        v-if="label"
        :for="id"
        class="tc-label duration-200"
        :class="{ 'move-top': hasValue || isFocused }"
      >
        {{ label }}
      </label>

      <div v-if="$slots.icon" class="pr-3">
        <slot name="icon" :is-focused="isFocused" />
      </div>
    </div>

    <span
      v-if="error && errorText"
      class="text-red-700"
    >
      {{ errorText }}
    </span>
  </div>
</template>

<style lang="postcss" scoped>
.tc-input-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
  background-color: var(--color-gray-800);
  color: var(--color-gray-60);
  transition: border-color 200ms ease;

  .tc-input {
    display: block;
    width: 100%;
    padding: 6px 10px;
    border: 0;
    background-color: transparent;
    color: inherit;

    &::placeholder {
      color: var(--color-gray-400);
    }

    &:focus {
      outline: none;
    }
  }

  &.has-label {
    .tc-input {
      min-height: 48px;
      padding: 18px 10px 4px;
    }
  }

  .tc-label {
    position: absolute;
    top: 50%;
    left: 10px;
    color: var(--color-gray-400);
    pointer-events: none;
    transform: translateY(-50%);

    &.move-top {
      top: 15%;
    }
  }


  &.error {
    border-color: var(--color-red-700);

    .tc-input {
      color: var(--color-red-700);

      &::placeholder {
        color: var(--color-red-700);
      }
    }
  }
}
</style>
