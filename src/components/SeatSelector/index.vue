<script setup>
import { defineProps, toRaw, defineModel, computed, defineEmits } from 'vue'
import Seat from './Seat.vue'

const emits = defineEmits(['change'])
const selectedSeats = defineModel('modelValue')

const { amount } = defineProps({
  disabledSeats: Array,
  amount: Number
})


const onClickSeat = (idx) => {
  const nextSelectedSeats = [...toRaw(selectedSeats.value)]
  
  const foundIdx = nextSelectedSeats.findIndex(e => e === idx)
  
  if (foundIdx > -1) {
    nextSelectedSeats.splice(foundIdx, 1)
  } else {
    nextSelectedSeats.push(idx)
  }
  if (nextSelectedSeats.length > amount) {
    nextSelectedSeats.shift()
  }
  selectedSeats.value = nextSelectedSeats
}

</script>

<template>
  <div class='seat-selector'>
  
    <div class="selector-wrapper">
      <template
        v-for="(item, itemIdx) in 160"
        :key="'seat' + item"
      >
        <div class="single-seat" >
          <Seat
            :disabled="disabledSeats.includes(itemIdx + 1)"
            :selected="selectedSeats.includes(itemIdx + 1)"
            @click="onClickSeat(item)"
          />
        </div>
        <div
          v-if="item % 16 === 3 || item % 16 === 13"
          class="walkway"
        /> 
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.seat-selector {
  .selector-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 26px) 2fr repeat(10, 26px) 2fr repeat(3, 26px);

    .single-seat {
      margin-bottom: .5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>