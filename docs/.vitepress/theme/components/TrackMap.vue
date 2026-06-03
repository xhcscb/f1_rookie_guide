<script setup lang="ts">
import { computed } from 'vue'

type TrackId = 'shanghai' | 'monaco' | 'monza' | 'suzuka' | 'spa' | 'silverstone'

const props = withDefaults(defineProps<{ track?: TrackId }>(), {
  track: 'shanghai'
})

const maps = {
  shanghai: {
    title: '上海',
    path: 'M78 148 C34 96 64 42 133 48 C196 53 170 116 222 113 C278 110 275 49 321 71 C357 89 329 159 282 165 C229 172 205 136 164 171 C125 205 109 185 78 148Z',
    corners: [
      { id: 'T1-T2', x: 88, y: 65, note: '长右弯，前胎压力最大' },
      { id: 'T13', x: 250, y: 128, note: '出弯决定 T14 攻击距离' },
      { id: 'T14', x: 310, y: 160, note: '长直道后重刹车超车点' }
    ]
  },
  monaco: {
    title: '摩纳哥',
    path: 'M75 168 L103 72 L171 49 L244 78 L297 112 L274 171 L204 197 L126 202 Z',
    corners: [
      { id: 'T1', x: 107, y: 72, note: '发车后最拥挤' },
      { id: 'Hairpin', x: 181, y: 51, note: '极低速，考机械抓地' },
      { id: 'Chicane', x: 292, y: 116, note: '隧道后少数机会' }
    ]
  },
  monza: {
    title: '蒙扎',
    path: 'M54 72 L303 62 L322 92 L261 121 L314 165 L278 198 L83 182 L58 151 L118 120 Z',
    corners: [
      { id: 'T1', x: 302, y: 64, note: '大直道后重刹车' },
      { id: 'Roggia', x: 261, y: 121, note: '第二进攻点' },
      { id: 'Parabolica', x: 83, y: 182, note: '出弯影响下一圈' }
    ]
  },
  suzuka: {
    title: '铃鹿',
    path: 'M55 111 C104 45 178 48 201 94 C221 134 157 137 169 172 C182 211 259 201 302 157 C343 115 304 58 249 65 C199 72 162 113 105 146 C77 161 47 146 55 111Z',
    corners: [
      { id: 'S', x: 112, y: 72, note: '连续换向，看节奏' },
      { id: 'Spoon', x: 179, y: 171, note: '出口准备长加速' },
      { id: '130R', x: 301, y: 157, note: '高速稳定与脏空气' }
    ]
  },
  spa: {
    title: '斯帕',
    path: 'M45 170 L69 82 L122 49 L197 62 L315 41 L333 88 L247 129 L295 182 L211 207 L121 183 Z',
    corners: [
      { id: 'La Source', x: 69, y: 82, note: '发车和重启关键' },
      { id: 'Raidillon', x: 122, y: 49, note: '高速上坡，带出尾流' },
      { id: 'Les Combes', x: 315, y: 41, note: 'Kemmel 后主要超车点' }
    ]
  },
  silverstone: {
    title: '银石',
    path: 'M48 121 L95 65 L177 64 L242 91 L315 76 L331 125 L284 181 L184 190 L98 163 Z',
    corners: [
      { id: 'M-B', x: 242, y: 91, note: '高速换向，最看下压力' },
      { id: 'Chapel', x: 315, y: 76, note: '直道前出口' },
      { id: 'Stowe', x: 331, y: 125, note: '尾流后的刹车区' }
    ]
  }
} satisfies Record<TrackId, { title: string; path: string; corners: Array<{ id: string; x: number; y: number; note: string }> }>

const activeMap = computed(() => maps[props.track])
</script>

<template>
  <div class="track-map">
    <svg viewBox="0 0 380 250" role="img" :aria-label="`${activeMap.title}简化赛道图`">
      <path class="track-map__shadow" :d="activeMap.path" />
      <path class="track-map__line" :d="activeMap.path" />
      <g v-for="corner in activeMap.corners" :key="corner.id">
        <circle class="track-map__dot" :cx="corner.x" :cy="corner.y" r="7" />
        <text :x="corner.x + 10" :y="corner.y - 8">{{ corner.id }}</text>
      </g>
    </svg>
    <div class="track-map__legend">
      <strong>{{ activeMap.title }}关键弯</strong>
      <p v-for="corner in activeMap.corners" :key="corner.id">
        <span>{{ corner.id }}</span>{{ corner.note }}
      </p>
    </div>
  </div>
</template>
