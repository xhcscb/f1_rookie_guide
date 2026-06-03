<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  link?: string
  label?: string
}>()
</script>

<template>
  <a v-if="link" class="concept-card" :href="link">
    <span v-if="label" class="concept-card__label">{{ label }}</span>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </a>
  <div v-else class="concept-card">
    <span v-if="label" class="concept-card__label">{{ label }}</span>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>
