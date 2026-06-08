<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { tracks, type TrackId, type TrackProfileSample } from '../data/tracks'

const props = withDefaults(defineProps<{ track?: TrackId; compact?: boolean }>(), {
  track: 'shanghai',
  compact: false
})

const mapMode = ref<'real' | 'diagram'>(props.compact ? 'diagram' : 'real')
const activeSampleIndex = ref(0)
const zoomLevel = ref(1)
const pan = ref({ x: 0, y: 0 })
const dragStart = ref<{ pointerId: number; clientX: number; clientY: number; panX: number; panY: number } | null>(null)
const isDragging = ref(false)
const activeTrack = computed(() => tracks.find((item) => item.id === props.track) ?? tracks[0])
const clipId = computed(() => `track-map-clip-${activeTrack.value.id}`)
const profileSamples = computed(() => activeTrack.value.profile.samples)
const showRealMap = computed(() => !props.compact && mapMode.value === 'real')
const mapFrame = { width: 380, height: 250 }
const minZoom = 1
const maxZoom = 4

watch(activeTrack, () => {
  activeSampleIndex.value = 0
  resetMapView()
  if (!props.compact) mapMode.value = 'real'
})

watch(mapMode, () => resetMapView())

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

const activeSample = computed(() => profileSamples.value[activeSampleIndex.value] ?? profileSamples.value[0] ?? null)
const validProfileSamples = computed(() =>
  profileSamples.value.filter((sample): sample is TrackProfileSample & { elevationM: number } => typeof sample.elevationM === 'number')
)
const totalDistanceKm = computed(() => profileSamples.value[profileSamples.value.length - 1]?.distanceKm || activeTrack.value.source.osmLengthKm)
const elevationRange = computed(() => {
  const values = validProfileSamples.value.map((sample) => sample.elevationM)
  if (!values.length) return { min: 0, max: 1 }
  const min = Math.min(...values)
  const max = Math.max(...values)
  const padding = Math.max(1, (max - min) * 0.12)
  return { min: min - padding, max: max + padding }
})

const chartFrame = { x: 24, y: 12, width: 328, height: 82 }

const chartX = (distanceKm: number) => {
  const total = totalDistanceKm.value || 1
  return chartFrame.x + (distanceKm / total) * chartFrame.width
}

const chartY = (elevationM: number | null) => {
  if (typeof elevationM !== 'number') return chartFrame.y + chartFrame.height
  const range = elevationRange.value
  const span = Math.max(1, range.max - range.min)
  return chartFrame.y + chartFrame.height - ((elevationM - range.min) / span) * chartFrame.height
}

const profilePolyline = computed(() =>
  validProfileSamples.value.map((sample) => `${chartX(sample.distanceKm).toFixed(1)},${chartY(sample.elevationM).toFixed(1)}`).join(' ')
)

const activeChartPoint = computed(() => {
  if (!activeSample.value) return null
  return {
    x: chartX(activeSample.value.distanceKm),
    y: chartY(activeSample.value.elevationM)
  }
})

const elevationLabel = computed(() => {
  const sample = activeSample.value
  return sample?.elevationM === null || sample?.elevationM === undefined ? '暂无采样' : `${sample.elevationM} m`
})

const mapTransform = computed(() => {
  if (!showRealMap.value) return 'translate(0 0) scale(1)'
  return `translate(${pan.value.x.toFixed(2)} ${pan.value.y.toFixed(2)}) scale(${zoomLevel.value.toFixed(3)})`
})

function setActiveSample(index: number) {
  activeSampleIndex.value = Math.max(0, Math.min(index, profileSamples.value.length - 1))
}

function svgPointFromEvent(event: MouseEvent) {
  const svg = event.currentTarget as SVGSVGElement
  const matrix = svg.getScreenCTM()
  if (!matrix) return null
  const point = svg.createSVGPoint()
  point.x = event.clientX
  point.y = event.clientY
  return point.matrixTransform(matrix.inverse())
}

function mapPointFromSvgPoint(point: DOMPoint) {
  if (!showRealMap.value) return point
  return {
    x: (point.x - pan.value.x) / zoomLevel.value,
    y: (point.y - pan.value.y) / zoomLevel.value
  }
}

function clampZoom(value: number) {
  return Math.max(minZoom, Math.min(maxZoom, value))
}

function clampPan(zoom: number, nextPan: { x: number; y: number }) {
  if (zoom <= minZoom) return { x: 0, y: 0 }
  return {
    x: Math.min(0, Math.max(mapFrame.width * (1 - zoom), nextPan.x)),
    y: Math.min(0, Math.max(mapFrame.height * (1 - zoom), nextPan.y))
  }
}

function applyZoom(nextZoom: number, center = { x: mapFrame.width / 2, y: mapFrame.height / 2 }) {
  const zoom = clampZoom(nextZoom)
  const anchor = {
    x: (center.x - pan.value.x) / zoomLevel.value,
    y: (center.y - pan.value.y) / zoomLevel.value
  }
  zoomLevel.value = zoom
  pan.value = clampPan(zoom, {
    x: center.x - anchor.x * zoom,
    y: center.y - anchor.y * zoom
  })
}

function zoomIn() {
  applyZoom(zoomLevel.value * 1.3)
}

function zoomOut() {
  applyZoom(zoomLevel.value / 1.3)
}

function resetMapView() {
  zoomLevel.value = 1
  pan.value = { x: 0, y: 0 }
  dragStart.value = null
  isDragging.value = false
}

function selectNearestMapSample(event: MouseEvent) {
  if (props.compact || !profileSamples.value.length) return
  const point = svgPointFromEvent(event)
  if (!point) return
  const mapPoint = mapPointFromSvgPoint(point)
  let nearestIndex = 0
  let nearestDistance = Number.POSITIVE_INFINITY

  profileSamples.value.forEach((sample, index) => {
    const distance = (sample.x - mapPoint.x) ** 2 + (sample.y - mapPoint.y) ** 2
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearestIndex = index
    }
  })

  setActiveSample(nearestIndex)
}

function handleMapPointerDown(event: PointerEvent) {
  if (props.compact) return
  if (!showRealMap.value) {
    selectNearestMapSample(event)
    return
  }

  const svg = event.currentTarget as SVGSVGElement
  svg.setPointerCapture?.(event.pointerId)
  dragStart.value = {
    pointerId: event.pointerId,
    clientX: event.clientX,
    clientY: event.clientY,
    panX: pan.value.x,
    panY: pan.value.y
  }
  isDragging.value = false
}

function handleMapPointerMove(event: PointerEvent) {
  if (props.compact) return

  if (dragStart.value && showRealMap.value) {
    const svg = event.currentTarget as SVGSVGElement
    const rect = svg.getBoundingClientRect()
    const dx = ((event.clientX - dragStart.value.clientX) * mapFrame.width) / rect.width
    const dy = ((event.clientY - dragStart.value.clientY) * mapFrame.height) / rect.height
    if (Math.abs(dx) + Math.abs(dy) > 1.6) isDragging.value = true

    if (isDragging.value) {
      pan.value = clampPan(zoomLevel.value, {
        x: dragStart.value.panX + dx,
        y: dragStart.value.panY + dy
      })
      return
    }
  }

  selectNearestMapSample(event)
}

function handleMapPointerEnd(event: PointerEvent) {
  if (!dragStart.value) return
  const svg = event.currentTarget as SVGSVGElement
  svg.releasePointerCapture?.(dragStart.value.pointerId)
  if (!isDragging.value) selectNearestMapSample(event)
  dragStart.value = null
  isDragging.value = false
}

function handleMapWheel(event: WheelEvent) {
  if (props.compact || !showRealMap.value) return
  const point = svgPointFromEvent(event)
  if (!point) return
  applyZoom(zoomLevel.value * (event.deltaY < 0 ? 1.18 : 1 / 1.18), point)
}

function selectNearestProfileSample(event: MouseEvent) {
  if (!profileSamples.value.length) return
  const point = svgPointFromEvent(event)
  if (!point) return
  const ratio = Math.max(0, Math.min(1, (point.x - chartFrame.x) / chartFrame.width))
  const targetDistance = ratio * totalDistanceKm.value
  let nearestIndex = 0
  let nearestDistance = Number.POSITIVE_INFINITY

  profileSamples.value.forEach((sample, index) => {
    const distance = Math.abs(sample.distanceKm - targetDistance)
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearestIndex = index
    }
  })

  setActiveSample(nearestIndex)
}
</script>

<template>
  <div class="track-map" :class="{ 'track-map--compact': compact, 'track-map--real': showRealMap }">
    <div class="track-map__canvas">
      <div v-if="!compact" class="track-map__mode" role="group" aria-label="地图模式">
        <button type="button" :class="{ active: mapMode === 'real' }" @click="mapMode = 'real'">真实赛道</button>
        <button type="button" :class="{ active: mapMode === 'diagram' }" @click="mapMode = 'diagram'">轮廓图</button>
      </div>

      <div v-if="showRealMap" class="track-map__zoom-controls" role="group" aria-label="地图缩放">
        <button type="button" aria-label="放大地图" @click="zoomIn">+</button>
        <button type="button" aria-label="缩小地图" @click="zoomOut">-</button>
        <button type="button" aria-label="重置地图视图" @click="resetMapView">{{ Math.round(zoomLevel * 100) }}%</button>
      </div>

      <svg
        :class="{ 'is-dragging': isDragging }"
        viewBox="0 0 380 250"
        role="img"
        :aria-label="`${activeTrack.fullName}互动赛道图`"
        @pointerdown="handleMapPointerDown"
        @pointermove="handleMapPointerMove"
        @pointerup="handleMapPointerEnd"
        @pointercancel="handleMapPointerEnd"
        @pointerleave="handleMapPointerEnd"
        @wheel.prevent="handleMapWheel"
      >
        <defs>
          <clipPath :id="clipId">
            <rect width="380" height="250" rx="8" />
          </clipPath>
        </defs>

        <g :clip-path="`url(#${clipId})`">
          <g class="track-map__viewport" :transform="mapTransform">
            <g v-if="showRealMap" class="track-map__satellite">
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

            <path class="track-map__shadow" :d="activeTrack.path" />
            <path class="track-map__accent" :d="activeTrack.path" />
            <path class="track-map__line" :d="activeTrack.path" />
            <path v-if="!compact" class="track-map__hit-path" :d="activeTrack.path" />

            <g v-if="!compact">
              <circle
                v-for="(sample, index) in profileSamples"
                :key="`${activeTrack.id}-${index}`"
                class="track-map__sample"
                :class="{ active: index === activeSampleIndex }"
                :cx="sample.x"
                :cy="sample.y"
                :r="index === activeSampleIndex ? 4.6 : 2.1"
              />

              <g v-if="activeSample" class="track-map__probe">
                <line :x1="activeSample.x" :y1="activeSample.y" :x2="activeSample.x" y2="238" />
                <circle :cx="activeSample.x" :cy="activeSample.y" r="6.2" />
              </g>

              <g v-for="corner in activeTrack.corners" :key="corner.id">
                <circle class="track-map__dot" :cx="corner.x" :cy="corner.y" r="4.2" />
                <text :x="corner.labelX ?? corner.x + 10" :y="corner.labelY ?? corner.y - 8">{{ corner.id }}</text>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div v-if="showRealMap" class="track-map__attribution">
        {{ activeTrack.satellite.attribution }}
      </div>
    </div>

    <div v-if="!compact" class="track-map__legend">
      <strong>{{ activeTrack.name }}互动数据</strong>
      <div class="track-map__stats" :class="`quality-${activeTrack.source.quality}`">
        <span v-if="activeTrack.fia">FIA {{ activeTrack.fia.lengthKm.toFixed(3) }} km</span>
        <span>OSM {{ activeTrack.source.osmLengthKm.toFixed(3) }} km</span>
        <span v-if="activeTrack.fia">杆位 {{ poleLabel }}</span>
        <span v-if="activeTrack.elevation">均海拔 {{ activeTrack.elevation.meanM }} m</span>
        <span v-if="activeTrack.elevation">起伏 {{ activeTrack.elevation.rangeM }} m</span>
        <span>{{ qualityLabel }}</span>
      </div>

      <div v-if="activeSample" class="track-map__probe-card">
        <dl>
          <div>
            <dt>沿圈距离</dt>
            <dd>{{ activeSample.distanceKm.toFixed(2) }} km</dd>
          </div>
          <div>
            <dt>海拔</dt>
            <dd>{{ elevationLabel }}</dd>
          </div>
        </dl>
      </div>

      <svg
        class="track-map__profile"
        viewBox="0 0 380 118"
        role="img"
        :aria-label="`${activeTrack.name}海拔剖面`"
        @mousemove="selectNearestProfileSample"
        @click="selectNearestProfileSample"
      >
        <line class="track-map__profile-axis" :x1="chartFrame.x" :y1="chartFrame.y + chartFrame.height" :x2="chartFrame.x + chartFrame.width" :y2="chartFrame.y + chartFrame.height" />
        <polyline class="track-map__profile-line" :points="profilePolyline" />
        <g v-if="activeSample && activeChartPoint">
          <line class="track-map__profile-marker" :x1="activeChartPoint.x" :y1="chartFrame.y" :x2="activeChartPoint.x" :y2="chartFrame.y + chartFrame.height" />
          <circle class="track-map__profile-dot" :cx="activeChartPoint.x" :cy="activeChartPoint.y" r="4.4" />
        </g>
        <text :x="chartFrame.x" y="112">0 km</text>
        <text :x="chartFrame.x + chartFrame.width - 42" y="112">{{ totalDistanceKm.toFixed(1) }} km</text>
        <text x="286" y="22">{{ elevationLabel }}</text>
      </svg>

      <p v-for="corner in activeTrack.corners" :key="corner.id">
        <span>{{ corner.id }}</span>{{ corner.note }}
      </p>
      <p class="track-map__source">
        图形：{{ activeTrack.source.geometry }}；卫星：{{ activeTrack.satellite.provider }}；高程：{{ activeTrack.profile.dataset }}。
      </p>
    </div>
  </div>
</template>
