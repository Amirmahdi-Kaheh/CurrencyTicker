<script setup lang="ts">
const {tickers} = useTickersStore()
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <cards-symbol v-for="(symbol, symbolIndex) in tickers" :key="symbolIndex" v-bind="symbol"></cards-symbol>
  </div>
</template>

<style scoped>

</style>
