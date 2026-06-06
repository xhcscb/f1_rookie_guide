<script setup lang="ts">
import { computed } from 'vue'
import { tracks, type TrackId } from '../data/tracks'

const props = withDefaults(defineProps<{ track?: TrackId }>(), {
  track: 'shanghai'
})

const activeTrack = computed(() => tracks.find((item) => item.id === props.track) ?? tracks[0])

const qualityLabel = computed(() => {
  switch (activeTrack.value.source.quality) {
    case 'matched':
      return 'FIA 长度校准'
    case 'close':
      return '接近 FIA 长度'
    case 'needs-check':
      return '开放数据待校验'
    default:
      return '开放数据'
  }
})

const poleLabel = computed(() => {
  if (!activeTrack.value.fia) return '未匹配'
  return activeTrack.value.fia.pole === 'Left' ? '左侧' : '右侧'
})
</script>

<template>
  <div class="track-map">
    <svg viewBox="0 0 380 250" role="img" :aria-label="`${activeTrack.fullName}简化赛道图`">
      <path class="track-map__shadow" :d="activeTrack.path" />
      <path class="track-map__line" :d="activeTrack.path" />
      <g v-for="corner in activeTrack.corners" :key="corner.id">
        <circle class="track-map__dot" :cx="corner.x" :cy="corner.y" r="7" />
        <text :x="corner.labelX ?? corner.x + 10" :y="corner.labelY ?? corner.y - 8">{{ corner.id }}</text>
      </g>
    </svg>
    <div class="track-map__legend">
      <strong>{{ activeTrack.name }}关键弯</strong>
      <div class="track-map__stats" :class="`quality-${activeTrack.source.quality}`">
        <span v-if="activeTrack.fia">FIA {{ activeTrack.fia.lengthKm.toFixed(3) }} km</span>
        <span>OSM {{ activeTrack.source.osmLengthKm.toFixed(3) }} km</span>
        <span v-if="activeTrack.fia">杆位 {{ poleLabel }}</span>
        <span v-if="activeTrack.elevation">均海拔 {{ activeTrack.elevation.meanM }} m</span>
        <span v-if="activeTrack.elevation">起伏 {{ activeTrack.elevation.rangeM }} m</span>
        <span>{{ qualityLabel }}</span>
      </div>
      <p v-for="corner in activeTrack.corners" :key="corner.id">
        <span>{{ corner.id }}</span>{{ corner.note }}
      </p>
      <p class="track-map__source">
        图形：{{ activeTrack.source.geometry }}；高程：{{ activeTrack.elevation?.dataset ?? '未采样' }}。
      </p>
    </div>
  </div>
</template>
