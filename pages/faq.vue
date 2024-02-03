<script setup lang="ts">
const {data: faqList} = await useFetch('/api/faq');
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <div class="pb-6 border-b border-border" v-for="(parent, index) in faqList" :key="parent._id">
      <div class="flex items-center gap-x-2">
        <span class="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-xl">{{index+1}}</span>
        <span class="text-lg font-bold">{{parent.category}}</span>
      </div>

      <div v-for="child in parent.children" :key="child._id" class="mt-6">
        <div class="mb-4">
          <span>{{child.category}}</span>
        </div>

        <div class="flex flex-col gap-y-2">
          <cards-qa v-for="(row, rowIndex) in child.rows" :key="row._id" v-bind="row"></cards-qa>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
