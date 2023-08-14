<template>
  <div class="flex flex-col h-full">
    <div class="fixed w-full top-0" :class="{ 'shadow-lg bg-black bg-opacity-30': y > 0 }">
      <Menu />
    </div>
    <main class="flex-1 mt-[40px]">
      <router-view></router-view>
    </main>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<style scoped></style>
