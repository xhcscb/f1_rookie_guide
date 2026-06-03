<script setup lang="ts">
defineProps<{
  term: string
  href?: string
}>()
</script>

<template>
  <a v-if="href" class="term-badge" :href="href">{{ term }}</a>
  <span v-else class="term-badge">{{ term }}</span>
</template>
