<script setup lang="ts">
import { computed, ref } from 'vue'
import { tracks, type TrackId } from '../data/tracks'

const props = withDefaults(defineProps<{ track?: TrackId; compact?: boolean }>(), {
  track: 'shanghai',
  compact: false
})

const showSatellite = ref(false)
const activeTrack = computed(() => tracks.find((item) => item.id === props.track) ?? tracks[0])
const clipId = computed(() => `track-map-clip-${activeTrack.value.id}`)

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
  <div class="track-map" :class="{ 'track-map--compact': compact }">
    <div class="track-map__canvas">
      <label v-if="!compact" class="track-map__toggle">
        <input v-model="showSatellite" type="checkbox" />
        <span>卫星底图</span>
      </label>

      <svg viewBox="0 0 380 250" role="img" :aria-label="`${activeTrack.fullName}赛道图`">
        <defs>
          <clipPath :id="clipId">
            <rect width="380" height="250" rx="8" />
          </clipPath>
        </defs>

        <g :clip-path="`url(#${clipId})`">
          <g v-if="showSatellite && activeTrack.satellite" class="track-map__satellite">
            <image
              v-for="tile in activeTrack.satellite.tiles"
              :key="tile.url"
              :href="tile.url"
              :x="tile.x"
              :y="tile.y"
              :width="tile.width"
              :height="tile.height"
              preserveAspectRatio="none"
            />
            <rect class="track-map__satellite-wash" width="380" height="250" />
          </g>
        </g>

        <path class="track-map__shadow" :d="activeTrack.path" />
        <path class="track-map__accent" :d="activeTrack.path" />
        <path class="track-map__line" :d="activeTrack.path" />

        <g v-if="!compact">
          <g v-for="corner in activeTrack.corners" :key="corner.id">
            <circle class="track-map__dot" :cx="corner.x" :cy="corner.y" r="4.5" />
            <text :x="corner.labelX ?? corner.x + 10" :y="corner.labelY ?? corner.y - 8">{{ corner.id }}</text>
          </g>
        </g>
      </svg>

      <div v-if="showSatellite && !compact" class="track-map__attribution">
        {{ activeTrack.satellite.attribution }}
      </div>
    </div>

    <div v-if="!compact" class="track-map__legend">
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
        图形：{{ activeTrack.source.geometry }}；卫星：{{ activeTrack.satellite.provider }}；高程：{{ activeTrack.elevation?.dataset ?? '未采样' }}。
      </p>
    </div>
  </div>
</template>
