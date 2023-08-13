<template>
  <div class="flex flex-col" style="height: 100%">
    <div class="header flex items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/study">Study</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <main class="flex-1">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
