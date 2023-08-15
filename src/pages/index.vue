<template>
  <Swiper class="h-[400px]" :items="items" />
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
import dolphin from '@/assets/dolphin.jpg'

const items = ref<SwiperItemType[]>([
  {
    image: dolphin
  },
  {
    image: dolphin
  },
  {
    image: dolphin
  }
])
</script>

<style scoped lang="scss"></style>
