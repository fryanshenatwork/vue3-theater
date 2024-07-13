<script setup>
import { ref } from 'vue'
import SeatSelector from '@/components/SeatSelector/index.vue'
import Seat from '@/components/SeatSelector/Seat.vue'

const selectedSeats = ref([90])

</script>

<template>
  <div class="home">
    <div class="seat-selector">
      <h3>請選擇觀看電影的座位</h3>
      <div class="instruction">
        <div><Seat selected/><span>您的座位</span></div>
        <div><Seat /><span>未售出</span></div>
        <div><Seat disabled/><span>已售出</span></div>
      </div>
      <div class="screen">螢幕</div>
      <SeatSelector
        v-model="selectedSeats"
        :disabledSeats="[88, 89, 104, 105, 106, 107, 108, 109, 116, 117, 118, 119, 120]"
        :amount="1"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  .seat-selector {
    width: 472px;
    margin: 0 auto;
  }
  h3{
    font-size: 1.2em;
    padding-bottom: 48px;
  }
  .instruction {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 .5em;
      span {
        padding-left: .3em;
      }
    }
  }
  .screen {
    border: 1px solid #DDD;
    width: 100%;
    padding: .5em 2.5em;
    text-align: center;
    margin: 32px 0;
    box-sizing: border-box;
  }
}

</style>