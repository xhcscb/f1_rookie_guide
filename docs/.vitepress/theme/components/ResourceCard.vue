<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  url: string
  tags?: string[]
  level?: string
}>()
</script>

<template>
  <a class="resource-card" :href="url" target="_blank" rel="noopener noreferrer">
    <span v-if="level" class="resource-card__level">{{ level }}</span>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <div v-if="tags?.length" class="resource-card__tags" aria-label="资源标签">
      <span v-for="tag in tags" :key="tag" class="resource-card__tag">{{ tag }}</span>
    </div>
  </a>
</template>
