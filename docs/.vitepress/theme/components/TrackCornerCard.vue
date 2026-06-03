<script setup lang="ts">
defineProps<{
  name: string
  corner: string
  type: string
  watch: string
  why: string
}>()
</script>

<template>
  <article class="track-corner-card">
    <div class="track-corner-card__top">
      <strong class="track-corner-card__name">{{ name }} · {{ corner }}</strong>
      <span class="track-corner-card__type">{{ type }}</span>
    </div>
    <dl>
      <div>
        <dt>观赛时看什么</dt>
        <dd>{{ watch }}</dd>
      </div>
      <div>
        <dt>为什么重要</dt>
        <dd>{{ why }}</dd>
      </div>
    </dl>
  </article>
</template>
