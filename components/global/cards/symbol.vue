<script setup lang="ts">
import {formatPrice} from "~/utils/numbers";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  open24h: {
    type: String,
    required: true,
  },
  pair: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  }
});

const calculateChangePercent = () => {
  const changePercent = ((parseFloat(props.last) - parseFloat(props.open24h)) / parseFloat(props.open24h)) * 100;
  return changePercent.toFixed(2); // Round to 2 decimal places
}
const changePercent = computed(calculateChangePercent);
</script>

<template>
  <div class="flex items-center justify-between p-4 rounded-lg bg-border">
   <div class="flex items-center gap-x-2">
     <img :src="icon" alt="" class="h-7 w-7 rounded-full">
     <span class="text-en text-sm">{{symbol}}</span>
   </div>
    <div class="flex items-center gap-2">
      <div>
        <span class="px-2 py-0.5 rounded-full text-en text-sm" dir="ltr" :class="[{'bg-negative-light text-negative': changePercent < 0}, {'bg-positive-light text-positive': changePercent >= 0}]">{{changePercent}}%</span>
      </div>
      <div class="flex items-center gap-x-1 ">
        <span class="text-en">{{formatPrice(last)}}</span>
        <span class="text-sm opacity-70 text-en">{{pair}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
