<script setup lang="ts">
import { withBase } from 'vitepress'
import { tracks } from '../data/tracks'
import TrackMap from './TrackMap.vue'

const pageHref = (href: string) => {
  if (href.endsWith('/') || href.endsWith('.html')) return withBase(href)
  return withBase(`${href}.html`)
}
</script>

<template>
  <div class="home-track-grid">
    <a v-for="track in tracks" :key="track.id" class="home-track-card" :href="pageHref(track.link)">
      <TrackMap :track="track.id" />
      <strong>{{ track.name }}</strong>
      <p>{{ track.type }}</p>
    </a>
  </div>
</template>
