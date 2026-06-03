<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  term: string
  href?: string
}>()

const resolvedHref = computed(() => {
  if (!props.href) return undefined
  if (!props.href.startsWith('/')) return props.href
  if (props.href.endsWith('/') || props.href.endsWith('.html')) return withBase(props.href)
  return withBase(`${props.href}.html`)
})
</script>

<template>
  <a v-if="resolvedHref" class="term-badge" :href="resolvedHref">{{ term }}</a>
  <span v-else class="term-badge">{{ term }}</span>
</template>
