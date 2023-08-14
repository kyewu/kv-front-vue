<template>
  <div class="header flex items-center bg-gray">
    <router-link class="item" to="/">产品</router-link>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item {
  @apply relative text-white px-4 py-2 cursor-pointer;
  &:hover {
    @apply font-600 text-md;
    &::after {
      content: '';
      @apply absolute h-[1px] bottom-0 w-8 bg-white left-[calc(50%-1rem)];
    }
  }
}
</style>
