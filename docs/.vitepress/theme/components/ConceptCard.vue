<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  title: string
  desc: string
  link?: string
  label?: string
}>()

const resolvedLink = computed(() => {
  if (!props.link) return undefined
  return props.link.startsWith('/') ? withBase(props.link) : props.link
})
</script>

<template>
  <a v-if="resolvedLink" class="concept-card" :href="resolvedLink">
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
