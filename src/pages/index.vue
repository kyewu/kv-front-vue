<template>
  <div class="pb-15">
    <Swiper :items="items" />
    <div class="flex flex-wrap justify-around">
      <Card
        v-for="(item, index) in cardList"
        :key="index"
        :image="item.image"
        :image-type="'rounded'"
        border
        :title="item.title"
        :sub-title="item.subTitle"
      >
        <div>
          查看更多
          <i class="i-mdi:arrow-right-thin"></i>
        </div>
      </Card>
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-3 lt-sm:px-4">
      <a
        class="mx-auto flex transition-all hover:(bg-yellow-500 text-white transform-translate-y--1)"
        href=""
        v-for="(item, index) in cardList"
        :key="index"
      >
        <Card :image="item.image" border :title="item.title" :sub-title="item.subTitle">
          <div class="flex justify-between px-4 mb-3 items-center text-gray-500 text-sm">
            查看更多
            <i class="i-mdi:arrow-right-thin"></i>
          </div>
        </Card>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
import Card from '@/components/Card.vue'
import bg from '@/assets/images/bg.png'
import dolphin from '@/assets/dolphin.jpg'
import { useThemeStore } from '../stores/useThemeStore'

const store = useThemeStore()
const items = ref<SwiperItemType[]>([
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛'
  },
  {
    image: bg
  }
])

const cardList = ref([
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  },
  {
    image: dolphin,
    title: '你不知道的事',
    subTitle: '那天是风先刮过'
  }
])
</script>

<style scoped lang="scss"></style>
