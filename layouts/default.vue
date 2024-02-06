<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between w-96 mx-auto">
    <LayoutsTheHeader></LayoutsTheHeader>

    <slot />

    <LayoutsTheFooter></LayoutsTheFooter>
  </div>
</template>

<style scoped></style>
