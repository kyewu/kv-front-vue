<script setup lang="ts"></script>

<template>
  <div class="flex py-1.5 px-5">
    <router-link class="basis-1/4" :to="'/'">Home</router-link>
    <router-link class="basis-3/4" :to="'/test'">Test</router-link>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
div {
  color: green;
}
</style>
