<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  term: string
  href?: string
}>()

const resolvedHref = computed(() => {
  if (!props.href) return undefined
  return props.href.startsWith('/') ? withBase(props.href) : props.href
})
</script>

<template>
  <a v-if="resolvedHref" class="term-badge" :href="resolvedHref">{{ term }}</a>
  <span v-else class="term-badge">{{ term }}</span>
</template>
