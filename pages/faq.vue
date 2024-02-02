<script setup lang="ts">
const {data: faqList} = await useFetch('/api/faq')
</script>

<template>
  <div>
    سوالات متداول
  </div>
</template>

<style scoped>

</style>
