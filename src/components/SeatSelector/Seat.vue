<script setup>
import {
  defineProps,
  defineEmits,
} from 'vue'

defineProps({
  disabled: Boolean,
  selected: Boolean,
})

const emits = defineEmits(['click'])
</script>

<template>
  <button
    @click="emits('click')"
    :class="[
      'seat',
      { 'selected': selected }
    ]"
    :disabled="disabled"
  >
  </button>
</template>

<style lang="scss" scoped>
.seat {
  display: block;
  width: 18px;
  height: 18px;
  border: 2px solid #DDD;
  border-radius: 999em;
  background: white;
  box-sizing: border-box;

  &:disabled {
    background: #DDD;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
  
  &.selected {
    border-color: #15964e;
    background-color: #15964e;
  }
}
</style>