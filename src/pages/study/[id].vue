<template>
  <div>study - sub</div>
  {{ id }}
</template>

<script setup lang="ts">
import { useParams } from '@/hooks/useParams'

const { id } = useParams()
</script>

<style scoped></style>
