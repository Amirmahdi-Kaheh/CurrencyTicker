<script setup lang="ts">
const {getTickersByPair} = useTickersStore();

const currentPair = ref('USDT');
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <pages-home-page-pair-filters @changed="(val)=> currentPair = val"></pages-home-page-pair-filters>

    <cards-symbol v-for="(symbol, symbolIndex) in getTickersByPair(currentPair)" :key="symbolIndex" v-bind="symbol"></cards-symbol>
  </div>
</template>

<style scoped>

</style>
