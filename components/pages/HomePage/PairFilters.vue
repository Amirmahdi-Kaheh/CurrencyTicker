<script setup lang="ts">
const {getTickersByPair} = useTickersStore();

const emit = defineEmits(['changed']);
const pairList = ref(['USDT', 'IRT']);
const selectedPair = ref(pairList.value[0]);

function togglePair(pair: string) {
  selectedPair.value = pair;
  emit('changed', pair);
}
</script>

<template>
  <div class="flex items-center gap-x-2 py-4 border-t border-border">
    <button v-for="(pair, pairIndex) in pairList" :key="pairIndex" @click="togglePair(pair)" class="btn px-4 py-1 rounded-full border border-border text-sm text-en" :class="{'bg-primary text-white': pair === selectedPair}">
      {{pair}}
    </button>
  </div>
</template>

<style scoped>

</style>
