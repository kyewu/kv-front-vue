<template>
  <div class="bg-blue">{{ title }}</div>
  <Greeting />
</template>

<script setup lang="ts">
const title = ref('hello UnoCSS')
</script>

<style scoped></style>
