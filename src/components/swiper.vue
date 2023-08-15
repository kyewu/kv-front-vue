<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    :autoplay="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in items" :key="item.image">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }"
        ></div>
      </slot>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import type { PropType } from 'vue'
import type { SwiperItemType } from './types'

defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  }
})

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>
