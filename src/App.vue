<template>
  <RouterView />
</template>
<script setup lang="ts">
import { useThemeStore } from './stores/useThemeStore'

const themeStore = useThemeStore()
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  const contentWidth = 1200
  themeStore.$patch({
    rate: width < 1200 ? +(width / contentWidth).toFixed(2) : 1
  })
})
</script>

<style scoped lang="scss">
div {
  color: green;
}
</style>
