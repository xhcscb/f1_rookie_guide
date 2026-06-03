<script setup lang="ts">
import { computed } from 'vue'
import { tracks, type TrackId } from '../data/tracks'

const props = withDefaults(defineProps<{ track?: TrackId }>(), {
  track: 'shanghai'
})

const activeTrack = computed(() => tracks.find((item) => item.id === props.track) ?? tracks[0])
</script>

<template>
  <div class="track-map">
    <svg viewBox="0 0 380 250" role="img" :aria-label="`${activeTrack.fullName}简化赛道图`">
      <path class="track-map__shadow" :d="activeTrack.path" />
      <path class="track-map__line" :d="activeTrack.path" />
      <g v-for="corner in activeTrack.corners" :key="corner.id">
        <circle class="track-map__dot" :cx="corner.x" :cy="corner.y" r="7" />
        <text :x="corner.x + 10" :y="corner.y - 8">{{ corner.id }}</text>
      </g>
    </svg>
    <div class="track-map__legend">
      <strong>{{ activeTrack.name }}关键弯</strong>
      <p v-for="corner in activeTrack.corners" :key="corner.id">
        <span>{{ corner.id }}</span>{{ corner.note }}
      </p>
    </div>
  </div>
</template>
