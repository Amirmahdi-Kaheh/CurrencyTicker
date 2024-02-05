<script setup lang="ts">
const props = defineProps({
  question: {
    type: String,
    default: ""
  },
  answer: {
    type: String,
    default: ""
  }
});

const isCollapsed = ref(true)

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<template>
  <div @click="toggleCollapse" class="p-4 rounded-lg bg-border cursor-pointer ">
    <span class="text-white">{{question}}</span>
    <div class="text-sm leading-6 mt-2 text-silver-dark text-justify pt-2 border-t border-dark" v-if="!isCollapsed">
      <span class="text-primary ml-1">پاسخ</span>
      {{answer}}
    </div>
  </div>
</template>

<style scoped>

</style>
